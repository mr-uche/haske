import TopBar from "@/components/TopBar";
import GwarmaiAI from "@/components/GwarmaiAI";

export default function GwarmaiPage() {
  return (
    <>
      <TopBar title="Gwarmai AI" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <GwarmaiAI />
      </main>
    </>
  );
}