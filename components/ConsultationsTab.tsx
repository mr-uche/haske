"use client";

import { useState } from "react";
import { Search, CheckCircle2, XCircle, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";
import { consultations } from "./consultationsData";

type FilterTab = "all" | "overridden" | "redFlag";

export default function ConsultationsTab() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterTab>("all");

  const filtered = consultations
    .filter((c) => {
      if (filter === "overridden") return c.overridden;
      if (filter === "redFlag") return c.redFlag === true;
      return true;
    })
    .filter((c) =>
      `${c.patientName} ${c.chew} ${c.diagnosis}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-white/[0.02] px-4 py-2.5">
          <Search size={16} className="text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
            placeholder="Search consultations..."
          />
        </div>
        <div className="flex items-center gap-2">
          {(
            [
              { key: "all", label: "All" },
              { key: "overridden", label: "AI Overridden" },
              { key: "redFlag", label: "Red Flag" },
            ] as { key: FilterTab; label: string }[]
          ).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                filter === f.key
                  ? "bg-green-700 text-white"
                  : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-white">
              <th className="px-3 py-3 font-medium">Patient</th>
              <th className="px-3 py-3 font-medium">CHEW</th>
              <th className="px-3 py-3 font-medium">AI Diagnosis</th>
              <th className="px-3 py-3 font-medium">Confidence</th>
              <th className="px-3 py-3 font-medium">Language</th>
              <th className="px-3 py-3 font-medium">Override</th>
              <th className="px-3 py-3 font-medium">Red Flag</th>
              <th className="px-3 py-3 font-medium">Feedback</th>
              <th className="px-3 py-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i} className="border-b border-surface-border/50 last:border-0">
                <td className="px-3 py-4">
                  <p className="font-semibold text-white">{c.patientName}</p>
                  <p className="text-xs text-white">{c.location}</p>
                </td>
                <td className="px-3 py-4 text-white">{c.chew}</td>
                <td className="px-3 py-4">
                  <p className="text-slate-200">{c.diagnosis}</p>
                  <p className="text-xs text-white">{c.icdCode}</p>
                </td>
                <td className="px-3 py-4">
                  <span
                    className={`font-mono font-semibold ${
                      c.confidence >= 90
                        ? "text-brand-400"
                        : c.confidence >= 80
                        ? "text-amber-400"
                        : "text-orange-400"
                    }`}
                  >
                    {c.confidence}%
                  </span>
                </td>
                <td className="px-3 py-4">
                  <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
                    {c.language}
                  </span>
                </td>
                <td className="px-3 py-4">
                  <span
                    className={`flex items-center gap-1.5 text-xs font-semibold ${
                      c.overridden ? "text-red-400" : "text-slate-400"
                    }`}
                  >
                    {c.overridden ? <XCircle size={14} /> : <CheckCircle2 size={14} />}
                    {c.overridden ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-3 py-4">
                  {c.redFlag === null ? (
                    <span className="text-slate-600">—</span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
                      <AlertTriangle size={13} />
                      Yes
                    </span>
                  )}
                </td>
                <td className="px-3 py-4">
                  {c.feedback === "positive" && (
                    <TrendingUp size={16} className="text-brand-400" />
                  )}
                  {c.feedback === "negative" && (
                    <TrendingDown size={16} className="text-red-400" />
                  )}
                  {c.feedback === null && <span className="text-slate-600">—</span>}
                </td>
                <td className="px-3 py-4 text-xs text-slate-500">{c.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}