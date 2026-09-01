"use client";

import { useState } from "react";
import { Building2, Wifi, WifiOff, Search, Filter, Users, Activity, Clock, AlertTriangle } from "lucide-react";
import { facilities, Facility } from "./facilitiesData";
import FacilityDetailModal from "./FacilityDetailModal";

type FilterTab = "all" | "online" | "offline";

export default function FacilitiesOverview() {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Facility | null>(null);

  const total = facilities.length;
  const online = facilities.filter((f) => f.status === "online").length;
  const offline = facilities.filter((f) => f.status === "offline").length;

  const filtered = facilities
    .filter((f) => (filter === "all" ? true : f.status === filter))
    .filter((f) =>
      `${f.name} ${f.lga}`.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <div className="flex items-center justify-between">
            <Building2 size={22} className="text-brand-400" />
            <span className="text-3xl font-bold text-white">{total}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Total Facilities</p>
          <p className="text-xs text-white">Haske Hubs</p>
        </div>

        <div className="rounded-2xl border border-brand-500/20 bg-amber-600 p-5">
          <div className="flex items-center justify-between">
            <Wifi size={22} className="text-brand-400" />
            <span className="text-3xl font-bold text-white">{online}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Online</p>
          <p className="text-xs text-white">Haske Hubs</p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-900 p-5">
          <div className="flex items-center justify-between">
            <WifiOff size={22} className="text-red-400" />
            <span className="text-3xl font-bold text-white">{offline}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Offline</p>
          <p className="text-xs text-white">Haske Hubs</p>
        </div>
      </div>

      {/* Search + filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5">
          <Search size={16} className="text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-white focus:outline-none"
            placeholder="Search facilities or LGAs..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-black" />
          {(["all", "online", "offline"] as FilterTab[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition bg-green-950 ${
                filter === f
                  ? "bg-brand-500/15 text-white"
                  : "bg-white/5 text-black hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Facility cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((f) => {
          const isOffline = f.status === "offline";
          return (
            <div
              key={f.id}
              onClick={() => setSelected(f)}
              className={`cursor-pointer rounded-2xl border p-5 transition hover:bg-green-700 ${
                isOffline
                  ? "border-red-500/20 bg-green-950"
                  : "border-surface-border bg-green-950"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isOffline ? "bg-red-500/15 text-red-400" : "bg-brand-500/15 text-brand-400"
                    }`}
                  >
                    <Building2 size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.name}</p>
                    <p className="text-xs text-white">{f.lga}</p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    isOffline
                      ? "bg-red-500/15 text-red-400"
                      : "bg-brand-500/15 text-brand-400"
                  }`}
                >
                  {isOffline ? <WifiOff size={11} /> : <Wifi size={11} />}
                  {isOffline ? "Offline" : "Online"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="flex items-center gap-1.5 text-xs text-white">
                    <Users size={12} /> CHEWs
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">{f.chews}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="flex items-center gap-1.5 text-xs text-white">
                    <Activity size={12} /> Daily visits
                  </p>
                  <p className={`mt-1 text-lg font-bold ${isOffline ? "text-white" : "text-white"}`}>
                    {f.dailyVisits}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-white">
                  <Clock size={11} /> Last sync: {f.lastSync}
                </span>
                {f.hubOffline && (
                  <span className="flex items-center gap-1 font-semibold text-red-400">
                    <AlertTriangle size={11} /> Hub offline
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <FacilityDetailModal facility={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}