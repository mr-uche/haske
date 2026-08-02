export type PatientMobileStatus = "active" | "expiring" | "expired";

export interface MobilePatient {
  id: string;
  initials: string;
  name: string;
  aschmaId: string;
  age: number;
  gender: string;
  lga: string;
  status: PatientMobileStatus;
  phone: string;
  coverageExpiry: string;
}

export const mobilePatients: MobilePatient[] = [
  { id: "p1", initials: "AM", name: "Aisha Musa Ibrahim", aschmaId: "ASC-2024-084721", age: 34, gender: "female", lga: "Yola North", status: "active", phone: "08012345678", coverageExpiry: "2026-12-31" },
  { id: "p2", initials: "MU", name: "Mallam Usman Bello", aschmaId: "ASC-2024-091234", age: 52, gender: "male", lga: "Mubi North", status: "expiring", phone: "08023456789", coverageExpiry: "2026-04-01" },
  { id: "p3", initials: "FA", name: "Fatima Al-Hassan", aschmaId: "ASC-2023-067891", age: 28, gender: "female", lga: "Hong", status: "expired", phone: "08034567890", coverageExpiry: "2026-01-15" },
  { id: "p4", initials: "IA", name: "Ibrahim Adamu Gombe", aschmaId: "ASC-2024-102847", age: 41, gender: "male", lga: "Gombi", status: "active", phone: "08045678901", coverageExpiry: "2026-11-30" },
  { id: "p5", initials: "HS", name: "Hauwa Suleiman", aschmaId: "ASC-2024-118392", age: 25, gender: "female", lga: "Yola South", status: "active", phone: "08056789012", coverageExpiry: "2026-09-20" },
];

export const statusStyles: Record<PatientMobileStatus, string> = {
  active: "text-brand-400",
  expiring: "text-amber-400",
  expired: "text-red-400",
};

export const statusLabels: Record<PatientMobileStatus, string> = {
  active: "Active",
  expiring: "Expiring",
  expired: "Expired",
};

export const statusBadgeStyles: Record<PatientMobileStatus, string> = {
  active: "bg-brand-500/15 text-brand-400",
  expiring: "bg-amber-500/15 text-amber-400",
  expired: "bg-red-500/15 text-red-400",
};

export interface AISession {
  diagnosis: string;
  chew: string;
  time: string;
  confidence: number;
}

export const patientAISessions: Record<string, AISession[]> = {
  p1: [{ diagnosis: "Malaria (P. falciparum)", chew: "CHEW Musa Adamu", time: "142d ago", confidence: 87 }],
};

export interface BenefitItem {
  label: string;
  covered: boolean;
}

export const patientBenefits: Record<string, BenefitItem[]> = {
    p1: [
      { label: "Outpatient Consultations", covered: true },
      { label: "Laboratory Tests", covered: true },
      { label: "Essential Medicines", covered: true },
      { label: "Antenatal Care", covered: true },
      { label: "Inpatient Admissions", covered: true },
      { label: "Surgical Procedures", covered: false },
      { label: "Specialist Referrals", covered: true },
    ],
    p2: [
      { label: "Outpatient Consultations", covered: true },
      { label: "Laboratory Tests", covered: true },
      { label: "Essential Medicines", covered: true },
      { label: "Antenatal Care", covered: false },
      { label: "Inpatient Admissions", covered: true },
      { label: "Surgical Procedures", covered: false },
      { label: "Specialist Referrals", covered: true },
    ],
    p3: [
      { label: "Outpatient Consultations", covered: false },
      { label: "Laboratory Tests", covered: false },
      { label: "Essential Medicines", covered: false },
      { label: "Antenatal Care", covered: false },
      { label: "Inpatient Admissions", covered: false },
      { label: "Surgical Procedures", covered: false },
      { label: "Specialist Referrals", covered: false },
    ],
    p4: [
      { label: "Outpatient Consultations", covered: true },
      { label: "Laboratory Tests", covered: true },
      { label: "Essential Medicines", covered: true },
      { label: "Antenatal Care", covered: true },
      { label: "Inpatient Admissions", covered: true },
      { label: "Surgical Procedures", covered: true },
      { label: "Specialist Referrals", covered: true },
    ],
    p5: [
      { label: "Outpatient Consultations", covered: true },
      { label: "Laboratory Tests", covered: true },
      { label: "Essential Medicines", covered: true },
      { label: "Antenatal Care", covered: true },
      { label: "Inpatient Admissions", covered: false },
      { label: "Surgical Procedures", covered: false },
      { label: "Specialist Referrals", covered: true },
    ],
  };

  export type FamilyStatus = "active" | "expiring" | "expired";

export interface FamilyMember {
  initials: string;
  name: string;
  relation: string;
  age: number;
  aschmaId: string;
  status: FamilyStatus;
}

export const patientFamily: Record<string, FamilyMember[]> = {
  p1: [
    { initials: "MU", name: "Mallam Usman Bello", relation: "Spouse", age: 34, aschmaId: "ASC-2024-091234", status: "active" },
    { initials: "ZU", name: "Zainab Usman", relation: "Child", age: 7, aschmaId: "ASC-2024-091235", status: "active" },
    { initials: "YU", name: "Yusuf Usman", relation: "Child", age: 4, aschmaId: "ASC-2024-091236", status: "expiring" },
  ],
  p2: [
    { initials: "AI", name: "Aisha Musa Ibrahim", relation: "Spouse", age: 34, aschmaId: "ASC-2024-084721", status: "active" },
  ],
  p3: [],
  p4: [
    { initials: "HG", name: "Hadiza Gombe", relation: "Spouse", age: 38, aschmaId: "ASC-2024-102848", status: "active" },
    { initials: "SG", name: "Sadiq Gombe", relation: "Child", age: 9, aschmaId: "ASC-2024-102849", status: "active" },
  ],
  p5: [],
};

export const familyStatusStyles: Record<FamilyStatus, string> = {
  active: "text-brand-400",
  expiring: "text-amber-400",
  expired: "text-red-400",
};

export const familyStatusLabels: Record<FamilyStatus, string> = {
  active: "Active",
  expiring: "Expiring",
  expired: "Expired",
};

export type VisitType = "consultation" | "gwarmai" | "prescription" | "antenatal";

export interface VisitHistoryItem {
  type: VisitType;
  title: string;
  provider: string;
  date: string;
}

export const patientVisitHistory: Record<string, VisitHistoryItem[]> = {
    p1: [
      { type: "consultation", title: "General Consultation", provider: "CHEW Musa Adamu", date: "8 Mar 2026" },
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Musa Adamu", date: "8 Mar 2026" },
      { type: "prescription", title: "Prescription Issued", provider: "CHEW Musa Adamu", date: "8 Mar 2026" },
      { type: "antenatal", title: "Antenatal Visit (ANC 2)", provider: "Nurse Halima Yusuf", date: "14 Feb 2026" },
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Musa Adamu", date: "20 Dec 2025" },
      { type: "consultation", title: "General Consultation", provider: "CHEW Amina Bello", date: "5 Oct 2025" },
    ],
    p2: [
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Zainab Garba", date: "6 Mar 2026" },
      { type: "consultation", title: "Follow-up Consultation", provider: "CHEW Zainab Garba", date: "6 Mar 2026" },
      { type: "prescription", title: "Prescription Issued", provider: "CHEW Zainab Garba", date: "6 Mar 2026" },
      { type: "consultation", title: "General Consultation", provider: "Nurse Halima Yusuf", date: "12 Jan 2026" },
    ],
    p3: [
      { type: "consultation", title: "General Consultation", provider: "CHEW Musa Adamu", date: "8 Mar 2026" },
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Musa Adamu", date: "8 Mar 2026" },
    ],
    p4: [
      { type: "consultation", title: "General Consultation", provider: "Nurse Halima Yusuf", date: "2 Mar 2026" },
      { type: "prescription", title: "Prescription Issued", provider: "Nurse Halima Yusuf", date: "2 Mar 2026" },
      { type: "consultation", title: "Follow-up Consultation", provider: "Nurse Halima Yusuf", date: "18 Feb 2026" },
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Hassan Yusuf", date: "3 Jan 2026" },
      { type: "consultation", title: "General Consultation", provider: "CHEW Hassan Yusuf", date: "11 Nov 2025" },
    ],
    p5: [
      { type: "antenatal", title: "Antenatal Visit (ANC 1)", provider: "Nurse Halima Yusuf", date: "9 Mar 2026" },
      { type: "consultation", title: "General Consultation", provider: "CHEW Musa Adamu", date: "20 Feb 2026" },
      { type: "gwarmai", title: "Gwarmai AI Session", provider: "CHEW Musa Adamu", date: "20 Feb 2026" },
    ],
  };

export const visitTypeStyles: Record<VisitType, { bg: string; text: string }> = {
  consultation: { bg: "bg-brand-500/15", text: "text-brand-400" },
  gwarmai: { bg: "bg-blue-500/15", text: "text-blue-400" },
  prescription: { bg: "bg-purple-500/15", text: "text-purple-400" },
  antenatal: { bg: "bg-brand-500/15", text: "text-brand-400" },
};