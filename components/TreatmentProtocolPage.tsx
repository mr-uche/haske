"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Pill,
  FlaskConical,
  TriangleAlert,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function TreatmentProtocolPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/mobile/gwarmai"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 text-white transition hover:bg-[#17243b]"
          >
            <ArrowLeft size={18} />
          </Link>

          <h1 className="text-3xl font-bold text-black">
            Treatment Protocol
          </h1>
        </div>

        {/* Disease Card */}
        <div className="rounded-2xl border border-teal-700/40 bg-green-950 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-teal-green-950 p-2">
              <Shield className="text-white" size={20} />
            </div>

            <div>
              <h2 className="font-bold text-white">
                Malaria (Uncomplicated)
              </h2>

              <p className="text-sm text-white">
                FMOH Nigeria Malaria Treatment Guidelines 2023
              </p>
            </div>
          </div>
        </div>

        {/* First Line */}
        <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-white">
          First-Line Treatment
        </h3>

        {/* Drug Card */}
        <div className="rounded-2xl border border-slate-700 bg-green-950 p-4">
          <div className="flex items-center gap-2">
            <Pill className="text-white" size={18} />

            <h3 className="font-bold text-white">
              Artemether–Lumefantrine (AL)
            </h3>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Dose</p>

              <p className="font-bold text-white">
                80/480mg
              </p>
            </div>

            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Freq</p>

              <p className="font-bold text-white">
                Twice daily
              </p>
            </div>

            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Duration</p>

              <p className="font-bold text-white">
                3 days
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-white">
            Take with food or milk for better absorption.
          </p>
        </div>

        {/* Drug 2 */}

        <div className="mt-4 rounded-2xl border border-slate-700 bg-green-950 p-4">
          <div className="flex items-center gap-2">
            <Pill className="text-white" size={18} />

            <h3 className="font-bold text-white">
              Paracetamol
            </h3>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Dose</p>

              <p className="font-bold text-white">
                500mg
              </p>
            </div>

            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Freq</p>

              <p className="font-bold text-white">
                Three times daily
              </p>
            </div>

            <div className="rounded-xl bg-green-800 p-3 text-center">
              <p className="text-xs text-white">Duration</p>

              <p className="font-bold text-white">
                3 days
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm italic text-white">
            For fever and pain relief.
          </p>
        </div>

        {/* Tests */}

        <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-black">
          Recommended Tests
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-green-950 p-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="text-white" size={18} />

              <div>
                <p className="font-semibold text-white">
                  Rapid Diagnostic Test (RDT)
                </p>

                <p className="text-sm text-white">
                  Confirm malaria diagnosis
                </p>
              </div>
            </div>

            <span className="rounded-lg bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-400">
              Now
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-green-950 p-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="text-white" size={18} />

              <div>
                <p className="font-semibold text-white">
                  Full Blood Count (FBC)
                </p>

                <p className="text-sm text-white">
                  Rule out severe anaemia
                </p>
              </div>
            </div>

            <span className="rounded-lg bg-slate-700 px-3 py-1 text-sm text-white">
              If available
            </span>
          </div>
        </div>

        {/* Warnings */}

        <h3 className="mt-8 mb-3 text-sm font-semibold uppercase tracking-wide text-black">
          Clinical Warnings
        </h3>

        <div className="rounded-2xl border border-amber-600/30 bg-green-950 p-5">
          <div className="space-y-4">
            {[
              "Avoid artemether-lumefantrine in first trimester of pregnancy.",
              "Check for G6PD deficiency before using primaquine.",
              "Reassess in 48h if no improvement.",
            ].map((warning) => (
              <div key={warning} className="flex gap-3">
                <TriangleAlert
                  className="mt-0.5 text-amber-400"
                  size={17}
                />

                <p className="text-sm leading-6 text-white">
                  {warning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Up */}

        <div className="mt-6 rounded-2xl border border-slate-700 bg-green-950 p-5">
          <div className="flex gap-3">
            <CheckCircle2
              className="mt-0.5 text-emerald-400"
              size={20}
            />

            <p className="text-lg text-white">
              Return in 3 days or immediately if symptoms worsen.
            </p>
          </div>
        </div>

        {/* Button */}

        <button className="mt-8 mb-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-950 py-4 text-lg font-semibold text-white transition hover:bg-green-800">
          Check Drug Interactions
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}