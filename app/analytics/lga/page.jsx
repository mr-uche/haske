import TopBar from "@/components/TopBar";
import LGAPerformance from "@/components/LGAPerformance";

export default function LGAPerformancePage() {
  return (
    <>
      <TopBar title="LGA Performance" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <LGAPerformance />
      </main>
    </>
  );
}