export type Role = "Admin" | "Nurse" | "CHEW" | "Epidemiologist";
export type Status = "active" | "inactive" | "locked";

export interface AppUser {
  id: string;
  name: string;
  initials: string;
  role: Role;
  facility: string | null;
  lga: string | null;
  lastActive: string;
  status: Status;
}

export const users: AppUser[] = [
  { id: "u1", name: "Dr. Aminu Bashir", initials: "DA", role: "Admin", facility: null, lga: "State level", lastActive: "141d ago", status: "active" },
  { id: "u2", name: "Nurse Halima Yusuf", initials: "NH", role: "Nurse", facility: "f1", lga: "yola-south", lastActive: "141d ago", status: "active" },
  { id: "u3", name: "CHEW Musa Adamu", initials: "CM", role: "CHEW", facility: "f2", lga: "mubi-north", lastActive: "141d ago", status: "active" },
  { id: "u4", name: "CHEW Zainab Garba", initials: "CZ", role: "CHEW", facility: "f3", lga: "hong", lastActive: "141d ago", status: "inactive" },
  { id: "u5", name: "Dr. Fatima Umar", initials: "DF", role: "Epidemiologist", facility: null, lga: "State level", lastActive: "141d ago", status: "active" },
];

export const roleStyles: Record<Role, string> = {
  Admin: "bg-brand-500/15 text-brand-400",
  Nurse: "bg-purple-500/15 text-purple-400",
  CHEW: "bg-white/10 text-slate-300",
  Epidemiologist: "bg-orange-500/15 text-orange-400",
};