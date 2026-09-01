"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Wifi, WifiOff, MapPin } from "lucide-react";
import { Facility } from "./facilitiesData";

export default function FacilityDetailModal({
  facility,
  onClose,
}: {
  facility: Facility;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  const isOffline = facility.status === "offline";

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] bg-black/60 p-6 md:p-8"
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl rounded-2xl border border-green-900 bg-green-950 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <h2 className="text-lg font-bold text-white">
              Facility Detail
            </h2>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {facility.name}
                </h3>

                <p className="mt-1 flex items-center gap-2 text-sm text-white">
                  <MapPin size={14} />
                  {facility.lga} LGA
                </p>
              </div>

              <span
                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  isOffline
                    ? "bg-red-500/15 text-red-400"
                    : "bg-green-500/15 text-green-400"
                }`}
              >
                {isOffline ? (
                  <WifiOff size={13} />
                ) : (
                  <Wifi size={13} />
                )}

                {isOffline ? "Offline" : "Online"}
              </span>
            </div>

            {/* Statistics */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Stat
                title="CHEWs Assigned"
                value={facility.chews}
                green
              />

              <Stat
                title="Daily Visits"
                value={facility.dailyVisits}
              />

              <Stat
                title="GPS Latitude"
                value={facility.gpsLat}
              />

              <Stat
                title="GPS Longitude"
                value={facility.gpsLng}
              />
            </div>

            {/* Details */}
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
              <Row label="Facility ID" value={facility.id} />
              <Row label="LGA" value={facility.lga} />
              <Row label="Last Sync" value={facility.lastSync} />
              <Row
                label="Sync Timestamp"
                value={facility.syncTimestamp}
              />
              <Row label="Hub Status" value={facility.hubStatus} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function Stat({
  title,
  value,
  green = false,
}: {
  title: string;
  value: string | number;
  green?: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <p
        className={`text-[11px] ${
          green ? "text-green-400" : "text-slate-300"
        }`}
      >
        {title}
      </p>

      <p
        className={`mt-1 text-2xl font-bold ${
          green ? "text-green-400" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 last:border-b-0">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
}