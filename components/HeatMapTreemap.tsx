"use client";

import { useState } from "react";
import { Severity } from "@/lib/lgaData";

interface Box {
  name: string;
  cases: number;
  severity: Severity;
  left: number;
  top: number;
  width: number;
  height: number;
}

const boxes: Box[] = [
  { name: "Michika", cases: 54, severity: "critical", left: 39, top: 4, width: 17, height: 22 },
  { name: "Madagali", cases: 29, severity: "moderate", left: 56, top: 4, width: 17, height: 22 },
  { name: "Gombi", cases: 38, severity: "high", left: 22, top: 26, width: 17, height: 21 },
  { name: "Mubi North", cases: 41, severity: "high", left: 39, top: 26, width: 17, height: 21 },
  { name: "Song", cases: 13, severity: "healthy", left: 12, top: 47, width: 10, height: 22 },
  { name: "Hong", cases: 67, severity: "critical", left: 22, top: 47, width: 17, height: 33 },
  { name: "Mubi South", cases: 18, severity: "moderate", left: 39, top: 47, width: 17, height: 22 },
  { name: "Maiha", cases: 0, severity: "healthy", left: 56, top: 47, width: 15, height: 33 },
  { name: "Yola North", cases: 2, severity: "healthy", left: 0, top: 58, width: 12, height: 21 },
  { name: "Girei", cases: 1, severity: "healthy", left: 5, top: 69, width: 12, height: 20 },
  { name: "Fufore", cases: 8, severity: "healthy", left: 12, top: 80, width: 10, height: 20 },
  { name: "Mayo-Belwa", cases: 16, severity: "moderate", left: 39, top: 80, width: 17, height: 20 },
  { name: "Jada", cases: 3, severity: "healthy", left: 56, top: 69, width: 15, height: 20 },
];

const severityStyle: Record<Severity, string> = {
  healthy: "bg-brand-500/15 border-brand-500/50 text-brand-200",
  moderate: "bg-amber-500/15 border-amber-500/50 text-amber-100",
  high: "bg-orange-600/25 border-orange-500/60 text-orange-100",
  critical: "bg-red-700/40 border-red-500/70 text-red-100",
};

const legend: { label: string; severity: Severity }[] = [
  { label: "Healthy", severity: "healthy" },
  { label: "Moderate", severity: "moderate" },
  { label: "High", severity: "high" },
  { label: "Critical", severity: "critical" },
];

const legendDot: Record<Severity, string> = {
  healthy: "bg-brand-400",
  moderate: "bg-amber-400",
  high: "bg-orange-500",
  critical: "bg-red-500",
};

export default function HeatMapTreemap({
  onSelect,
}: {
  onSelect: (name: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative h-[560px] w-full rounded-xl border border-surface-border bg-green-900">
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-1.5 rounded-lg border border-surface-border bg-surface-card px-3 py-2.5">
        {legend.map((l) => (
          <div key={l.severity} className="flex items-center gap-2 text-xs text-slate-300">
            <span className={`h-2 w-2 rounded-full ${legendDot[l.severity]}`} />
            {l.label}
          </div>
        ))}
      </div>

      {boxes.map((b) => (
        <button
          key={b.name}
          onClick={() => {
            setSelected(b.name);
            onSelect(b.name);
          }}
          className={`absolute flex flex-col items-center justify-center rounded-lg border p-2 text-center transition hover:brightness-110 ${
            severityStyle[b.severity]
          } ${selected === b.name ? "ring-2 ring-white/60" : ""}`}
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.width}%`,
            height: `${b.height}%`,
          }}
        >
          <span className="text-sm font-semibold text-white sm:text-base">
            {b.name}
          </span>
          <span className="text-lg font-bold sm:text-xl">{b.cases}</span>
        </button>
      ))}
    </div>
  );
}
