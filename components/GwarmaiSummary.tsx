"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ThumbsUp, ThumbsDown, Save } from "lucide-react";

type SummaryRow = {
  label: string;
  value: string;
};

const SUMMARY_ROWS: SummaryRow[] = [
  { label: "AI Diagnosis", value: "Malaria (Uncomplicated) · 87%" },
  { label: "Final Dx", value: "Malaria (Uncomplicated)" },
  { label: "Override", value: "No" },
  { label: "Red Flags", value: "1 detected — High fever" },
  { label: "Referral", value: "Not referred" },
  { label: "Prescription", value: "AL 80/480mg BD x 3d + Paracetamol 500mg TDS x 3d" },
  { label: "Language", value: "Hausa" },
  { label: "CHEW", value: "Musa Adamu" },
];

export default function GwarmaiSummary() {
  const router = useRouter();
  const [wasHelpful, setWasHelpful] = useState<"yes" | "no" | null>(null);

  function handleSave() {
    // TODO: wire up to your actual save-to-encounter logic
    console.log({ wasHelpful });
  }

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px] px-5 pt-6 pb-10 flex flex-col gap-5">
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
            Summary
          </h1>
        </div>

        {/* Summary rows */}
        <div className="rounded-[10px] border border-[#223129] bg-green-950 divide-y divide-[#223129]">
          {SUMMARY_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-start justify-between gap-4 px-4 py-3.5"
            >
              <p className="text-[13.5px] text-white shrink-0">{row.label}</p>
              <p className="text-[13.5px] font-semibold text-white text-right">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        {/* Feedback */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-white">
            Was the AI Suggestion Helpful?
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setWasHelpful("yes")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-[10px] border py-3 text-[14.5px] font-semibold transition-colors ${
                wasHelpful === "yes"
                  ? "border-green-700 bg-green-950 text-white"
                  : "border-[#223129] bg-green-950 text-white hover:bg-[#16241d]"
              }`}
            >
              <ThumbsUp size={16} />
              Yes
            </button>
            <button
              type="button"
              onClick={() => setWasHelpful("no")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-[10px] border py-3 text-[14.5px] font-semibold transition-colors ${
                wasHelpful === "no"
                  ? "border-slate-800 bg-green-800 text-white"
                  : "border-[#223129] bg-[#101c17] text-[#eef3ef] hover:bg-[#16241d]"
              }`}
            >
              <ThumbsDown size={16} />
              No
            </button>
          </div>
        </div>

        {/* Save */}
        <button
          type="button"
          onClick={handleSave}
          className="flex items-center justify-center gap-2 rounded-[10px] bg-green-950 py-3.5 text-[15px] font-bold text-white hover:bg-green-700 transition-colors"
        >
          <Save size={16} />
          Save to Encounter
        </button>
      </div>
    </div>
  );
}