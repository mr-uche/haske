export interface Facility {
    id: string;
    name: string;
    lga: string;
    status: "online" | "offline";
    chews: number;
    dailyVisits: number;
    lastSync: string;
    hubOffline?: boolean;
    gpsLat: string;
    gpsLng: string;
    syncTimestamp: string;
    hubStatus: string;
  }
  
  export const facilities: Facility[] = [
    { id: "f1", name: "Yola South PHC", lga: "Yola South", status: "online", chews: 8, dailyVisits: 124, lastSync: "141d ago", gpsLat: "9.2°N", gpsLng: "12.49°E", syncTimestamp: "8 Mar 2026", hubStatus: "Connected" },
    { id: "f2", name: "Mubi North Central PHC", lga: "Mubi North", status: "online", chews: 6, dailyVisits: 89, lastSync: "141d ago", gpsLat: "10.27°N", gpsLng: "13.27°E", syncTimestamp: "8 Mar 2026", hubStatus: "Connected" },
    { id: "f3", name: "Hong General PHC", lga: "Hong", status: "offline", chews: 5, dailyVisits: 73, lastSync: "141d ago", hubOffline: true, gpsLat: "10.28°N", gpsLng: "13.0°E", syncTimestamp: "8 Mar 2026", hubStatus: "Disconnected" },
    { id: "f4", name: "Gombi District PHC", lga: "Gombi", status: "online", chews: 7, dailyVisits: 62, lastSync: "141d ago", gpsLat: "10.19°N", gpsLng: "12.77°E", syncTimestamp: "8 Mar 2026", hubStatus: "Connected" },
    { id: "f5", name: "Michika Rural PHC", lga: "Michika", status: "online", chews: 4, dailyVisits: 43, lastSync: "141d ago", gpsLat: "10.6°N", gpsLng: "13.48°E", syncTimestamp: "8 Mar 2026", hubStatus: "Connected" },
  ];