"use client";

import { useState } from "react";
import {
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

export default function MobileNewPatient() {
  const [gender, setGender] = useState<"Male" | "Female">("Male");

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto w-full max-w-md">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 text-white transition hover:border-black">
            <ArrowLeft size={18} />
          </button>

          <h1 className="text-3xl font-bold text-black">
            New Patient
          </h1>
        </div>

        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />

              <input
                type="text"
                placeholder="e.g. Aisha Musa Ibrahim"
                className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 pl-12 pr-4 text-white placeholder:text-white focus:border-green-950 focus:outline-none"
              />
            </div>
          </div>

          {/* Age + Gender */}
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
                Age
              </label>

              <input
                placeholder="e.g. 28"
                className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 px-4 text-white placeholder:text-white  focus:border-green-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
                Gender
              </label>

              <div className="flex gap-2">
                <button
                  onClick={() => setGender("Male")}
                  className={`h-14 rounded-xl border px-6 font-medium transition ${
                    gender === "Male"
                      ? "border-green-900 bg-green-950 text-white"
                      : "border-green-900 bg-black text-white"
                  }`}
                >
                  Male
                </button>

                <button
                  onClick={() => setGender("Female")}
                  className={`h-14 rounded-xl border px-6 font-medium transition ${
                    gender === "Female"
                      ? "border-slate-900 bg-green-950 text-white"
                      : "border-slate-700 bg-black text-slate-300"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
              Phone <span className="normal-case">(optional)</span>
            </label>

            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blak" />

              <input
                placeholder="+234 800 000 0000"
                className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 pl-12 pr-4 text-white placeholder:text-white focus:border-green-950 focus:outline-none"
              />
            </div>
          </div>

          {/* LGA */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
              LGA
            </label>

            <select className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 px-4 text-white focus:border-green-800 focus:outline-none">
              <option>Select LGA</option>
              <option>Abuja Municipal</option>
              <option>Bwari</option>
              <option>Gwagwalada</option>
            </select>
          </div>

          {/* ASCHMA ID */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
              ASCHMA ID
            </label>

            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />

              <input
                placeholder="ASC-YYYY-XXXXXX"
                className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 pl-12 pr-4 text-white placeholder:text-white focus:border-green-950 focus:outline-none"
              />
            </div>
          </div>

          {/* Coverage Expiry */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black">
              Coverage Expiry{" "}
              <span className="normal-case">(optional)</span>
            </label>

            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />

              <input
                type="date"
                className="h-14 w-full rounded-xl border border-slate-700 bg-green-950 pl-12 pr-4 text-white focus:border-green-950 focus:outline-none"
              />
            </div>
          </div>

          {/* Info */}
          <div className="rounded-xl border border-slate-700 bg-green-950 p-5">
            <p className="text-sm leading-6 text-white">
              This record will be created locally and synced to the
              Haske Hub when connected.
            </p>
          </div>

          {/* Button */}
          <button className="h-14 w-full rounded-xl bg-green-950 text-lg font-semibold text-white transition hover:bg-green-950">
            Register Patient
          </button>
        </div>
      </div>
    </div>
  );
}