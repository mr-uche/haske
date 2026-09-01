"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Plus, CheckCircle2, Calculator, ChevronRight } from "lucide-react";

export default function GwarmaiInteractions() {
  const router = useRouter();
  const [medications, setMedications] = useState<string[]>([
    "Artemether-Lumefantrine",
    "Paracetamol",
  ]);
  const [newMed, setNewMed] = useState("");

  // TODO: replace with real interaction-check logic/API call
  const hasInteractions = false;

  function handleAddMedication() {
    const trimmed = newMed.trim();
    if (!trimmed) return;
    setMedications((prev) => [...prev, trimmed]);
    setNewMed("");
  }

  function handleContinue() {
    // TODO: wire up to your actual prescription flow
    router.push("/mobile/gwarmai/prescription");
  }

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px] px-5 pt-6 pb-10 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-9 h-9 rounded-[10px] bg-green-950 border border-[#223129] flex items-center justify-center text-white shrink-0"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-[19px] font-bold tracking-tight text-black">
            Drug Interactions
          </h1>
        </div>

        {/* Checking interactions for */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-black">
            Checking Interactions For
          </label>

          <div className="flex flex-wrap gap-2">
            {medications.map((med) => (
              <span
                key={med}
                className="px-3.5 py-1.5 rounded-full border border-black bg-green-950 text-white text-[13.5px] font-medium"
              >
                {med}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={newMed}
              onChange={(e) => setNewMed(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddMedication()}
              placeholder="Add concurrent medication..."
              className="flex-1 bg-green-950 border border-black rounded-[10px] px-4 py-3 text-[14.5px] text-white placeholder:text-white focus:outline-none focus:border-green-800"
            />
            <button
              onClick={handleAddMedication}
              aria-label="Add medication"
              className="w-11 h-11 shrink-0 rounded-[10px] bg-green-950 border border-black flex items-center justify-center text-white hover:bg-[#4a3c20] transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Interaction check */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-black">
            Interaction Check
          </label>

          {hasInteractions ? (
            <div className="rounded-[10px] border border-[#d9a73b] bg-[#3a2f18] px-4 py-3.5 flex gap-3 items-start">
              <span className="text-[#d9a73b] mt-0.5">⚠</span>
              <div>
                <p className="text-[14.5px] font-semibold text-white">
                  Interaction Found
                </p>
                <p className="text-[13px] text-white mt-0.5">
                  Review the combination before prescribing.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-[10px] border border-bllack bg-green-950 px-4 py-3.5 flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5" />
              <div>
                <p className="text-[14.5px] font-semibold text-white">
                  No Interactions Found
                </p>
                <p className="text-[13px] text-white mt-0.5">
                  Current drug combination appears safe.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Dosage calculator link */}
        <button
          onClick={() => router.push("/mobile/gwarmai/dosage-calculator")}
          className="flex items-center gap-2 text-[14px] font-medium text-white hover:text-black transition-colors self-start"
        >
          <Calculator size={16} />
          Dosage Calculator (Weight-based)
        </button>

        {/* Continue */}
        <button
          type="button"
          onClick={handleContinue}
          className="mt-2 flex items-center justify-center gap-2 rounded-[10px] bg-green-950 py-3.5 text-[15px] font-bold text-white hover:bg-green-700 transition-colors"
        >
          Continue to Prescription
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}