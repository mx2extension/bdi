import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Media Center",
  description: "Access the latest news, press releases, and gallery images from the Bauchi State Development Initiative.",
};

export default async function MediaPage() {
  const supabase = await createClient();
  const [newsRes, galleryRes] = await Promise.all([
    supabase.from("news").select("*").eq("is_published", true).order("published_at", { ascending: false }).limit(3),
    supabase.from("gallery").select("*").order("sort_order").limit(4),
  ]);

  const news = newsRes.data || [];
  const gallery = galleryRes.data || [];

  return (
    /* 1. ADDED overflow-x-hidden to prevent horizontal scroll pushing content off-screen */
    <main className="pb-24 overflow-x-hidden">
      <div className="pt-24 sm:pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Updates</span>
          {/* 2. MADE TITLE RESPONSIVE so it doesn't overflow on small screens */}
          <h1 className="font-serif text-4xl md:text-6xl text-white mt-4">Media Center</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Latest News Section */}
        <div className="mb-24">
          {/* 3. CHANGED FLEX TO STACK ON MOBILE to prevent "All News" link from pushing off-screen */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
            <div>
              <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-2">Press & Updates</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Latest News</h2>
            </div>
            <Link 
              href="/media/news" 
              className="text-primary text-xs font-semibold uppercase tracking-normal sm:tracking-widest inline-flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap"
            >
              All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article) => (
              <Link key={article.id} href={`/media/news/${article.slug}`} className="group">
                <div className="relative h-48 sm:h-56 mb-6 overflow-hidden">
                  <Image src={article.image_url} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {/* 4. REDUCED TRACKING ON MOBILE for the long date string */}
                <span className="text-xs text-accent font-semibold uppercase tracking-normal sm:tracking-widest block">
                  {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <h3 className="font-serif text-xl text-gray-900 mt-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Gallery Preview */}
        <div>
          {/* 3. APPLIED SAME STACKING FLEX FIX TO GALLERY HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
            <div>
              <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-2">Visual Stories</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Gallery</h2>
            </div>
            <Link 
              href="/media/gallery" 
              className="text-primary text-xs font-semibold uppercase tracking-normal sm:tracking-widest inline-flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap"
            >
              Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="relative h-48 group overflow-hidden">
                <Image src={item.image_url} alt={item.caption || "Gallery"} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}