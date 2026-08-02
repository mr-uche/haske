import { ArrowRight, ShieldCheck, Signal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <Signal size={14} /> Built for African health systems
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Digital health infrastructure that connects every point of care
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-800/70">
            Haske Lafiya gives hospitals, clinics, and health ministries a
            single, secure platform to manage patient records, coordinate
            care, and turn health data into action &mdash; from the
            smallest primary care center to national health systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Request a demo <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-6 py-3.5 text-sm font-semibold text-ink-900 transition hover:border-brand-300 hover:text-brand-700"
            >
              Explore features
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-ink-800/60">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-600" />
              NDPR &amp; HIPAA-aligned security
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between border-b border-brand-50 pb-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-brand-400" />
              </div>
              <span className="text-xs font-medium text-ink-800/40">
                Haske Lafiya &mdash; National Dashboard
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="col-span-2 rounded-xl bg-brand-600 p-5 text-white">
                <p className="text-xs font-medium text-brand-100">
                  Patients registered
                </p>
                <p className="mt-1 text-3xl font-bold">2,481,930</p>
                <p className="mt-1 text-xs text-brand-100">
                  +12.4% this quarter
                </p>
              </div>
              <div className="rounded-xl bg-brand-50 p-4">
                <p className="text-xs font-medium text-ink-800/60">
                  Facilities connected
                </p>
                <p className="mt-1 text-2xl font-bold text-ink-900">6,214</p>
              </div>
              <div className="rounded-xl bg-brand-50 p-4">
                <p className="text-xs font-medium text-ink-800/60">
                  Records synced today
                </p>
                <p className="mt-1 text-2xl font-bold text-ink-900">148k</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-brand-100 bg-white p-4 shadow-soft sm:block">
            <p className="text-xs font-medium text-ink-800/60">
              System uptime
            </p>
            <p className="text-xl font-bold text-brand-600">99.98%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
