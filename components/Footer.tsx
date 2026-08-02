import { Activity, Twitter, Linkedin, Facebook } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Solutions", "Pricing", "Security"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Case studies", "Support"],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-brand-100 bg-white pt-16">
      <div className="container-x">
        <div className="grid gap-10 pb-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Activity size={20} />
              </span>
              <span className="text-lg font-bold text-ink-900">
                Haske <span className="text-brand-600">Lafiya</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-800/60">
              Connected digital health infrastructure for hospitals, clinics,
              and health systems across the region.
            </p>
            <div className="mt-6 flex gap-4 text-ink-800/40">
              <a href="#" aria-label="Twitter" className="hover:text-brand-600">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-brand-600">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-600">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink-900">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-800/60 hover:text-brand-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-100 py-6 text-xs text-ink-800/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Haske Lafiya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
