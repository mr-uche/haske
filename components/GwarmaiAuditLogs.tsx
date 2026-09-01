"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Globe, AlertTriangle } from "lucide-react";

type AuditEntry = {
  id: string;
  type: "session" | "override";
  title: string;
  subtitle: string;
  timeAgo: string;
  flagged?: boolean;
};

const AUDIT_ENTRIES: AuditEntry[] = [
  {
    id: "1",
    type: "session",
    title: "AI Session — Malaria (P. falciparum)",
    subtitle: "Aisha Musa Ibrahim · 87% confidence",
    timeAgo: "144d ago",
  },
  {
    id: "2",
    type: "session",
    title: "AI Session — Hypertension",
    subtitle: "Ibrahim Adamu Gombe · 92% confidence",
    timeAgo: "144d ago",
  },
  {
    id: "3",
    type: "session",
    title: "AI Session — Viral Haemorrhagic Fever",
    subtitle: "Mallam Usman Bello · 78% confidence",
    timeAgo: "144d ago",
  },
  {
    id: "4",
    type: "override",
    title: "Override — Viral Haemorrhagic Fever",
    subtitle: "CHEW Zainab Garba overrode AI recommendation",
    timeAgo: "144d ago",
    flagged: true,
  },
];

const FILTERS = ["All", "Session", "Override"] as const;
type Filter = (typeof FILTERS)[number];

export default function GwarmaiAuditLog() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("All");

  const totalEvents = AUDIT_ENTRIES.length;
  const overrideEvents = AUDIT_ENTRIES.filter((e) => e.type === "override").length;

  const filteredEntries = AUDIT_ENTRIES.filter((entry) => {
    if (filter === "All") return true;
    if (filter === "Session") return entry.type === "session";
    return entry.type === "override";
  });

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[420px] px-5 pt-6 pb-10 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-9 h-9 rounded-[10px] bg-green-950 border border-[#223129] flex items-center justify-center text-white shrink-0"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-[19px] font-bold tracking-tight text-black">
            AI Audit Log
          </h1>
        </div>

        {/* Stat cards — fixed size */}
        <div className="flex gap-3">
          <div className="w-[172px] h-[104px] rounded-[10px] border border-[#223129] bg-green-950 flex flex-col items-center justify-center gap-1 shrink-0">
            <p className="text-[26px] font-bold text-white">{totalEvents}</p>
            <p className="text-[13px] text-white">Total Events</p>
          </div>
          <div className="w-[172px] h-[104px] rounded-[10px] border border-[#223129] bg-green-950 flex flex-col items-center justify-center gap-1 shrink-0">
            <p className="text-[26px] font-bold text-white">{overrideEvents}</p>
            <p className="text-[13px] text-white">Override Events</p>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full border text-[13.5px] font-medium transition-colors ${
                  active
                    ? "border-black bg-green-950 text-white"
                    : "border-[#223129] bg-[#101c17] text-[#8ba296] hover:bg-[#16241d]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-3">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="rounded-[10px] border border-[#223129] bg-green-950 p-4 flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-[8px] bg-green-950 border border-black flex items-center justify-center shrink-0">
                {entry.type === "override" ? (
                  <AlertTriangle size={15} className="text-white" />
                ) : (
                  <Globe size={15} className="text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[14.5px] font-bold text-white">
                    {entry.title}
                  </p>
                  {entry.flagged && (
                    <span className="w-2 h-2 rounded-full bg-[#d9a73b] shrink-0 mt-1.5" />
                  )}
                </div>
                <p className="text-[13px] text-white mt-0.5">
                  {entry.subtitle}
                </p>
                <p className="text-[12px] text-white mt-1.5">
                  {entry.timeAgo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}