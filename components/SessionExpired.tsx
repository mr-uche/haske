"use client";

import { Clock3 } from "lucide-react";

export default function SessionExpired() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm text-center">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-green-950">
          <Clock3 className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-bold text-black">
          Session Expired
        </h1>

        {/* Description */}
        <p className="mt-4 text-base leading-7 text-black">
          Your session timed out after{" "}
          <span className="font-semibold text-black">
            15 minutes
          </span>{" "}
          of inactivity. Please re-enter your PIN to continue.
        </p>

        {/* Primary Button */}
        <button className="mt-10 h-14 w-full rounded-2xl bg-green-950 text-lg font-semibold text-white transition-all duration-200 hover:bg-green-900">
          Re-enter PIN
        </button>

        {/* Secondary Button */}
        <button className="mt-5 text-base font-medium text-black transition-colors hover:text-white">
          Sign in again
        </button>
      </div>
    </div>
  );
}