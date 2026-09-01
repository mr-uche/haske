"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Search, ChevronRight } from "lucide-react";
import { mobilePatients } from "./mobilePatientsData";

export default function NewEncounterSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const results =
    query.trim().length >= 2
      ? mobilePatients.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.aschmaId.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  function handleContinue() {
    if (!selectedId) return;
    router.push(`/mobile/encounter/new/vitals?patient=${selectedId}`);
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-white hover:bg-green-800"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">New Encounter</h1>
      </div>

      <p className="mt-4 text-sm text-black">
        Search for the patient to start an encounter.
      </p>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
        <Search size={16} className="text-white" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedId(null);
          }}
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
          placeholder="Search by name or ASCHMA ID..."
        />
      </div>

      {results.length > 0 && (
        <div className="mt-3 space-y-2">
          {results.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition ${
                selectedId === p.id
                  ? "border-black bg-green-950"
                  : "border-surface-border bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-950 text-xs font-semibold text-black">
                  {p.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-black">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.aschmaId}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-600" />
            </button>
          ))}
        </div>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <p className="mt-3 text-sm text-slate-500">No matching patient found.</p>
      )}

      <button
        onClick={handleContinue}
        disabled={!selectedId}
        className="mt-4 w-full rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue to Vitals
      </button>
    </div>
  );
}