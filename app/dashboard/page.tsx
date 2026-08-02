import TopBar from "@/components/TopBar";
import StatsGrid from "@/components/StatsGrid";
import EpidemicHeatMap from "@/components/EpidemicHeatMap";
import ActiveAlerts from "@/components/ActiveAlerts";

export default function CommandCentrePage() {
  return (
    <>
      <TopBar
        title="Command Centre"
        subtitle="Adamawa State Ministry of Health"
      />
      <main className="flex-1 space-y-6 p-8">
        <StatsGrid />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <EpidemicHeatMap />
          <ActiveAlerts />
        </div>
      </main>
    </>
  );
}
