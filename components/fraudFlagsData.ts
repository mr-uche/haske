export const fraudSummary = {
    flaggedClaims: 2,
    fraudRate: "28.6%",
    amountAtRisk: "₦14.0K",
  };
  
  export interface FlaggedClaim {
    patientName: string;
    aschmaId: string;
    amount: string;
    diagnosis: string;
    icdCode: string;
    flagReason: string;
  }
  
  export const flaggedClaims: FlaggedClaim[] = [
    {
      patientName: "Mallam Usman Bello",
      aschmaId: "ASC-2024-091234",
      amount: "₦6,200",
      diagnosis: "Typhoid Fever",
      icdCode: "A01.0",
      flagReason: "Diagnosis-drug mismatch detected by Gwarmai AI",
    },
    {
      patientName: "Mallam Usman Bello",
      aschmaId: "ASC-2024-091234",
      amount: "₦7,800",
      diagnosis: "Diabetes Type 2",
      icdCode: "E11.9",
      flagReason: "Duplicate claim submitted within 7 days",
    },
  ];