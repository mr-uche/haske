"use client";

import { useState } from "react";
import { Search, User, ChevronRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  patientProfile,
  confidenceTrend,
  consultationHistory,
} from "./patientHistoryData";

export default function PatientAIHistoryTab() {
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(true); // demo data shown by default

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5">
          <Search size={16} className="text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-white focus:outline-none"
            placeholder="Search patient by name or ASCHMA ID..."
          />
        </div>
        <button
          onClick={() => setLoaded(true)}
          className="rounded-xl bg-green-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-400"
        >
          Load History
        </button>
      </div>

      {loaded && (
        <>
          <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <User size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{patientProfile.name}</p>
                  <p className="font-mono text-xs text-brand-400">
                    {patientProfile.aschmaId} · {patientProfile.gender} · {patientProfile.age} yrs ·{" "}
                    {patientProfile.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="rounded-xl border border-surface-border bg-white/[0.02] px-4 py-2.5 text-center">
                  <p className="text-lg font-bold text-white">{patientProfile.totalSessions}</p>
                  <p className="text-[11px] text-white">Total Sessions</p>
                </div>
                <div className="rounded-xl border border-surface-border bg-white/[0.02] px-4 py-2.5 text-center">
                  <p className="text-lg font-bold text-brand-400">{patientProfile.aiAccepted}</p>
                  <p className="text-[11px] text-brand-400">AI Accepted</p>
                </div>
                <div className="rounded-xl border border-surface-border bg-white/[0.02] px-4 py-2.5 text-center">
                  <p className="text-lg font-bold text-orange-400">{patientProfile.overridden}</p>
                  <p className="text-[11px] text-orange-400">Overridden</p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-white">
              Diagnosis Confidence Trend
            </p>
            <div className="mt-2 h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={confidenceTrend} margin={{ left: -20, right: 20 }}>
                  <XAxis
                    dataKey="date"
                    stroke="#ffffff"
                    tick={{ fontSize: 11, fill: "#ffffff" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[70, 100]}
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
                  <Line
                    type="monotone"
                    dataKey="confidence"
                    stroke="#2dd4bf"
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#2dd4bf" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
            <h3 className="text-sm font-semibold text-white">Full Consultation History</h3>

            <div className="mt-4 space-y-3">
              {consultationHistory.map((c, i) => (
                <button
                  key={i}
                  className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4 text-left hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                      <User size={16} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-white">{c.diagnosis}</p>
                        {c.tags.map((t, ti) => (
                          <span
                            key={ti}
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              t.type === "redFlag"
                                ? "bg-red-500/15 text-red-400"
                                : "bg-orange-500/15 text-orange-400"
                            }`}
                          >
                            {t.label}
                          </span>
                        ))}
                      </div>
                      <p className="mt-0.5 text-xs text-white">
                        {c.chew} · {c.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-brand-400">{c.confidence}%</p>
                      <p className="text-[11px] text-white">confidence</p>
                    </div>
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}