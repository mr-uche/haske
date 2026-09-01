"use client";

import { Lock, AlertTriangle } from "lucide-react";

export default function AccountLocked() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm text-center">
        {/* Lock Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
          <Lock className="h-8 w-8 text-red-500" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold text-black">
          Account Locked
        </h1>

        {/* Description */}
        <p className="mt-4 text-base text-black">
          Too many incorrect PIN attempts.
        </p>

        <p className="mt-2 text-base leading-7 text-black">
          Your account has been locked for{" "}
          <span className="font-semibold text-black">
            30 minutes.
          </span>
          <br />
          Contact your facility supervisor if you need
          <br />
          immediate access.
        </p>

        {/* Alert Card */}
        <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-left">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h3 className="font-semibold text-red-500">
              Security Alert
            </h3>
          </div>

          <p className="mt-4 text-sm leading-6 text-black">
            5 failed PIN attempts detected on 08 Mar 2026 at
            09:47 AM. This incident has been logged and
            reported to your facility administrator.
          </p>
        </div>

        {/* Primary Button */}
        <button className="mt-10 h-14 w-full rounded-2xl bg-green-950 text-lg font-semibold text-white transition hover:bg-teal-400">
          Contact Supervisor / Reset
        </button>

        {/* Secondary Button */}
        <button className="mt-5 text-base font-medium text-black transition hover:text-slate-900">
          Try again
        </button>
      </div>
    </div>
  );
}