export interface DiseaseThreshold {
    name: string;
    value: number;
    min: number;
    max: number;
  }
  
  export const defaultThresholds: DiseaseThreshold[] = [
    { name: "Cholera", value: 50, min: 5, max: 100 },
    { name: "Lassa", value: 30, min: 5, max: 100 },
    { name: "Malaria", value: 30, min: 5, max: 100 },
    { name: "Meningitis", value: 25, min: 5, max: 100 },
  ];