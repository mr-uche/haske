export interface ConfigSetting {
    title: string;
    description: string;
    value: string;
  }
  
  export const configSettings: ConfigSetting[] = [
    {
      title: "Minimum Confidence Threshold",
      description: "Below this, Gwarmai flags uncertainty",
      value: "70%",
    },
    {
      title: "Red Flag Confidence Ceiling",
      description: "Above this confidence, auto-generate red flag alert",
      value: "85%",
    },
    {
      title: "Auto-referral Threshold",
      description: "Conditions that always trigger referral suggestion",
      value: "Meningitis, VHF, Cholera",
    },
    {
      title: "Override Audit Threshold",
      description: "Override rate % that triggers governance review",
      value: "15%",
    },
    {
      title: "Primary Language",
      description: "Default consultation language",
      value: "Hausa",
    },
    {
      title: "Fallback Language",
      description: "Used if primary language model fails",
      value: "English",
    },
  ];
  
  export type AuditActionType =
    | "validated"
    | "flagged"
    | "training"
    | "deployed"
    | "overrideAlert"
    | "configUpdated";
  
  export interface GovernanceAuditEntry {
    action: string;
    actionType: AuditActionType;
    actor: string;
    detail: string;
    time: string;
  }
  
  export const governanceAuditLog: GovernanceAuditEntry[] = [
    { action: "Session Validated", actionType: "validated", actor: "Dr. Aminu Bello", detail: "Session gc3 — Hypertension", time: "142d ago" },
    { action: "Session Flagged", actionType: "flagged", actor: "Dr. Aminu Bello", detail: "Session gc2 — VHF Override", time: "142d ago" },
    { action: "Added to Training Data", actionType: "training", actor: "System (Auto)", detail: "Session gc1 — Malaria", time: "142d ago" },
    { action: "Model Deployed", actionType: "deployed", actor: "Admin", detail: "Gwarmai v2.4.1 → 231 Haske Hubs", time: "163d ago" },
    { action: "Override Rate Alert", actionType: "overrideAlert", actor: "System", detail: "CHEW Amina Bello — 17% override rate", time: "142d ago" },
    { action: "Config Updated", actionType: "configUpdated", actor: "Admin", detail: "Red Flag threshold changed 80% → 85%", time: "149d ago" },
  ];