"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function NewCareerPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: [""],
    location: "Bauchi",
    type: "Full-time",
    is_published: false,
  });

  const addRequirement = () => setForm({ ...form, requirements: [...form.requirements, ""] });
  const removeRequirement = (index: number) => {
    setForm({ ...form, requirements: form.requirements.filter((_, i) => i !== index) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("careers").insert([form]);
    if (!error) router.push("/admin/careers");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/careers" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Careers
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Add New Position</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200 mb-6">{error}</div>
        )}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Position Title *</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g., Investment Analyst"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Description *</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Describe the role..."
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Location *</label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g., Bauchi"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Type *</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Position"}
          </button>
          <Link
            href="/admin/careers"
            className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}