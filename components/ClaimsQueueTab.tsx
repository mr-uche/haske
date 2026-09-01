"use client";

import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { claims, statusStyles, ClaimStatus } from "./aschmaData";

type FilterTab = "all" | ClaimStatus;

export default function ClaimsQueueTab() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterTab>("all");

  const total = claims.length;
  const pending = claims.filter((c) => c.status === "pending").length;
  const approved = claims.filter((c) => c.status === "approved").length;
  const flagged = claims.filter((c) => c.status === "flagged").length;

  const filtered = claims
    .filter((c) => (filter === "all" ? true : c.status === filter))
    .filter((c) =>
      `${c.patientName} ${c.diagnosis} ${c.aschmaId}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  const filterTabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "approved", label: "Approved" },
    { key: "rejected", label: "Rejected" },
    { key: "flagged", label: "Flagged" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="rounded-2xl border border-brand-500/20 bg-green-950 p-5">
          <p className="text-3xl font-bold text-white">{total}</p>
          <p className="mt-2 text-sm font-semibold text-white">Total Claims</p>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <p className="text-3xl font-bold text-white">{pending}</p>
          <p className="mt-2 text-sm font-semibold text-white">Pending</p>
        </div>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-600 p-5">
          <p className="text-3xl font-bold text-white">{approved}</p>
          <p className="mt-2 text-sm font-semibold text-white">Approved</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-900 p-5">
          <p className="text-3xl font-bold text-white">{flagged}</p>
          <p className="mt-2 text-sm font-semibold text-white">Flagged</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5">
          <Search size={16} className="text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
            placeholder="Search claims..."
          />
        </div>
        <div className="flex items-center gap-2">
          {filterTabs.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                filter === f.key
                  ? "bg-green-900 text-white"
                  : "bg-white/5 text-slate-900 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-white">
              <th className="px-5 py-3 font-medium">Patient</th>
              <th className="px-5 py-3 font-medium">ASCHMA ID</th>
              <th className="px-5 py-3 font-medium">Diagnosis</th>
              <th className="px-5 py-3 font-medium">ICD-10</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Submitted</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.aschmaId}
                className="cursor-pointer border-b border-surface-border/50 last:border-0 hover:bg-white/5"
              >
                <td className="px-5 py-4">
                  <p className="font-semibold text-white">{c.patientName}</p>
                  <p className="text-xs text-white">{c.chew}</p>
                </td>
                <td className="px-5 py-4 font-mono text-xs text-brand-400">{c.aschmaId}</td>
                <td className="px-5 py-4 text-slate-200">{c.diagnosis}</td>
                <td className="px-5 py-4 font-mono text-xs text-slate-400">{c.icdCode}</td>
                <td className="px-5 py-4 font-semibold text-white">
                  ₦{c.amount.toLocaleString()}
                </td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-white">{c.submitted}</td>
                <td className="px-5 py-4">
                  <ChevronRight size={16} className="text-white" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}