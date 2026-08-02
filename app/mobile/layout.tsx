import MobileBottomNav from "@/components/MobileBottomNav";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white pb-20">
      {children}
      <MobileBottomNav />
    </div>
  );
}