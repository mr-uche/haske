"use client";

import { MapPin, ChevronRight } from "lucide-react";
import { lgaCases, Severity } from "@/lib/lgaData";

const dotColor: Record<Severity, string> = {
  healthy: "bg-brand-400",
  moderate: "bg-amber-400",
  high: "bg-orange-500",
  critical: "bg-red-500",
};

export default function LgaSidePanel({
  selected,
}: {
  selected: string | null;
}) {
  const selectedLga = lgaCases.find((l) => l.name === selected);

  return (
    <div className="flex w-full flex-col gap-6 lg:w-[380px]">
      <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-surface-border bg-green-950 p-8 text-center">
        {selectedLga ? (
          <>
            <span
              className={`mb-3 h-3 w-3 rounded-full ${dotColor[selectedLga.severity]}`}
            />
            <p className="text-lg font-semibold text-white">
              {selectedLga.name}
            </p>
            <p className="mt-1 text-3xl font-bold text-white">
              {selectedLga.cases}
            </p>
            <p className="text-xs text-slate-500">reported cases</p>
            <p className="mt-3 text-xs font-medium capitalize text-slate-400">
              {selectedLga.severity} status
            </p>
          </>
        ) : (
          <>
            <MapPin size={28} className="text-slate-600" />
            <p className="mt-4 text-sm font-semibold text-white">
              Select an LGA
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Click any LGA on the map to see detailed case data
            </p>
          </>
        )}
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">All 21 LGAs</h3>
        <div className="mt-3 max-h-[380px] space-y-1.5 overflow-y-auto pr-1">
          {lgaCases.map((lga) => (
            <div
              key={lga.name}
              className="flex items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-white/5"
            >
              <span className="flex items-center gap-2 text-slate-200">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dotColor[lga.severity]}`}
                />
                {lga.name}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                {lga.cases} cases <ChevronRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
