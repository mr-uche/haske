import TopBar from "@/components/TopBar";
import FacilityManager from "@/components/FacilityManager";

export default function FacilityPage() {
  return (
    <>
      <TopBar title="Facility Manager" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <FacilityManager />
      </main>
    </>
  );
}