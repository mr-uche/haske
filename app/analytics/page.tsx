import TopBar from "@/components/TopBar";
import AnalyticsToolbar from "@/components/AnalyticsToolbar";
import PatientVisitsChart from "@/components/PatientVisitsChart";
import EnrolleesChart from "@/components/EnrolleesChart";
import DiseaseOutbreakTrend from "@/components/DiseaseOutbreakTrend";
import DiseaseBreakdown from "@/components/DiseaseBreakdown";

export default function AnalyticsPage() {
  return (
    <>
      <TopBar
        title="Analytics & Reports"
        subtitle="Adamawa State Ministry of Health"
      />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <AnalyticsToolbar />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PatientVisitsChart />
          <EnrolleesChart />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DiseaseOutbreakTrend />
          <DiseaseBreakdown />
        </div>
      </main>
    </>
  );
}