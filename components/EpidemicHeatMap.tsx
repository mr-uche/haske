const lgas = [
  { name: "Hong", cases: 67, level: "critical" },
  { name: "Michika", cases: 54, level: "critical" },
  { name: "Mubi North", cases: 41, level: "high" },
  { name: "Gombi", cases: 38, level: "high" },
  { name: "Demsa", cases: 33, level: "high" },
  { name: "Madagali", cases: 29, level: "moderate" },
];

const levelStyles: Record<string, string> = {
  critical: "bg-red-500/15 border-red-500/40 text-red-300",
  high: "bg-amber-500/15 border-amber-500/40 text-amber-200",
  moderate: "bg-amber-400/10 border-amber-400/30 text-amber-100",
  healthy: "bg-brand-500/10 border-brand-500/30 text-brand-200",
};

const diseaseFilters = [
  "All Diseases",
  "Cholera",
  "Lassa Fever",
  "Malaria",
  "Meningitis",
  "Typhoid",
];

export default function EpidemicHeatMap() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">
            Epidemic Heat Map
          </h3>
          <p className="text-xs text-slate-500">
            21 LGAs · Auto-refresh every 2 min
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> LIVE
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {diseaseFilters.map((f, i) => (
          <button
            key={f}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              i === 0
                ? "bg-brand-500/15 text-brand-300"
                : "bg-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {lgas.map((lga) => (
          <div
            key={lga.name}
            className={`rounded-xl border p-4 text-center ${
              levelStyles[lga.level]
            }`}
          >
            <p className="text-sm font-semibold">{lga.name}</p>
            <p className="mt-1 text-xl font-bold">{lga.cases}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
