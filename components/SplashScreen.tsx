"use client";

import Link from "next/link";
import { Activity, ShieldCheck } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-green-950">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        {/* Logo */}
        <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-green-950 shadow-2xl shadow-emerald-500/30">
          <span className="text-6xl font-extrabold text-white">H</span>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Haske-Lafiya
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-xl font-medium text-emerald-300">
          Hospital Management System
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
          Empowering healthcare facilities with secure patient management,
          intelligent disease surveillance, real-time reporting, and seamless
          collaboration across Primary Health Care Centres in Adamawa State.
        </p>

        {/* Feature Cards */}
        <div className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-emerald-400/40 hover:bg-white/10">
            <Activity className="mx-auto h-12 w-12 text-teal-400" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Live Monitoring
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Monitor patient admissions, disease outbreaks, and facility
              performance in real time across all connected health centres.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-emerald-400/40 hover:bg-white/10">
            <ShieldCheck className="mx-auto h-12 w-12 text-emerald-400" />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Secure Digital Healthcare
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Built with enterprise-grade security to protect patient records,
              health insurance information, and clinical reports.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-2xl bg-green-950 px-10 py-4 text-center text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-2xl border border-emerald-400/30 bg-white/5 px-10 py-4 text-center text-base font-semibold text-emerald-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-white/10 hover:text-white"
          >
            Sign Up
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 space-y-2">
          <p className="text-lg font-semibold text-white">
            Adamawa State Ministry of Health
          </p>

          <p className="text-sm text-slate-500">
            Digital Health Infrastructure Platform
          </p>
        </div>
      </div>
    </div>
  );
}