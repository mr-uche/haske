import TopBar from "@/components/TopBar";
import SystemSettings from "@/components/SystemSettings";

export default function SettingsPage() {
  return (
    <>
      <TopBar title="System Settings" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <SystemSettings />
      </main>
    </>
  );
}