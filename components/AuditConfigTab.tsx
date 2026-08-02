"use client";

import {
  Settings,
  Download,
  CheckCircle2,
  Flag,
  Database,
  ArrowUpRight,
  AlertTriangle,
  Cog,
} from "lucide-react";
import { configSettings, governanceAuditLog, AuditActionType } from "./auditConfigData";

const actionIcons: Record<AuditActionType, typeof CheckCircle2> = {
  validated: CheckCircle2,
  flagged: Flag,
  training: Database,
  deployed: ArrowUpRight,
  overrideAlert: AlertTriangle,
  configUpdated: Cog,
};

const actionColors: Record<AuditActionType, string> = {
  validated: "bg-brand-500/15 text-brand-400",
  flagged: "bg-red-500/15 text-red-400",
  training: "bg-blue-500/15 text-blue-400",
  deployed: "bg-blue-500/15 text-blue-400",
  overrideAlert: "bg-amber-500/15 text-amber-400",
  configUpdated: "bg-slate-500/15 text-slate-300",
};

export default function AuditConfigTab() {
  return (
    <>
      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">Gwarmal Configuration</h3>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {configSettings.map((c) => (
            <div
              key={c.title}
              className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
            >
              <div>
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{c.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-lg border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-brand-400">
                  {c.value}
                </span>
                <button className="text-slate-500 hover:text-slate-300">
                  <Settings size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Governance Audit Log</h3>
            <p className="text-xs text-slate-500">
              All model governance actions — validations, flags, training inclusions
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-surface-border bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">
            <Download size={15} />
            Export
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {governanceAuditLog.map((entry, i) => {
            const Icon = actionIcons[entry.actionType];
            return (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${actionColors[entry.actionType]}`}
                  >
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold text-white">{entry.action}</span>{" "}
                      <span className="text-slate-500">by {entry.actor}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{entry.detail}</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500">{entry.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}