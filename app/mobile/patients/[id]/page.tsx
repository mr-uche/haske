import MobilePatientDetail from "@/components/MobilePatientDetail";

export default function MobilePatientDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <MobilePatientDetail patientId={params.id} />;
}