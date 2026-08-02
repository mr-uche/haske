import TopBar from "@/components/TopBar";
import AlertCentre from "@/components/AlertCentre";

export default function AlertsPage() {
  return (
    <>
      <TopBar title="Alert Centre" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <AlertCentre />
      </main>
    </>
  );
}