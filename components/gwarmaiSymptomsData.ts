import { LucideIcon, Thermometer, Brain, Wind, Utensils, Sparkles, Bone } from "lucide-react";

export interface SymptomCategory {
  key: string;
  label: string;
  icon: LucideIcon;
  symptoms: string[];
}

export const gwarmaiSymptomCategories: SymptomCategory[] = [
  {
    key: "fever",
    label: "Fever & General",
    icon: Thermometer,
    symptoms: ["Fever", "Chills", "Fatigue", "Weakness", "Night sweats", "Weight loss", "Loss of appetite"],
  },
  {
    key: "neuro",
    label: "Head & Neuro",
    icon: Brain,
    symptoms: ["Headache", "Dizziness", "Confusion", "Convulsions", "Stiff neck", "Vision changes", "Fainting"],
  },
  {
    key: "respiratory",
    label: "Respiratory",
    icon: Wind,
    symptoms: ["Cough", "Shortness of breath", "Chest pain", "Wheezing", "Sore throat", "Runny nose", "Nasal congestion"],
  },
  {
    key: "gi",
    label: "GI & Abdomen",
    icon: Utensils,
    symptoms: ["Nausea", "Vomiting", "Diarrhoea", "Abdominal pain", "Bloating", "Blood in stool", "Jaundice"],
  },
  {
    key: "skin",
    label: "Skin",
    icon: Sparkles,
    symptoms: ["Rash", "Itching", "Skin lesions", "Swelling", "Pallor", "Yellowing of skin"],
  },
  {
    key: "musculoskeletal",
    label: "Musculoskeletal",
    icon: Bone,
    symptoms: ["Joint pain", "Muscle pain", "Back pain", "Swollen joints", "Limb weakness"],
  },
];