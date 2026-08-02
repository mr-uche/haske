const stats = [
  { value: "6,200+", label: "Health facilities connected" },
  { value: "2.4M+", label: "Patients registered" },
  { value: "35", label: "States and territories reached" },
  { value: "99.98%", label: "Platform uptime" },
];

export default function Stats() {
  return (
    <section className="bg-ink-900 py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
