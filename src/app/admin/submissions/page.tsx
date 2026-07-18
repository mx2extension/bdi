import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Plus, Trash2, Eye, EyeOff, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminSubmissionsPage() {
  const supabase = await createClient();
  const { data: submissions } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Contact Submissions</h1>
          <p className="text-sm text-gray-500 mt-1">{submissions?.length || 0} total submissions</p>
        </div>
        <Link
          href="/admin/submissions/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Submission
        </Link>
      </div>

      {submissions && submissions.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Name / Email</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Subject</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Date</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Message</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{sub.name}</td>
                  <td className="p-4 text-gray-500">{sub.email}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(sub.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed line-clamp-2">{sub.message}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={async () => {
                        if (confirm(`Delete submission from ${sub.name}?`)) {
                          const client = await createClient();
                          await client.from("contact_submissions").delete().eq("id", sub.id);
                          window.location.reload();
                        }
                      }}
                      className="text-red-500 text-xs font-semibold uppercase tracking-widest hover:text-red-700 inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5 inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No submissions yet.</p>
          <Link href="/admin/submissions/new" className="text-primary text-sm font-semibold underline">Add a submission</Link>
        </div>
      )}
    </div>
  );
}