"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, Fingerprint, ScanFace, Loader2 } from "lucide-react";

type ScanState = "idle" | "scanning" | "success" | "failed";

const modeConfig = {
  fingerprint: {
    title: "Fingerprint Scan",
    icon: Fingerprint,
    idleHeading: "Place finger on scanner",
    idleSubtext: "Ask the patient to press their index finger firmly on the scanner.",
    buttonLabel: "Start Fingerprint Scan",
    tips: [
      "Clean the scanner before use",
      "Patient finger should be dry",
      "Use the index or middle finger",
    ],
  },
  face: {
    title: "Face Scan",
    icon: ScanFace,
    idleHeading: "Position face in frame",
    idleSubtext: "Ensure the patient's face is well-lit and centred.",
    buttonLabel: "Start Face Scan",
    tips: [
      "Ensure good lighting on the patient's face",
      "Remove glasses or face coverings if possible",
      "Patient should look directly at the camera",
    ],
  },
};

export default function BiometricScan() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") === "face" ? "face" : "fingerprint";
  const config = modeConfig[mode];
  const Icon = config.icon;

  const [state, setState] = useState<ScanState>("idle");

  function startScan() {
    setState("scanning");
    // Simulated scan — replace with real scanner/camera SDK integration
    setTimeout(() => {
      setState("success");
      setTimeout(() => {
        router.push("/mobile/patients/p1"); // TODO: route to actual matched patient
      }, 800);
    }, 2000);
  }

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-950 text-white hover:bg-green-950"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-black">{config.title}</h1>
      </div>

      <div className="mt-10 flex flex-col items-center text-center">
        <div
          className={`flex h-44 w-44 items-center justify-center rounded-full border-2 transition ${
            state === "scanning"
              ? "border-green-950 shadow-[0_0_30px_rgba(45,212,191,0.3)]"
              : state === "success"
              ? "border-green-950 bg-green-950"
              : state === "failed"
              ? "border-red-500/40"
              : "border-green-950"
          }`}
        >
          {state === "scanning" ? (
            <Loader2 size={64} className="animate-spin text-green-950" />
          ) : (
            <Icon
              size={64}
              className={state === "failed" ? "text-red-400" : "text-green-950"}
            />
          )}
        </div>

        <h2 className="mt-6 text-lg font-bold text-black">
          {state === "idle" && config.idleHeading}
          {state === "scanning" && "Scanning..."}
          {state === "success" && "Match found!"}
          {state === "failed" && "No match found"}
        </h2>
        <p className="mt-2 text-sm text-black">
          {state === "idle" && config.idleSubtext}
          {state === "scanning" && "Hold still, please wait."}
          {state === "success" && "Redirecting to patient profile..."}
          {state === "failed" && "Try again or use manual search instead."}
        </p>
      </div>

      {state !== "success" && (
        <button
          onClick={startScan}
          disabled={state === "scanning"}
          className="mt-6 w-full rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white hover:bg-green-850 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "failed" ? "Try Again" : config.buttonLabel}
        </button>
      )}

      <div className="mt-6 rounded-xl border border-surface-border bg-white/[0.02] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-black">Tips</p>
        <ul className="mt-2 space-y-1.5">
          {config.tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-sm text-black">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-950" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}