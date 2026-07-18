"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function EditCareerPage() {
  const router = useRouter();
  const params = useParams();
  const careerId = params.id as string;
  const supabase = createClient();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
    requirements: [] as string[],
  });

  useEffect(() => {
    const fetchCareer = async () => {
      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .eq("id", careerId)
        .single();
      
      if (data) setForm(data);
      if (error) setError("Failed to load position");
    };
    fetchCareer();
  }, [careerId, supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from("careers")
      .update(form)
      .eq("id", careerId);
    
    if (!error) router.push("/admin/careers");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/careers" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Careers
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Edit Position</h1>
      
      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        {error && <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200">{error}</div>}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Job Title *</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Type</label>
            <input
              type="text"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g., Full-time"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Description</label>
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Requirements (one per line)</label>
          <textarea
            rows={4}
            value={form.requirements?.join("\n") || ""}
            onChange={(e) => setForm({ ...form, requirements: e.target.value.split("\n") })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Requirement 1&#10;Requirement 2"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : "Update Position"}
        </button>
      </form>
    </div>
  );
}