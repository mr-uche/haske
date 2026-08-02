export interface OverrideCase {
    patientName: string;
    chew: string;
    time: string;
    aiSuggested: string;
    aiConfidence: number;
    chewSelected: string;
    chewIcdCode: string;
    overrideReason: string;
  }
  
  export const overrideCases: OverrideCase[] = [
    {
      patientName: "Mallam Usman Bello",
      chew: "CHEW Zainab Garba",
      time: "142d ago",
      aiSuggested: "Viral Haemorrhagic Fever",
      aiConfidence: 78,
      chewSelected: "Typhoid Fever",
      chewIcdCode: "A01.0",
      overrideReason: "Patient has history of typhoid, no hemorrhagic symptoms observed",
    },
  ];
  
  export const oversightSummary = {
    aiOverrides: 1,
    redFlagCases: 4,
    referralsSuggested: 3,
  };