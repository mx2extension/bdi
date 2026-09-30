import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar container - adjusts automatically for desktop vs mobile */}
      <AdminSidebar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}