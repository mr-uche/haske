"use client";

import { useState } from "react";
import {
  LayoutGrid,
  AlertTriangle,
  Bell,
  Shield,
  Globe,
  RefreshCw,
  Database,
  Cog,
  Cpu,
  HardDrive,
} from "lucide-react";
import { services, hubNetwork } from "./settingsData";
import AlertThresholdsTab from "./AlertThresholdsTab";
import NotificationsTab from "./NotificationsTab";
import RolesPermissionsTab from "./RolesPermissionsTab";
import ModelDeploymentTab from "./ModelDeploymentTab";

type Tab = "health" | "thresholds" | "notifications" | "roles" | "deployment";

const tabs: { key: Tab; label: string; icon: typeof LayoutGrid }[] = [
  { key: "health", label: "System Health", icon: LayoutGrid },
  { key: "thresholds", label: "Alert Thresholds", icon: AlertTriangle },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "roles", label: "Roles & Permissions", icon: Shield },
  { key: "deployment", label: "Model Deployment", icon: Globe },
];

const serviceIcons = {
  layout: LayoutGrid,
  database: Database,
  cog: Cog,
  cpu: Cpu,
  bell: Bell,
  hardDrive: HardDrive,
};

export default function SystemSettings() {
  const [tab, setTab] = useState<Tab>("health");

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-surface-border pb-3">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === key
                ? "bg-green-900 text-white"
                : "text-slate-900 hover:text-slate-400"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {tab === "health" && <SystemHealthTab />}
      {tab === "thresholds" && <AlertThresholdsTab />}
      {tab === "notifications" && <NotificationsTab />}
      {tab === "roles" && <RolesPermissionsTab />}
      {tab === "deployment" && <ModelDeploymentTab />}
    </>
  );
}

function SystemHealthTab() {
  return (
    <>
      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Service Status</h3>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-slate-200">
            <RefreshCw size={13} />
            Refresh
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <div
                key={s.name}
                className="rounded-xl border border-surface-border bg-white/[0.02] p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon size={15} className="text-slate-400" />
                    {s.name}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      s.online ? "bg-brand-400" : "bg-red-500"
                    }`}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="text-white">Uptime</p>
                    <p className="font-semibold text-brand-400">{s.uptime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">Latency</p>
                    <p className="font-semibold text-slate-300">{s.latency}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <h3 className="text-sm font-semibold text-white">Haske Hub Network</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-surface-border bg-white/[0.02] p-5 text-center">
            <p className="text-3xl font-bold text-white">{hubNetwork.total}</p>
            <p className="mt-1 text-sm text-white">Total Hubs</p>
          </div>
          <div className="rounded-xl border border-surface-border bg-white/[0.02] p-5 text-center">
            <p className="text-3xl font-bold text-white">{hubNetwork.online}</p>
            <p className="mt-1 text-sm text-white">Online</p>
          </div>
          <div className="rounded-xl border border-surface-border bg-white/[0.02] p-5 text-center">
            <p className="text-3xl font-bold text-red-400">{hubNetwork.offline}</p>
            <p className="mt-1 text-sm text-red-400">Offline</p>
          </div>
        </div>
      </div>
    </>
  );
}