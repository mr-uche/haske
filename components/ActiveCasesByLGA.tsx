"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { lgaData, barColors } from "../lib/lgaData";

const top12 = [...lgaData]
  .sort((a, b) => b.activeCases - a.activeCases)
  .slice(0, 12);

export default function ActiveCasesByLGA() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <h3 className="text-sm font-semibold text-white">
        Active Cases by LGA
      </h3>
      <p className="text-xs text-white">
        Top 12 LGAs ranked by active cases
      </p>

      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={top12} margin={{ left: -20, right: 10 }}>
            <XAxis
              dataKey="name"
              stroke="#ffffff"
              tick={{
                fill: "#ffffff",
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={50}
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

            <Bar dataKey="activeCases" radius={[4, 4, 0, 0]}>
              {top12.map((entry) => (
                <Cell key={entry.name} fill={barColors[entry.risk]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}