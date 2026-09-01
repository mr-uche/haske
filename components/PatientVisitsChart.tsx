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
  { month: "Sep", visits: 6800 },
  { month: "Oct", visits: 8200 },
  { month: "Nov", visits: 9500 },
  { month: "Dec", visits: 8600 },
  { month: "Jan", visits: 9800 },
  { month: "Feb", visits: 11800 },
  { month: "Mar", visits: 12800 },
];

const periods = ["3m", "6m", "7m", "1y"];

export default function PatientVisitsChart() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Daily Patient Visits
          </h3>
          <p className="text-xs text-white">
            Monthly trend across all 247 PHCs
          </p>
        </div>

        <span className="flex items-center gap-1 text-xs font-semibold text-brand-400">
          <TrendingUp size={12} />
          +8.3% this month
        </span>
      </div>

      <div className="mt-3 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -20, right: 10 }}>
            <defs>
              <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
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
            />

            <Area
              type="monotone"
              dataKey="visits"
              stroke="#2dd4bf"
              strokeWidth={2}
              fill="url(#visitsFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}