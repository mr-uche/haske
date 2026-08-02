import Sidebar from "@/components/Sidebar";

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-surface">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
    </div>
  );
}