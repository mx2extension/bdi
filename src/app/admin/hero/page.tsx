import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, Pencil, GripVertical } from "lucide-react";
import HeroActions from "@/components/HeroActions";

export const dynamic = "force-dynamic";

export default async function AdminHeroPage() {
  const supabase = await createClient();
  const { data: slides } = await supabase
    .from("hero_slides")
    .select("*")
    .order("sort_order");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Hero Slides</h1>
          <p className="text-sm text-gray-500 mt-1">{slides?.length || 0} slides total</p>
        </div>
        <Link
          href="/admin/hero/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Slide
        </Link>
      </div>

      {slides && slides.length > 0 ? (
        <div className="space-y-4">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className="flex items-center gap-6 bg-white border border-gray-200 p-4 hover:shadow-sm transition-shadow"
            >
              <div className="text-gray-300 cursor-grab"><GripVertical className="w-5 h-5" /></div>
              <div className="w-12 text-center text-sm font-semibold text-gray-400">{slide.sort_order || i + 1}</div>
              <div className="w-32 h-20 relative shrink-0 bg-gray-100">
                <img src={slide.image_url} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{slide.title}</p>
                <p className="text-xs text-gray-400 truncate mt-1">{slide.subtitle}</p>
              </div>
              
              <HeroActions id={slide.id} isPublished={slide.is_published} />
              
              <Link
                href={`/admin/hero/${slide.id}`}
                className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline"
              >
                <Pencil className="w-3 h-3 inline mr-1" /> Edit
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No slides yet.</p>
          <Link href="/admin/hero/new" className="text-primary text-sm font-semibold underline">Add the first slide</Link>
        </div>
      )}
    </div>
  );
}