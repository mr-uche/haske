"use client";

import { ArrowLeft, User } from "lucide-react";

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="flex items-start gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 transition hover:bg-green-900">
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>

          <div>
            <h1 className="text-4xl font-bold text-black">
              Reset Password
            </h1>
            <p className="mt-1 text-sm text-black">
              Haske-Lafiya Field App
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-teal-green-800 text-xs font-semibold text-black">
              1
            </div>
            <span className="mt-3 text-sm font-semibold text-black">
              Staff ID
            </span>
          </div>

          <div className="mb-6 h-px flex-1 bg-slate-700 mx-3" />

          <div className="flex flex-col items-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-xs font-semibold text-black">
              2
            </div>
            <span className="mt-3 text-sm text-black">
              Security
            </span>
          </div>

          <div className="mb-6 h-px flex-1 bg-slate-700 mx-3" />

          <div className="flex flex-col items-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 text-xs font-semibold text-black">
              3
            </div>
            <span className="mt-3 text-sm text-black">
              New Password
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-500/20 bg-green-950">
          <User className="h-7 w-7 text-white" />
        </div>

        {/* Content */}
        <h2 className="mt-8 text-2xl font-bold text-black">
          Enter your Staff ID
        </h2>

        <p className="mt-3 text-base leading-7 text-black">
          We'll look up your account and security question.
        </p>

        {/* Input */}
        <div className="mt-8">
          <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-black">
            Staff ID
          </label>

          <div className="flex h-14 items-center rounded-2xl border border-slate-700 bg-green-800 px-4">
            <User className="mr-3 h-5 w-5 text-white" />

            <input
              type="text"
              placeholder="e.g. CHEW-ADA-0042"
              className="w-full bg-transparent text-black placeholder:text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 h-14 w-full rounded-2xl bg-green-950 text-lg font-semibold text-white transition hover:bg-green-800">
          Continue
        </button>

        {/* Footer */}
        <p className="mt-28 text-center text-sm text-black">
          Need help?{" "}
          <button className="text-black hover:text-slate-900">
            Contact your facility supervisor.
          </button>
        </p>
      </div>
    </div>
  );
}