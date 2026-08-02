import PatientCoverage from "@/components/PatientCoverage";

export default function PatientCoveragePage({
  params,
}: {
  params: { id: string };
}) {
  return <PatientCoverage patientId={params.id} />;
}