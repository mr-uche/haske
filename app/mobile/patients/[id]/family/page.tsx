import PatientFamily from "@/components/PatientFamily";

export default function PatientFamilyPage({
  params,
}: {
  params: { id: string };
}) {
  return <PatientFamily patientId={params.id} />;
}