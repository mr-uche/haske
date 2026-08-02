"use client";

import { useState } from "react";
import { Search, Plus, ChevronRight } from "lucide-react";
import { mobilePatients, statusStyles, statusLabels, PatientMobileStatus } from "./mobilePatientsData";
import Link from "next/link";
import "./mobilePatientsData";
type FilterTab = "all" | PatientMobileStatus;

export default function MobilePatients() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterTab>("all");

  const filtered = mobilePatients
    .filter((p) => (filter === "all" ? true : p.status === filter))
    .filter((p) =>
      `${p.name} ${p.aschmaId}`.toLowerCase().includes(query.toLowerCase())
    );

  const filterTabs: { key: FilterTab; label: string }[] = [
    { key: "all", label: `All (${mobilePatients.length})` },
    { key: "active", label: "Active" },
    { key: "expiring", label: "Expiring" },
    { key: "expired", label: "Expired" },
  ];

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-black">Patients</h1>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-black hover:bg-green-950">
          <Plus size={18} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
        <Search size={16} className="text-white" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
          placeholder="Search name or ASCHMA ID..."
        />
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto">
        {filterTabs.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              filter === f.key
                ? "bg-green-500 text-white-400"
                : "bg-green-950 text-white-400"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/mobile/patients/${p.id}`}
            className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4 text-left"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-950 text-sm font-semibold text-white">
                {p.initials}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">{p.name}</p>
                </div>
                <p className="mt-0.5 text-xs text-white">
                  {p.aschmaId} · {p.age}y · {p.gender} · {p.lga}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold ${statusStyles[p.status]}`}>
                {statusLabels[p.status]}
              </span>
              <ChevronRight size={16} className="text-slate-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}