"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Stethoscope, Brain, FlaskConical } from "lucide-react";
import {
  mobilePatients,
  patientVisitHistory,
  visitTypeStyles,
  VisitType,
} from "./mobilePatientsData";

const visitIcons: Record<VisitType, typeof Stethoscope> = {
  consultation: Stethoscope,
  gwarmai: Brain,
  prescription: FlaskConical,
  antenatal: Stethoscope,
};

export default function PatientVisitHistory({ patientId }: { patientId: string }) {
  const router = useRouter();
  const patient = mobilePatients.find((p) => p.id === patientId);
  const visits = patientVisitHistory[patientId] ?? [];

  if (!patient) {
    return (
      <div className="mx-auto w-full max-w-md px-5 pt-8 text-center text-slate-400">
        Patient cannat be found.
      </div>
    );
  }

  const totalVisits = visits.length;
  const aiSessions = visits.filter((v) => v.type === "gwarmai").length;
  const prescriptions = visits.filter((v) => v.type === "prescription").length;

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.push(`/mobile/patients/${patientId}`)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">Visit History</h1>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
          <p className="text-2xl font-bold text-brand-400">{totalVisits}</p>
          <p className="mt-1 text-xs text-slate-400">Total Visits</p>
        </div>
        <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">{aiSessions}</p>
          <p className="mt-1 text-xs text-slate-400">AI Sessions</p>
        </div>
        <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
          <p className="text-2xl font-bold text-purple-400">{prescriptions}</p>
          <p className="mt-1 text-xs text-slate-400">Prescriptions</p>
        </div>
      </div>

      {visits.length === 0 ? (
        <p className="mt-6 text-center text-sm text-slate-500">No visit history recorded.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {visits.map((v, i) => {
            const Icon = visitIcons[v.type];
            const style = visitTypeStyles[v.type];
            return (
              <button
                key={i}
                className="flex w-full items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.bg} ${style.text}`}
                  >
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{v.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {v.provider} · {v.date}
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-600" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}