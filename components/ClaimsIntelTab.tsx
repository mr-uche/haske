"use client";

import { ShieldAlert, Search, Flag } from "lucide-react";
import {
  claimsSummary,
  diagnosisMismatches,
  highOverrideProviders,
} from "./claimsIntelData";

export default function ClaimsIntelTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
          <p className="text-3xl font-bold text-brand-400">
            {claimsSummary.aiValidatedClaims.toLocaleString()}
          </p>
          <p className="mt-2 text-sm font-semibold text-white">AI-Validated Claims</p>
        </div>
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
          <p className="text-3xl font-bold text-orange-400">
            {claimsSummary.diagnosisMismatches}
          </p>
          <p className="mt-2 text-sm font-semibold text-white">Diagnosis Mismatches</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
          <p className="text-3xl font-bold text-red-400">
            {claimsSummary.highOverrideChews}
          </p>
          <p className="mt-2 text-sm font-semibold text-white">High Override Rate CHEWs</p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">Diagnosis–Drug Mismatches</h3>
        <p className="text-xs text-slate-500">
          Claims where the prescribed drug doesn't match the AI or CHEW diagnosis
        </p>

        <div className="mt-4 space-y-3">
          {diagnosisMismatches.map((c, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-surface-border bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
                  <ShieldAlert size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {c.patientName} <span className="font-normal text-slate-500">· {c.chew}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    AI: <span className="font-semibold text-red-400">{c.aiDiagnosis}</span>
                    {" → "}
                    CHEW: <span className="font-semibold text-brand-400">{c.chewDiagnosis}</span>
                    {" → "}
                    Prescribed:{" "}
                    <span className="font-semibold text-amber-400">{c.prescribed}</span>
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/10">
                  <Search size={13} />
                  Review Claim
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20">
                  <Flag size={13} />
                  Flag Fraud
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">High Override Rate Providers</h3>
        <p className="text-xs text-slate-500">
          CHEWs with abnormally high AI override rates — potential fraud indicators
        </p>

        <div className="mt-4 space-y-3">
          {highOverrideProviders.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-3 rounded-xl border border-surface-border bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-200">
                  {p.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{p.name}</p>
                  <p className="text-xs text-slate-500">
                    {p.location} · {p.sessions} sessions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm font-semibold text-red-400">{p.overrideRate}%</p>
                  <p className="text-xs text-slate-500">Override rate</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">{p.totalOverrides}</p>
                  <p className="text-xs text-slate-500">Total overrides</p>
                </div>
                <button className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20">
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}