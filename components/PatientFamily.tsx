"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Plus, ChevronRight } from "lucide-react";
import {
  mobilePatients,
  patientFamily,
  familyStatusStyles,
  familyStatusLabels,
} from "./mobilePatientsData";

export default function PatientFamily({ patientId }: { patientId: string }) {
  const router = useRouter();
  const patient = mobilePatients.find((p) => p.id === patientId);
  const dependants = patientFamily[patientId] ?? [];

  if (!patient) {
    return (
      <div className="mx-auto w-full max-w-md px-5 pt-8 text-center text-slate-400">
        Patient not found.
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push(`/mobile/patients/${patientId}`)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-lg font-bold text-white">Family Members</h1>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 hover:bg-brand-500/25">
          <Plus size={18} />
        </button>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-400">
        Primary Memba
      </p>
      <div className="mt-2 rounded-xl border border-brand-500/20 bg-brand-500/10 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-400">
            {patient.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{patient.name}</p>
            <p className="font-mono text-xs text-brand-400">{patient.aschmaId}</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Dependants ({dependants.length})
      </p>

      {dependants.length === 0 ? (
        <p className="mt-3 text-sm text-slate-500">No dependants registered.</p>
      ) : (
        <div className="mt-2 space-y-3">
          {dependants.map((d) => (
            <button
              key={d.aschmaId}
              className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-slate-200">
                  {d.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{d.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {d.relation} · {d.age}y · {d.aschmaId}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold ${familyStatusStyles[d.status]}`}>
                  {familyStatusLabels[d.status]}
                </span>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
          ))}
        </div>
      )}

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-surface-border py-3.5 text-sm font-semibold text-slate-400 hover:bg-white/[0.02]">
        <Plus size={16} />
        Add Family Member
      </button>
    </div>
  );
}