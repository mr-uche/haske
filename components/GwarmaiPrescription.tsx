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
            Prescription
          </h1>
        </div>

        {/* Patient / diagnosis card */}
        <div className="rounded-[10px] border border-[#223129] bg-green-950 p-4 grid grid-cols-2 gap-y-4">
          <div>
            <p className="text-[12px] text-white">Patient</p>
            <p className="text-[14.5px] font-semibold text-white mt-0.5">
              Aisha Musa Ibrahim
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-white">Date</p>
            <p className="text-[14.5px] font-semibold text-white mt-0.5">
              30/07/2026
            </p>
          </div>
          <div>
            <p className="text-[12px] text-white">Diagnosis</p>
            <p className="text-[14.5px] font-semibold text-white mt-0.5">
              Malaria (Uncomplicated)
            </p>
          </div>
          <div className="text-right">
            <p className="text-[12px] text-white">Prescribed by</p>
            <p className="text-[14.5px] font-semibold text-white mt-0.5">
              CHEW Musa Adamu
            </p>
          </div>
        </div>

        {/* Medication cards */}
        {MEDICATIONS.map((med) => (
          <div
            key={med.name}
            className="rounded-[10px] border border-[#223129] bg-green-950 p-4 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[8px] bg-green-950 border border-green-700 flex items-center justify-center shrink-0">
                <Link2 size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">{med.name}</p>
                <p className="text-[13px] font-medium text-white">{med.dosage}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-white mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] text-white">Frequency</p>
                  <p className="text-[13.5px] font-semibold text-white">
                    {med.frequency}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={15} className="text-white mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] text-white">Duration</p>
                  <p className="text-[13.5px] font-semibold text-white">
                    {med.duration}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] text-white">Dosing schedule</p>
              <div className="flex flex-wrap gap-2">
                {med.schedule.map((slot) => (
                  <span
                    key={slot}
                    className="px-3 py-1.5 rounded-[8px] border border-[#223129] bg-green-700 text-[12.5px] text-[#eef3ef]"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              {med.warnings.map((w) => (
                <div key={w} className="flex items-center gap-2">
                  <AlertTriangle size={13} className="text-[rgb(255,255,255)] shrink-0" />
                  <p className="text-[13px] text-white">{w}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Print / Share */}
        <button
          type="button"
          onClick={handlePrintShare}
          className="flex items-center justify-center gap-2 rounded-[10px] border border-dashed border-black py-3.5 text-[14.5px] font-semibold bg-green-950 text-white hover:bg-[#101c17] transition-colors"
        >
          <Printer size={16} />
          Print / Share Prescription
        </button>

        {/* Continue */}
        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center justify-center gap-2 rounded-[10px] bg-green-950 py-3.5 text-[15px] font-bold text-white hover:bg-green-700 transition-colors"
        >
          Continue to Summary
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}