export type EnrollmentStatus = "active" | "expiring" | "expired";

export interface Enrollment {
  patientName: string;
  aschmaId: string;
  expiry: string;
  lga: string;
  status: EnrollmentStatus;
}

export const enrollments: Enrollment[] = [
  { patientName: "Aisha Musa Ibrahim", aschmaId: "ASC-2024-084721", expiry: "2026-12-31", lga: "Yola North", status: "active" },
  { patientName: "Mallam Usman Bello", aschmaId: "ASC-2024-091234", expiry: "2026-04-01", lga: "Mubi North", status: "expiring" },
  { patientName: "Fatima Al-Hassan", aschmaId: "ASC-2023-067891", expiry: "2026-01-15", lga: "Hong", status: "expired" },
  { patientName: "Ibrahim Adamu Gombe", aschmaId: "ASC-2024-102847", expiry: "2026-11-30", lga: "Gombi", status: "active" },
];

export const enrollmentStatusStyles: Record<EnrollmentStatus, string> = {
  active: "bg-brand-500/15 text-brand-400",
  expiring: "bg-amber-500/15 text-amber-400",
  expired: "bg-red-500/15 text-red-400",
};

export const enrollmentStatusLabels: Record<EnrollmentStatus, string> = {
  active: "Active",
  expiring: "Expiring",
  expired: "Expired",
};