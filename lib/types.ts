export type ColumnStats = {
  name: string;
  type: "number" | "string" | "date" | "boolean";
  sampleValues: string[];
  min?: number;
  max?: number;
  mean?: number;
  distinctCount?: number;
};

export type DatasetSummary = {
  fileName: string;
  rowCount: number;
  columns: ColumnStats[];
  sampleRows: Record<string, string>[];
};

export type ChartSpec = {
  type: "bar" | "line" | "pie" | "none";
  title: string;
  xKey?: string;
  yKey?: string;
  data: Record<string, string | number>[];
};

export type AskResponse = {
  answer: string;
  chart: ChartSpec | null;
};

export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
  chart?: ChartSpec | null;
};
