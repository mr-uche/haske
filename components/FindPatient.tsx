"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Fingerprint, Search, ScanFace, Info } from "lucide-react";

const methods = [
  {
    icon: Fingerprint,
    title: "Biometric Scan",
    description: "Use fingerprint or face scan to identify patient instantly",
    color: "text-brand-400",
    bg: "bg-brand-500/15",
    href: "/mobile/patients/search/biometric",
  },
  {
    icon: Search,
    title: "Manual Search",
    description: "Search by name, ASCHMA ID, or phone number",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
    href: "/mobile/patients/search/manual",
  },
  {
    icon: ScanFace,
    title: "Face Recognition",
    description: "Use device camera to match patient face",
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    href: "/mobile/patients/search/biometric?mode=face",
  },
];

export default function FindPatient() {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-slate-100 hover:bg-green-700"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">Find Patient</h1>
      </div>

      <p className="mt-4 text-sm text-black">
        Choose how you want to identify the patient.
      </p>

      <div className="mt-4 space-y-3 ">
        {methods.map((m) => (
          <button
            key={m.title}
            onClick={() => router.push(m.href)}
            className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4 text-left"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${m.bg} ${m.color}`}>
                <m.icon size={22} />
              </span>
              <div>
                <p className="text-sm font-semibold text-black">{m.title}</p>
                <p className="mt-0.5 text-xs text-black">{m.description}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-600" />
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-surface-border bg-green-950 p-4">
        <Info size={15} className="mt-0.5 shrink-0 text-white" />
        <p className="text-xs text-white">
          Biometric data is processed on-device and never stored on the server. Patient consent is required before scanning.
        </p>
      </div>
    </div>
  );
}