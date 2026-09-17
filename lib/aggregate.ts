// Real computation over the dataset. The model only ever picks WHICH of
// these operations to run and on which column(s) — it never does the
// arithmetic itself, so answers can't be hallucinated numbers.

export type QueryPlan = {
  operation:
    | "sum"
    | "average"
    | "count"
    | "min"
    | "max"
    | "groupby_sum"
    | "groupby_count"
    | "groupby_average"
    | "top_n"
    | "filter_count";
  column?: string;
  groupByColumn?: string;
  filterColumn?: string;
  filterOperator?: "=" | "!=" | ">" | "<" | ">=" | "<=";
  filterValue?: string;
  topN?: number;
  chartType?: "bar" | "line" | "pie" | "none";
  chartTitle?: string;
};

export type QueryResult = {
  headline: string;
  table: Record<string, string | number>[];
};

function toNumber(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : NaN;
}

function applyFilter(rows: Record<string, string>[], plan: QueryPlan) {
  if (!plan.filterColumn || !plan.filterOperator || plan.filterValue === undefined) {
    return rows;
  }
  const { filterColumn, filterOperator, filterValue } = plan;
  return rows.filter((row) => {
    const raw = row[filterColumn];
    const asNum = toNumber(raw);
    const valNum = toNumber(filterValue);
    const bothNumeric = !isNaN(asNum) && !isNaN(valNum);

    switch (filterOperator) {
      case "=":
        return bothNumeric ? asNum === valNum : raw === filterValue;
      case "!=":
        return bothNumeric ? asNum !== valNum : raw !== filterValue;
      case ">":
        return bothNumeric && asNum > valNum;
      case "<":
        return bothNumeric && asNum < valNum;
      case ">=":
        return bothNumeric && asNum >= valNum;
      case "<=":
        return bothNumeric && asNum <= valNum;
      default:
        return true;
    }
  });
}

export function runQuery(allRows: Record<string, string>[], plan: QueryPlan): QueryResult {
  const rows = applyFilter(allRows, plan);

  switch (plan.operation) {
    case "sum": {
      const col = plan.column!;
      const total = rows.reduce((acc, r) => acc + (toNumber(r[col]) || 0), 0);
      return { headline: `Sum of ${col}: ${total.toLocaleString()}`, table: [{ [col]: total }] };
    }
    case "average": {
      const col = plan.column!;
      const nums = rows.map((r) => toNumber(r[col])).filter((n) => !isNaN(n));
      const avg = nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
      return { headline: `Average ${col}: ${avg.toLocaleString(undefined, { maximumFractionDigits: 2 })}`, table: [{ [col]: avg }] };
    }
    case "count": {
      return { headline: `Row count: ${rows.length}`, table: [{ count: rows.length }] };
    }
    case "min": {
      const col = plan.column!;
      const nums = rows.map((r) => toNumber(r[col])).filter((n) => !isNaN(n));
      const min = nums.length ? Math.min(...nums) : 0;
      return { headline: `Min ${col}: ${min}`, table: [{ [col]: min }] };
    }
    case "max": {
      const col = plan.column!;
      const nums = rows.map((r) => toNumber(r[col])).filter((n) => !isNaN(n));
      const max = nums.length ? Math.max(...nums) : 0;
      return { headline: `Max ${col}: ${max}`, table: [{ [col]: max }] };
    }
    case "filter_count": {
      return { headline: `Rows matching filter: ${rows.length}`, table: [{ count: rows.length }] };
    }
    case "groupby_sum":
    case "groupby_average":
    case "groupby_count": {
      const groupCol = plan.groupByColumn!;
      const valueCol = plan.column;
      const groups = new Map<string, number[]>();
      for (const row of rows) {
        const key = row[groupCol] ?? "(blank)";
        const arr = groups.get(key) ?? [];
        if (plan.operation !== "groupby_count" && valueCol) {
          const n = toNumber(row[valueCol]);
          if (!isNaN(n)) arr.push(n);
        } else {
          arr.push(1);
        }
        groups.set(key, arr);
      }
      let table = Array.from(groups.entries()).map(([group, values]) => {
        let value: number;
        if (plan.operation === "groupby_sum") value = values.reduce((a, b) => a + b, 0);
        else if (plan.operation === "groupby_average")
          value = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
        else value = values.length;
        return { [groupCol]: group, value: Number(value.toFixed(2)) };
      });
      table = table.sort((a, b) => (b.value as number) - (a.value as number));
      if (plan.topN) table = table.slice(0, plan.topN);
      else table = table.slice(0, 20);
      return {
        headline: `${plan.operation.replace("groupby_", "")} of ${valueCol ?? "rows"} grouped by ${groupCol}`,
        table,
      };
    }
    case "top_n": {
      const col = plan.column!;
      const n = plan.topN ?? 10;
      const sorted = [...rows].sort((a, b) => toNumber(b[col]) - toNumber(a[col])).slice(0, n);
      return { headline: `Top ${n} rows by ${col}`, table: sorted };
    }
    default:
      return { headline: "Unsupported operation", table: [] };
  }
}
