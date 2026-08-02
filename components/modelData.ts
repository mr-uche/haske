export type ModelStatus = "active" | "previous" | "pending";

export interface ModelVersion {
  name: string;
  status: ModelStatus;
  type: string;
  languages: string;
  size: string;
  accuracy: string;
  deployedTo?: number;
  deployedDate?: string;
  note?: string;
}

export const modelVersions: ModelVersion[] = [
  {
    name: "Gwarmal v2.4.1",
    status: "active",
    type: "Diagnostic",
    languages: "Hausa + English",
    size: "847MB",
    accuracy: "91.2%",
    deployedTo: 231,
    deployedDate: "2026-02-15",
  },
  {
    name: "Gwarmal v2.4.0",
    status: "previous",
    type: "Diagnostic",
    languages: "Hausa + English",
    size: "831MB",
    accuracy: "88.7%",
  },
  {
    name: "Whisper-Hausa v1.2",
    status: "active",
    type: "Speech-to-Text",
    languages: "Hausa",
    size: "312MB",
    accuracy: "92.4%",
    deployedTo: 231,
    deployedDate: "2026-02-01",
  },
  {
    name: "Gwarmal v2.5.0-beta",
    status: "pending",
    type: "Diagnostic",
    languages: "Hausa + Fulfulde + English",
    size: "1.2GB",
    accuracy: "93.8%",
    note: "Ready for deployment · Includes Fulfulde language support",
  },
];

export const statusStyles: Record<ModelStatus, string> = {
  active: "bg-brand-500/15 text-brand-400",
  previous: "bg-white/10 text-slate-400",
  pending: "bg-amber-500/15 text-amber-400",
};