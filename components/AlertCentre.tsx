"use client";

import { useState } from "react";
import { AlertTriangle, Filter, Bell, Clock, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

type Severity = "Critical" | "High" | "Moderate";
type Status = "Unacknowledged" | "Acknowledged";

interface AlertRow {
  severity: Severity;
  disease: string;
  location: string;
  cases: number;
  threshold: number;
  reported: string;
  status: Status;
}

const alerts: AlertRow[] = [
  { severity: "Critical", disease: "Cholera", location: "Hong", cases: 67, threshold: 50, reported: "140d ago", status: "Unacknowledged" },
  { severity: "Critical", disease: "Lassa Fever", location: "Michika", cases: 54, threshold: 30, reported: "140d ago", status: "Unacknowledged" },
  { severity: "High", disease: "Cholera", location: "Mubi North", cases: 41, threshold: 30, reported: "140d ago", status: "Acknowledged" },
  { severity: "High", disease: "Malaria", location: "Gombi", cases: 38, threshold: 30, reported: "140d ago", status: "Unacknowledged" },
  { severity: "High", disease: "Meningitis", location: "Demsa", cases: 33, threshold: 25, reported: "140d ago", status: "Acknowledged" },
];

const severityFilters = ["All", "Critical", "High", "Moderate"];

const severityStyles: Record<Severity, string> = {
  Critical: "border border-red-500/40 bg-red-500/10 text-red-400",
  High: "border border-orange-500/40 bg-orange-500/10 text-orange-400",
  Moderate: "border border-amber-500/40 bg-amber-500/10 text-amber-400",
};

export default function AlertCentre() {
  const [severityFilter, setSeverityFilter] = useState("All");
  const [hideAcknowledged, setHideAcknowledged] = useState(false);

  const criticalCount = alerts.filter((a) => a.severity === "Critical" && a.status === "Unacknowledged").length;
  const highCount = alerts.filter((a) => a.severity === "High" && a.status === "Unacknowledged").length;
  const moderateCount = alerts.filter((a) => a.severity === "Moderate" && a.status === "Unacknowledged").length;

  const filtered = alerts.filter((a) => {
    const matchesSeverity = severityFilter === "All" || a.severity === severityFilter;
    const matchesAck = !hideAcknowledged || a.status !== "Acknowledged";
    return matchesSeverity && matchesAck;
  });

  return (
    <div className="space-y-6">
      {/* cards dor the statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-red-500/20 bg-red-900 p-5">
          <div className="flex items-center justify-between">
            <AlertTriangle className="text-red-400" size={18} />
            <span className="text-3xl font-bold text-white">{criticalCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Critical Alerts</p>
          <p className="text-xs text-white">Unacknowledged</p>
        </div>

        <div className="rounded-2xl border border-orange-500/20 bg-orange-700 p-5">
          <div className="flex items-center justify-between">
            <AlertTriangle className="text-orange-400" size={18} />
            <span className="text-3xl font-bold text-white">{highCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">High Alerts</p>
          <p className="text-xs text-white">Unacknowledged</p>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <div className="flex items-center justify-between">
            <AlertTriangle className="text-amber-900" size={18} />
            <span className="text-3xl font-bold text-white">{moderateCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Moderate Alerts</p>
          <p className="text-xs text-white">Unacknowledged</p>
        </div>
      </div>

      {/* Filteration bar */}
      <div className="flex items-center justify-between rounded-2xl border border-surface-border bg-green-950 p-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-medium text-white">
            <Filter size={14} /> Filter:
          </span>
          {severityFilters.map((f) => (
            <button
              key={f}
              onClick={() => setSeverityFilter(f)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                severityFilter === f
                  ? "bg-green-600 text-white"
                  : "bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          onClick={() => setHideAcknowledged((v) => !v)}
          className="flex items-center gap-2 rounded-xl border border-surface-border px-3 py-2 text-xs font-medium text-white hover:text-slate-200"
        >
          <Bell size={14} />
          {hideAcknowledged ? "Show acknowledged" : "Hide acknowledged"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-surface-border bg-green-950">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-surface-border text-xs uppercase tracking-wide text-white">
              <th className="px-5 py-3 font-medium">Severity</th>
              <th className="px-5 py-3 font-medium">Disease</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Cases</th>
              <th className="px-5 py-3 font-medium">Threshold</th>
              <th className="px-5 py-3 font-medium">Reported</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr
                key={a.disease + a.location}
                className="border-b border-surface-border last:border-0 hover:bg-white/[0.02]"
              >
                <td className="px-5 py-4">
                  <span
                    className={`inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${severityStyles[a.severity]}`}
                  >
                    {a.severity}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold text-white">{a.disease}</td>
                <td className="px-5 py-4">
                  <span className="flex items-center gap-1 text-sm text-white">
                    <MapPin size={12} /> {a.location}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-semibold text-white">{a.cases}</td>
                <td className="px-5 py-4 text-sm text-white">{a.threshold}</td>
                <td className="px-5 py-4">
                  <span className="flex items-center gap-1 text-xs text-white">
                    <Clock size={11} /> {a.reported}
                  </span>
                </td>
                <td className="px-5 py-4">
                  {a.status === "Unacknowledged" ? (
                    <span className="flex items-center gap-1 text-xs font-medium text-red-400">
                      <AlertTriangle size={12} /> Unacknowledged
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                      <CheckCircle2 size={12} /> Acknowledged
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3 text-white">
                    {a.status === "Unacknowledged" && (
                      <button className="hover:text-green-700">
                        <CheckCircle2 size={16} />
                      </button>
                    )}
                    <button className="hover:text-slate-300">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}