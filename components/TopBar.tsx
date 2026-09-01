"use client";

import { Search, Wifi, Bell } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBar({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-GB", { hour12: false })
    : "--:--:--";
  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-surface-border bg-green-950 px-8 shadow-lg">
      <div>
        <h1 className="text-lg font-bold text-white">{title}</h1>
        <p className="text-s text-white">{subtitle}</p>
      </div>

      <div className="hidden flex-1 justify-center px-8 md:flex">
        <div className="flex w-full max-w-md items-center gap-2 rounded-xl border border-surface-border bg-surface-card bg-white px-4 py-2.5">
          <Search size={18} className="text-teal-900" />
          <input
            className="w-full bg-transparent text-sm text-teal-500 placeholder:text-teal-900 focus:outline-none"
            placeholder="Search patients, LGAs, alerts..."
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          LIVE
        </span>
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold text-white">{time}</p>
          <p className="text-[11px] text-white">{date}</p>
        </div>
        <Wifi size={18} className="text-green-400" />
        <button className="relative text-slate-100 hover:text-slate-200">
          <Bell size={19} />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            5
          </span>
        </button>
      </div>
    </header>
  );
}
