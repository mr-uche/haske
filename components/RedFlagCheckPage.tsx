"use client";

import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  Circle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const redFlags = [
  {
    label: "High fever (>39.5°C)",
    active: true,
  },
  {
    label: "Convulsions or altered consciousness",
    active: false,
  },
  {
    label: "Severe anaemia (Hb < 7g/dL)",
    active: false,
  },
  {
    label: "Respiratory distress",
    active: false,
  },
  {
    label: "Unable to eat or drink",
    active: false,
  },
  {
    label: "Prostration / extreme weakness",
    active: false,
  },
];

export default function RedFlagCheckPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/mobile/gwarmai"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 text-white transition hover:bg-green-900"
          >
            <ArrowLeft size={18} />
          </Link>

          <h1 className="text-3xl font-bold text-black">
            Red Flag Check
          </h1>
        </div>

        {/* Red Flag Card */}
        <div className="rounded-2xl border border-red-600/30 bg-green-950 p-5">
          <div className="mb-5 flex gap-3">
            <AlertTriangle
              size={22}
              className="mt-1 text-red-500"
            />

            <div>
              <h2 className="text-2xl font-bold text-red-500">
                1 Red Flag Detected
              </h2>

              <p className="mt-1 text-sm text-white">
                Immediate attention required — consider referral
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {redFlags.map((flag) => (
              <div
                key={flag.label}
                className="flex items-center gap-3"
              >
                {flag.active ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                    <span className="text-xs font-bold text-white">!</span>
                  </div>
                ) : (
                  <Circle
                    size={18}
                    className="fill-slate-700 text-white"
                  />
                )}

                <span
                  className={`text-lg ${
                    flag.active
                      ? "font-semibold text-white"
                      : "text-white"
                  }`}
                >
                  {flag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Referral */}
        <div className="mt-6 rounded-2xl border border-slate-700 bg-green-950 p-5">
          <div className="mb-5 flex items-center gap-2">
            <ArrowUpRight
              size={18}
              className="text-orange-400"
            />

            <h2 className="text-xl font-bold text-white">
              Referral Recommended
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between gap-6">
              <span className="text-white">Refer to</span>

              <span className="text-right font-semibold text-white">
                Yola Specialist Hospital
              </span>
            </div>

            <div className="flex justify-between gap-6">
              <span className="text-white">Urgency</span>

              <span className="font-semibold text-white">
                Within 24 hours
              </span>
            </div>

            <div className="flex justify-between gap-6">
              <span className="text-white">Reason</span>

              <span className="max-w-[190px] text-right font-semibold text-white">
                High fever with malaria — monitor for severity
              </span>
            </div>

            <div className="flex justify-between gap-6">
              <span className="text-white">Transport</span>

              <span className="max-w-[190px] text-right font-semibold text-white">
                Ambulance or family vehicle
              </span>
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Your Decision
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button className="rounded-xl border border-gray-400 bg-green-900 py-3 font-semibold text-white transition hover:bg-green-800">
                Refer Patient
              </button>

              <button className="rounded-xl border border-gray-400 bg-green-950 py-3 font-semibold text-white transition hover:bg-green-800">
                Manage Here
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button */}

        <button className="mt-7 mb-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-950 py-4 text-lg font-semibold text-white transition hover:bg-teal-500">
          Continue to Treatment

          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}