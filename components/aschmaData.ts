export type ClaimStatus = "pending" | "approved" | "rejected" | "flagged";

export interface Claim {
  patientName: string;
  chew: string;
  aschmaId: string;
  diagnosis: string;
  icdCode: string;
  amount: number;
  status: ClaimStatus;
  submitted: string;
}

export const claims: Claim[] = [
  { patientName: "Aisha Musa Ibrahim", chew: "CHEW Musa Adamu", aschmaId: "ASC-2024-084721", diagnosis: "Malaria (P. falciparum)", icdCode: "B50.9", amount: 4500, status: "pending", submitted: "142d ago" },
  { patientName: "Mallam Usman Bello", chew: "CHEW Zainab Garba", aschmaId: "ASC-2024-091234", diagnosis: "Typhoid Fever", icdCode: "A01.0", amount: 6200, status: "flagged", submitted: "142d ago" },
  { patientName: "Ibrahim Adamu Gombe", chew: "Nurse Halima Yusuf", aschmaId: "ASC-2024-102847", diagnosis: "Hypertension", icdCode: "I10", amount: 3800, status: "approved", submitted: "142d ago" },
  { patientName: "Hauwa Suleiman", chew: "CHEW Musa Adamu", aschmaId: "ASC-2024-118392", diagnosis: "Antenatal Care", icdCode: "Z34.0", amount: 8500, status: "pending", submitted: "142d ago" },
  { patientName: "Fatima Al-Hassan", chew: "CHEW Musa Adamu", aschmaId: "ASC-2024-129012", diagnosis: "Meningitis", icdCode: "G03.9", amount: 9200, status: "approved", submitted: "142d ago" },
  { patientName: "Ahmed Ibrahim Yola", chew: "CHEW Amina Bello", aschmaId: "ASC-2024-135678", diagnosis: "Cholera", icdCode: "A00.9", amount: 5100, status: "rejected", submitted: "142d ago" },
  { patientName: "Zainab Umar Michika", chew: "CHEW Hassan Yusuf", aschmaId: "ASC-2024-142309", diagnosis: "Viral Haemorrhagic Fever", icdCode: "A01.9", amount: 12000, status: "flagged", submitted: "142d ago" },
];

export const statusStyles: Record<ClaimStatus, string> = {
  pending: "bg-amber-500/15 text-amber-400",
  approved: "bg-brand-500/15 text-brand-400",
  rejected: "bg-red-500/15 text-red-400",
  flagged: "bg-orange-500/15 text-orange-400",
};