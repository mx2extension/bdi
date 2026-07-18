import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Newspaper, Image, Briefcase, Heart, Users, FileText, Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  const [newsCount, heroCount, projectCount, impactCount, careerCount, newsletterCount, submissionCount, galleryCount] = await Promise.all([
    supabase.from("news").select("id", { count: "exact", head: true }),
    supabase.from("hero_slides").select("id", { count: "exact", head: true }),
    supabase.from("projects").select("id", { count: "exact", head: true }),
    supabase.from("impact_stories").select("id", { count: "exact", head: true }),
    supabase.from("careers").select("id", { count: "exact", head: true }),
    supabase.from("newsletter_subscriptions").select("id", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
    supabase.from("gallery").select("id", { count: "exact", head: true }),
  ]);

  const cards = [
    { title: "News Articles", count: newsCount?.count || 0, href: "/admin/news", icon: Newspaper, color: "bg-blue-500" },
    { title: "Hero Slides", count: heroCount?.count || 0, href: "/admin/hero", icon: Image, color: "bg-green-500" },
    { title: "Projects", count: projectCount?.count || 0, href: "/admin/projects", icon: Briefcase, color: "bg-purple-500" },
    { title: "Impact Stories", count: impactCount?.count || 0, href: "/admin/impact", icon: Heart, color: "bg-orange-500" },
    { title: "Careers", count: careerCount?.count || 0, href: "/admin/careers", icon: Users, color: "bg-pink-500" },
    { title: "Newsletter", count: newsletterCount?.count || 0, href: "/admin/newsletter", icon: Mail, color: "bg-cyan-500" },
    { title: "Submissions", count: submissionCount?.count || 0, href: "/admin/submissions", icon: FileText, color: "bg-gray-500" },
    { title: "Gallery", count: galleryCount?.count || 0, href: "/admin/gallery", icon: Image, color: "bg-red-500" },
  ];

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Overview of your website content</p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          + Add Content
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`${card.color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-3`}
          >
            <card.icon className="w-8 h-8 text-white" />
            <div>
              <h3 className="font-sans text-2xl font-bold text-white">{card.count}</h3>
              <p className="text-white/70 text-xs uppercase tracking-widest">{card.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}