export const paymentSummary = {
    totalSubmitted: "₦45.3K",
    totalApproved: "₦6.3K",
    rejectionRate: "14.3%",
  };
  
  export interface FacilitySettlement {
    facility: string;
    claims: number;
    approvedAmount: string;
    accuracy: number;
  }
  
  export const monthlySettlements: FacilitySettlement[] = [
    { facility: "Yola South PHC", claims: 124, approvedAmount: "₦524,000", accuracy: 95.2 },
    { facility: "Mubi North Central PHC", claims: 89, approvedAmount: "₦387,600", accuracy: 92.1 },
    { facility: "Gombi District PHC", claims: 67, approvedAmount: "₦298,400", accuracy: 97 },
    { facility: "Michika Rural PHC", claims: 43, approvedAmount: "₦178,200", accuracy: 88.4 },
  ];
  
  export function accuracyColor(accuracy: number) {
    if (accuracy >= 95) return "text-brand-400";
    if (accuracy >= 90) return "text-amber-400";
    return "text-orange-400";
  }