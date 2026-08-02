"use client";

import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sep", cholera: 40, lassa: 20, malaria: 35 },
  { month: "Oct", cholera: 42, lassa: 22, malaria: 40 },
  { month: "Nov", cholera: 38, lassa: 25, malaria: 45 },
  { month: "Dec", cholera: 45, lassa: 28, malaria: 55 },
  { month: "Jan", cholera: 55, lassa: 35, malaria: 65 },
  { month: "Feb", cholera: 70, lassa: 55, malaria: 78 },
  { month: "Mar", cholera: 85, lassa: 80, malaria: 88 },
];

export default function DiseaseOutbreakTrend() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Disease Outbreak Trend
          </h3>
          <p className="text-xs text-slate-500">Active cases by disease type</p>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-red-400">
          <TrendingUp size={12} /> Escalating — 3 diseases
        </span>
      </div>

      <div className="mt-4 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: -20, right: 10 }}>
            <XAxis
              dataKey="month"
              stroke="#64748b"
              tick={{ fontSize: 11, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fontSize: 11, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#101828",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Line
              type="monotone"
              dataKey="cholera"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lassa"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="malaria"
              stroke="#eab308"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}