import TopBar from "@/components/TopBar";
import AschmaPortal from "@/components/AschmaPortal";


export default function AschmaPage() {
  return (
    <>
      <TopBar title="ASCHMA Portal" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <AschmaPortal />
      </main>
    </>
  );
}