"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Search } from "lucide-react";
import { mobilePatients } from "./mobilePatientsData";

export default function ManualSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSearch() {
    if (query.trim().length < 2) {
      setError("Enter at least 2 characters then press Search or Enter.");
      return;
    }
    setError("");

    const match = mobilePatients.find(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.aschmaId.toLowerCase().includes(query.toLowerCase()) ||
        p.phone.includes(query)
    );

    if (match) {
      router.push(`/mobile/patients/${match.id}`);
    } else {
      setError("No matching patient found.");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  const isValid = query.trim().length >= 2;

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-slate-100 hover:bg-green-800"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">Manual Search</h1>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
        <Search size={16} className="text-white-500" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-sm text-white placeholder:text-slate-100 focus:outline-none"
          placeholder="Name, ASCHMA ID, or phone..."
        />
      </div>

      <p className={`mt-2 text-xs ${error ? "text-red-400" : "text-black"}`}>
        {error || "Enter at least 2 characters then press Search or Enter."}
      </p>

      <button
        onClick={handleSearch}
        disabled={!isValid}
        className="mt-4 w-full rounded-xl bg-green-950 py-3.5 text-sm text-white font-bold text-surface hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Search
      </button>

      <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-black">
        Search By
      </p>
      <div className="mt-2 space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4">
          <span className="text-sm font-semibold text-white">Full Name</span>
          <span className="text-xs text-slate-100">e.g. Aisha Musa</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4">
          <span className="text-sm font-semibold text-white">ASCHMA ID</span>
          <span className="text-xs text-slate-100">e.g. ASC-2024-091234</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4">
          <span className="text-sm font-semibold text-white">Phone Number</span>
          <span className="text-xs text-slate-100">e.g. 08031234567</span>
        </div>
      </div>
    </div>
  );
}