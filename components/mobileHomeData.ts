export const mobileUser = {
    name: "CHEW Musa Adamu",
    facility: "Mubi North Central PHC",
    date: "Wednesday, 29 July",
    hubOnline: true,
    syncedAgo: "2 min ago",
    notificationCount: 2,
  };
  
  export const mobileStats = {
    todaysEncounters: 12,
    activeAlerts: 2,
    gwarmaiSessions: 8,
    pendingReports: 2,
  };
  
  export interface RecentAlert {
    disease: string;
    location: string;
    time: string;
    severity: "critical" | "high";
  }
  
  export const recentAlerts: RecentAlert[] = [
    { disease: "Cholera", location: "Hong", time: "142d ago", severity: "critical" },
    { disease: "Lassa Fever", location: "Michika", time: "143d ago", severity: "critical" },
    { disease: "Cholera", location: "Mubi North", time: "142d ago", severity: "high" },
  ];