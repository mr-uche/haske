"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Search, X, Plus, Zap } from "lucide-react";
import { gwarmaiSymptomCategories } from "./gwarmaiSymptomsData";

export default function GwarmaiSymptoms() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(0);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(["Fever", "Headache", "Chills"]);
  const [customSymptom, setCustomSymptom] = useState("");

  function toggleSymptom(symptom: string) {
    setSelected((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  }

  function addCustomSymptom() {
    const trimmed = customSymptom.trim();
    if (!trimmed || selected.includes(trimmed)) return;
    setSelected((prev) => [...prev, trimmed]);
    setCustomSymptom("");
  }

  const category = gwarmaiSymptomCategories[activeCategory];
  const visibleSymptoms = query
    ? category.symptoms.filter((s) => s.toLowerCase().includes(query.toLowerCase()))
    : category.symptoms;

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-white hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">Select Symptoms</h1>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-black">
        Selected ({selected.length})
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {selected.map((s) => (
          <span
            key={s}
            className="flex items-center gap-1.5 rounded-full bg-green-950 px-3 py-1.5 text-sm font-semibold text-white"
          >
            {s}
            <button onClick={() => toggleSymptom(s)}>
              <X size={13} />
            </button>
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
        <Search size={16} className="text-white" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-white placeholder:text-white focus:outline-none"
          placeholder="Search symptoms..."
        />
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {gwarmaiSymptomCategories.map((cat, i) => {
          const Icon = cat.icon;
          const isActive = i === activeCategory;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(i)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                isActive
                  ? "bg-green-950 text-white"
                  : "bg-white/5 text-slate-400"
              }`}
            >
              <Icon size={13} />
              {cat.label}
            </button>
          );
        })}
      </div>
      <div className="mt-1 h-0.5 w-full rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-green-950 transition-all"
          style={{
            width: `${100 / gwarmaiSymptomCategories.length}%`,
            marginLeft: `${(100 / gwarmaiSymptomCategories.length) * activeCategory}%`,
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {visibleSymptoms.map((symptom) => {
          const isSelected = selected.includes(symptom);
          return (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                isSelected
                  ? "border-black bg-green-950 text-white"
                  : "border-surface-border bg-white/[0.03] text-black"
              }`}
            >
              {symptom}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2">
        <input
          value={customSymptom}
          onChange={(e) => setCustomSymptom(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustomSymptom()}
          placeholder="Add other symptom..."
          className="w-full rounded-xl border border-surface-border bg-white/[0.03] px-4 py-3 text-sm text-black placeholder:text-black focus:outline-none"
        />
        <button
          onClick={addCustomSymptom}
          className="flex items-center gap-1 rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          <Plus size={15} />
          Add
        </button>
      </div>

      <button
        disabled={selected.length === 0}
        onClick={() => router.push("/mobile/gwarmai/followup")}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Zap size={16} />
        Continue ({selected.length} symptoms)
      </button>
    </div>
  );
}