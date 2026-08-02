export interface Consultation {
    patientName: string;
    location: string;
    chew: string;
    diagnosis: string;
    icdCode: string;
    confidence: number;
    language: string;
    overridden: boolean;
    redFlag: boolean | null; // null = "—" (not applicable)
    feedback: "positive" | "negative" | null;
    time: string;
  }
  
  export const consultations: Consultation[] = [
    {
      patientName: "Aisha Musa Ibrahim",
      location: "Mubi North",
      chew: "CHEW Musa Adamu",
      diagnosis: "Malaria (P. falciparum)",
      icdCode: "B50.9",
      confidence: 87,
      language: "Hausa",
      overridden: false,
      redFlag: true,
      feedback: "positive",
      time: "142d ago",
    },
    {
      patientName: "Mallam Usman Bello",
      location: "Hong General",
      chew: "CHEW Zainab Garba",
      diagnosis: "Viral Haemorrhagic Fever",
      icdCode: "A01.0",
      confidence: 78,
      language: "Hausa",
      overridden: true,
      redFlag: true,
      feedback: "negative",
      time: "142d ago",
    },
    {
      patientName: "Ibrahim Adamu Gombe",
      location: "Yola South",
      chew: "Nurse Halima Yusuf",
      diagnosis: "Hypertension",
      icdCode: "I10",
      confidence: 92,
      language: "English",
      overridden: false,
      redFlag: null,
      feedback: "positive",
      time: "142d ago",
    },
    {
      patientName: "Hauwa Suleiman",
      location: "Yola South",
      chew: "CHEW Amina Bello",
      diagnosis: "Cholera",
      icdCode: "A00.9",
      confidence: 84,
      language: "Hausa",
      overridden: false,
      redFlag: true,
      feedback: "positive",
      time: "142d ago",
    },
    {
      patientName: "Fatima Al-Hassan",
      location: "Mubi North",
      chew: "CHEW Musa Adamu",
      diagnosis: "Meningitis",
      icdCode: "G03.9",
      confidence: 89,
      language: "Fulfulde",
      overridden: false,
      redFlag: true,
      feedback: "positive",
      time: "142d ago",
    },
  ];