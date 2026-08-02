"use client";

import { useState } from "react";
import { ArrowUpDown, TrendingUp } from "lucide-react";
import { lgaData, riskStyles, LGA } from "../lib/lgaData";

type SortKey = "activeCases" | "population" | "phcs" | "per10k";

export default function LGAFullTable({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (name: string) => void;
}) {
  const [sortKey, setSortKey] = useState<SortKey>("activeCases");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const sorted = [...lgaData].sort((a, b) => {
    const diff = a[sortKey] - b[sortKey];
    return sortDir === "asc" ? diff : -diff;
  });

  const columns: { key: SortKey; label: string }[] = [
    { key: "activeCases", label: "Active Cases" },
    { key: "population", label: "Population" },
    { key: "phcs", label: "PHCs" },
    { key: "per10k", label: "Per 10K" },
  ];

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <h3 className="text-sm font-semibold text-white">All 21 LGAs — Full Comparison</h3>
      <p className="text-xs text-slate-500">
        Click column headers to sort · Click rows to add to radar
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs text-slate-500">
              <th className="py-2 pr-4 font-medium">LGA</th>
              <th className="py-2 pr-4 font-medium">Risk Level</th>
              {columns.map((c) => (
                <th key={c.key} className="py-2 pr-4 font-medium">
                  <button
                    onClick={() => handleSort(c.key)}
                    className="flex items-center gap-1 hover:text-slate-300"
                  >
                    {c.label} <ArrowUpDown size={11} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((lga, i) => {
              const isSelected = selected.includes(lga.name);
              return (
                <tr
                  key={lga.name}
                  onClick={() => onToggle(lga.name)}
                  className={`cursor-pointer border-b border-surface-border/50 transition hover:bg-white/5 ${
                    isSelected ? "bg-brand-500/5" : ""
                  }`}
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">{i + 1}</span>
                      <span className="font-semibold text-white">{lga.name}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isSelected ? "bg-brand-400" : "bg-transparent"
                        }`}
                      />
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${riskStyles[lga.risk].bg} ${riskStyles[lga.risk].text}`}
                    >
                      {lga.risk}
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-semibold text-white">{lga.activeCases}</td>
                  <td className="py-3 pr-4 text-slate-300">{lga.population.toFixed(0)}K</td>
                  <td className="py-3 pr-4 text-slate-300">{lga.phcs}</td>
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-1 text-slate-300">
                      {lga.per10k.toFixed(2)}
                      <TrendingUp size={11} className="text-brand-400" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}