export const claimsSummary = {
    aiValidatedClaims: 4218,
    diagnosisMismatches: 47,
    highOverrideChews: 3,
  };
  
  export interface DiagnosisMismatch {
    patientName: string;
    chew: string;
    aiDiagnosis: string;
    chewDiagnosis: string;
    prescribed: string;
  }
  
  export const diagnosisMismatches: DiagnosisMismatch[] = [
    {
      patientName: "Mallam Usman Bello",
      chew: "CHEW Zainab Garba",
      aiDiagnosis: "Viral Haemorrhagic Fever",
      chewDiagnosis: "Typhoid Fever",
      prescribed: "Ciprofloxacin 500mg BD x 7 days",
    },
  ];
  
  export interface HighOverrideProvider {
    initials: string;
    name: string;
    location: string;
    sessions: number;
    overrideRate: number;
    totalOverrides: number;
  }
  
  export const highOverrideProviders: HighOverrideProvider[] = [
    {
      initials: "CA",
      name: "CHEW Amina Bello",
      location: "Yola South",
      sessions: 241,
      overrideRate: 11,
      totalOverrides: 27,
    },
  ];