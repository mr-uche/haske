"use client";

import { useState } from "react";
import { AlertTriangle, MapPin, Clock, ChevronRight, CheckCircle2, Shield, Bell } from "lucide-react";

type Level = "critical" | "high" | "moderate";
type ChainStatus = "notified" | "active" | "pending";

interface Escalation {
  disease: string;
  level: Level;
  location: string;
  handler: string;
  time: string;
  activeCases: number;
  threshold: number;
  escalationLevel: number;
  autoEscalatesIn: string;
  reported: string;
}

interface ChainStep {
  role: string;
  status: ChainStatus;
  detail: string;
  channel: string;
}

const escalations: Escalation[] = [
  {
    disease: "Cholera",
    level: "critical",
    location: "Hong",
    handler: "Level 3 — Dr. Fatima Umar",
    time: "47m",
    activeCases: 67,
    threshold: 50,
    escalationLevel: 3,
    autoEscalatesIn: "47m",
    reported: "140d ago",
  },
  {
    disease: "Lassa Fever",
    level: "critical",
    location: "Michika",
    handler: "Level 3 — Dr. Fatima Umar",
    time: "47m",
    activeCases: 54,
    threshold: 30,
    escalationLevel: 3,
    autoEscalatesIn: "52m",
    reported: "140d ago",
  },
  {
    disease: "Malaria",
    level: "high",
    location: "Gombi",
    handler: "Level 2 — LGA Coordinator",
    time: "85m",
    activeCases: 38,
    threshold: 30,
    escalationLevel: 2,
    autoEscalatesIn: "1h 25m",
    reported: "140d ago",
  },
  {
    disease: "Malaria",
    level: "moderate",
    location: "Madagali",
    handler: "Level 2 — LGA Coordinator",
    time: "85m",
    activeCases: 22,
    threshold: 20,
    escalationLevel: 2,
    autoEscalatesIn: "1h 25m",
    reported: "140d ago",
  },
  {
    disease: "Typhoid",
    level: "moderate",
    location: "Mubi South",
    handler: "Level 1 — Facility Manager",
    time: "2h",
    activeCases: 15,
    threshold: 20,
    escalationLevel: 1,
    autoEscalatesIn: "3h",
    reported: "140d ago",
  },
];

const chain: ChainStep[] = [
  { role: "CHEW", status: "notified", detail: "CHEW at facility · In-app", channel: "Immediate" },
  { role: "Facility Manager", status: "notified", detail: "PHC Facility Manager · In-app + SMS", channel: "30 min" },
  { role: "LGA Coordinator", status: "active", detail: "LGA Health Coordinator · SMS + WhatsApp", channel: "1 hour" },
  { role: "State Epidemiologist", status: "pending", detail: "Dr. Fatima Umar · All channels", channel: "2 hours" },
];

const levelStyles: Record<Level, string> = {
  critical: "bg-red-500/20 text-red-400",
  high: "bg-orange-500/20 text-orange-400",
  moderate: "bg-amber-500/20 text-amber-400",
};

const levelBorder: Record<Level, string> = {
  critical: "border-red-500/30 bg-red-500/5",
  high: "border-orange-500/20 bg-green-950",
  moderate: "border-surface-border bg-green-950",
};

export default function EscalationWorkflow() {
  const [selected, setSelected] = useState(0);
  const active = escalations[selected];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
      {/* Left: Active Escalations list */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-black">Active Escalations</h3>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-xs font-bold text-brand-400">
            {escalations.length}
          </span>
        </div>

        <div className="space-y-3 ">
          {escalations.map((e, i) => (
            <button
              key={e.disease + e.location}
              onClick={() => setSelected(i)}
              className={`w-full rounded-xl border p-4 text-left transition ${
                selected === i ? "border-green-950" : levelBorder[e.level]
              }`}
            >
              <div className="flex items-center justify-between  ">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{e.disease}</span>
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${levelStyles[e.level]}`}>
                    {e.level}
                  </span>
                </div>
                <ChevronRight size={15} className="text-slate-600" />
              </div>
              <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                <MapPin size={11} /> {e.location}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">{e.handler}</span>
                <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                  <Clock size={11} /> {e.time}         
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Detail panel */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-red-400" size={18} />
                <h3 className="text-lg font-bold text-white">{active.disease} Outbreak</h3>
                <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${levelStyles[active.level]}`}>
                  {active.level}
                </span>
              </div>
              <p className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {active.location} LGA
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> Reported {active.reported}
                </span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Auto-escalates in</p>
              <p className="text-lg font-bold text-orange-400">{active.autoEscalatesIn}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-4">
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
              <p className="text-2xl font-bold text-red-400">{active.activeCases}</p>
              <p className="mt-1 text-xs text-slate-500">Active Cases</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
              <p className="text-2xl font-bold text-white">{active.threshold}</p>
              <p className="mt-1 text-xs text-slate-500">Threshold</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4 text-center">
              <p className="text-2xl font-bold text-brand-400">{active.escalationLevel}</p>
              <p className="mt-1 text-xs text-slate-500">Escalation Level</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
          <h4 className="text-sm font-semibold text-white">Escalation Chain</h4>
          <div className="mt-4 space-y-3">
            {chain.map((step) => {
              const isNotified = step.status === "notified";
              const isActive = step.status === "active";
              const Icon = isNotified ? CheckCircle2 : isActive ? Shield : Bell;
              const iconWrap = isNotified
                ? "bg-emerald-900/15 text-emerald-400"
                : isActive
                ? "bg-amber-5900/15 text-amber-400"
                : "bg-white/5 text-slate-500";
              const badge = isNotified
                ? "bg-emerald-900/15 text-emerald-400"
                : isActive
                ? "bg-amber-900/15 text-amber-400"
                : null;

              return (
                <div
                  key={step.role}
                  className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${iconWrap}`}>
                      <Icon size={16} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">{step.role}</p>
                        {badge && (
                          <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${badge}`}>
                            {step.status}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{step.detail}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{step.channel}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}