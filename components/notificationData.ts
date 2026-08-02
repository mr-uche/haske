export interface NotificationChannel {
    key: string;
    icon: "bell" | "phone" | "mail" | "message";
    title: string;
    description: string;
    enabled: boolean;
  }
  
  export const defaultChannels: NotificationChannel[] = [
    {
      key: "dashboard",
      icon: "bell",
      title: "Dashboard Alerts",
      description: "Real-time in-app alert feed on Command Centre",
      enabled: true,
    },
    {
      key: "sms",
      icon: "phone",
      title: "SMS Notifications",
      description: "Via Africa's Talking — sent to all registered coordinators",
      enabled: true,
    },
    {
      key: "email",
      icon: "mail",
      title: "Email Notifications",
      description: "Sent to state health officials and LGA coordinators",
      enabled: true,
    },
    {
      key: "whatsapp",
      icon: "message",
      title: "WhatsApp Alerts",
      description: "Sent to dedicated health officer WhatsApp groups",
      enabled: true,
    },
  ];