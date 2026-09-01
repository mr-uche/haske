"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Cholera", value: 340, color: "#ef4444" },
  { name: "Lassa Fever", value: 210, color: "#f97316" },
  { name: "Malaria", value: 480, color: "#eab308" },
  { name: "Meningitis", value: 90, color: "#a855f7" },
];

export default function DiseaseBreakdown() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
      <h3 className="text-sm font-semibold text-white">Disease Breakdown</h3>
      <p className="text-xs text-white">Current active cases</p>

      <div className="mt-3 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={2}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#101828",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: "#ffffff" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {data.map((d) => (
          <span
            key={d.name}
            className="flex items-center gap-1.5 text-xs text-white"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: d.color }}
            />
            {d.name}
          </span>
        ))}
      </div>
    </div>
  );
}