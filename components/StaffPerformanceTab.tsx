"use client";

import { AlertTriangle } from "lucide-react";
import { staffPerformance } from "./staffData";

function ratingColor(rating: number) {
  if (rating === 0) return "bg-slate-600";
  if (rating >= 95) return "bg-brand-400";
  if (rating >= 90) return "bg-amber-400";
  return "bg-orange-400";
}

function ratingTextColor(rating: number) {
  if (rating === 0) return "text-slate-500";
  if (rating >= 95) return "text-brand-400";
  if (rating >= 90) return "text-amber-400";
  return "text-orange-400";
}

export default function StaffPerformanceTab() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <h3 className="text-sm font-semibold text-white">Staff Performance — March 2026</h3>
      <p className="text-xs text-slate-500">
        Encounters, Gwarmai usage, disease reports, and AI override rates
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="px-3 py-3 font-medium">Staff Member</th>
              <th className="px-3 py-3 font-medium">Encounters</th>
              <th className="px-3 py-3 font-medium">Gwarmai Uses</th>
              <th className="px-3 py-3 font-medium">Reports</th>
              <th className="px-3 py-3 font-medium">AI Overrides</th>
              <th className="px-3 py-3 font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {staffPerformance.map((s) => {
              const isEmpty = s.encounters === 0;
              return (
                <tr key={s.name} className="border-b border-surface-border/50 last:border-0">
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-200">
                        {s.initials}
                      </span>
                      <span className="font-semibold text-white">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-slate-200">
                    {isEmpty ? <span className="text-slate-600">—</span> : s.encounters}
                  </td>
                  <td className="px-3 py-4">
                    {isEmpty ? (
                      <span className="text-slate-600">—</span>
                    ) : (
                      <span className="text-slate-200">
                        {s.gwarmaiUses}{" "}
                        <span className="text-xs text-slate-500">({s.gwarmaiPercent}%)</span>
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-4 text-slate-200">
                    {isEmpty ? <span className="text-slate-600">—</span> : s.reports}
                  </td>
                  <td className="px-3 py-4">
                    <span className="flex items-center gap-1 text-slate-200">
                      {isEmpty ? <span className="text-slate-600">—</span> : s.aiOverrides}
                      {s.aiOverrides >= 4 && (
                        <AlertTriangle size={13} className="text-amber-400" />
                      )}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    {isEmpty ? (
                      <span className="text-xs text-slate-600">Offline</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full ${ratingColor(s.rating)}`}
                            style={{ width: `${s.rating}%` }}
                          />
                        </div>
                        <span className={`text-xs font-semibold ${ratingTextColor(s.rating)}`}>
                          {s.rating}%
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}