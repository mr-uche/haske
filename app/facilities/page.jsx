import TopBar from "@/components/TopBar";
import FacilitiesOverview from "@/components/FacilitiesOverview";

export default function FacilitiesPage() {
  return (
    <>
      <TopBar title="PHC Facilities" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <FacilitiesOverview />
      </main>
    </>
  );
}