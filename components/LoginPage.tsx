"use client";

import Link from "next/link";
import { Mail, Lock, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#021d0f]">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
          {/* Back Button */}
          <Link
            href="/splash"
            className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-green-950 text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </Link>

          {/* Login Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
            {/* Logo */}
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-green-950 shadow-lg shadow-emerald-500/30">
              <span className="text-5xl font-extrabold text-white">H</span>
            </div>

            {/* Header */}
            <div className="mt-8 text-center">
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                Welcome Back
              </h1>

              <p className="mt-3 text-base text-white">
                Sign in to your Haske-Lafiya Hospital Management account
              </p>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-green-950 px-5 py-4 font-medium text-white transition hover:bg-white/15"
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
                or continue with email
              </span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Email Address
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Mail className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="email"
                    placeholder="doctor@haskelafiya.gov.ng"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Password
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <Lock className="mr-3 h-5 w-5 text-white" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-white placeholder:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-white/10 accent-emerald-500"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-green-950 px-5 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-900"
              >
                Login
              </button>
            </form>

            {/* Sign Up */}
            <p className="mt-8 text-center text-sm text-white">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-white">
              Adamawa State Ministry of Health
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Digital Health Infrastructure Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}