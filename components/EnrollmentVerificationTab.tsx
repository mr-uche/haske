"use client";

import { useState } from "react";
import { Search, User } from "lucide-react";
import { enrollments, enrollmentStatusStyles, enrollmentStatusLabels } from "./enrollmentData";

export default function EnrollmentVerificationTab() {
  const [query, setQuery] = useState("");

  const filtered = enrollments.filter((e) =>
    `${e.patientName} ${e.aschmaId}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <h3 className="text-sm font-semibold text-white">Verify Enrollment Status</h3>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-white/[0.02] px-4 py-2.5">
          <Search size={16} className="text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
            placeholder="Enter ASCHMA ID or patient name..."
          />
        </div>
        <button className="rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-900">
          Verify
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((e) => (
          <div
            key={e.aschmaId}
            className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <User size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{e.patientName}</p>
                <p className="font-mono text-xs text-brand-400">{e.aschmaId}</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-xs text-white">Expiry</p>
                <p className="text-sm font-semibold text-slate-200">{e.expiry}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">LGA</p>
                <p className="text-sm font-semibold text-slate-200">{e.lga}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${enrollmentStatusStyles[e.status]}`}
              >
                {enrollmentStatusLabels[e.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}