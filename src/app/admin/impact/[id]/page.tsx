"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function EditImpactPage() {
  const router = useRouter();
  const params = useParams();
  const storyId = params.id as string;
  const supabase = createClient();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    sort_order: 0,
  });

  useEffect(() => {
    const fetchStory = async () => {
      const { data, error } = await supabase
        .from("impact_stories")
        .select("*")
        .eq("id", storyId)
        .single();
      
      if (data) setForm(data);
      if (error) setError("Failed to load impact story");
    };
    fetchStory();
  }, [storyId, supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from("impact_stories")
      .update(form)
      .eq("id", storyId);
    
    if (!error) router.push("/admin/impact");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/impact" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Impact Stories
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Edit Impact Story</h1>
      
      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        {error && <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200">{error}</div>}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Description</label>
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Sort Order</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          {loading ? "Saving..." : "Update Story"}
        </button>
      </form>
    </div>
  );
}