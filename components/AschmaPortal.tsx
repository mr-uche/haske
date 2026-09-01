"use client";

import { useState } from "react";
import {
  FileText,
  UserCheck,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
import ClaimsQueueTab from "./ClaimsQueueTab";
import EnrollmentVerificationTab from "./EnrollmentVerificationTab";
import PaymentReconciliationTab from "./PaymentReconciliationTab";
import FraudFlagsTab from "./FraudFlagsTab";

type Tab = "claims" | "enrollment" | "payment" | "fraud";

const fraudFlagCount = 2;

const tabs: { key: Tab; label: string; icon: typeof FileText; badge?: number }[] = [
  { key: "claims", label: "Claims Queue", icon: FileText },
  { key: "enrollment", label: "Enrollment Verification", icon: UserCheck },
  { key: "payment", label: "Payment Reconciliation", icon: DollarSign },
  { key: "fraud", label: "Fraud Flags", icon: ShieldAlert, badge: fraudFlagCount },
];

export default function AschmaPortal() {
  const [tab, setTab] = useState<Tab>("claims");

  return (
    <>
      <div className="flex flex-wrap gap-2 border-b border-surface-border pb-3">
        {tabs.map(({ key, label, icon: Icon, badge }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === key
                ? "bg-green-950 text-white"
                : "text-slate-900 hover:text-slate-200 hover:bg-green-100"
            }`}
          >
            <Icon size={15} />
            {label}
            {badge ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {badge}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {tab === "claims" && <ClaimsQueueTab />}
      {tab === "enrollment" && <EnrollmentVerificationTab />}
      {tab === "payment" && <PaymentReconciliationTab />}
      {tab === "fraud" && <FraudFlagsTab />}
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