import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      {/* Updated pt-10 to pt-16 to move all content down */}
      <main className="flex-1 overflow-y-auto p-8 pt-16">
        {children}
      </main>
    </div>
  );
}