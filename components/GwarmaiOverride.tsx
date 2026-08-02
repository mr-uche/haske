"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, AlertTriangle } from "lucide-react";

const REASONS = [
  { value: "clearer-in-person", label: "Clinical presentation is clearer in person" },
  { value: "history-not-captured", label: "Patient history not captured in voice/text" },
  { value: "lab-contradicts", label: "Lab results contradict AI suggestion" },
  { value: "outbreak-pattern", label: "Local outbreak pattern informs decision" },
  { value: "allergy", label: "Patient allergy to suggested treatment" },
  { value: "other", label: "Other — specify below" },
] as const;

export default function GwarmaiOverride() {
  const router = useRouter();
  const [diagnosis, setDiagnosis] = useState("");
  const [reason, setReason] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const canSubmit = diagnosis.trim().length > 0 && reason !== null;

  function handleConfirm() {
    if (!canSubmit) return;
    // TODO: wire up to your actual override submission logic
    console.log({ diagnosis, reason, notes });
  }

  return (
    <div className="min-h-screen bg-[#0a1310] flex justify-center">
      <div className="w-full max-w-[420px] px-5 pt-6 pb-10 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-9 h-9 rounded-[10px] bg-[#101c17] border border-[#223129] flex items-center justify-center text-[#eef3ef] shrink-0"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-[19px] font-bold tracking-tight text-[#eef3ef]">
            Override AI Diagnosis
          </h1>
        </div>

        {/* Warning */}
        <div className="bg-[#3a2f18] border border-[#d9a73b] rounded-[10px] px-4 py-3.5 flex gap-2.5 items-start">
          <AlertTriangle size={18} className="text-[#d9a73b] shrink-0 mt-0.5" />
          <p className="text-[13.5px] leading-relaxed text-[#d9c99a]">
            You are overriding the AI recommendation. Your clinical judgment
            will be recorded and reviewed for quality assurance.
          </p>
        </div>

        {/* Diagnosis */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-[#8ba296]">
            Your Diagnosis <span className="text-[#d9a73b]">*</span>
          </label>
          <select
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="bg-[#101c17] border border-[#223129] rounded-[10px] px-4 py-3.5 text-[15px] text-[#eef3ef] appearance-none cursor-pointer focus:outline-none focus:border-[#d9a73b]"
          >
            <option value="" disabled className="text-[#5c7166]">
              Select diagnosis
            </option>
            <option value="malaria">Malaria</option>
            <option value="typhoid">Typhoid</option>
            <option value="cholera">Cholera</option>
            <option value="measles">Measles</option>
          </select>
        </div>

        {/* Reason */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-[#8ba296]">
            Reason for Override <span className="text-[#d9a73b]">*</span>
          </label>
          <div className="flex flex-col gap-2.5">
            {REASONS.map((r) => {
              const selected = reason === r.value;
              return (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setReason(r.value)}
                  className={`flex items-center gap-3 rounded-[10px] border px-4 py-3.5 text-left text-[14.5px] transition-colors ${
                    selected
                      ? "border-[#d9a73b] bg-[#d9a73b]/10 text-[#eef3ef]"
                      : "border-[#223129] bg-[#101c17] text-[#eef3ef] hover:bg-[#16241d]"
                  }`}
                >
                  <span
                    className={`w-[18px] h-[18px] rounded-full border shrink-0 flex items-center justify-center ${
                      selected ? "border-[#d9a73b]" : "border-[#5c7166]"
                    }`}
                  >
                    {selected && (
                      <span className="w-[9px] h-[9px] rounded-full bg-[#d9a73b]" />
                    )}
                  </span>
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold tracking-wider uppercase text-[#8ba296]">
            Additional Notes{" "}
            <span className="normal-case font-normal text-[#5c7166]">
              (optional)
            </span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Describe your clinical reasoning..."
            rows={4}
            className="bg-[#101c17] border border-[#223129] rounded-[10px] px-4 py-3.5 text-[14.5px] text-[#eef3ef] placeholder:text-[#5c7166] resize-none focus:outline-none focus:border-[#d9a73b]"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          disabled={!canSubmit}
          onClick={handleConfirm}
          className="mt-1 flex items-center justify-center gap-2 rounded-[10px] border border-[#d9a73b] py-3.5 text-[15px] font-bold text-[#d9a73b] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#3a2f18] transition-colors"
        >
          <AlertTriangle size={16} />
          Confirm Override
        </button>
      </div>
    </div>
  );
}