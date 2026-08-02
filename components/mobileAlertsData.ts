export type AlertSeverity = "critical" | "high" | "moderate";

export interface MobileAlert {
  disease: string;
  location: string;
  cases: number;
  time: string;
  severity: AlertSeverity;
}

export const mobileAlerts: MobileAlert[] = [
  { disease: "Cholera", location: "Hong", cases: 67, time: "143d ago", severity: "critical" },
  { disease: "Lassa Fever", location: "Michika", cases: 54, time: "143d ago", severity: "critical" },
  { disease: "Cholera", location: "Mubi North", cases: 41, time: "143d ago", severity: "high" },
  { disease: "Malaria", location: "Gombi", cases: 38, time: "143d ago", severity: "high" },
  { disease: "Meningitis", location: "Demsa", cases: 33, time: "143d ago", severity: "high" },
  { disease: "Typhoid", location: "Yola South", cases: 19, time: "144d ago", severity: "moderate" },
  { disease: "Malaria", location: "Song", cases: 14, time: "144d ago", severity: "moderate" },
];

export const severityDotColor: Record<AlertSeverity, string> = {
  critical: "bg-red-500",
  high: "bg-orange-500",
  moderate: "bg-amber-500",
};

export const severityTextColor: Record<AlertSeverity, string> = {
  critical: "text-red-400",
  high: "text-orange-400",
  moderate: "text-amber-400",
};

export const severityLabels: Record<AlertSeverity, string> = {
  critical: "Critical",
  high: "High",
  moderate: "Moderate",
};