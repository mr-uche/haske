const testimonials = [
  {
    quote:
      "Haske Lafiya gave our state health service a single source of truth. We finally know, in real time, where our resources need to go.",
    name: "Dr. Amina Yusuf",
    role: "Director, State Primary Health Care Board",
  },
  {
    quote:
      "Referrals between our clinics and the teaching hospital used to take days. Now patient records move in seconds.",
    name: "Dr. Chidi Okafor",
    role: "Medical Director, CarePoint Hospitals",
  },
  {
    quote:
      "The interoperability layer meant our lab and pharmacy systems could finally talk to each other without custom integrations.",
    name: "Ngozi Adeyemi",
    role: "Head of Health Informatics, AfyaLink",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-50/50 py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Trusted by the people who deliver care
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"
            >
              <blockquote className="text-sm leading-relaxed text-ink-800/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-ink-900">
                  {t.name}
                </p>
                <p className="text-xs text-ink-800/50">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
