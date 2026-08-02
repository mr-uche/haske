import {
  Users,
  UserCheck,
  Building2,
  Activity,
  AlertTriangle,
  Heart,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    icon: Users,
    label: "Population Covered",
    value: "4.2M",
    caption: "Total ASCHMA enrollees",
    trend: "4.2% vs last month",
    trendDirection: "up" as const,
  },
  {
    icon: UserCheck,
    label: "Active Enrollees",
    value: "3.8M",
    caption: "Valid coverage today",
    trend: "1.8% vs last month",
    trendDirection: "up" as const,
  },
  {
    icon: Building2,
    label: "PHCs Connected",
    value: "231/247",
    caption: "Online facilities",
    trend: "2.1% vs yesterday",
    trendDirection: "down" as const,
  },
  {
    icon: Activity,
    label: "Daily Visits",
    value: "12.8K",
    caption: "Patient encounters today",
    trend: "8.3% vs last month",
    trendDirection: "up" as const,
  },
  {
    icon: AlertTriangle,
    label: "Active Alerts",
    value: "7",
    caption: "2 critical · 4 high",
    trend: "40% vs last week",
    trendDirection: "up" as const,
    iconTone: "red" as const,
  },
  {
    icon: Heart,
    label: "Maternal Mortality",
    value: "312",
    caption: "Per 100,000 live births",
    trend: "8.4% vs baseline",
    trendDirection: "down" as const,
    iconTone: "amber" as const,
  },
  {
    icon: ShieldCheck,
    label: "Claim Accuracy",
    value: "94.7%",
    caption: "Fraud detection rate",
    trend: "2.3% vs last month",
    trendDirection: "up" as const,
  },
  {
    icon: Wifi,
    label: "Network Uptime",
    value: "99.2%",
    caption: "All 247 Haske Hubs",
    trend: "0.1% vs last month",
    trendDirection: "up" as const,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}
