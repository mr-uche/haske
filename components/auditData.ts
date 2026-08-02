export type ActionType = "login" | "alert ack" | "create" | "lock" | "view";
export type LogStatus = "success" | "warning" | "failed";

export interface AuditLog {
  action: ActionType;
  userName: string;
  userId: string;
  resource: string;
  detail: string;
  status: LogStatus;
  ip: string;
  time: string;
}

export const auditLogs: AuditLog[] = [
  { action: "login", userName: "Dr. Aminu Bashir", userId: "u1", resource: "Auth", detail: "Admin login from Yola office", status: "success", ip: "197.210.xx.xx", time: "141d ago" },
  { action: "alert ack", userName: "Dr. Fatima Umar", userId: "u5", resource: "Alert #a3", detail: "Acknowledged Cholera alert — Mubi North", status: "success", ip: "197.210.xx.xx", time: "141d ago" },
  { action: "create", userName: "CHEW Musa Adamu", userId: "u3", resource: "Disease Case", detail: "Reported Lassa Fever case — Michika PHC", status: "success", ip: "41.58.xx.xx", time: "141d ago" },
  { action: "lock", userName: "Dr. Aminu Bashir", userId: "u1", resource: "User u10", detail: "Locked CHEW Hassan Yusuf — 5 failed login attempts", status: "warning", ip: "197.210.xx.xx", time: "141d ago" },
  { action: "view", userName: "Nurse Halima Yusuf", userId: "u2", resource: "Patient p3", detail: "Viewed patient profile — Fatima Al-Hassan", status: "success", ip: "41.58.xx.xx", time: "141d ago" },
];

export const actionStyles: Record<ActionType, string> = {
  login: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  "alert ack": "border-brand-500/30 bg-brand-500/10 text-brand-400",
  create: "border-brand-500/30 bg-brand-500/10 text-brand-400",
  lock: "border-red-500/30 bg-red-500/10 text-red-400",
  view: "border-blue-500/30 bg-blue-500/10 text-blue-400",
};

export const statusStyles: Record<LogStatus, string> = {
  success: "text-brand-400",
  warning: "text-amber-400",
  failed: "text-red-400",
};