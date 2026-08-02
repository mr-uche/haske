"use client";

import { X } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { lgaData } from "../lib/lgaData";

const radarColors = ["#2dd4bf", "#10b981", "#f97316", "#a855f7", "#3b82f6"];
const metrics: { key: "activeCases" | "population" | "density" | "phcs"; label: string }[] = [
  { key: "activeCases", label: "Cases" },
  { key: "density", label: "Density" },
  { key: "phcs", label: "PHCs" },
  { key: "population", label: "Population" },
];

export default function LGAComparisonRadar({
  selected,
  onRemove,
}: {
  selected: string[];
  onRemove: (name: string) => void;
}) {
  const lgas = selected
    .map((name) => lgaData.find((l) => l.name === name))
    .filter(Boolean) as typeof lgaData;

  // Normalize each metric 0-100 across all LGAs so the radar shape is meaningful
  const maxes = {
    activeCases: Math.max(...lgaData.map((l) => l.activeCases)),
    population: Math.max(...lgaData.map((l) => l.population)),
    phcs: Math.max(...lgaData.map((l) => l.phcs)),
    density: Math.max(...lgaData.map((l) => l.density)),
  };

  const radarData = metrics.map(({ key, label }) => {
    const row: Record<string, number | string> = { metric: label };
    lgas.forEach((l) => {
      row[l.name] = Math.round((l[key] / maxes[key]) * 100);
    });
    return row;
  });

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">LGA Comparison Radar</h3>
          <p className="text-xs text-slate-500">Select up to 5 LGAs from the table</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {lgas.map((l, i) => (
            <button
              key={l.name}
              onClick={() => onRemove(l.name)}
              className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                color: radarColors[i],
                backgroundColor: `${radarColors[i]}1a`,
              }}
            >
              {l.name}
              <X size={11} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="rgba(255,255,255,0.08)" />
            <PolarAngleAxis
              dataKey="metric"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            {lgas.map((l, i) => (
              <Radar
                key={l.name}
                name={l.name}
                dataKey={l.name}
                stroke={radarColors[i]}
                fill={radarColors[i]}
                fillOpacity={0.15}
                strokeWidth={2}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}