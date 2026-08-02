export interface PastConsultation {
    diagnosis: string;
    patientName: string;
    time: string;
    confidence: number;
    overridden: boolean;
  }
  
  export const pastConsultations: PastConsultation[] = [
    { diagnosis: "Malaria (P. falciparum)", patientName: "Aisha Musa Ibrahim", time: "144d ago", confidence: 87, overridden: false },
    { diagnosis: "Viral Haemorrhagic Fever", patientName: "Mallam Usman Bello", time: "144d ago", confidence: 78, overridden: true },
    { diagnosis: "Hypertension", patientName: "Ibrahim Adamu Gombe", time: "144d ago", confidence: 92, overridden: false },
    { diagnosis: "Cholera", patientName: "Hauwa Suleiman", time: "144d ago", confidence: 84, overridden: false },
    { diagnosis: "Meningitis", patientName: "Fatima Al-Hassan", time: "145d ago", confidence: 89, overridden: false },
  ];