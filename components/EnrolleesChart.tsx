"use client";

import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sep", enrollees: 3.2 },
  { month: "Oct", enrollees: 3.35 },
  { month: "Nov", enrollees: 3.5 },
  { month: "Dec", enrollees: 3.6 },
  { month: "Jan", enrollees: 3.7 },
  { month: "Feb", enrollees: 3.78 },
  { month: "Mar", enrollees: 3.8 },
];

export default function EnrolleesChart() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            ASCHMA Enrollees
          </h3>
          <p className="text-xs text-white">
            Cumulative active enrollees
          </p>
        </div>

        <span className="flex items-center gap-1 text-xs font-semibold text-brand-400">
          <TrendingUp size={12} />
          +4.2% this month
        </span>
      </div>

      <div className="mt-4 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -10, right: 10 }}>
            <defs>
              <linearGradient id="enrolleesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              stroke="#ffffff"
              tick={{
                fill: "#ffffff",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              stroke="#ffffff"
              tick={{
                fill: "#ffffff",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v.toFixed(1)}M`}
            />

            <Tooltip
              contentStyle={{
                background: "#101828",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                fontSize: 12,
                color: "#ffffff",
              }}
              labelStyle={{
                color: "#ffffff",
              }}
              formatter={(v: number) => [`${v.toFixed(2)}M`, "Enrollees"]}
            />

            <Area
              type="monotone"
              dataKey="enrollees"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#enrolleesFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}