"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Link2, Clock, Calendar, AlertTriangle, Printer, ChevronRight } from "lucide-react";

type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  schedule: string[];
  warnings: string[];
};

const MEDICATIONS: Medication[] = [
  {
    name: "Artemether-Lumefantrine (AL)",
    dosage: "80/480mg",
    frequency: "Twice daily",
    duration: "3 days",
    schedule: ["Morning (with food)", "Evening (with food)"],
    warnings: ["Take with food or milk", "Complete full course"],
  },
  {
    name: "Paracetamol",
    dosage: "500mg",
    frequency: "Three times daily",
    duration: "3 days",
    schedule: ["Morning", "Afternoon", "Evening"],
    warnings: ["Do not exceed 4g/day", "Avoid alcohol"],
  },
];

export default function GwarmaiPrescription() {
  const router = useRouter();

  function handlePrintShare() {
    // TODO: wire up to your actual print/share logic
    window.print();
  }

  function handleContinue() {
    // TODO: wire up to your actual summary route
    router.push("/mobile/gwarmai/summary");
  }

  return (
    <div className="min-h-screen bg-[#0a1310] flex justify-center">
      <div className="w-full max-w-[420px] px-5 pt-6 pb-10 flex flex-col gap-5">
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
            Prescription
          </h1>
        </div>

        {/* Patient / diagnosis card */}
        <div className="rounded-[10px] border border-[#223129] bg-[#101c17] p-4 grid grid-cols-2 gap-y-4">
          <div>
            <p className="text-[12px] text-[#8ba296]">Patient</p>
            <p className="text-[14.5px] font-semibold text-[#eef3ef] mt-0.5">
              Aisha Musa Ibrahim
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-[#8ba296]">Date</p>
            <p className="text-[14.5px] font-semibold text-[#eef3ef] mt-0.5">
              30/07/2026
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#8ba296]">Diagnosis</p>
            <p className="text-[14.5px] font-semibold text-[#eef3ef] mt-0.5">
              Malaria (Uncomplicated)
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-[#8ba296]">Prescribed by</p>
            <p className="text-[14.5px] font-semibold text-[#eef3ef] mt-0.5">
              CHEW Musa Adamu
            </p>
          </div>
        </div>

        {/* Medication cards */}
        {MEDICATIONS.map((med) => (
          <div
            key={med.name}
            className="rounded-[10px] border border-[#223129] bg-[#101c17] p-4 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[8px] bg-[#3a2f18] border border-[#d9a73b] flex items-center justify-center shrink-0">
                <Link2 size={16} className="text-[#d9a73b]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#eef3ef]">{med.name}</p>
                <p className="text-[13px] font-medium text-[#d9a73b]">{med.dosage}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-[#8ba296] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] text-[#8ba296]">Frequency</p>
                  <p className="text-[13.5px] font-semibold text-[#eef3ef]">
                    {med.frequency}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={15} className="text-[#8ba296] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] text-[#8ba296]">Duration</p>
                  <p className="text-[13.5px] font-semibold text-[#eef3ef]">
                    {med.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] text-[#8ba296]">Dosing schedule</p>
              <div className="flex flex-wrap gap-2">
                {med.schedule.map((slot) => (
                  <span
                    key={slot}
                    className="px-3 py-1.5 rounded-[8px] border border-[#223129] bg-[#0a1310] text-[12.5px] text-[#eef3ef]"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {med.warnings.map((w) => (
                <div key={w} className="flex items-center gap-2">
                  <AlertTriangle size={13} className="text-[#d9a73b] shrink-0" />
                  <p className="text-[13px] text-[#d9a73b]">{w}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Print / Share */}
        <button
          type="button"
          onClick={handlePrintShare}
          className="flex items-center justify-center gap-2 rounded-[10px] border border-dashed border-[#223129] py-3.5 text-[14.5px] font-semibold text-[#eef3ef] hover:bg-[#101c17] transition-colors"
        >
          <Printer size={16} />
          Print / Share Prescription
        </button>

        {/* Continue */}
        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center justify-center gap-2 rounded-[10px] bg-[#d9a73b] py-3.5 text-[15px] font-bold text-[#0a1310] hover:bg-[#e8bb5e] transition-colors"
        >
          Continue to Summary
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}