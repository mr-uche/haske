"use client";

import { Download } from "lucide-react";
import { phcReports } from "./reportsData";

export default function PHCReportsTab() {
  return (
    <div className="space-y-4">
      {phcReports.map((r) => (
        <div
          key={r.title}
          className="rounded-2xl border border-surface-border bg-green-950 p-5"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">{r.title}</h3>
              <p className="text-xs text-white">{r.dateRange}</p>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900">
              <Download size={15} />
              Download
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-2xl font-bold text-white">
                {r.totalVisits.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-white">Total Visits</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-2xl font-bold text-white">
                {r.patientEncounters.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-white">Patient Encounters</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-2xl font-bold text-white">{r.diseaseReports}</p>
              <p className="mt-1 text-xs text-white">Disease Reports</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}