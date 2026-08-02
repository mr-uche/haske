export interface ServiceStatus {
    name: string;
    icon: "layout" | "database" | "cog" | "cpu" | "bell" | "hardDrive";
    uptime: string;
    latency: string;
    online: boolean;
  }
  
  export const services: ServiceStatus[] = [
    { name: "API Server", icon: "layout", uptime: "99.8%", latency: "42ms", online: true },
    { name: "PostgreSQL", icon: "database", uptime: "99.9%", latency: "8ms", online: true },
    { name: "Redis Cache", icon: "cog", uptime: "100%", latency: "2ms", online: true },
    { name: "AI Engine", icon: "cpu", uptime: "98.2%", latency: "4.8s", online: true },
    { name: "Message Queue", icon: "bell", uptime: "99.5%", latency: "12ms", online: true },
    { name: "File Storage", icon: "hardDrive", uptime: "99.9%", latency: "95ms", online: true },
  ];
  
  export const hubNetwork = {
    total: 5,
    online: 4,
    offline: 1,
  };