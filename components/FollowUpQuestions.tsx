"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Thermometer, Heart, Activity, Wind } from "lucide-react";

type YesNoUnknown = "yes" | "no" | "unknown" | null;

const yesNoQuestions = [
  { key: "medication", label: "Has the patient taken any medication?" },
  { key: "allergies", label: "Does the patient have any known allergies?" },
  { key: "pregnant", label: "Is the patient pregnant or breastfeeding?" },
  { key: "travel", label: "Any recent travel outside the LGA?" },
  { key: "contacts", label: "Any close contacts with similar symptoms?" },
] as const;

export default function FollowUpQuestions() {
  const router = useRouter();

  const [days, setDays] = useState("");
  const [answers, setAnswers] = useState<Record<string, YesNoUnknown>>({
    medication: null,
    allergies: null,
    pregnant: null,
    travel: null,
    contacts: null,
  });

  const [temp, setTemp] = useState("");
  const [pulse, setPulse] = useState("");
  const [sysBP, setSysBP] = useState("");
  const [diaBP, setDiaBP] = useState("");

  function setAnswer(key: string, value: YesNoUnknown) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  const answeredCount =
    (days.trim() ? 1 : 0) + Object.values(answers).filter((v) => v !== null).length;
  const totalQuestions = 1 + yesNoQuestions.length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  function handleRunDiagnosis() {
    // TODO: send symptoms + follow-up answers + vitals to Gwarmai AI backend
    router.push("/mobile/gwarmai/results");
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">Follow-up Questions</h1>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="font-semibold text-brand-400">Questions answered</span>
        <span className="text-slate-400">
          {answeredCount}/{totalQuestions}
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-brand-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-5 rounded-xl border border-surface-border bg-white/[0.02] p-4">
        <p className="text-sm font-semibold text-white">
          How many days has the patient had these symptoms?
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-surface-border bg-white/[0.03] px-4 py-3">
          <input
            type="number"
            min={0}
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="e.g. 3"
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
          />
          <span className="text-sm text-slate-500">days</span>
        </div>
      </div>

      {yesNoQuestions.map((q) => (
        <div key={q.key} className="mt-4 rounded-xl border border-surface-border bg-white/[0.02] p-4">
          <p className="text-sm font-semibold text-white">{q.label}</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(["yes", "no", "unknown"] as YesNoUnknown[]).map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswer(q.key, opt)}
                className={`rounded-xl border py-2.5 text-sm font-semibold capitalize transition ${
                  answers[q.key] === opt
                    ? "border-brand-500/50 bg-brand-500/15 text-brand-400"
                    : "border-surface-border bg-white/[0.03] text-slate-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Quick Vitals
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <VitalInput icon={Thermometer} label="Temp" value={temp} onChange={setTemp} unit="°C" placeholder="36.5" />
        <VitalInput icon={Heart} label="Pulse" value={pulse} onChange={setPulse} unit="bpm" placeholder="72" />
        <VitalInput icon={Heart} label="Sys BP" value={sysBP} onChange={setSysBP} unit="mmHg" placeholder="120" />
        <VitalInput icon={Activity} label="Dia BP" value={diaBP} onChange={setDiaBP} unit="mmHg" placeholder="80" />
      </div>

      <button
        onClick={handleRunDiagnosis}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-surface hover:bg-brand-400"
      >
        Run AI Diagnosis
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

function VitalInput({
  icon: Icon,
  label,
  value,
  onChange,
  unit,
  placeholder,
}: {
  icon: typeof Thermometer;
  label: string;
  value: string;
  onChange: (v: string) => void;
  unit: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs text-slate-400">
        <Icon size={13} />
        {label}
      </label>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-surface-border bg-white/[0.03] px-3 py-2.5">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
        <span className="text-xs text-slate-500">{unit}</span>
      </div>
    </div>
  );
}