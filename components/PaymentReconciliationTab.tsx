"use client";

import { FileDown } from "lucide-react";
import {
  paymentSummary,
  monthlySettlements,
  accuracyColor,
} from "./paymentReconciliationData";

export default function PaymentReconciliationTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
          <p className="text-3xl font-bold text-brand-400">{paymentSummary.totalSubmitted}</p>
          <p className="mt-2 text-sm font-semibold text-white">Total Submitted</p>
        </div>
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-5">
          <p className="text-3xl font-bold text-brand-400">{paymentSummary.totalApproved}</p>
          <p className="mt-2 text-sm font-semibold text-white">Total Approved</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
          <p className="text-3xl font-bold text-red-400">{paymentSummary.rejectionRate}</p>
          <p className="mt-2 text-sm font-semibold text-white">Rejection Rate</p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Monthly Settlement Report — March 2026</h3>
          <button className="flex items-center gap-2 rounded-xl border border-surface-border bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">
            <FileDown size={15} />
            Export PDF
          </button>
        </div>

        <div className="mt-4 divide-y divide-surface-border/50">
          {monthlySettlements.map((f) => (
            <div key={f.facility} className="flex items-center justify-between py-4">
              <p className="text-sm font-semibold text-white">{f.facility}</p>

              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="font-mono text-sm text-slate-200">{f.claims}</p>
                  <p className="text-xs text-slate-500">claims</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-slate-200">{f.approvedAmount}</p>
                  <p className="text-xs text-slate-500">approved</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono text-sm font-semibold ${accuracyColor(f.accuracy)}`}>
                    {f.accuracy}%
                  </p>
                  <p className="text-xs text-slate-500">accuracy</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}