import Papa from "papaparse";
import { ColumnStats, DatasetSummary } from "./types";

function inferType(values: string[]): ColumnStats["type"] {
  const nonEmpty = values.filter((v) => v !== "" && v !== undefined && v !== null);
  if (nonEmpty.length === 0) return "string";

  const isBoolean = nonEmpty.every((v) =>
    ["true", "false", "yes", "no"].includes(v.toString().toLowerCase())
  );
  if (isBoolean) return "boolean";

  const isNumber = nonEmpty.every((v) => v !== "" && !isNaN(Number(v)));
  if (isNumber) return "number";

  const isDate = nonEmpty.every((v) => !isNaN(Date.parse(v)) && /\d{2,4}[-/]\d{1,2}[-/]\d{1,4}/.test(v));
  if (isDate) return "date";

  return "string";
}

export function parseCsv(fileText: string, fileName: string): DatasetSummary {
  const result = Papa.parse<Record<string, string>>(fileText, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,
  });

  const rows = result.data;
  const fields = result.meta.fields ?? [];

  const columns: ColumnStats[] = fields.map((name) => {
    const values = rows.map((r) => (r[name] ?? "").toString());
    const type = inferType(values);
    const sampleValues = values.slice(0, 5);

    const stats: ColumnStats = { name, type, sampleValues };

    if (type === "number") {
      const nums = values.filter((v) => v !== "").map(Number);
      if (nums.length > 0) {
        stats.min = Math.min(...nums);
        stats.max = Math.max(...nums);
        stats.mean = nums.reduce((a, b) => a + b, 0) / nums.length;
      }
    } else {
      stats.distinctCount = new Set(values).size;
    }

    return stats;
  });

  return {
    fileName,
    rowCount: rows.length,
    columns,
    sampleRows: rows.slice(0, 8),
  };
}

// Keeps the payload small: send a description of the data (schema + stats +
// a handful of sample rows), not the whole file, to the model.
export function summaryToPrompt(summary: DatasetSummary): string {
  const lines: string[] = [];
  lines.push(`File: ${summary.fileName}`);
  lines.push(`Rows: ${summary.rowCount}`);
  lines.push(`Columns:`);
  for (const col of summary.columns) {
    let line = `- ${col.name} (${col.type})`;
    if (col.type === "number" && col.min !== undefined) {
      line += ` — min ${col.min}, max ${col.max}, mean ${col.mean?.toFixed(2)}`;
    } else if (col.distinctCount !== undefined) {
      line += ` — ${col.distinctCount} distinct values`;
    }
    line += ` — sample: ${col.sampleValues.join(", ")}`;
    lines.push(line);
  }
  lines.push(`\nSample rows (JSON):`);
  lines.push(JSON.stringify(summary.sampleRows, null, 2));
  return lines.join("\n");
}
