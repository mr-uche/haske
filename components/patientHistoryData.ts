export interface PatientAIProfile {
    name: string;
    aschmaId: string;
    gender: string;
    age: number;
    location: string;
    totalSessions: number;
    aiAccepted: number;
    overridden: number;
  }
  
  export const patientProfile: PatientAIProfile = {
    name: "Aisha Musa Ibrahim",
    aschmaId: "ASC-2024-084721",
    gender: "Female",
    age: 28,
    location: "Yola South",
    totalSessions: 4,
    aiAccepted: 3,
    overridden: 1,
  };
  
  export const confidenceTrend = [
    { date: "Oct 2025", confidence: 78 },
    { date: "Dec 2025", confidence: 86 },
    { date: "Feb 2026", confidence: 86 },
    { date: "Mar 2026", confidence: 87 },
  ];
  
  export interface ConsultationHistoryItem {
    diagnosis: string;
    tags: { label: string; type: "redFlag" | "overridden" }[];
    chew: string;
    date: string;
    confidence: number;
  }
  
  export const consultationHistory: ConsultationHistoryItem[] = [
    {
      diagnosis: "Malaria (P. falciparum)",
      tags: [{ label: "Red Flag", type: "redFlag" }],
      chew: "CHEW Musa Adamu",
      date: "8 Mar 2026",
      confidence: 87,
    },
    {
      diagnosis: "Malaria (P. falciparum)",
      tags: [{ label: "Red Flag", type: "redFlag" }],
      chew: "CHEW Musa Adamu",
      date: "8 Mar 2026",
      confidence: 87,
    },
    {
      diagnosis: "Viral Haemorrhagic Fever",
      tags: [
        { label: "Overridden → Typhoid Fever", type: "overridden" },
        { label: "Red Flag", type: "redFlag" },
      ],
      chew: "CHEW Zainab Garba",
      date: "8 Mar 2026",
      confidence: 78,
    },
  ];