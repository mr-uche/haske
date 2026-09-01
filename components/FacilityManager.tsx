"use client";

import { useState } from "react";
import { Building2, CheckCircle2, Activity, Users, Package, FileText, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StaffPerformanceTab from "./StaffPerformanceTab";
import DrugInventoryTab from "./DrugInventoryTab";
import PHCReportsTab from "./PHCReportsTab";

type Tab = "overview" | "staff" | "drugs" | "reports";

const tabs: { key: Tab; label: string; icon: typeof Activity }[] = [
  { key: "overview", label: "Overview", icon: Activity },
  { key: "staff", label: "Staff Performance", icon: Users },
  { key: "drugs", label: "Drug Inventory", icon: Package },
  { key: "reports", label: "PHC Reports", icon: FileText },
];

const visitTrend = [
  { day: "Mon", visits: 95 },
  { day: "Tue", visits: 120 },
  { day: "Wed", visits: 135 },
  { day: "Thu", visits: 110 },
  { day: "Fri", visits: 90 },
  { day: "Sat", visits: 115 },
  { day: "Sun", visits: 70 },
];

export default function FacilityManager() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <>
      {/* Facility header */}
      <div className="flex items-center justify-between rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">
            <Building2 size={20} />
          </span>
          <div>
            <h2 className="text-base font-bold text-white">Yola South PHC</h2>
            <p className="text-xs text-white">Yola South LGA · Adamawa State</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-white">Last sync</p>
            <p className="text-sm font-semibold text-white">141d ago</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-semibold text-white">
            <CheckCircle2 size={13} /> Hub Online
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-surface-border pb-3">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === key
                ? "bg-green-900 text-white-900"
                : "text-slate-900 hover:text-slate-500"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {tab === "overview" && <OverviewTab />}
      {tab === "staff" && <StaffPerformanceTab />}
      {tab === "drugs" && <DrugInventoryTab />}
      {tab === "reports" && <PHCReportsTab />}
    </>
  );
}

function OverviewTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Activity}
          value="124"
          label="Daily Visits"
          badge="+12%"
          badgeColor="text-brand-400"
          accent="brand"
        />
        <StatCard
          icon={Users}
          value="8"
          label="Active CHEWs"
          badge="stable"
          badgeColor="text-slate-400"
          accent="brand"
        />
        <StatCard
          icon={Package}
          value="4"
          label="Drug Alerts"
          badge="action needed"
          badgeColor="text-red-400"
          accent="red"
        />
        <StatCard
          icon={FileText}
          value="2"
          label="Reports Pending"
          badge="due today"
          badgeColor="text-amber-400"
          accent="amber"
        />
      </div>

      <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Weekly Visit Trend</h3>
          <span className="flex items-center gap-1 text-xs font-semibold text-brand-400">
            <TrendingUp size={12} /> +12% vs last week
          </span>
        </div>

        <div className="mt-4 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={visitTrend} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="visitTrendFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                stroke="#ffffff"
                tick={{ fontSize: 11, fill: "#ffffff" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="#ffffff"
                tick={{ fontSize: 11, fill: "#ffffff" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "#101828",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                labelStyle={{ color: "#e2e8f0" }}
              />
              <Area
                type="monotone"
                dataKey="visits"
                stroke="#2dd4bf"
                strokeWidth={2}
                fill="url(#visitTrendFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  badge,
  badgeColor,
  accent,
}: {
  icon: typeof Activity;
  value: string;
  label: string;
  badge: string;
  badgeColor: string;
  accent: "brand" | "red" | "amber";
}) {
  const accentStyles = {
    brand: "border-brand-500/50 bg-brand-500 text-brand-400",
    red: "border-red-500/50 bg-red-500 text-red-400",
    amber: "border-amber-500/50 bg-amber-500 text-amber-400",
  }[accent];

  return (
    <div className={`rounded-2xl border p-5 ${accentStyles}`}>
      <div className="flex items-center justify-between">
        <Icon size={20} />
        <span className={`text-xs font-semibold ${badgeColor}`}>{badge}</span>
      </div>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="text-xs text-white">{label}</p>
    </div>
  );
}

function PlaceholderTab({ label }: { label: string }) {
  return (
    <div className="flex h-64 items-center justify-center rounded-2xl border border-surface-border bg-surface-card text-slate-500">
      {label} content coming soon
    </div>
  );
}