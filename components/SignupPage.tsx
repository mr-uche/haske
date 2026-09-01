"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  ArrowLeft,
  Stethoscope,
  HeartPulse,
  Users,
} from "lucide-react";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-green-950 to-slate-900">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-md lg:max-w-2xl">
          {/* Back */}
          <Link
            href="/"
            className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-green-950 text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </Link>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
            {/* Logo */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-950 shadow-lg">
              <span className="text-4xl font-bold text-white">H</span>
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <h1 className="text-3xl font-bold text-white">
                Create Account
              </h1>

              <p className="mt-2 text-white">
                Join the Haske-Lafiya Digital Health Platform
              </p>
            </div>

            {/* Google */}
            <button
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-green-950 px-4 py-3 font-medium text-white transition hover:bg-white/15"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.2 1.3-.8 2.4-1.8 3.2l2.9 2.3c1.7-1.6 2.7-4 2.7-6.9 0-.7-.1-1.3-.2-2H12z"
                />
                <path
                  fill="#34A853"
                  d="M12 22c2.4 0 4.4-.8 5.9-2.2l-2.9-2.3c-.8.6-1.8 1-3 1-2.3 0-4.3-1.6-5-3.8H4v2.4C5.5 20.1 8.5 22 12 22z"
                />
                <path
                  fill="#FBBC05"
                  d="M7 14.7c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V8.7H4C3.4 9.9 3 11.2 3 12.5s.4 2.6 1 3.8l3-1.6z"
                />
                <path
                  fill="#4285F4"
                  d="M12 6.5c1.3 0 2.5.4 3.4 1.3l2.6-2.6C16.4 3.8 14.4 3 12 3 8.5 3 5.5 4.9 4 8.7l3 2.4c.7-2.2 2.7-3.8 5-3.8z"
                />
              </svg>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-white/10" />
              <span className="px-4 text-sm text-white">
                or sign up with email
              </span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Full Name
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <User className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Mail className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="email"
                    placeholder="doctor@haskelafiya.gov.ng"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Register As
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="rounded-2xl border border-emerald-500 bg-green-950 p-4 transition hover:bg-emerald-500/25"
                  >
                    <HeartPulse className="mx-auto mb-2 h-8 w-8 text-emerald-500" />
                    <p className="font-semibold text-white">Patient</p>
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500 hover:bg-white/10"
                  >
                    <Stethoscope className="mx-auto mb-2 h-8 w-8 text-emerald-400" />
                    <p className="font-semibold text-white">Doctor</p>
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500 hover:bg-white/10"
                  >
                    <User className="mx-auto mb-2 h-8 w-8 text-emerald-400" />
                    <p className="font-semibold text-white">Nurse</p>
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500 hover:bg-white/10"
                  >
                    <Users className="mx-auto mb-2 h-8 w-8 text-emerald-400" />
                    <p className="font-semibold text-white">CHEW</p>
                  </button>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Password
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Lock className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Lock className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-green-950 py-3 text-lg font-semibold text-white transition hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-sm text-white">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-green-400 hover:text-emerald-700"
              >
                Login
              </Link>
            </p>
          </div>

          <p className="mt-8 text-center text-xs text-white">
            Adamawa State Ministry of Health
            <br />
            Digital Health Infrastructure Platform
          </p>
        </div>
      </div>
    </div>
  );
}