"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, FileText, MapPin, Upload } from "lucide-react";

const reporter = "CHEW Musa Adamu"; // placeholder — replace with actual logged-in user

export default function ReportReview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const disease = searchParams.get("disease") || "—";
  const caseType = searchParams.get("caseType") || "suspected";
  const cases = searchParams.get("cases") || "—";
  const lga = searchParams.get("lga") || "—";
  const gps = searchParams.get("gps") || "—";

  const timestamp = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(",", ",");

  function handleSubmit() {
    // TODO: send report to backend / offline queue
    setSubmitted(true);
    setTimeout(() => {
      router.push("/mobile");
    }, 1200);
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-slate-100 hover:bg-green-800"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">Review Report</h1>
      </div>

      <p className="mt-4 text-sm text-black">
        Review your report before submitting.
      </p>

      <div className="mt-4 divide-y divide-surface-border rounded-xl border border-surface-border bg-green-950">
        <ReviewRow icon={FileText} label="Disease" value={disease} />
        <ReviewRow
          icon={FileText}
          label="Case Type"
          value={caseType.charAt(0).toUpperCase() + caseType.slice(1)}
        />
        <ReviewRow icon={FileText} label="Cases" value={cases} />
        <ReviewRow icon={FileText} label="LGA" value={lga} />
        <ReviewRow icon={MapPin} label="GPS" value={gps} />
        <ReviewRow icon={FileText} label="Reported by" value={reporter}  />
        <ReviewRow icon={FileText} label="Timestamp" value={timestamp} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-black">
          Supporting Photos <span className="normal-case text-black">(optional, max 3)</span>
        </p>
        <span className="text-xs text-slate-100">0/3</span>
      </div>
      <button className="mt-2 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-surface-border text-green-950  hover:bg-green-950">
        <Upload size={18} />
        <span className="text-xs">Add</span>
      </button>

      <div className="mt-5 rounded-xl border border-surface-border bg-green-950 p-4">
        <p className="text-xs text-white">
          By submitting, you confirm this report is accurate. False reports may result in misallocation of resources.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={submitted}
        className="mt-5 w-full rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-950 disabled:opacity-70"
      >
        {submitted ? "Submitted ✓" : "Submit Report"}
      </button>
    </div>
  );
}

function ReviewRow({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: typeof FileText;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5">
      <span className={`flex items-center gap-2 text-sm ${highlight ? "text-brand-400" : "text-slate-400"}`}>
        <Icon size={14} />
        {label}
      </span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}