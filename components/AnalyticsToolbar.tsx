"use client";

import { useState } from "react";
import { Calendar, Download } from "lucide-react";

const periods = ["3m", "6m", "7m", "1y"] as const;
type Period = (typeof periods)[number];

export default function AnalyticsToolbar({
  onPeriodChange,
}: {
  onPeriodChange?: (period: Period) => void;
}) {
  const [active, setActive] = useState<Period>("3m");

  function handleSelect(p: Period) {
    setActive(p);
    onPeriodChange?.(p);
  }

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-sm text-slate-400">
          <Calendar size={14} />
          Period:
        </span>
        <div className="flex items-center gap-1.5">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => handleSelect(p)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                active === p
                  ? "bg-green-600 text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600">
        <Download size={15} />
        Export Report
      </button>
    </div>
  );
}