"use client";

import { ShieldAlert, TrendingDown, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { fraudSummary, flaggedClaims } from "./fraudFlagsData";

export default function FraudFlagsTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500 p-5">
          <div className="flex items-center justify-between">
            <ShieldAlert size={20} className="text-orange-700" />
            <TrendingDown size={16} className="text-green-400" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{fraudSummary.flaggedClaims}</p>
          <p className="text-xs text-white">Flagged Claims</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-900 p-5">
          <div className="flex items-center justify-between">
            <ShieldAlert size={20} className="text-red-400" />
            <TrendingDown size={16} className="text-green-400" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{fraudSummary.fraudRate}</p>
          <p className="text-xs text-white">Fraud Rate</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <div className="flex items-center justify-between">
            <ShieldAlert size={20} className="text-amber-700" />
            <TrendingDown size={16} className="text-green-400" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">{fraudSummary.amountAtRisk}</p>
          <p className="text-xs text-white">Amount at Risk</p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">Flagged Claims — Review Required</h3>
        <p className="text-xs text-white">AI-detected anomalies requiring manual review</p>

        <div className="mt-4 space-y-3">
          {flaggedClaims.map((c, i) => (
            <div
              key={i}
              className="rounded-xl border border-surface-border bg-white/[0.02] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
                    <AlertTriangle size={16} />
                  </span>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-white">{c.patientName}</span>{" "}
                      <span className="font-mono text-xs text-brand-400">{c.aschmaId}</span>{" "}
                      <span className="font-semibold text-white">{c.amount}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-white">
                      {c.diagnosis} · {c.icdCode}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button className="flex items-center gap-1.5 rounded-lg border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-400 hover:bg-brand-500/20">
                    <CheckCircle2 size={13} />
                    Approve
                  </button>
                  <button className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20">
                    <XCircle size={13} />
                    Reject
                  </button>
                </div>
              </div>

              <div className="mt-3 flex w-fit items-center gap-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-400">
                <ShieldAlert size={13} />
                {c.flagReason}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}