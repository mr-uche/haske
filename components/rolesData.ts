export const modules = [
    "Dashboard",
    "Heatmap",
    "Alerts",
    "Cases",
    "Analytics",
    "Facilities",
    "Gwarmai",
    "ASCHMA",
    "Users",
    "Audit",
    "Settings",
  ] as const;
  
  export type Module = (typeof modules)[number];
  
  export interface RolePermissions {
    name: string;
    color: string;
    permissions: Record<Module, boolean>;
  }
  
  const allTrue = Object.fromEntries(modules.map((m) => [m, true])) as Record<Module, boolean>;
  
  export const roles: RolePermissions[] = [
    {
      name: "Admin",
      color: "bg-brand-500/15 text-brand-400",
      permissions: allTrue,
    },
    {
      name: "Epidemiologist",
      color: "bg-orange-500/15 text-orange-400",
      permissions: {
        Dashboard: true, Heatmap: true, Alerts: true, Cases: true, Analytics: true,
        Facilities: true, Gwarmai: true, ASCHMA: false, Users: false, Audit: false, Settings: false,
      },
    },
    {
      name: "Doctor",
      color: "bg-blue-500/15 text-blue-400",
      permissions: {
        Dashboard: true, Heatmap: false, Alerts: true, Cases: true, Analytics: false,
        Facilities: false, Gwarmai: true, ASCHMA: false, Users: false, Audit: false, Settings: false,
      },
    },
    {
      name: "Nurse",
      color: "bg-purple-500/15 text-purple-400",
      permissions: {
        Dashboard: true, Heatmap: false, Alerts: true, Cases: true, Analytics: false,
        Facilities: false, Gwarmai: true, ASCHMA: false, Users: false, Audit: false, Settings: false,
      },
    },
    {
      name: "CHEW",
      color: "bg-white/10 text-slate-300",
      permissions: {
        Dashboard: true, Heatmap: false, Alerts: true, Cases: true, Analytics: false,
        Facilities: false, Gwarmai: true, ASCHMA: false, Users: false, Audit: false, Settings: false,
      },
    },
    {
      name: "ASCHMA Staff",
      color: "bg-orange-500/15 text-orange-400",
      permissions: {
        Dashboard: false, Heatmap: false, Alerts: false, Cases: false, Analytics: true,
        Facilities: false, Gwarmai: false, ASCHMA: true, Users: false, Audit: false, Settings: false,
      },
    },
  ];