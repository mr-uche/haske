"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Pencil,
  User,
  MapPin,
  Phone,
  Calendar,
  Shield,
  Users,
  Clock,
  Brain,
} from "lucide-react";
import {
  mobilePatients,
  statusBadgeStyles,
  patientAISessions,
} from "./mobilePatientsData";

export default function MobilePatientDetail({ patientId }: { patientId: string }) {
  const router = useRouter();
  const patient = mobilePatients.find((p) => p.id === patientId);
  const sessions = patientAISessions[patientId] ?? [];

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
        <button
          onClick={() => router.push("/mobile/patients")}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">Patient</h1>
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10">
          <Pencil size={16} />
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-500/40 bg-brand-500/10 text-2xl font-bold text-brand-400">
          {patient.initials}
        </span>
        <h2 className="mt-3 text-xl font-bold text-white">{patient.name}</h2>
        <p className="font-mono text-sm text-brand-400">{patient.aschmaId}</p>
        <span
          className={`mt-2 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeStyles[patient.status]}`}
        >
          {patient.status === "active" && "✓ "}
          {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
        </span>
      </div>

      <div className="mt-6 divide-y divide-surface-border rounded-xl border border-surface-border bg-white/[0.02]">
        <DetailRow icon={User} label="Age / Gender" value={`${patient.age} years · ${patient.gender}`} />
        <DetailRow icon={MapPin} label="LGA" value={patient.lga} highlight />
        <DetailRow icon={Phone} label="Phone" value={patient.phone} highlight />
        <DetailRow icon={Calendar} label="Coverage Expiry" value={patient.coverageExpiry} highlight />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
  <Link href={`/mobile/patients/${patient.id}/coverage`} className="block w-full">
    <ActionCard icon={Shield} label="Coverage" color="text-brand-400" bg="bg-brand-500/10 border-brand-500/20" />
  </Link>
  <Link href={`/mobile/patients/${patient.id}/family`} className="block w-full">
    <ActionCard icon={Users} label="Family" color="text-blue-400" bg="bg-blue-500/10 border-blue-500/20" />
  </Link>
  <Link href={`/mobile/patients/${patient.id}/history`} className="block w-full">
  <ActionCard icon={Clock} label="Visit History" color="text-purple-400" bg="bg-purple-500/10 border-purple-500/20" />
  </Link>
  <Link href="/mobile/gwarmai" className="block w-full">
  <ActionCard icon={Brain} label="Gwarmai" color="text-orange-400" bg="bg-orange-500/10 border-orange-500/20" />
  </Link>
</div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Recent AI Sessions
        </p>
        <button className="text-xs font-semibold text-brand-400">See all</button>
      </div>

      <div className="mt-2 space-y-3">
        {sessions.map((s, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                <Brain size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{s.diagnosis}</p>
                <p className="text-xs text-slate-500">
                  {s.chew} · {s.time}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-brand-400">{s.confidence}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: typeof User;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5">
      <span className={`flex items-center gap-2 text-sm ${highlight ? "text-brand-400" : "text-slate-400"}`}>
        <Icon size={15} />
        {label}
      </span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  label,
  color,
  bg,
}: {
  icon: typeof Shield;
  label: string;
  color: string;
  bg: string;
}) {
  return (
    <button className={`w-full rounded-xl border p-4 text-left ${bg}`}>
      <Icon size={20} className={color} />
      <p className="mt-2 text-sm font-semibold text-white">{label}</p>
    </button>
  );
}