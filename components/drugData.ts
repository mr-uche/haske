export type StockStatus = "adequate" | "low" | "critical";

export interface DrugItem {
  name: string;
  minLabel: string;
  category: string;
  stock: number;
  unit: string;
  min: number;
  max: number; // used to compute the visual bar fill relative to a full stock level
  status: StockStatus;
}

export const drugInventory: DrugItem[] = [
  { name: "Artemether-Lumefantrine", minLabel: "Min: 100 tabs", category: "Antimalarial", stock: 240, unit: "tabs", min: 100, max: 300, status: "adequate" },
  { name: "Oral Rehydration Salts", minLabel: "Min: 50 sachets", category: "Rehydration", stock: 45, unit: "sachets", min: 50, max: 150, status: "low" },
  { name: "Amoxicillin 250mg", minLabel: "Min: 80 caps", category: "Antibiotic", stock: 180, unit: "caps", min: 80, max: 250, status: "adequate" },
  { name: "Paracetamol 500mg", minLabel: "Min: 100 tabs", category: "Analgesic", stock: 12, unit: "tabs", min: 100, max: 300, status: "critical" },
  { name: "Metronidazole 400mg", minLabel: "Min: 60 tabs", category: "Antibiotic", stock: 95, unit: "tabs", min: 60, max: 200, status: "adequate" },
];

export const stockStatusStyles: Record<StockStatus, { badge: string; bar: string; text: string }> = {
  adequate: { badge: "bg-brand-500/15 text-brand-400", bar: "bg-brand-500", text: "text-brand-400" },
  low: { badge: "bg-amber-500/15 text-amber-400", bar: "bg-amber-500", text: "text-amber-400" },
  critical: { badge: "bg-red-500/15 text-red-400", bar: "bg-red-500", text: "text-red-400" },
};