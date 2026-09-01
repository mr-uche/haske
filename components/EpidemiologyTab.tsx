"use client";

import { Activity, MapPin, Eye, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  diseasePatterns,
  patternStatusStyles,
  diseaseBurden,
  symptomCorrelations,
} from "./epidemiologyData";

export default function EpidemiologyTab() {
  return (
    <>
      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Emerging Disease Patterns</h3>
            <p className="text-xs text-white">
              AI-detected symptom clusters before reaching alert threshold
            </p>
          </div>
          <span className="rounded-full bg-brand-500/15 px-3 py-1.5 text-xs font-semibold text-brand-400">
            Early Warning
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {diseasePatterns.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-3 rounded-xl border border-surface-border bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white">
                  <Activity size={16} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{p.name}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${patternStatusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-white">
                    <MapPin size={11} /> {p.location} · {p.cases} cases · AI confidence:{" "}
                    <span className="font-semibold text-brand-400">{p.aiConfidence}%</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10">
                  <Eye size={13} />
                  View Cases
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20">
                  <AlertTriangle size={13} />
                  Raise Alert
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
          <h3 className="text-sm font-semibold text-white">Disease Burden by LGA</h3>
          <div className="mt-3 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diseaseBurden} margin={{ left: -20, right: 10 }}>
                <XAxis
                  dataKey="lga"
                  stroke="#ffffff"
                  tick={{ fontSize: 11, fill: "#ffffff" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#ffffff"
                  tick={{ fontSize: 11, fill: "#ffffff" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#101828",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Bar dataKey="secondary" stackId="burden" fill="#ef4444" radius={[0, 0, 0, 0]} />
                <Bar dataKey="primary" stackId="burden" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
          <h3 className="text-sm font-semibold text-white">Symptom → Outbreak Correlation</h3>
          <p className="text-xs text-white">
            How symptom reports preceded confirmed outbreaks
          </p>

          <div className="mt-4 space-y-4">
            {symptomCorrelations.map((s) => (
              <div key={s.symptom}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{s.symptom}</p>
                    <p className="text-xs text-white">
                      {s.disease} · {s.daysBefore}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-brand-400">
                    {s.matchRate}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-brand-500"
                    style={{ width: `${s.matchRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}