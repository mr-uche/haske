"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Brain } from "lucide-react";
import { pastConsultations } from "./pastConsultationsData";

type FilterTab = "all" | "accepted" | "overridden";

export default function PastConsultations() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterTab>("all");

  const total = pastConsultations.length;
  const accepted = pastConsultations.filter((c) => !c.overridden).length;
  const overridden = pastConsultations.filter((c) => c.overridden).length;

  const filtered = pastConsultations.filter((c) => {
    if (filter === "accepted") return !c.overridden;
    if (filter === "overridden") return c.overridden;
    return true;
  });

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-white hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">Past Consultations</h1>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-surface-border bg-green-950 p-4 text-center">
          <p className="text-2xl font-bold text-white">{total}</p>
          <p className="mt-1 text-xs text-white">Total</p>
        </div>
        <div className="rounded-xl border border-surface-border bg-green-950 p-4 text-center">
          <p className="text-2xl font-bold text-white">{accepted}</p>
          <p className="mt-1 text-xs text-">Accepted</p>
        </div>
        <div className="rounded-xl border border-surface-border bg-green-950 p-4 text-center">
          <p className="text-2xl font-bold text-white">{overridden}</p>
          <p className="mt-1 text-xs text-white">Overridden</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {(
          [
            { key: "all", label: "All" },
            { key: "accepted", label: "Accepted" },
            { key: "overridden", label: "Overridden" },
          ] as { key: FilterTab; label: string }[]
        ).map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              filter === f.key
                ? "bg-green-950 text-white"
                : "bg-white/5 text-black"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((c, i) => (
          <button
            key={i}
            className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4 text-left"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  c.overridden ? "bg-orange-500/15 text-orange-400" : "bg-brand-500/15 text-brand-400"
                }`}
              >
                <Brain size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{c.diagnosis}</p>
                <p className="mt-0.5 text-xs text-white">
                  {c.patientName} · {c.time}
                </p>
                {c.overridden && (
                  <p className="mt-0.5 text-xs font-semibold text-orange-400">Overridden</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold ${
                  c.overridden ? "text-orange-400" : "text-brand-400"
                }`}
              >
                {c.confidence}%
              </span>
              <ChevronRight size={16} className="text-white" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}