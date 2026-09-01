"use client";

import { useState } from "react";
import { Search, AlertTriangle, FlaskConical, CheckCircle2, ChevronRight, SlidersHorizontal } from "lucide-react";

type Status = "Confirmed" | "Suspected" | "Ruled Out";

interface CaseRow {
  disease: string;
  color: string; // dot color class
  location: string;
  symptoms: string[];
  reportedBy: string;
  status: Status;
  time: string;
}

const cases: CaseRow[] = [
  {
    disease: "Cholera",
    color: "bg-red-500",
    location: "Hong",
    symptoms: ["profuse watery diarrhoea", "vomiting", "+2"],
    reportedBy: "CHEW Zainab Garba",
    status: "Confirmed",
    time: "140d ago",
  },
  {
    disease: "Lassa Fever",
    color: "bg-red-500",
    location: "Michika",
    symptoms: ["fever", "headache", "+3"],
    reportedBy: "CHEW Musa Adamu",
    status: "Confirmed",
    time: "140d ago",
  },
  {
    disease: "Malaria",
    color: "bg-orange-500",
    location: "Gombi",
    symptoms: ["high fever", "chills", "+2"],
    reportedBy: "Nurse Halima Yusuf",
    status: "Suspected",
    time: "140d ago",
  },
  {
    disease: "Meningitis",
    color: "bg-purple-500",
    location: "Demsa",
    symptoms: ["severe headache", "stiff neck", "+3"],
    reportedBy: "CHEW Musa Adamu",
    status: "Confirmed",
    time: "140d ago",
  },
  {
    disease: "Typhoid",
    color: "bg-orange-500",
    location: "Mubi South",
    symptoms: ["sustained fever", "abdominal pain", "+2"],
    reportedBy: "CHEW Zainab Garba",
    status: "Suspected",
    time: "140d ago",
  },
];

const diseaseFilters = ["All Diseases", "Cholera", "Lassa Fever", "Malaria", "Meningitis", "Typhoid"];
const statusFilters = ["All Status", "Confirmed", "Suspected", "Ruled Out"];

const statusStyles: Record<Status, string> = {
  Confirmed: "bg-red-500/15 text-red-400",
  Suspected: "bg-amber-500/15 text-amber-400",
  "Ruled Out": "bg-emerald-500/15 text-emerald-400",
};

const statusIcons: Record<Status, typeof AlertTriangle> = {
  Confirmed: AlertTriangle,
  Suspected: FlaskConical,
  "Ruled Out": CheckCircle2,
};

export default function DiseaseCases() {
  const [diseaseFilter, setDiseaseFilter] = useState("All Diseases");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [query, setQuery] = useState("");

  const confirmedCount = cases.filter((c) => c.status === "Confirmed").length;
  const suspectedCount = cases.filter((c) => c.status === "Suspected").length;
  const ruledOutCount = cases.filter((c) => c.status === "Ruled Out").length;

  const filtered = cases.filter((c) => {
    const matchesDisease = diseaseFilter === "All Diseases" || c.disease === diseaseFilter;
    const matchesStatus = statusFilter === "All Status" || c.status === statusFilter;
    const matchesQuery =
      query.trim() === "" ||
      c.disease.toLowerCase().includes(query.toLowerCase()) ||
      c.location.toLowerCase().includes(query.toLowerCase()) ||
      c.reportedBy.toLowerCase().includes(query.toLowerCase());
    return matchesDisease && matchesStatus && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-red-500/20 bg-red-900 p-5">
          <div className="flex items-center justify-between">
            <AlertTriangle className="text-red-400" size={18} />
            <span className="text-3xl font-bold text-white">{confirmedCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Confirmed</p>
          <p className="text-xs text-white">Total reported cases</p>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-400 p-5">
          <div className="flex items-center justify-between">
            <FlaskConical className="text-amber-900" size={18} />
            <span className="text-3xl font-bold text-white">{suspectedCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Suspected</p>
          <p className="text-xs text-white">Total reported cases</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-600 p-5">
          <div className="flex items-center justify-between">
            <CheckCircle2 className="text-emerald-400" size={18} />
            <span className="text-3xl font-bold text-white">{ruledOutCount}</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Ruled Out</p>
          <p className="text-xs text-white">Total reported cases</p>
        </div>
      </div>

      {/* Search + filters */}
      <div className="rounded-2xl border border-surface-border bg-green-950 p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-white/5 px-3 py-2">
            <Search size={16} className="text-white" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cases, LGAs, CHEWs..."
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-white focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-surface-border px-3 py-2 text-xs font-medium text-white hover:text-slate-200">
            <SlidersHorizontal size={14} />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {diseaseFilters.map((f) => (
            <button
              key={f}
              onClick={() => setDiseaseFilter(f)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                diseaseFilter === f
                  ? "bg-green-700 text-white"
                  : "bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="mx-1 w-px bg-surface-border" />
          {statusFilters.map((f) => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                statusFilter === f
                  ? "bg-green-700 text-white"
                  : "bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-surface-border bg-green-950">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-surface-border text-xs uppercase tracking-wide text-white">
              <th className="px-5 py-3 font-medium">Disease</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Symptoms</th>
              <th className="px-5 py-3 font-medium">Reported By</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Time</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => {
              const StatusIcon = statusIcons[c.status];
              return (
                <tr
                  key={c.disease + c.location}
                  className="border-b border-surface-border last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${c.color}`} />
                      <span className="text-sm font-semibold text-white">{c.disease}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-white">{c.location}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {c.symptoms.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-white/5 px-2 py-1 text-xs text-white"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-white">{c.reportedBy}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[c.status]}`}
                    >
                      <StatusIcon size={12} />
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-xs text-white whitespace-nowrap">{c.time}</td>
                  <td className="px-5 py-4 text-white">
                    <ChevronRight size={16} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}