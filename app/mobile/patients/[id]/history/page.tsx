import PatientVisitHistory from "@/components/PatientVisitHistory";

export default function PatientVisitHistoryPage({
  params,
}: {
  params: { id: string };
}) {
  return <PatientVisitHistory patientId={params.id} />;
}