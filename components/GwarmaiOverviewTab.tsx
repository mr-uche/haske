"use client";

import { Brain, CheckCircle2, Activity, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { sessionsAccuracyTrend, languageUsage } from "./gwarmaiData";

export default function GwarmaiOverviewTab() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Brain} value="4,821" label="Total Sessions" />
        <StatCard icon={CheckCircle2} value="87.3%" label="AI Acceptance Rate" />
        <StatCard icon={Activity} value="84.2%" label="Avg Confidence" iconColor="text-blue-400" />
        <StatCard icon={TrendingUp} value="94.1%" label="Positive Feedback" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Sessions & Accuracy Trend</h3>
              <p className="text-xs text-slate-500">Monthly Gwarmai usage across all CHEWs</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-brand-400">
              <TrendingUp size={12} /> +91.2% accuracy this month
            </span>
          </div>

          <div className="mt-3 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sessionsAccuracyTrend} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="sessionsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  tick={{ fontSize: 11, fill: "#64748b" }}
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
                  dataKey="sessions"
                  stroke="#2dd4bf"
                  strokeWidth={2}
                  fill="url(#sessionsFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
          <h3 className="text-sm font-semibold text-white">Language Usage</h3>

          <div className="mt-3 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languageUsage}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="55%"
                  outerRadius="85%"
                  paddingAngle={2}
                >
                  {languageUsage.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#101828",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 space-y-2">
            {languageUsage.map((l) => (
              <div key={l.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                  {l.name}
                </span>
                <span className="font-semibold text-white">{l.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  iconColor = "text-brand-400",
}: {
  icon: typeof Activity;
  value: string;
  label: string;
  iconColor?: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-500/20 bg-green-950 p-5">
      <Icon size={20} className={iconColor} />
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}