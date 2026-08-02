import {
  FileStack,
  Video,
  Users,
  BarChart3,
  Share2,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: FileStack,
    title: "Electronic Health Records",
    description:
      "A unified, longitudinal patient record accessible securely across every facility a patient visits.",
  },
  {
    icon: Video,
    title: "Telemedicine",
    description:
      "Bring specialist care to rural and underserved communities with built-in video consultations.",
  },
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Streamline registration, scheduling, and referrals so care teams spend less time on paperwork.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards give administrators and ministries visibility into outcomes and resource needs.",
  },
  {
    icon: Share2,
    title: "Interoperability",
    description:
      "Open, standards-based APIs connect labs, pharmacies, and insurers into one health data network.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description:
      "End-to-end encryption and granular access controls keep sensitive patient data protected.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Platform
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Everything a modern health system needs, in one place
          </h2>
          <p className="mt-4 text-ink-800/70">
            Haske Lafiya replaces disconnected paper records and siloed
            software with a single infrastructure layer built for scale.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-brand-100 bg-white p-6 transition hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
