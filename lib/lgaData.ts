export type RiskLevel = "critical" | "high" | "moderate" | "low";

export interface LGA {
  name: string;
  risk: RiskLevel;
  activeCases: number;
  population: number; // in thousands
  phcs: number;
  per10k: number;
  density: number; // 0-100 normalized, for radar
}

export const lgaCases: LGA[] = [
  { name: "Hong", risk: "critical", activeCases: 67, population: 201, phcs: 10, per10k: 3.33, density: 78 },
  { name: "Michika", risk: "critical", activeCases: 54, population: 145, phcs: 7, per10k: 3.72, density: 70 },
  { name: "Mubi North", risk: "high", activeCases: 41, population: 189, phcs: 9, per10k: 2.17, density: 60 },
  { name: "Gombi", risk: "high", activeCases: 39, population: 132, phcs: 6, per10k: 2.95, density: 55 },
  { name: "Demsa", risk: "high", activeCases: 34, population: 110, phcs: 5, per10k: 3.09, density: 50 },
  { name: "Madagali", risk: "high", activeCases: 31, population: 98, phcs: 5, per10k: 3.16, density: 48 },
  { name: "Mubi South", risk: "moderate", activeCases: 22, population: 156, phcs: 8, per10k: 1.41, density: 40 },
  { name: "Mayo-Belwa", risk: "moderate", activeCases: 20, population: 121, phcs: 6, per10k: 1.65, density: 38 },
  { name: "Yola South", risk: "moderate", activeCases: 18, population: 210, phcs: 11, per10k: 0.86, density: 35 },
  { name: "Song", risk: "moderate", activeCases: 16, population: 134, phcs: 7, per10k: 1.19, density: 32 },
  { name: "Guyuk", risk: "moderate", activeCases: 14, population: 102, phcs: 5, per10k: 1.37, density: 30 },
  { name: "Lamurde", risk: "moderate", activeCases: 13, population: 87, phcs: 4, per10k: 1.49, density: 28 },
  { name: "Yola North", risk: "low", activeCases: 11, population: 198, phcs: 10, per10k: 0.56, density: 25 },
  { name: "Fufore", risk: "low", activeCases: 10, population: 143, phcs: 7, per10k: 0.70, density: 22 },
  { name: "Girei", risk: "low", activeCases: 9, population: 118, phcs: 6, per10k: 0.76, density: 20 },
  { name: "Numan", risk: "low", activeCases: 8, population: 95, phcs: 5, per10k: 0.84, density: 18 },
  { name: "Jada", risk: "low", activeCases: 7, population: 108, phcs: 5, per10k: 0.65, density: 16 },
  { name: "Ganye", risk: "low", activeCases: 6, population: 124, phcs: 6, per10k: 0.48, density: 15 },
  { name: "Toungo", risk: "low", activeCases: 4, population: 62, phcs: 3, per10k: 0.65, density: 10 },
  { name: "Shelleng", risk: "low", activeCases: 3, population: 89, phcs: 4, per10k: 0.34, density: 8 },
  { name: "Maiha", risk: "low", activeCases: 2, population: 76, phcs: 3, per10k: 0.26, density: 6 },
];

export const lgaData = lgaCases;

export const riskStyles: Record<RiskLevel, { text: string; bg: string }> = {
  critical: { text: "text-red-400", bg: "bg-red-500/15" },
  high: { text: "text-orange-400", bg: "bg-orange-500/15" },
  moderate: { text: "text-yellow-400", bg: "bg-yellow-500/15" },
  low: { text: "text-brand-400", bg: "bg-brand-500/15" },
};

export const barColors: Record<RiskLevel, string> = {
  critical: "#ef4444",
  high: "#f97316",
  moderate: "#eab308",
  low: "#10b981",
};