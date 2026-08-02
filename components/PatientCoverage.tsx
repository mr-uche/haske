"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, CheckCircle2, XCircle } from "lucide-react";
import { mobilePatients, patientBenefits } from "./mobilePatientsData";

export default function PatientCoverage({ patientId }: { patientId: string }) {
  const router = useRouter();
  const patient = mobilePatients.find((p) => p.id === patientId);
  const benefits = patientBenefits[patientId] ?? [];

  if (!patient) {
    return (
      <div className="mx-auto w-full max-w-md px-5 pt-8 text-center text-slate-400">
        Patient not found.
      </div>
    );
  }

  const isActive = patient.status === "active";

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.push(`/mobile/patients/${patientId}`)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">ASCHMA Coverage</h1>
      </div>

      <div
        className={`mt-5 rounded-xl border p-4 ${
          isActive ? "border-brand-500/20 bg-brand-500/10" : "border-red-500/20 bg-red-500/10"
        }`}
      >
        <div className="flex items-center gap-2">
          {isActive ? (
            <CheckCircle2 size={20} className="text-brand-400" />
          ) : (
            <XCircle size={20} className="text-red-400" />
          )}
          <div>
            <p className={`text-sm font-bold ${isActive ? "text-brand-400" : "text-red-400"}`}>
              {isActive ? "Coverage Active" : "Coverage Inactive"}
            </p>
            <p className="text-xs text-slate-400">
              {isActive
                ? "Patient is enrolled and eligible for services."
                : "Patient's coverage has expired or is not active."}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <InfoRow label="Patient" value={patient.name} />
          <InfoRow label="ASCHMA ID" value={patient.aschmaId} />
          <InfoRow label="Coverage Expiry" value={patient.coverageExpiry} />
          <InfoRow label="LGA" value={patient.lga} />
        </div>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Benefits Coverage
      </p>
      <div className="mt-2 divide-y divide-surface-border rounded-xl border border-surface-border bg-white/[0.02]">
        {benefits.map((b) => (
          <div key={b.label} className="flex items-center justify-between px-4 py-3.5">
            <span className="text-sm font-medium text-brand-300">{b.label}</span>
            {b.covered ? (
              <CheckCircle2 size={18} className="text-brand-400" />
            ) : (
              <XCircle size={18} className="text-slate-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-brand-300/70">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}