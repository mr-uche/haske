export const governanceSummary = {
    modelAccuracy: "91.2%",
    avgResponseTime: "4.2s",
    overrideRate: "12.7%",
    sessionsThisMonth: 891,
  };
  
  export type Rating = "A" | "B" | "C";
  
  export interface ChewAdoption {
    initials: string;
    name: string;
    facility: string;
    sessions: number;
    acceptance: number;
    overrides: number;
    overrideWarning?: boolean;
    rating: Rating;
  }
  
  export const chewAdoption: ChewAdoption[] = [
    { initials: "CM", name: "CHEW Musa Adamu", facility: "Mubi North", sessions: 312, acceptance: 94, overrides: 19, rating: "B" },
    { initials: "NH", name: "Nurse Halima Yusuf", facility: "Yola South", sessions: 287, acceptance: 97, overrides: 9, rating: "A" },
    { initials: "CA", name: "CHEW Amina Bello", facility: "Yola South", sessions: 241, acceptance: 89, overrides: 27, overrideWarning: true, rating: "B" },
    { initials: "CH", name: "CHEW Hassan Yusuf", facility: "Michika", sessions: 198, acceptance: 91, overrides: 18, rating: "B" },
    { initials: "CZ", name: "CHEW Zainab Garba", facility: "Hong", sessions: 12, acceptance: 83, overrides: 2, rating: "C" },
  ];
  
  export const ratingStyles: Record<Rating, string> = {
    A: "bg-brand-500/15 text-brand-400",
    B: "bg-amber-500/15 text-amber-400",
    C: "bg-red-500/15 text-red-400",
  };
  
  export const acceptanceBarColor = (acceptance: number) => {
    if (acceptance >= 95) return "bg-brand-500";
    if (acceptance >= 85) return "bg-amber-500";
    return "bg-red-500";
  };
  
  export interface TrainingSession {
    id: string;
    diagnosis: string;
    confidence: number;
    overrideDetected?: boolean;
  }
  
  export const trainingQueue: TrainingSession[] = [
    { id: "gc1", diagnosis: "Malaria (P. falciparum)", confidence: 87 },
    { id: "gc2", diagnosis: "Viral Haemorrhagic Fever", confidence: 78, overrideDetected: true },
    { id: "gc3", diagnosis: "Hypertension", confidence: 92 },
  ];