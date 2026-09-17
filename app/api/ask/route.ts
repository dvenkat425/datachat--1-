import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { runQuery, QueryPlan } from "@/lib/aggregate";
import { ChartSpec } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 30;

const MODEL = "claude-sonnet-4-5";
const MAX_ROWS = 5000;

const queryTool: Anthropic.Tool = {
  name: "run_query",
  description:
    "Run a real aggregation or lookup over the uploaded dataset. Always use this instead of computing numbers yourself — you do not have the full dataset in front of you, only a schema summary.",
  input_schema: {
    type: "object",
    properties: {
      operation: {
        type: "string",
        enum: [
          "sum",
          "average",
          "count",
          "min",
          "max",
          "groupby_sum",
          "groupby_count",
          "groupby_average",
          "top_n",
          "filter_count",
        ],
      },
      column: { type: "string", description: "Numeric or categorical column to aggregate" },
      groupByColumn: { type: "string", description: "Column to group rows by" },
      filterColumn: { type: "string" },
      filterOperator: { type: "string", enum: ["=", "!=", ">", "<", ">=", "<="] },
      filterValue: { type: "string" },
      topN: { type: "number" },
      chartType: { type: "string", enum: ["bar", "line", "pie", "none"] },
      chartTitle: { type: "string" },
    },
    required: ["operation"],
  },
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing ANTHROPIC_API_KEY. Add it in your Vercel project settings." },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { question, schemaDescription, rows } = body as {
    question: string;
    schemaDescription: string;
    rows: Record<string, string>[];
  };

  if (!question || !rows) {
    return NextResponse.json({ error: "Missing question or data" }, { status: 400 });
  }

  const cappedRows = rows.slice(0, MAX_ROWS);
  const client = new Anthropic({ apiKey });

  const system = `You are DataChat, an analyst that answers questions about a dataset a user just uploaded.
You are given a schema summary (columns, types, sample values) but NOT the raw rows.
For any question that requires a number — a sum, average, count, comparison, ranking, or "top N" — you MUST call the run_query tool. Never invent or estimate a number yourself.
After you receive the tool result, write a short, direct, plain-English answer (2-4 sentences) using the exact numbers returned. If a chart would help, say so in the chartType/chartTitle fields of your run_query call.
If the question doesn't need computation (e.g. "what columns do you have"), answer directly from the schema without calling the tool.`;

  const messages: Anthropic.MessageParam[] = [
    {
      role: "user",
      content: `Dataset schema:\n${schemaDescription}\n\nQuestion: ${question}`,
    },
  ];

  let chart: ChartSpec | null = null;

  try {
    let response = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system,
      tools: [queryTool],
      messages,
    });

    // Allow one tool-use round trip: model plans the query, we execute real
    // code against the full (capped) dataset, then ask it to phrase the answer.
    let loops = 0;
    while (response.stop_reason === "tool_use" && loops < 2) {
      loops++;
      const toolUseBlock = response.content.find(
        (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
      );
      if (!toolUseBlock) break;

      const plan = toolUseBlock.input as QueryPlan;
      const result = runQuery(cappedRows, plan);

      if (plan.chartType && plan.chartType !== "none" && result.table.length > 0) {
        const keys = Object.keys(result.table[0]);
        chart = {
          type: plan.chartType,
          title: plan.chartTitle || result.headline,
          xKey: keys[0],
          yKey: keys[1] ?? keys[0],
          data: result.table,
        };
      }

      messages.push({ role: "assistant", content: response.content });
      messages.push({
        role: "user",
        content: [
          {
            type: "tool_result",
            tool_use_id: toolUseBlock.id,
            content: JSON.stringify(result),
          },
        ],
      });

      response = await client.messages.create({
        model: MODEL,
        max_tokens: 1024,
        system,
        tools: [queryTool],
        messages,
      });
    }

    const textBlock = response.content.find((b): b is Anthropic.TextBlock => b.type === "text");
    const answer = textBlock?.text ?? "I wasn't able to compute an answer for that question.";

    return NextResponse.json({ answer, chart });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong calling Claude." }, { status: 500 });
  }
}
