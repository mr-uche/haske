"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, Search, Plus, Zap, ChevronRight } from "lucide-react";
import { symptomCategories } from "./symptomsData";

export default function SymptomsScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const patientId = searchParams.get("patient");

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [customSymptom, setCustomSymptom] = useState("");

  function toggleSymptom(symptom: string) {
    setSelected((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  }

  function addCustomSymptom() {
    const trimmed = customSymptom.trim();
    if (!trimmed) return;
    if (!selected.includes(trimmed)) {
      setSelected((prev) => [...prev, trimmed]);
    }
    setCustomSymptom("");
  }

  const filteredCategories = symptomCategories
    .map((cat) => ({
      ...cat,
      symptoms: cat.symptoms.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((cat) => cat.symptoms.length > 0);

  const hasSelection = selected.length > 0;

  function goToQuery(path: string) {
    const suffix = patientId ? `?patient=${patientId}` : "";
    router.push(`${path}${suffix}`);
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">Symptoms</h1>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-surface-border bg-white/[0.03] px-4 py-3">
        <Search size={16} className="text-slate-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
          placeholder="Search symptoms..."
        />
      </div>

      <div className="mt-2">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">
              {cat.category}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {cat.symptoms.map((symptom) => {
                const isSelected = selected.includes(symptom);
                return (
                  <button
                    key={symptom}
                    onClick={() => toggleSymptom(symptom)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                      isSelected
                        ? "border-brand-500/50 bg-brand-500/15 text-brand-400"
                        : "border-surface-border bg-white/[0.03] text-slate-300"
                    }`}
                  >
                    {symptom}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <input
          value={customSymptom}
          onChange={(e) => setCustomSymptom(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustomSymptom()}
          placeholder="Add custom symptom..."
          className="w-full rounded-xl border border-surface-border bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
        <button
          onClick={addCustomSymptom}
          className="flex items-center gap-1 rounded-xl border border-surface-border bg-white/[0.03] px-4 py-3 text-sm font-semibold text-brand-400 hover:bg-white/[0.06]"
        >
          <Plus size={15} />
          Add
        </button>
      </div>

      <button
        onClick={() => goToQuery("/mobile/encounter/ai-review")}
        disabled={!hasSelection}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-surface hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Zap size={16} />
        Run Gwarmai AI
      </button>

      <button
        onClick={() => goToQuery("/mobile/encounter/diagnosis")}
        disabled={!hasSelection}
        className="mt-2 flex w-full items-center justify-center gap-1.5 py-2 text-sm font-semibold text-slate-400 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Skip AI — Enter Diagnosis Manually
        <ChevronRight size={15} />
      </button>
    </div>
  );
}