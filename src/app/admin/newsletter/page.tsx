import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import DeleteSubscriberButton from "@/components/DeleteSubscriberButton";

export const dynamic = "force-dynamic";

export default async function AdminNewsletterPage() {
  const supabase = await createClient();
  const { data: subscribers } = await supabase
    .from("newsletter_subscriptions")
    .select("*")
    .order("subscribed_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Newsletter Subscribers</h1>
          <p className="text-sm text-gray-500 mt-1">{subscribers?.length || 0} total subscribers</p>
        </div>
        <Link
          href="/admin/newsletter/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Email
        </Link>
      </div>

      {subscribers && subscribers.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Email Address</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Subscribed Date</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Status</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{sub.email}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(sub.subscribed_at).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${sub.is_active ? "text-green-600" : "text-gray-400"}`}>
                      {sub.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {/* The logic is now encapsulated in this Client Component */}
                    <DeleteSubscriberButton id={sub.id} email={sub.email} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No subscribers yet.</p>
          <Link href="/admin/newsletter/new" className="text-primary text-sm font-semibold underline">Add a subscriber</Link>
        </div>
      )}
    </div>
  );
}