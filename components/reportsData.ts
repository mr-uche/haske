export interface PHCReport {
    title: string;
    dateRange: string;
    totalVisits: number;
    patientEncounters: number;
    diseaseReports: number;
  }
  
  export const phcReports: PHCReport[] = [
    {
      title: "Weekly Activity Report — Week 10, 2026",
      dateRange: "Mar 2 - Mar 8, 2026",
      totalVisits: 667,
      patientEncounters: 332,
      diseaseReports: 7,
    },
    {
      title: "Monthly Summary — February 2026",
      dateRange: "Feb 1 - Feb 28, 2026",
      totalVisits: 2841,
      patientEncounters: 1420,
      diseaseReports: 18,
    },
  ];