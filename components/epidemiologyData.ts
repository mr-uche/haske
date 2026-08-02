export type PatternStatus = "escalating" | "stable" | "new";

export interface DiseasePattern {
  name: string;
  status: PatternStatus;
  location: string;
  cases: number;
  aiConfidence: number;
}

export const diseasePatterns: DiseasePattern[] = [
  { name: "Cholera cluster", status: "escalating", location: "Hong", cases: 67, aiConfidence: 94 },
  { name: "Lassa Fever spread", status: "escalating", location: "Michika → Madagali", cases: 12, aiConfidence: 87 },
  { name: "Malaria seasonal surge", status: "stable", location: "Gombi", cases: 38, aiConfidence: 91 },
  { name: "Meningitis cluster", status: "new", location: "Demsa", cases: 9, aiConfidence: 72 },
];

export const patternStatusStyles: Record<PatternStatus, string> = {
  escalating: "bg-red-500/15 text-red-400",
  stable: "bg-brand-500/15 text-brand-400",
  new: "bg-amber-500/15 text-amber-400",
};

export interface DiseaseBurden {
  lga: string;
  primary: number; // orange segment
  secondary: number; // red segment
}

export const diseaseBurden: DiseaseBurden[] = [
  { lga: "Hong", primary: 20, secondary: 47 },
  { lga: "Michika", primary: 10, secondary: 44 },
  { lga: "Mubi N", primary: 41, secondary: 0 },
  { lga: "Gombi", primary: 38, secondary: 0 },
  { lga: "Demsa", primary: 29, secondary: 0 },
];

export interface SymptomCorrelation {
  symptom: string;
  disease: string;
  daysBefore: string;
  matchRate: number;
}

export const symptomCorrelations: SymptomCorrelation[] = [
  { symptom: "Profuse watery diarrhoea", disease: "Cholera", daysBefore: "3 days before outbreak", matchRate: 94 },
  { symptom: "Fever + haemorrhagic signs", disease: "Lassa Fever", daysBefore: "5 days before outbreak", matchRate: 87 },
  { symptom: "Fever + stiff neck", disease: "Meningitis", daysBefore: "2 days before outbreak", matchRate: 91 },
  { symptom: "High fever + chills", disease: "Malaria", daysBefore: "1 day before outbreak", matchRate: 89 },
];