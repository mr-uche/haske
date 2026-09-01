"use client";

import { WifiOff, Wifi, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { awaitingSync, recentlySynced, queueSummary } from "./offlineQueueData";

const typeStyles: Record<string, string> = {
  Encounter: "bg-brand-500/15 text-brand-400",
  Report: "bg-blue-500/15 text-blue-400",
  Patient: "bg-purple-500/15 text-purple-400",
};

export default function OfflineQueue() {
  const totalPending = queueSummary.pending + queueSummary.failed;

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <h1 className="text-xl font-bold text-black">Offline Queue</h1>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-900 px-4 py-3">
        <WifiOff size={18} className="text-red-400" />
        <div>
          <p className="text-sm font-semibold text-white">Offline Mode</p>
          <p className="text-xs text-white">
            Data saved locally · {totalPending} items awaiting sync
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500 p-4 text-center">
          <p className="text-2xl font-bold text-white">{queueSummary.pending}</p>
          <p className="mt-1 text-xs text-white">Pending</p>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500 p-4 text-center">
          <p className="text-2xl font-bold text-white">{queueSummary.failed}</p>
          <p className="mt-1 text-xs text-white">Failed</p>
        </div>
        <div className="rounded-xl border border-brand-500/20 bg-brand-500 p-4 text-center">
          <p className="text-2xl font-bold text-white">{queueSummary.synced}</p>
          <p className="mt-1 text-xs text-white">Synced</p>
        </div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-800">
        <Wifi size={16} />
        Sync Now ({totalPending} pending)
      </button>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-black">
        Awaiting Sync
      </p>
      <div className="mt-2 space-y-3">
        {awaitingSync.map((item, i) => (
          <QueueCard key={i} item={item} />
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-black">
        Recently Synced
      </p>
      <div className="mt-2 space-y-3">
        {recentlySynced.map((item, i) => (
          <QueueCard key={i} item={item} muted />
        ))}
      </div>
    </div>
  );
}

function QueueCard({
  item,
  muted = false,
}: {
  item: { type: string; title: string; detail: string; status: string };
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        muted ? "border-surface-border bg-green-950" : "border-surface-border bg-green-950"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${typeStyles[item.type]}`}
        >
          {item.type}
        </span>
        <StatusBadge status={item.status} />
      </div>
      <p className={`mt-2 text-sm font-semibold ${muted ? "text-white" : "text-white"}`}>
        {item.title}
      </p>
      <p className="mt-0.5 text-xs text-white">{item.detail}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "pending") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-400">
        <Clock size={11} />
        Pending
      </span>
    );
  }
  if (status === "failed") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-red-500/15 px-2.5 py-1 text-[11px] font-semibold text-red-400">
        <AlertTriangle size={11} />
        Failed
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 rounded-full bg-brand-500/15 px-2.5 py-1 text-[11px] font-semibold text-brand-400">
      <CheckCircle2 size={11} />
      Synced
    </span>
  );
}