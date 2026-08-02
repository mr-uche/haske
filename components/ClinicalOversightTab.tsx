"use client";

import { XCircle, CheckCircle2, Flag } from "lucide-react";
import { overrideCases, oversightSummary } from "./clinicalOversightData";

export default function ClinicalOversightTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
          <p className="text-3xl font-bold text-orange-400">{oversightSummary.aiOverrides}</p>
          <p className="mt-2 text-sm font-semibold text-white">AI Overrides</p>
          <p className="text-xs text-slate-400">Require doctor review</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
          <p className="text-3xl font-bold text-red-400">{oversightSummary.redFlagCases}</p>
          <p className="mt-2 text-sm font-semibold text-white">Red Flag Cases</p>
          <p className="text-xs text-slate-400">Urgent attention</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
          <p className="text-3xl font-bold text-amber-400">{oversightSummary.referralsSuggested}</p>
          <p className="mt-2 text-sm font-semibold text-white">Referrals Suggested</p>
          <p className="text-xs text-slate-400">Pending confirmation</p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">AI Override Review</h3>
        <p className="text-xs text-slate-500">
          Cases where CHEWs disagreed with Gwarmai — requires doctor validation
        </p>

        <div className="mt-4 space-y-3">
          {overrideCases.map((c, i) => (
            <div
              key={i}
              className="rounded-xl border border-surface-border bg-white/[0.02] p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <XCircle size={16} />
                  </span>
                  <p className="text-sm text-slate-200">
                    <span className="font-semibold text-white">{c.patientName}</span>
                    {" · "}
                    {c.chew}
                    {" · "}
                    <span className="text-slate-500">{c.time}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-400 hover:bg-brand-500/20">
                    <CheckCircle2 size={13} />
                    Validate
                  </button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20">
                    <Flag size={13} />
                    Flag
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-surface-border bg-white/[0.02] p-3">
                  <p className="text-xs text-slate-500">AI Suggested</p>
                  <p className="mt-1 text-sm font-semibold text-red-400">{c.aiSuggested}</p>
                  <p className="text-xs text-slate-500">{c.aiConfidence}% confidence</p>
                </div>
                <div className="rounded-lg border border-surface-border bg-white/[0.02] p-3">
                  <p className="text-xs text-slate-500">CHEW Selected</p>
                  <p className="mt-1 text-sm font-semibold text-brand-400">{c.chewSelected}</p>
                  <p className="text-xs text-slate-500">{c.chewIcdCode}</p>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-surface-border bg-white/[0.02] p-3 text-xs text-slate-300">
                <span className="text-slate-500">Override reason: </span>
                <span className="font-medium text-slate-200">{c.overrideReason}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}