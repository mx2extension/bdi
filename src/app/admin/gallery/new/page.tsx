"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function NewGalleryImagePage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    image_url: "",
    caption: "",
    category: "General",
    sort_order: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("gallery").insert([form]);
    if (!error) router.push("/admin/gallery");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/gallery" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Gallery
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Add Gallery Image</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200 mb-6">{error}</div>
        )}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Image URL *</label>
          <input
            type="url"
            required
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors font-mono"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Caption</label>
          <input
            type="text"
            value={form.caption}
            onChange={(e) => setForm({ ...form, caption: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="Describe the image..."
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
            >
              <option value="General">General</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Tourism">Tourism</option>
              <option value="Solid Minerals">Solid Minerals</option>
              <option value="Energy">Energy</option>
              <option value="Infrastructure">Infrastructure</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Sort Order</label>
            <input
              type="number"
              min={1}
              value={form.sort_order}
              onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 1 })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Image"}
          </button>
          <Link
            href="/admin/gallery"
            className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}