import TopBar from "@/components/TopBar";
import UserManagement from "@/components/UserManagement";

export default function AdminPage() {
  return (
    <>
      <TopBar title="User Management" subtitle="Adamawa State Ministry of Health" />
      <main className="flex-1 space-y-6 p-8 bg-teal-50">
        <UserManagement />
      </main>
    </>
  );
}