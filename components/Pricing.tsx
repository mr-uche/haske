import { Check } from "lucide-react";

const plans = [
  {
    name: "Clinic",
    price: "₦150,000",
    period: "/month",
    description: "For single facilities and small clinics.",
    features: [
      "Up to 5 staff accounts",
      "Electronic health records",
      "Patient scheduling",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Hospital",
    price: "₦650,000",
    period: "/month",
    description: "For hospitals and multi-department facilities.",
    features: [
      "Unlimited staff accounts",
      "Telemedicine module",
      "Analytics & reporting",
      "Priority support",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Health System",
    price: "Custom",
    period: "",
    description: "For state and national health networks.",
    features: [
      "Multi-facility network",
      "Full interoperability suite",
      "Dedicated implementation team",
      "SLA-backed uptime",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Plans that scale with your facility
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-600 bg-ink-900 text-white shadow-soft"
                  : "border-brand-100 bg-white"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  plan.highlighted ? "text-white" : "text-ink-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.highlighted ? "text-white/60" : "text-ink-800/60"
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-white/60" : "text-ink-800/60"
                  }
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check
                      size={16}
                      className={
                        plan.highlighted ? "text-brand-300" : "text-brand-600"
                      }
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/80" : "text-ink-800/80"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-brand-600 text-white hover:bg-brand-500"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
