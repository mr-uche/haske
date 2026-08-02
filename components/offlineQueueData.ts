export type SyncStatus = "pending" | "failed" | "synced";
export type ItemType = "Encounter" | "Report" | "Patient";

export interface QueueItem {
  type: ItemType;
  title: string;
  detail: string;
  status: SyncStatus;
}

export const awaitingSync: QueueItem[] = [
  {
    type: "Encounter",
    title: "Encounter — Aisha Musa Ibrahim",
    detail: "Malaria · Yola North PHC",
    status: "pending",
  },
  {
    type: "Report",
    title: "Disease Report — Cholera",
    detail: "3 suspected cases · Girei LGA",
    status: "pending",
  },
  {
    type: "Patient",
    title: "New Patient — Mallam Umar Bello",
    detail: "Registration · Yola South",
    status: "failed",
  },
];

export const recentlySynced: QueueItem[] = [
  {
    type: "Encounter",
    title: "Encounter — Fatima Abdullahi",
    detail: "Typhoid · Mubi North PHC",
    status: "synced",
  },
  {
    type: "Report",
    title: "Disease Report — Malaria",
    detail: "7 suspected cases · Lamurde LGA",
    status: "synced",
  },
];

export const queueSummary = {
  pending: awaitingSync.filter((i) => i.status === "pending").length,
  failed: awaitingSync.filter((i) => i.status === "failed").length,
  synced: recentlySynced.length,
};