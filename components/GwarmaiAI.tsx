"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Stethoscope,
  Eye,
  Activity,
  ShieldCheck,
  Settings,
  UserSearch,
  FileCog,
} from "lucide-react";
import GwarmaiOverviewTab from "./GwarmaiOverviewTab"
import ConsultationsTab from "./ConsultationsTab";
import ClinicalOversightTab from "./ClinicalOversightTab";
import EpidemiologyTab from "./EpidemiologyTab";
import ClaimsIntelTab from "./ClaimsIntelTab";
import GovernanceTab from "./GovernanceTab";
import PatientAIHistoryTab from "./PatientAIHistoryTab";
import AuditConfigTab from "./AuditConfigTab";

type Tab =
  | "overview"
  | "consultations"
  | "oversight"
  | "epidemiology"
  | "claims"
  | "governance"
  | "patientHistory"
  | "audit";

const tabs: { key: Tab; label: string; icon: typeof LayoutGrid }[] = [
  { key: "overview", label: "Overview", icon: LayoutGrid },
  { key: "consultations", label: "Consultations", icon: Stethoscope },
  { key: "oversight", label: "Clinical Oversight", icon: Eye },
  { key: "epidemiology", label: "Epidemiology", icon: Activity },
  { key: "claims", label: "Claims Intel", icon: ShieldCheck },
  { key: "governance", label: "Governance", icon: Settings },
  { key: "patientHistory", label: "Patient AI History", icon: UserSearch },
  { key: "audit", label: "Audit & Config", icon: FileCog },
];

export default function GwarmaiAI() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <>
      <div className="flex flex-wrap gap-2 border-b border-surface-border pb-3">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === key
                ? "bg-green-900 text-white"
                : "text-slate-900 hover:text-teal-700 hover:bg-green-100"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {tab === "overview" && <GwarmaiOverviewTab />}
      {tab === "consultations" && <ConsultationsTab />}
      {tab === "oversight" && <ClinicalOversightTab />}
      {tab === "epidemiology" && <EpidemiologyTab />}
      {tab === "claims" && <ClaimsIntelTab />}
      {tab === "governance" && <GovernanceTab />}
      {tab === "patientHistory" && <PatientAIHistoryTab />}
      {tab === "audit" && <AuditConfigTab />}
    </>
  );
}

function PlaceholderTab({ label }: { label: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-2xl border border-surface-border bg-surface-card text-slate-500">
      {label} content coming soon
    </div>
  );
}