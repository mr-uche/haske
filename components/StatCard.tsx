import { LucideIcon } from "lucide-react";

type Tone = "brand" | "red" | "amber" | "blue";

const toneStyles: Record<Tone, { bg: string; text: string }> = {
  brand: { bg: "bg-brand-500/10", text: "text-brand-400" },
  red: { bg: "bg-red-500/10", text: "text-red-400" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400" },
  blue: { bg: "bg-sky-500/10", text: "text-sky-400" },
};

export default function StatCard({
  icon: Icon,
  iconTone = "brand",
  label,
  value,
  caption,
  trend,
  trendDirection = "up",
}: {
  icon: LucideIcon;
  iconTone?: Tone;
  label: string;
  value: string;
  caption: string;
  trend: string;
  trendDirection?: "up" | "down";
}) {
  const tone = toneStyles[iconTone];
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone.bg} ${tone.text}`}
        >
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{caption}</p>
      <p
        className={`mt-2 text-xs font-medium ${
          trendDirection === "up" ? "text-brand-400" : "text-red-400"
        }`}
      >
        {trendDirection === "up" ? "↗" : "↘"} {trend}
      </p>
    </div>
  );
}
