import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Live view of admissions, referrals, and bed capacity across facilities",
  "Automated alerts for disease outbreaks and supply shortages",
  "Exportable reports for ministries, donors, and partners",
];

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft lg:order-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink-900">
              Regional Health Overview
            </p>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Live
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-brand-50 p-4">
              <p className="text-xs text-ink-800/60">Admissions</p>
              <p className="mt-1 text-xl font-bold text-ink-900">1,204</p>
            </div>
            <div className="rounded-xl bg-brand-50 p-4">
              <p className="text-xs text-ink-800/60">Referrals</p>
              <p className="mt-1 text-xl font-bold text-ink-900">312</p>
            </div>
            <div className="rounded-xl bg-brand-50 p-4">
              <p className="text-xs text-ink-800/60">Bed capacity</p>
              <p className="mt-1 text-xl font-bold text-ink-900">78%</p>
            </div>
          </div>

          <div className="mt-5 flex h-40 items-end gap-2 rounded-xl bg-brand-50/60 p-4">
            {[40, 65, 50, 80, 60, 95, 70, 55, 85, 45, 60, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-brand-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Insight
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            One dashboard for every facility, region, and outcome
          </h2>
          <p className="mt-4 text-ink-800/70">
            Administrators get a real-time picture of the entire health
            network &mdash; from a single clinic to an entire state &mdash;
            so decisions are backed by data, not guesswork.
          </p>
          <ul className="mt-6 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                <span className="text-sm text-ink-800/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
