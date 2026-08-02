"use client";

import { useState } from "react";
import {
  Search,
  Download,
  Shield,
  ShieldAlert,
  ShieldQuestion,
  LogIn,
  CheckCircle2,
  PlusCircle,
  Lock,
  Eye,
} from "lucide-react";
import {
  auditLogs,
  actionStyles,
  statusStyles,
  ActionType,
  LogStatus,
} from "./auditData";

const actionIcons: Record<ActionType, typeof LogIn> = {
  login: LogIn,
  "alert ack": CheckCircle2,
  create: PlusCircle,
  lock: Lock,
  view: Eye,
};

export default function AuditLogs() {
  const [query, setQuery] = useState("");
  const [actionFilter, setActionFilter] = useState<ActionType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<LogStatus | "all">("all");

  const total = auditLogs.length;
  const failed = auditLogs.filter((l) => l.status === "failed").length;
  const warnings = auditLogs.filter((l) => l.status === "warning").length;

  const actions: ActionType[] = ["login", "alert ack", "create", "lock", "view"];

  const filtered = auditLogs
    .filter((l) => (actionFilter === "all" ? true : l.action === actionFilter))
    .filter((l) => (statusFilter === "all" ? true : l.status === statusFilter))
    .filter((l) =>
      `${l.userName} ${l.resource} ${l.detail}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  return (
    <>
      {/* zha Statisticul cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-brand-500/20 bg-brand-900 p-5">
          <div className="flex items-center justify-between">
            <Shield size={20} className="text-brand-400" />
            <span className="text-3xl font-bold text-white">{total}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Total Events</p>
          <p className="text-xs text-slate-400">Last 30 days</p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-700 p-5">
          <div className="flex items-center justify-between">
            <ShieldAlert size={20} className="text-red-400" />
            <span className="text-3xl font-bold text-white">{failed}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Failed Attempts</p>
          <p className="text-xs text-slate-400">Last 30 days</p>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500 p-5">
          <div className="flex items-center justify-between">
            <ShieldQuestion size={20} className="text-amber-400" />
            <span className="text-3xl font-bold text-white">{warnings}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Warnings</p>
          <p className="text-xs text-slate-400">Last 30 days</p>
        </div>
      </div>

      {/* Searshhh + filtearrrs + expuorts */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5">
          <Search size={16} className="text-slate-900" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            placeholder="Search logs..."
          />
        </div>

        <div className="rounded-xl border border-surface-border bg-green-950 px-3 py-2.5">
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value as ActionType | "all")}
            className="bg-transparent text-sm text-slate-300 focus:outline-none"
          >
            <option value="all" className="bg-green-950">All Actions</option>
            {actions.map((a) => (
              <option key={a} value={a} className="bg-surface-card">
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-surface-border bg-green-950 px-3 py-2.5">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as LogStatus | "all")}
            className="bg-transparent text-sm text-slate-300 focus:outline-none"
          >
            <option value="all" className="bg-surface-card">All Status</option>
            <option value="success" className="bg-surface-card">Success</option>
            <option value="warning" className="bg-surface-card">Warning</option>
            <option value="failed" className="bg-surface-card">Failed</option>
          </select>
        </div>

        <button className="flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5 sm:ml-auto">
          <Download size={15} />
          Export Logs
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-surface-border bg-green-950">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-medium">Action</th>
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Resource</th>
              <th className="px-5 py-3 font-medium">Detail</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">IP</th>
              <th className="px-5 py-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((log, i) => {
              const Icon = actionIcons[log.action];
              return (
                <tr key={i} className="border-b border-surface-border/50 last:border-0">
                  <td className="px-5 py-4">
                    <span
                      className={`flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${actionStyles[log.action]}`}
                    >
                      <Icon size={12} />
                      {log.action}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white">{log.userName}</p>
                    <p className="text-xs text-slate-500">{log.userId}</p>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-300">
                    {log.resource}
                  </td>
                  <td className="max-w-xs px-5 py-4 text-slate-400">
                    {log.detail}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-semibold ${statusStyles[log.status]}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {log.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-500">
                    {log.ip}
                  </td>
                  <td className="px-5 py-4 text-xs text-slate-500">{log.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}