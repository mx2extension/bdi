"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function EditHeroPage() {
  const router = useRouter();
  const params = useParams();
  const slideId = params.id as string;
  const supabase = createClient();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    image_url: "",
    sort_order: 0,
    is_published: false,
  });

  useEffect(() => {
    const fetchSlide = async () => {
      const { data, error } = await supabase
        .from("hero_slides")
        .select("*")
        .eq("id", slideId)
        .single();
      
      if (data) setForm(data);
      if (error) setError("Failed to load slide");
    };
    fetchSlide();
  }, [slideId, supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from("hero_slides")
      .update(form)
      .eq("id", slideId);
    
    if (!error) router.push("/admin/hero");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/hero" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Hero Slides
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Edit Slide</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {error && <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200">{error}</div>}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Title</label>
          <input type="text" required value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full p-4 border border-gray-200 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Subtitle</label>
          <input type="text" value={form.subtitle} onChange={(e) => setForm({...form, subtitle: e.target.value})} className="w-full p-4 border border-gray-200 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Image URL</label>
          <input type="url" required value={form.image_url} onChange={(e) => setForm({...form, image_url: e.target.value})} className="w-full p-4 border border-gray-200 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Sort Order</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm({...form, sort_order: parseInt(e.target.value)})} className="w-full p-4 border border-gray-200 text-sm" />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" checked={form.is_published} onChange={(e) => setForm({...form, is_published: e.target.checked})} className="w-5 h-5 accent-primary" />
          <label className="text-sm">Published</label>
        </div>

        <button type="submit" disabled={loading} className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest">
          {loading ? "Saving..." : "Update Slide"}
        </button>
      </form>
    </div>
  );
}