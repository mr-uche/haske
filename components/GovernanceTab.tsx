"use client";

import { Database } from "lucide-react";
import {
  governanceSummary,
  chewAdoption,
  ratingStyles,
  acceptanceBarColor,
  trainingQueue,
} from "./governanceData";

export default function GovernanceTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-brand-500/50 bg-brand-500 p-5">
          <p className="text-3xl font-bold text-white">{governanceSummary.modelAccuracy}</p>
          <p className="mt-2 text-sm font-semibold text-white">Model Accuracy</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <p className="text-3xl font-bold text-white">{governanceSummary.avgResponseTime}</p>
          <p className="mt-2 text-sm font-semibold text-white">Avg Response Time</p>
        </div>
        <div className="rounded-2xl border border-orange-500/50 bg-orange-500 p-5">
          <p className="text-3xl font-bold text-white">{governanceSummary.overrideRate}</p>
          <p className="mt-2 text-sm font-semibold text-white">Override Rate</p>
        </div>
        <div className="rounded-2xl border border-blue-500/50 bg-blue-500 p-5">
          <p className="text-3xl font-bold text-white">{governanceSummary.sessionsThisMonth}</p>
          <p className="mt-2 text-sm font-semibold text-white">Sessions This Month</p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">CHEW Adoption Analytics</h3>
        <p className="text-xs text-white">
          Per-CHEW Gwarmai usage, acceptance rates and feedback
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-white">
                <th className="px-3 py-3 font-medium">CHEW</th>
                <th className="px-3 py-3 font-medium">Facility</th>
                <th className="px-3 py-3 font-medium">Sessions</th>
                <th className="px-3 py-3 font-medium">Acceptance</th>
                <th className="px-3 py-3 font-medium">Overrides</th>
                <th className="px-3 py-3 font-medium">Rating</th>
              </tr>
            </thead>
            <tbody>
              {chewAdoption.map((c) => (
                <tr key={c.name} className="border-b border-surface-border/50 last:border-0">
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-200">
                        {c.initials}
                      </span>
                      <span className="font-semibold text-white">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-slate-300">{c.facility}</td>
                  <td className="px-3 py-4 text-slate-200">{c.sessions}</td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${acceptanceBarColor(c.acceptance)}`}
                          style={{ width: `${c.acceptance}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{c.acceptance}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className={c.overrideWarning ? "font-semibold text-red-400" : "text-slate-300"}>
                      {c.overrides}
                      {c.overrideWarning && " ⚠️"}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${ratingStyles[c.rating]}`}
                    >
                      {c.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Training Data Review Queue</h3>
            <p className="text-xs text-white">
              Anonymized sessions flagged for model fine-tuning
            </p>
          </div>
          <span className="rounded-full bg-green-600 px-3 py-1.5 text-xs font-semibold text-white">
            {trainingQueue.length} pending review
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {trainingQueue.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-3 rounded-xl border border-surface-border bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                  <Database size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Session #{s.id} — Anonymized
                  </p>
                  <p className="text-xs text-white">
                    {s.diagnosis} · {s.confidence}% confidence
                    {s.overrideDetected && (
                      <span className="ml-1 font-semibold text-red-400">· Override detected</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-800">
                  Include in Training
                </button>
                <button className="rounded-lg border border-surface-border px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/5">
                  Exclude
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}