import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus } from "lucide-react";
import DeleteGalleryButton from "@/components/DeleteGalleryButton";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data: images } = await supabase.from("gallery").select("*").order("sort_order");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl text-gray-900">Gallery</h1>
        <Link
          href="/admin/gallery/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Image
        </Link>
      </div>

      {images && images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative aspect-square bg-gray-100 overflow-hidden border border-gray-200 group hover:shadow-lg transition-shadow">
              <img src={img.image_url} alt={img.caption || "Gallery"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
              {/* Insert the delete button here */}
              <DeleteGalleryButton id={img.id} />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3 pointer-events-none">
                <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No gallery images yet.</p>
          <Link href="/admin/gallery/new" className="text-primary text-sm font-semibold underline">Add the first image</Link>
        </div>
      )}
    </div>
  );
}