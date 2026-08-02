const partners = [
  "Federal Ministry of Health",
  "PriMed Networks",
  "Lagos State Health Service",
  "AfyaLink",
  "CarePoint Hospitals",
  "NorthStar Clinics",
];

export default function LogoCloud() {
  return (
    <section className="border-y border-brand-50 bg-white py-10">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-800/40">
          Trusted by health systems across the region
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-center text-sm font-semibold text-ink-800/40"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
