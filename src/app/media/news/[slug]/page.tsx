import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createBuildClient } from "@/lib/supabase/build";
import { ArrowLeft } from "lucide-react";

// FORCE NEXT.JS TO RENDER SLUGS ON-DEMAND INSTEAD OF 404ing
export const dynamicParams = true;

// Use the build client here (no cookies allowed)
export async function generateStaticParams() {
  try {
    const supabase = createBuildClient();
    const { data: articles } = await supabase.from("news").select("slug");
    return (articles || []).map((a) => ({ slug: a.slug }));
  } catch (error) {
    return [];
  }
}

// Use the server client here (cookies are fine at request time). Notice we AWAIT params!
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: article } = await supabase.from("news").select("title, excerpt, image_url").eq("slug", slug).single();
  return { 
    title: article?.title || "News Article", 
    description: article?.excerpt || "", 
    openGraph: { images: article?.image_url ? [article.image_url] : [] } 
  };
}

// Notice we AWAIT params here too!
export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // THIS IS THE FIX
  
  const supabase = await createClient();
  const { data: article } = await supabase.from("news").select("*").eq("slug", slug).single();
  
  if (!article) notFound();

  const { data: related } = await supabase.from("news").select("slug, title, image_url, published_at").eq("is_published", true).neq("slug", slug).order("published_at", { ascending: false }).limit(3);

  return (
    <main className="pb-24">
      <div className="container mx-auto px-6 pt-32 mb-8">
        <Link href="/media/news" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
      
      <header className="container mx-auto px-6 mb-12 max-w-4xl">
        <span className="text-xs text-accent font-semibold uppercase tracking-widest">
          {new Date(article.published_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </span>
        <h1 className="font-serif text-5xl text-gray-900 mt-4 mb-6">{article.title}</h1>
        {article.excerpt && <p className="text-xl text-gray-500 leading-relaxed">{article.excerpt}</p>}
      </header>
      
      <div className="container mx-auto px-6 max-w-5xl mb-16">
        <div className="relative h-[500px]">
          <Image src={article.image_url} alt={article.title} fill className="object-cover" priority unoptimized />
        </div>
      </div>
      
      <article className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-6 [&_p]:mb-6 [&_a]:text-primary [&_a]:underline" dangerouslySetInnerHTML={{ __html: article.content || "<p>Full article content coming soon.</p>" }} />
      </article>
      
      {related && related.length > 0 && (
        <section className="container mx-auto px-6 max-w-5xl mt-24 pt-16 border-t border-gray-200">
          <h2 className="font-serif text-3xl text-gray-900 mb-10">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <Link key={item.slug} href={`/media/news/${item.slug}`} className="group">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image src={item.image_url} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <span className="text-xs text-accent font-semibold uppercase tracking-widest">
                  {new Date(item.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <h3 className="font-serif text-lg text-gray-900 mt-1 group-hover:text-primary transition-colors">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}