"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import HeatMapTreemap from "@/components/HeatMapTreemap";
import LgaSidePanel from "@/components/LgaSidePanel";

const diseaseFilters = [
  "All Diseases",
  "Cholera",
  "Lassa Fever",
  "Malaria",
  "Meningitis",
  "Typhoid",
];

export default function HeatMapPage() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <TopBar
        title="Epidemic Heat Map"
        subtitle="Adamawa State Ministry of Health"
      />
      <main className="flex-1 p-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1 rounded-2xl border border-surface-border bg-green-950 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">
                  Epidemic Heat Map
                </h2>
                <p className="text-xs text-white">
                  21 LGAs · Auto-refresh every 2 min
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-green-700" /> LIVE
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {diseaseFilters.map((f, i) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(i)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    i === activeFilter
                      ? "bg-green-700 text-white"
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <HeatMapTreemap onSelect={setSelected} />
            </div>
          </div>

          <LgaSidePanel selected={selected} />
        </div>
      </main>
    </>
  );
}
