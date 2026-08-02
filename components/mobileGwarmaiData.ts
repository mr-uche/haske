export const gwarmaiStats = {
    todaysSessions: 7,
    avgConfidence: "86%",
    accepted: "6/7",
  };
  
  export const languages = [
    { code: "GB", label: "English" },
    { code: "NG", label: "Hausa" },
    { code: "NG", label: "Fulfulde" },
  ];
  
  export interface RecentSession {
    diagnosis: string;
    patientName: string;
    time: string;
    confidence: number;
  }
  
  export const recentSessions: RecentSession[] = [
    { diagnosis: "Malaria (P. falciparum)", patientName: "Aisha Musa Ibrahim", time: "143d ago", confidence: 87 },
  ];