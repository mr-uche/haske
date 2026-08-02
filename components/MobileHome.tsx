"use client";

import {
  Bell,
  Wifi,
  ClipboardList,
  Brain,
  Activity,
  Map,
  ChevronRight,
} from "lucide-react";
import { mobileUser, mobileStats, recentAlerts } from "./mobileHomeData";
import { useRouter } from "next/navigation";

export default function MobileHome() {
  const router = useRouter();

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-black">Good morning,</p>
          <h1 className="text-xl font-bold text-black">{mobileUser.name}</h1>
          <p className="mt-1 text-xs text-black">
            {mobileUser.facility} · {mobileUser.date}
          </p>
        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-green-950">
          <Bell size={18} />
          {mobileUser.notificationCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {mobileUser.notificationCount}
            </span>
          )}
        </button>
      </div>

      {/* Sync Status */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-brand-500/20 bg-green-950 px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-white">
          <Wifi size={15} />
          Haske Hub Online
        </span>

        <span className="text-xs text-white">
          Synced {mobileUser.syncedAgo}
        </span>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-brand-500/20 bg-brand-900 p-4">
          <p className="text-2xl font-bold text-white">
            {mobileStats.todaysEncounters}
          </p>
          <p className="mt-1 text-xs text-white">Today's Encounters</p>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-900 p-4">
          <p className="text-2xl font-bold text-white">
            {mobileStats.activeAlerts}
          </p>
          <p className="mt-1 text-xs text-white">Active Alerts</p>
        </div>

        <div className="rounded-xl border border-blue-500/20 bg-blue-900 p-4">
          <p className="text-2xl font-bold text-white">
            {mobileStats.gwarmaiSessions}
          </p>
          <p className="mt-1 text-xs text-white">Gwarmai Sessions</p>
        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-900 p-4">
          <p className="text-2xl font-bold text-white">
            {mobileStats.pendingReports}
          </p>
          <p className="mt-1 text-xs text-white">Pending Reports</p>
        </div>
      </div>

      {/* Quick Actions */}
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-green-950">
        Quick Actions
      </p>

      <div className="mt-2 grid grid-cols-2 gap-3">
        <QuickAction
          icon={ClipboardList}
          label="New Encounter"
          color="text-green-950"
          bg="bg-brand-500/10 border-brand-500/20"
          onClick={() => router.push("/mobile/encounters")}
        />

        <QuickAction
          icon={Brain}
          label="Start Gwarmai"
          color="text-blue-400"
          bg="bg-blue-500/10 border-blue-500/20"
          onClick={() => router.push("/mobile/gwarmai")}
        />

        <QuickAction
          icon={Activity}
          label="Report Disease"
          color="text-orange-400"
          bg="bg-orange-500/10 border-orange-500/20"
          onClick={() => router.push("/mobile/report")}
        />

        <QuickAction
          icon={Map}
          label="LGA Heat Map"
          color="text-purple-400"
          bg="bg-purple-500/10 border-purple-500/20"
          onClick={() => router.push("/mobile/heatmap")}
        />
      </div>

      {/* Recent Alerts */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-950">
          Recent Alerts
        </p>

        <button
          onClick={() => router.push("/mobile/alerts")}
          className="text-xs font-semibold text-green-950"
        >
          See all
        </button>
      </div>

      <div className="mt-2 space-y-1">
        {recentAlerts.map((alert, index) => (
          <button
            key={index}
            className="flex w-full items-center justify-between rounded-lg px-1 py-3 text-left hover:bg-green-950"
          >
            <div className="flex items-center gap-2.5 ">
              <span
                className={`h-2 w-2 rounded-full ${
                  alert.severity === "critical"
                    ? "bg-red-400"
                    : "bg-orange-500"
                }`}
              />

              <div>
                <p className="text-sm font-semibold text-black">
                  {alert.disease}
                </p>

                <p className="text-xs text-slate-500">
                  {alert.location} · {alert.time}
                </p>
              </div>
            </div>

            <ChevronRight size={16} className="text-slate-600" />
          </button>
        ))}
      </div>
    </div>
  );
}

interface QuickActionProps {
  icon: typeof ClipboardList;
  label: string;
  color: string;
  bg: string;
  onClick?: () => void;
}

function QuickAction({
  icon: Icon,
  label,
  color,
  bg,
  onClick,
}: QuickActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-xl border p-4 text-left transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-95 ${bg}`}
    >
      <Icon size={20} className={color} />

      <p className="mt-2 text-sm font-semibold text-white">
        {label}
      </p>
    </button>
  );
}