import TopBar from "@/components/TopBar";
import AuditLogs from "@/components/AuditLogs";

export default function AuditPage() {
  return (
    <>
      <TopBar title="Audit Logs" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <AuditLogs />
      </main>
    </>
  );
}