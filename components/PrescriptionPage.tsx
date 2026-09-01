"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Pill,
  Plus,
  ChevronRight,
} from "lucide-react";

export default function PrescriptionPage() {
  return (
    <div className="min-h-screen bg-white text-white">
      <div className="mx-auto w-full max-w-md px-5 py-8">

        {/* Header */}
        <div className="mb-7 flex items-center gap-3">
          <Link
            href="/mobile/encounter"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 hover:bg-green-900"
          >
            <ArrowLeft size={18} />
          </Link>

          <h1 className="text-3xl font-bold text-black">
            Prescription
          </h1>
        </div>

        {/* Diagnosis */}
        <div className="mb-6">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-black">
            Diagnosis <span className="text-red-500">*</span>
          </label>

          <input
            defaultValue="Malaria (Uncomplicated)"
            className="w-full rounded-2xl border border-slate-700 bg-green-950 px-4 py-4 text-white outline-none"
          />
        </div>

        {/* Drug Card */}
        <div className="rounded-3xl border border-slate-700 bg-green-950 p-5">

          <div className="mb-5 flex items-center gap-2">
            <Pill className="text-white" size={20} />

            <h2 className="text-xl font-bold">
              Drug 1
            </h2>
          </div>

          {/* Drug Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm text-white">
              Drug Name
            </label>

            <select className="w-full rounded-2xl border border-green-900 bg-green-900 px-4 py-4 text-white outline-none">
              <option>Select drug</option>
              <option>Artemether-Lumefantrine (AL)</option>
              <option>Paracetamol</option>
              <option>Amoxicillin</option>
              <option>Ibuprofen</option>
            </select>
          </div>

          {/* Dosage */}
          <div className="mb-5">
            <label className="mb-2 block text-sm text-white">
              Dosage
            </label>

            <input
              placeholder="e.g. 80/480mg"
              className="w-full rounded-2xl border border-green-900 bg-green-900 px-4 py-4 placeholder:text-white outline-none"
            />
          </div>

          {/* Frequency + Duration */}
          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="mb-2 block text-sm text-white">
                Frequency
              </label>

              <select className="w-full rounded-2xl border border-green-900 bg-green-900 px-4 py-4 text-white outline-none">
                <option>Twice daily</option>
                <option>Once daily</option>
                <option>Three times daily</option>
                <option>Every 6 hours</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white">
                Duration
              </label>

              <select className="w-full rounded-2xl border border-slate-700 bg-green-900 px-4 py-4 text-white outline-none">
                <option>3 days</option>
                <option>5 days</option>
                <option>7 days</option>
                <option>14 days</option>
              </select>
            </div>

          </div>
        </div>

        {/* Add Drug */}
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-700 bg-green-950 py-4 text-lg font-medium text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400">
          <Plus size={22} />
          Add Another Drug
        </button>

        {/* Notes */}
        <div className="mt-7">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-black">
            Clinical Notes
            <span className="ml-1 normal-case text-white">
              (optional)
            </span>
          </label>

          <textarea
            rows={5}
            placeholder="Any additional observations or instructions..."
            className="w-full resize-none rounded-2xl border border-slate-700 bg-green-950 px-4 py-4 placeholder:text-white outline-none"
          />
        </div>

        {/* Review Button */}
        <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-950 py-4 text-lg font-semibold text-white transition hover:opacity-90">
          Review Encounter
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
}