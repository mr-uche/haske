"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  mobileAlerts,
  severityDotColor,
  severityTextColor,
  severityLabels,
  AlertSeverity,
} from "./mobileAlertsData";

type FilterTab = "all" | AlertSeverity;

export default function MobileAlerts() {
  const [filter, setFilter] = useState<FilterTab>("all");

  const filtered = mobileAlerts.filter((a) =>
    filter === "all" ? true : a.severity === filter
  );

  const filterTabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: `All (${mobileAlerts.length})` },
    { key: "critical", label: "Critical" },
    { key: "high", label: "High" },
    { key: "moderate", label: "Moderate" },
  ];

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      <h1 className="text-xl font-bold text-black">Alerts</h1>

      <div className="mt-4 flex gap-2 overflow-x-auto">
        {filterTabs.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              filter === f.key
                ? "bg-green-950 text-white"
                : "bg-white/5 text-green-950"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((a, i) => (
          <button
            key={i}
            className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4 text-left"
          >
            <div className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${severityDotColor[a.severity]}`} />
              <div>
                <p className="text-sm font-semibold text-white">{a.disease}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {a.location} · {a.cases} cases · {a.time}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold ${severityTextColor[a.severity]}`}>
                {severityLabels[a.severity]}
              </span>
              <ChevronRight size={16} className="text-slate-600" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}