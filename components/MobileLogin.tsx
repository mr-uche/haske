"use client";

import { useState } from "react";
import { Activity, User, Lock, Eye, EyeOff } from "lucide-react";

type DemoRole = "CHEW" | "Nurse" | "Doctor" | "Facility Mgr";

const demoCredentials: Record<DemoRole, { staffId: string; password: string }> = {
  CHEW: { staffId: "CHEW-ADA-0042", password: "demo1234" },
  Nurse: { staffId: "NURSE-ADA-0012", password: "demo1234" },
  Doctor: { staffId: "DOC-ADA-0005", password: "demo1234" },
  "Facility Mgr": { staffId: "MGR-ADA-0003", password: "demo1234" },
};

export default function MobileLogin() {
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function quickFill(role: DemoRole) {
    const creds = demoCredentials[role];
    setStaffId(creds.staffId);
    setPassword(creds.password);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950 text-white">
            <Activity size={26} />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-black">Sign In</h1>
          <p className="mt-1 text-sm text-black">Haske-Lafiya Field App</p>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-black">
              Staff ID
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
              <User size={16} className="text-slate-500" />
              <input
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
                placeholder="e.g. CHEW-ADA-0042"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-black">
              Password
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-3">
              <Lock size={16} className="text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-black placeholder:text-slate-500 focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <button className="text-sm font-semibold text-black hover:text-brand-300">
              Forgot password
            </button>
          </div>

          <button className="w-full rounded-xl bg-green-950 py-3.5 text-sm font-bold text-surface hover:bg-brand-400">
            Sign In
          </button>

          <div>
            <p className="text-center text-xs text-slate-500">Quick fill for demo</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(Object.keys(demoCredentials) as DemoRole[]).map((role) => (
                <button
                  key={role}
                  onClick={() => quickFill(role)}
                  className="rounded-xl border border-surface-border bg-green-950 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <p className="pt-2 text-center text-xs text-slate-900">
            Authorized personnel only · All activity is logged
          </p>
        </div>
      </div>
    </div>
  );
}