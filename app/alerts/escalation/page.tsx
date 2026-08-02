import TopBar from "@/components/TopBar";
import EscalationWorkflow from "@/components/EscalationWorkFlow";

export default function EscalationPage() {
  return (
    <>
      <TopBar  title="Escalation Workflow" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <EscalationWorkflow />
      </main>
    </>
  );
}