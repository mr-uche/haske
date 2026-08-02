import TopBar from "@/components/TopBar";
import DiseaseCases from "@/components/DiseaseCases";

export default function DiseaseCasesPage() {
  return (
    <>
      <TopBar title="Disease Cases" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8">
        <DiseaseCases />
      </main>
    </>
  );
}