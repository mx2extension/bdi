import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft, Download, MapPin, Layers, FileText } from "lucide-react";
import PdfViewer from "@/components/PdfViewer"; // Adjust this path if you saved it elsewhere

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  
  const numericId = parseInt(slug, 10);
  let query = supabase.from("investment_opportunities").select("title, summary, image_url");
  
  const { data: item } = !isNaN(numericId)
    ? await query.eq("id", numericId).maybeSingle()
    : await query.eq("slug", slug).maybeSingle();

  return {
    title: `${item?.title || "Investment Proposal"} | Investment Map`,
    description: item?.summary || "",
    openGraph: { images: item?.image_url ? [item.image_url] : [] },
  };
}

export default async function InvestmentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const supabase = await createClient();
  const numericId = parseInt(slug, 10);

  let query = supabase.from("investment_opportunities").select("*");
  const { data: item, error } = !isNaN(numericId)
    ? await query.eq("id", numericId).maybeSingle()
    : await query.eq("slug", slug).maybeSingle();

  if (error || !item) {
    notFound();
  }

  return (
    <main className="pb-24 overflow-x-hidden bg-white">
      <div className="container mx-auto px-6 pt-32 mb-8 max-w-4xl">
        <Link href="/investment-map" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Investment Map
        </Link>
      </div>

      <header className="container mx-auto px-6 mb-10 max-w-4xl">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          {item.category && (
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded text-gray-700">
              <Layers className="w-3.5 h-3.5" /> {item.category}
            </span>
          )}
          <span className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="w-3.5 h-3.5" /> {item.location || "Bauchi State, Nigeria"}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-gray-900 mb-6 leading-tight">
          {item.title}
        </h1>

        {/* TOP SUMMARY ONLY */}
        {item.summary && (
          <p className="text-lg text-gray-600 leading-relaxed">
            {item.summary}
          </p>
        )}
      </header>

      <div className="container mx-auto px-6 max-w-4xl mb-12">
        <div className="relative h-[350px] sm:h-[480px] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <Image
            src={item.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"}
            alt={item.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-2xl text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Executive Overview &amp; Rationale
            </h2>
            
            {/* DIFFERENT CONTENT DOWN HERE (NO DUPLICATION OF THE TOP SUMMARY) */}
            <div className="text-base text-gray-700 leading-relaxed space-y-6">
              <p>
                This strategic framework proposal has been meticulously prepared to outline the commercial viability, operational requirements, and projected impact vectors associated with this project. By leveraging regional resource advantages and structured policy support mechanisms, this initiative is positioned to deliver sustainable economic value and high-yield returns for prospective investors.
              </p>
              <p>
                Key stakeholders, institutional partners, and qualified investors are encouraged to examine the complete parameters detailed within the accompanying documentation package to evaluate alignment criteria, funding milestones, and phased implementation schedules.
              </p>
            </div>

            {/* PERMANENT SIGNATURE BLOCK */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col items-start">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Signed:</span>
              <span className="font-serif italic text-3xl text-gray-900 tracking-wide font-medium" style={{ fontFamily: "Georgia, serif" }}>
                Chinemerem King
              </span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-gray-900 font-serif font-semibold text-lg">
                <FileText className="w-5 h-5 text-primary" />
                Proposal Package
              </div>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Review the complete pitch deck and operational framework document for detailed figures and strategic parameters.
              </p>

              {item.pdf_url ? (
                // REPLACED WITH OUR IN-APP VIEWER COMPONENT
                <PdfViewer pdfUrl={item.pdf_url} />
              ) : (
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg cursor-not-allowed"
                >
                  Proposal Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}