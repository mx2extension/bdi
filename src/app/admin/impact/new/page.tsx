"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function NewImpactStoryPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    metric: "",
    sort_order: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("impact_stories").insert([form]);
    if (!error) router.push("/admin/impact");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/impact" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Stories
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Add Impact Story</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200 mb-6">{error}</div>
        )}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Title *</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g., Community Empowerment"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Description *</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Describe the impact achieved..."
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Metric (e.g. "5,000+ Youth Trained")</label>
            <input
              type="text"
              value={form.metric}
              onChange={(e) => setForm({ ...form, metric: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="5,000+ Youth Trained"
            />
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
            {loading ? "Saving..." : "Save Story"}
          </button>
          <Link
            href="/admin/impact"
            className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}