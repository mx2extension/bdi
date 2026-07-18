import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, press releases, and updates from the Bauchi State Development Initiative.",
};

export default async function NewsPage() {
  const supabase = await createClient();
  const { data: news } = await supabase
    .from("news")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return (
    <main className="pb-24 overflow-x-hidden">
      <div className="pt-24 sm:pt-32 min-h-[40vh] pb-16 sm:pb-20 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782101239/2_slt7ei.jpg"
            alt="News"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Press Room</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-4">News & Updates</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Removed reveal-on-scroll to stop it from hiding the list with opacity: 0 on mobile */}
        <div>
          {news && news.length > 0 ? (
            <div className="space-y-0">
              {news.map((article, i) => (
                <Link
                  key={article.id}
                  href={`/media/news/${article.slug}`}
                  className={`flex flex-col md:flex-row gap-8 py-10 ${i !== news.length - 1 ? "border-b border-gray-200" : ""} group hover:bg-gray-50 transition-colors px-4 sm:px-6 -mx-4 sm:-mx-6`}
                >
                  {/* FIX: Removed md:h-auto which caused 0-height collapse on the absolute image */}
                  <div className="w-full md:w-64 h-48 flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 256px"
                    />
                  </div>
                  <div className="flex-1 py-2">
                    {/* FIX: tracking-widest causes horizontal overflow hiding content on small screens */}
                    <span className="text-xs text-accent font-semibold uppercase tracking-normal sm:tracking-widest">
                      {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <h2 className="font-serif text-2xl text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed line-clamp-2">{article.excerpt}</p>
                    <span className="inline-block mt-4 text-primary text-xs font-semibold uppercase tracking-normal sm:tracking-widest">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">No news articles published yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}