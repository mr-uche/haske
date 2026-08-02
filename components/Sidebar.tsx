"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Map,
  FlaskConical,
  Bell,
  ArrowUpRight,
  BarChart3,
  Shuffle,
  Building2,
  BrainCircuit,
  ClipboardList,
  MonitorCog,
  Users,
  ShieldCheck,
  Settings,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, label: "Command Centre", href: "/dashboard" },
  { icon: Map, label: "Epidemic Heat Map", href: "/dashboard/heatmap" },
  { icon: FlaskConical, label: "Disease Cases", href: "/dashboard/cases" },
  { icon: Bell, label: "Alert Centre", href: "/alerts" },
  { icon: ArrowUpRight, label: "Escalation Workflow", href: "/alerts/escalation" },
  { icon: BarChart3, label: "Analytics & Reports", href: "/analytics" },
  { icon: Shuffle, label: "LGA Performance", href: "/analytics/lga" },
  { icon: Building2, label: "PHC Facilities", href: "/facilities" },
  { icon: BrainCircuit, label: "Gwarmai AI", href: "/gwarmai" },
  { icon: ClipboardList, label: "ASCHMA Portal", href: "/aschma" },
  { icon: MonitorCog, label: "Facility Manager", href: "/facility" },
  { icon: Users, label: "User Management", href: "/admin" },
  { icon: ShieldCheck, label: "Audit Logs", href: "/admin/audit" },
  { icon: Settings, label: "System Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[76px] shrink-0 flex-col items-center border-r border-surface-border bg-green-950 py-4">
      <Link
        href="/dashboard"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-surface"
      >
        H
      </Link>

      <nav className="mt-6 flex flex-1 flex-col items-center gap-1 overflow-y-auto px-2 py-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={`group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                isActive
                  ? "bg-brand-500/15 text-brand-400"
                  : "text-slate-500 hover:bg-white/5 hover:text-slate-300"
              }`}
            >
              <Icon size={19} />
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-surface-card px-2.5 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-soft transition group-hover:opacity-100 z-50">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-2 flex flex-col items-center gap-3">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
            AB
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-panel bg-brand-400" />
        </div>
        <button className="text-slate-600 hover:text-slate-400">
          <ChevronRight size={16} />
        </button>
      </div>
    </aside>
  );
}
