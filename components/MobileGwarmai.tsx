"use client";

import { useState } from "react";
import { Brain, Zap, Globe } from "lucide-react";
import { gwarmaiStats, languages, recentSessions } from "./mobileGwarmaiData";
import { useRouter } from "next/navigation";

export default function MobileGwarmai() {
  const router = useRouter();
  const [activeLanguage, setActiveLanguage] = useState(0);

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      <h1 className="text-xl font-bold text-black">Gwarmai AI</h1>

      <div className="mt-4 rounded-2xl border border-brand-500/20 bg-green-950 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-950 text-white">
            <Brain size={20} />
          </span>
          <div>
            <p className="text-base font-bold text-white">Gwarmai</p>
            <p className="text-xs text-white">AI Clinical Decision Support</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white/[0.03] p-3 text-center">
            <p className="text-lg font-bold text-white-400">{gwarmaiStats.todaysSessions}</p>
            <p className="mt-0.5 text-[11px] text-white-400">Today's Sessions</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3 text-center">
            <p className="text-lg font-bold text-white">{gwarmaiStats.avgConfidence}</p>
            <p className="mt-0.5 text-[11px] text-white">Avg Confidence</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3 text-center">
            <p className="text-lg font-bold text-white">{gwarmaiStats.accepted}</p>
            <p className="mt-0.5 text-[11px] text-white-400">Accepted</p>
          </div>
        </div>
      </div>

      <p className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white">
        <Globe size={13} />
        Active Language
      </p>
      <div className="mt-2 flex gap-2">
        {languages.map((lang, i) => (
          <button
            key={i}
            onClick={() => setActiveLanguage(i)}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
              activeLanguage === i
                ? "bg-green-950 text-white"
                : "bg-white text-black"
            }`}
          >
            <span className="text-[10px] font-bold text-black-500">{lang.code}</span>
            {lang.label}
          </button>
        ))}
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-700">
        <Zap size={17} />
        Start New Consultation
      </button>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-black">
          Recent Sessions
        </p>
        <button
          onClick={() => router.push("/mobile/alerts")}
          className="text-xs font-semibold text-black"
        >
          See all
        </button>
      </div>

      <div className="mt-2 space-y-3">
        {recentSessions.map((s, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-surface-border bg-green-950 p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-950 text-white">
                <Brain size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{s.diagnosis}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {s.patientName} · {s.time}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-white-400">{s.confidence}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}