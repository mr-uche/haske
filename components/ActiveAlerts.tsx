import { AlertTriangle, Info, ChevronRight } from "lucide-react";

type Severity = "critical" | "high" | "moderate" | "info";

const severityStyles: Record<
  Severity,
  { bg: string; border: string; iconBg: string; iconText: string }
> = {
  critical: {
    bg: "bg-red-500/5",
    border: "border-red-500/20",
    iconBg: "bg-red-500/15",
    iconText: "text-red-400",
  },
  high: {
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/15",
    iconText: "text-orange-400",
  },
  moderate: {
    bg: "bg-yellow-500/5",
    border: "border-yellow-500/20",
    iconBg: "bg-yellow-500/15",
    iconText: "text-yellow-400",
  },
  info: {
    bg: "bg-blue-500/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/15",
    iconText: "text-blue-400",
  },
};

const alerts: {
  title: string;
  location: string;
  time: string;
  severity: Severity;
  icon: "warning" | "info";
}[] = [
  {
    title: "Cholera Outbreak",
    location: "Mubi North LGA",
    time: "2m ago",
    severity: "critical",
    icon: "warning",
  },
  {
    title: "Stock-out: ORS",
    location: "Guyuk LGA",
    time: "12m ago",
    severity: "high",
    icon: "warning",
  },
  {
    title: "Surge in Malaria Cases",
    location: "Yola South LGA",
    time: "33m ago",
    severity: "moderate",
    icon: "warning",
  },
  {
    title: "PHC Offline",
    location: "Girei PHC",
    time: "1h ago",
    severity: "info",
    icon: "info",
  },
  {
    title: "Reporting Delay",
    location: "Hong LGA",
    time: "2h ago",
    severity: "high",
    icon: "warning",
  },
];

export default function ActiveAlerts() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Active Alerts</h3>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400">
          {alerts.length} Total
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {alerts.map((a) => {
          const s = severityStyles[a.severity];
          const Icon = a.icon === "info" ? Info : AlertTriangle;
          return (
            <button
              key={a.title + a.location}
              className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition hover:brightness-110 ${s.bg} ${s.border}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${s.iconBg} ${s.iconText}`}
                >
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {a.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {a.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{a.time}</span>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}