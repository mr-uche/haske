"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ChevronRight } from "lucide-react";
import { diseaseOptions, lgaOptions } from "./reportDiseaseData";

type CaseType = "suspected" | "confirmed";

export default function ReportDisease() {
  const router = useRouter();
  const [disease, setDisease] = useState("");
  const [caseType, setCaseType] = useState<CaseType>("suspected");
  const [cases, setCases] = useState("");
  const [lga, setLga] = useState("");
  const [facility, setFacility] = useState("");
  const [gpsLocation, setGpsLocation] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  function captureGPS() {
    if (!navigator.geolocation) {
      setGpsLocation("Unavailable");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLocation(
          `${pos.coords.latitude.toFixed(4)}°N, ${pos.coords.longitude.toFixed(4)}°E`
        );
      },
      () => setGpsLocation("Location unavailable")
    );
  }

  function handleContinue() {
    // TODO: validate required fields, then navigate to review screen
    const params = new URLSearchParams({
      disease,
      caseType,
      cases,
      lga,
      facility,
      gps: gpsLocation ?? "",
      notes,
    });
    router.push(`/mobile/report/review?${params.toString()}`);   
  }

  const isValid = disease && cases && lga && gpsLocation;

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8 bg-white">
      <h1 className="text-xl font-bold text-black">Report Disease</h1>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-green-950">
          Disease <span className="text-red-400">*</span>
        </label>
        <select
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          className="mt-2 w-full rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm text-slate-200 focus:outline-none"
        >
          <option value="" className="bg-surface-card text-white">
            Select disease
          </option>
          {diseaseOptions.map((d) => (
            <option key={d} value={d} className="bg-surface-card">
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-green-950">
          Case Type
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button
            onClick={() => setCaseType("suspected")}
            className={`rounded-xl border py-3 text-sm font-semibold transition ${
              caseType === "suspected"
                ? "border-green-500 bg-green-950 text-white"
                : "border-slate-700 bg-green-500 text-white"
            }`}
          >
            Suspected
          </button>
          <button
            onClick={() => setCaseType("confirmed")}
            className={`rounded-xl border py-3 text-sm font-semibold transition ${
              caseType === "confirmed"
                ? "border-green-700 bg-green-950 text-white"
                : "border-green-700 bg-green-500 text-white"
            }`}
          >
            Confirmed
          </button>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-black">
          Number of Cases <span className="text-red-400">*</span>
        </label>
        <input
          type="number"
          min={1}
          value={cases}
          onChange={(e) => setCases(e.target.value)}
          placeholder="e.g. 3"
          className="mt-2 w-full rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm text-slate-200 placeholder:text-white focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-black">
          LGA <span className="text-red-400">*</span>
        </label>
        <select
          value={lga}
          onChange={(e) => setLga(e.target.value)}
          className="mt-2 w-full rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm text-slate-200 focus:outline-none"
        >
          <option value="" className="bg-surface-card text-slate-500">
            Select LGA
          </option>
          {lgaOptions.map((l) => (
            <option key={l} value={l} className="bg-green-950">
              {l}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-black">
          Facility Name <span className="text-black">(optional)</span>
        </label>
        <input
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
          placeholder="e.g. Ngurore PHC"
          className="mt-2 w-full rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm text-slate-200 placeholder:text-white focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-black">
          GPS Location <span className="text-red-400">*</span>
        </label>
        <button
          onClick={captureGPS}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-surface-border bg-green-950 py-3 text-sm font-semibold text-white hover:bg-green-500"
        >
          <MapPin size={16} />
          {gpsLocation ?? "Capture GPS Location"}
        </button>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wide text-black">
          Additional Notes <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Describe the situation, exposure source, contact tracing details..."
          className="mt-2 w-full resize-none rounded-xl border border-surface-border bg-green-950 px-4 py-3 text-sm text-slate-200 placeholder:text-white focus:outline-none"
        />
      </div>

      <button
        onClick={handleContinue}
        disabled={!isValid}
        className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue to Review
        <ChevronRight size={16} />
      </button>
    </div>
  );
}