"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartSpec } from "@/lib/types";

const COLORS = ["#7dd3fc", "#a78bfa", "#34d399", "#fbbf24", "#f472b6", "#38bdf8", "#fb923c"];

export default function ChartRenderer({ chart }: { chart: ChartSpec }) {
  if (!chart.data?.length) return null;

  return (
    <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <p className="mb-2 text-sm font-medium text-slate-300">{chart.title}</p>
      <ResponsiveContainer width="100%" height={260}>
        {chart.type === "pie" ? (
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8 }}
            />
            <Pie
              data={chart.data}
              dataKey={chart.yKey ?? ""}
              nameKey={chart.xKey ?? ""}
              outerRadius={90}
              label
            >
              {chart.data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        ) : chart.type === "line" ? (
          <LineChart data={chart.data}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey={chart.xKey ?? ""} stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8 }}
            />
            <Line type="monotone" dataKey={chart.yKey ?? ""} stroke="#7dd3fc" strokeWidth={2} dot={false} />
          </LineChart>
        ) : (
          <BarChart data={chart.data}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey={chart.xKey ?? ""} stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8 }}
            />
            <Bar dataKey={chart.yKey ?? ""} fill="#7dd3fc" radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
