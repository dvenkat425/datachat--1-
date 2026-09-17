"use client";

import { useRef, useState } from "react";
import Papa from "papaparse";
import { parseCsv, summaryToPrompt } from "@/lib/csv";
import { AskResponse, ChatTurn, DatasetSummary } from "@/lib/types";
import ChartRenderer from "@/components/ChartRenderer";
import { SAMPLE_CSV, SAMPLE_FILENAME } from "@/lib/sampleData";

const SUGGESTIONS = [
  "What's the total revenue by region?",
  "Who are the top 3 reps by amount?",
  "Break this down by category as a chart",
];

export default function Home() {
  const [summary, setSummary] = useState<DatasetSummary | null>(null);
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  function loadFromText(text: string, fileName: string) {
    const parsedSummary = parseCsv(text, fileName);
    setSummary(parsedSummary);

    const full = Papa.parse<Record<string, string>>(text, {
      header: true,
      skipEmptyLines: true,
    });
    setRows(full.data);
    setTurns([]);
  }

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => loadFromText(reader.result as string, file.name);
    reader.readAsText(file);
  }

  function loadSample() {
    loadFromText(SAMPLE_CSV, SAMPLE_FILENAME);
  }

  async function ask(q: string) {
    if (!summary || !q.trim() || loading) return;
    setLoading(true);
    setTurns((t) => [...t, { role: "user", content: q }]);
    setQuestion("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q,
          schemaDescription: summaryToPrompt(summary),
          rows,
        }),
      });
      const data: AskResponse & { error?: string } = await res.json();
      if (data.error) {
        setTurns((t) => [...t, { role: "assistant", content: `⚠️ ${data.error}` }]);
      } else {
        setTurns((t) => [...t, { role: "assistant", content: data.answer, chart: data.chart }]);
      }
    } catch {
      setTurns((t) => [...t, { role: "assistant", content: "⚠️ Request failed. Is the server running?" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-14">
      <header className="text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
          DataChat
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          Talk to your spreadsheet
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Drop in a CSV, ask questions in plain English, get real computed answers and charts —
          the model plans the query, your code does the math.
        </p>
      </header>

      {!summary ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) handleFile(file);
          }}
          onClick={() => fileInput.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-16 text-center transition ${
            dragOver ? "border-sky-400 bg-sky-950/30" : "border-slate-700 hover:border-slate-500"
          }`}
        >
          <input
            ref={fileInput}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
          <p className="text-lg font-medium text-slate-200">Drop a CSV here, or click to browse</p>
          <p className="mt-1 text-sm text-slate-500">Nothing leaves your browser except your question and a schema summary.</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              loadSample();
            }}
            className="mt-5 rounded-full border border-sky-800 bg-sky-950/40 px-4 py-2 text-sm font-medium text-sky-300 hover:border-sky-400 hover:bg-sky-950/70"
          >
            Or try it instantly with sample data →
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div>
              <p className="font-medium text-slate-100">{summary.fileName}</p>
              <p className="text-sm text-slate-500">
                {summary.rowCount.toLocaleString()} rows · {summary.columns.length} columns
              </p>
            </div>
            <button
              onClick={() => {
                setSummary(null);
                setRows([]);
                setTurns([]);
              }}
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-800"
            >
              Upload a different file
            </button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-slate-400">
                <tr>
                  {summary.columns.map((c) => (
                    <th key={c.name} className="whitespace-nowrap px-3 py-2 font-medium">
                      {c.name}
                      <span className="ml-1 text-xs text-slate-600">({c.type})</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {summary.sampleRows.slice(0, 4).map((row, i) => (
                  <tr key={i} className="border-t border-slate-800 text-slate-300">
                    {summary.columns.map((c) => (
                      <td key={c.name} className="whitespace-nowrap px-3 py-2">
                        {row[c.name]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4">
            {turns.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-sky-400 hover:text-sky-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {turns.map((t, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 ${
                  t.role === "user"
                    ? "border-sky-900 bg-sky-950/30 text-sky-100"
                    : "border-slate-800 bg-slate-900/60 text-slate-200"
                }`}
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.role === "user" ? "You" : "DataChat"}
                </p>
                <p className="whitespace-pre-wrap leading-relaxed">{t.content}</p>
                {t.chart && <ChartRenderer chart={t.chart} />}
              </div>
            ))}

            {loading && (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-500">
                Thinking…
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(question);
              }}
              className="flex gap-2"
            >
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question about your data…"
                className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-sky-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-sky-400 disabled:opacity-50"
              >
                Ask
              </button>
            </form>
          </div>
        </>
      )}

      <footer className="mt-auto pt-8 text-center text-xs text-slate-600">
        Built with Next.js + the Claude API ·{" "}
        <a
          className="underline hover:text-slate-400"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          View source
        </a>
      </footer>
    </main>
  );
}
