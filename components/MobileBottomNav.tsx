"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Bell,
  Activity,
  ClipboardList,
  User,
} from "lucide-react";

const navItems = [
  {
    href: "/mobile",
    label: "Home",
    icon: Home,
    matchPrefix: "/mobile",
  },
  {
    href: "/mobile/alerts",
    label: "Alerts",
    icon: Bell,
  },
  {
    href: "/mobile/report",
    label: "Report",
    icon: Activity,
  },
  {
    href: "/mobile/patients/search",
    label: "Patients",
    icon: ClipboardList,
    matchPrefix: "/mobile/patients",
  },
  {
    href: "/mobile/profile",
    label: "Profile",
    icon: User,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t border-surface-border bg-green-950">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ href, label, icon: Icon, matchPrefix }) => {
          const active =
            href === "/mobile"
              ? pathname === "/mobile"
              : pathname.startsWith(matchPrefix ?? href);

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                active ? "text-green-700" : "text-white"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  active ? "bg-brand-500/15" : ""
                }`}
              >
                <Icon size={20} />
              </span>

              <span className="text-[11px] font-medium">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}