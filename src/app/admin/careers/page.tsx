import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, Pencil } from "lucide-react";
import CareerActions from "@/components/CareerActions";

export const dynamic = "force-dynamic";

export default async function AdminCareersPage() {
  const supabase = await createClient();
  
  const { data: careers } = await supabase
    .from("careers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl text-gray-900">Careers</h1>
        <Link
          href="/admin/careers/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Position
        </Link>
      </div>

      {careers && careers.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Title</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Location</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Type</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((job) => (
                <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{job.title}</td>
                  <td className="p-4 text-gray-500">{job.location}</td>
                  <td className="p-4 text-gray-500">{job.type}</td>
                  <td className="p-4 text-right flex items-center justify-end gap-3">
                    {/* THIS IS THE EDIT LINK */}
                    <Link
                      href={`/admin/careers/${job.id}`}
                      className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </Link>
                    
                    {/* THIS IS THE DELETE BUTTON */}
                    <CareerActions id={job.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No open positions found.</p>
          <Link href="/admin/careers/new" className="text-primary text-sm font-semibold underline">
            Add your first position
          </Link>
        </div>
      )}
    </div>
  );
}