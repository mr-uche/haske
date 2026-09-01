"use client";

import { useState } from "react";
import { Save, Bell, Phone, Mail, MessageSquare } from "lucide-react";
import { defaultChannels, NotificationChannel } from "./notificationData";

const icons = {
  bell: Bell,
  phone: Phone,
  mail: Mail,
  message: MessageSquare,
};

export default function NotificationsTab() {
  const [channels, setChannels] = useState<NotificationChannel[]>(defaultChannels);
  const [saved, setSaved] = useState(true);

  function toggle(key: string) {
    setChannels((prev) =>
      prev.map((c) => (c.key === key ? { ...c, enabled: !c.enabled } : c))
    );
    setSaved(false);
  }

  function handleSave() {
    // TODO: wire up to API
    setSaved(true);
  }

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Notification Channels</h3>
          <p className="text-xs text-white">
            Choose how outbreak alerts are distributed
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900"
        >
          <Save size={15} />
          {saved ? "Saved" : "Save Settings"}
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {channels.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div
              key={c.key}
              className="flex items-center justify-between rounded-xl border border-surface-border bg-white/[0.02] p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-400 text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                  <p className="text-xs text-white">{c.description}</p>
                </div>
              </div>

                <button
                onClick={() => toggle(c.key)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    c.enabled ? "bg-green-500" : "bg-white/10"
                }`}
                >
                <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    c.enabled ? "translate-x-5" : "translate-x-0"
                    }`}
                />
                </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}