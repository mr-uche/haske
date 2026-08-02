"use client";

import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-100 bg-white/80 backdrop-blur">
      <nav className="container-x flex h-18 items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Activity size={20} />
          </span>
          <span className="text-lg font-bold text-ink-900">
            Haske <span className="text-brand-600">Lafiya</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-800/80 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#login"
            className="text-sm font-semibold text-ink-800 transition hover:text-brand-600"
          >
            Log in
          </a>
          <a
            href="#get-started"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
          >
            Get Started
          </a>
        </div>

        <button
          className="text-ink-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-800/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="mt-2 rounded-full bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
