export interface StaffMember {
    initials: string;
    name: string;
    encounters: number;
    gwarmaiUses: number;
    gwarmaiPercent: number;
    reports: number;
    aiOverrides: number;
    rating: number; // 0-100
  }
  
  export const staffPerformance: StaffMember[] = [
    { initials: "CM", name: "CHEW Musa Adamu", encounters: 89, gwarmaiUses: 67, gwarmaiPercent: 75, reports: 3, aiOverrides: 2, rating: 94 },
    { initials: "NH", name: "Nurse Halima Yusuf", encounters: 124, gwarmaiUses: 45, gwarmaiPercent: 36, reports: 1, aiOverrides: 0, rating: 98 },
    { initials: "CA", name: "CHEW Amina Bello", encounters: 76, gwarmaiUses: 58, gwarmaiPercent: 76, reports: 2, aiOverrides: 4, rating: 87 },
    { initials: "CZ", name: "CHEW Zainab Garba", encounters: 0, gwarmaiUses: 0, gwarmaiPercent: 0, reports: 0, aiOverrides: 0, rating: 0 },
  ];