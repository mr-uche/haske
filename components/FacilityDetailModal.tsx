"use client";

import { X, Wifi, WifiOff, MapPin } from "lucide-react";
import { Facility } from "./facilitiesData";

export default function FacilityDetailModal({
  facility,
  onClose,
}: {
  facility: Facility;
  onClose: () => void;
}) {
  const isOffline = facility.status === "offline";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-surface-border bg-surface-panel shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
          <h2 className="text-base font-bold text-white">Facility Detail</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">{facility.name}</h3>
              <p className="flex items-center gap-1 text-sm text-slate-400">
                <MapPin size={13} /> {facility.lga} LGA
              </p>
            </div>
            <span
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                isOffline ? "bg-red-500/15 text-red-400" : "bg-brand-500/15 text-brand-400"
              }`}
            >
              {isOffline ? <WifiOff size={13} /> : <Wifi size={13} />}
              {isOffline ? "Offline" : "Online"}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-xs text-slate-500">CHEWs Assigned</p>
              <p className="mt-1 text-2xl font-bold text-brand-400">{facility.chews}</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-xs text-slate-500">Daily Visits</p>
              <p className="mt-1 text-2xl font-bold text-white">{facility.dailyVisits}</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-xs text-slate-500">GPS Lat</p>
              <p className="mt-1 text-2xl font-bold text-white">{facility.gpsLat}</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white/[0.02] p-4">
              <p className="text-xs text-slate-500">GPS Lng</p>
              <p className="mt-1 text-2xl font-bold text-white">{facility.gpsLng}</p>
            </div>
          </div>

          <div className="mt-4 divide-y divide-surface-border rounded-xl border border-surface-border bg-white/[0.02]">
            <Row label="Facility ID" value={facility.id} />
            <Row label="LGA" value={facility.lga} />
            <Row label="Last Sync" value={facility.lastSync} />
            <Row label="Sync Timestamp" value={facility.syncTimestamp} />
            <Row label="Hub Status" value={facility.hubStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="font-semibold text-slate-200">{value}</span>
    </div>
  );
}