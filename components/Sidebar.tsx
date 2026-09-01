"use client";

import { useState } from "react";
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
  ChevronLeft,
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
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className={`sticky top-0 flex min-h-screen flex-col border-r border-green-900 bg-green-950 transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex items-center border-b border-green-900 p-5 ${
          expanded ? "gap-3" : "justify-center"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
          <span className="text-2xl font-bold text-white">H</span>
        </div>

        {expanded && (
          <div>
            <h2 className="text-lg font-bold leading-none text-white">
              Haske
            </h2>
            <p className="mt-1 text-sm font-semibold leading-none text-green-400">
              Lafiya
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={!expanded ? item.label : ""}
                className={`group relative flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-green-500/20 text-green-400"
                    : "text-slate-300 hover:bg-green-700 hover:text-white"
                }`}
              >
                <Icon size={20} className="shrink-0" />

                {expanded && (
                  <span className="whitespace-nowrap text-sm font-medium">
                    {item.label}
                  </span>
                )}

                {!expanded && (
                  <span className="pointer-events-none absolute left-20 z-50 ml-2 whitespace-nowrap rounded-lg bg-green-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Section */}
      <div className="border-t border-green-900 p-3">
        <div
          className={`flex items-center rounded-xl bg-green-500/10 p-3 ${
            expanded ? "gap-3" : "justify-center"
          }`}
        >
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 font-semibold text-white">
              AB
            </div>

            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-green-950 bg-green-400" />
          </div>

          {expanded && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Dr. Aminu Bashir
              </p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
          )}
        </div>

        {/* Expand / Collapse */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 flex w-full items-center justify-center rounded-lg border border-green-800 p-2 text-slate-400 transition hover:bg-green-800 hover:text-white"
        >
          {expanded ? (
            <ChevronLeft size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>
      </div>
    </aside>
  );
}