export interface Facility {
    name: string;
    lga: string;
    status: "online" | "offline";
    chews: number;
    dailyVisits: number;
    lastSync: string;
    hubOffline?: boolean;
  }
  
  export const facilities: Facility[] = [
    { name: "Yola South PHC", lga: "Yola South", status: "online", chews: 8, dailyVisits: 124, lastSync: "141d ago" },
    { name: "Mubi North Central PHC", lga: "Mubi North", status: "online", chews: 6, dailyVisits: 89, lastSync: "141d ago" },
    { name: "Hong General PHC", lga: "Hong", status: "offline", chews: 5, dailyVisits: 0, lastSync: "141d ago", hubOffline: true },
    { name: "Gombi District PHC", lga: "Gombi", status: "online", chews: 7, dailyVisits: 62, lastSync: "141d ago" },
    { name: "Michika Rural PHC", lga: "Michika", status: "online", chews: 4, dailyVisits: 43, lastSync: "141d ago" },
  ];