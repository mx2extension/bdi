import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import ImpactActions from "@/components/ImpactActions";

export const dynamic = "force-dynamic";

export default async function AdminImpactPage() {
  const supabase = await createClient();
  const { data: stories } = await supabase
    .from("impact_stories")
    .select("*")
    .order("sort_order");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl text-gray-900">Impact Stories</h1>
        <Link
          href="/admin/impact/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Story
        </Link>
      </div>

      {stories && stories.length > 0 ? (
        <div className="space-y-4">
          {stories.map((story) => (
            <div key={story.id} className="border border-gray-200 p-6 hover:border-accent transition-colors group">
              <div className="flex gap-6 pb-6 border-b border-gray-100">
                <span className="font-serif text-4xl text-gray-200 group-hover:text-accent/30 transition-colors">0{String(story.sort_order).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">{story.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{story.description}</p>
                  <ImpactActions id={story.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No impact stories yet.</p>
          <Link href="/admin/impact/new" className="text-primary text-sm font-semibold underline">Add the first story</Link>
        </div>
      )}
    </div>
  );
}