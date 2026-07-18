import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createBuildClient } from "@/lib/supabase/build";
import Link from "next/link";

// Use the build client here (no cookies allowed)
export async function generateStaticParams() {
  const supabase = createBuildClient();
  const { data: sectors } = await supabase.from("investment_sectors").select("slug");
  return (sectors || []).map((sector) => ({ slug: sector.slug }));
}

// Notice we AWAIT params!
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: sector } = await supabase.from("investment_sectors").select("title").eq("slug", slug).single();
  return { title: sector?.title || "Investment Sector" };
}

// Notice we AWAIT params!
export default async function InvestmentDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // THIS IS THE FIX
  
  const supabase = await createClient();
  const { data: sector } = await supabase.from("investment_sectors").select("*").eq("slug", slug).single();
  if (!sector) notFound();

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[50vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Opportunity</span>
          <h1 className="font-serif text-6xl text-white mt-4 max-w-3xl">{sector.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed
            [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-6
            [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:text-gray-800 [&_h3]:mt-8 [&_h3]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-600 [&_p]:mb-6"
          dangerouslySetInnerHTML={{ __html: sector.content || sector.short_description }} 
        />
        <div className="mt-16 p-8 bg-gray-50 border-l-4 border-accent">
          <h3 className="font-serif text-xl text-gray-900 mb-2">Interested in this sector?</h3>
          <p className="text-sm text-gray-600 mb-4">Contact our investment team to discuss specific opportunities in {sector.title}.</p>
          <Link href="/contact" className="bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-primary-dark transition-colors inline-block">Contact BDI</Link>
        </div>
      </div>
    </main>
  );
}