"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft } from "lucide-react";

export default function NewNewsletterEmailPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const { error } = await supabase.from("newsletter_subscriptions").insert([{ email }]);
    
    if (!error) router.push("/admin/newsletter");
    else setError(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Link href="/admin/newsletter" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Subscribers
      </Link>
      <h1 className="font-serif text-3xl text-gray-900 mb-8">Add Subscriber Manually</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-4 border border-red-200 mb-6">{error}</div>
        )}
        
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="user@example.com"
          />
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Subscriber"}
          </button>
          <Link
            href="/admin/newsletter"
            className="px-10 py-4 text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}