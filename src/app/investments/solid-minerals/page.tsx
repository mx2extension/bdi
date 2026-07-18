import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentBriefCard from "@/components/DocumentBriefCard";

export const metadata: Metadata = {
  title: "Solid Minerals Investment",
  description: "Bauchi State holds over 60 varieties of solid minerals including limestone, kaolin, gold, and recent hydrocarbon discoveries.",
};

const mineralCategories = [
  {
    title: "Metallic",
    minerals: "Lead/Zinc, Cassiterite, Tantalites, Wolframite, Iron Ore, Bismuth, Rutile",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783783821/cassiterite-twin-krupka-czech-republic_bpolwx.jpg",
  },
  {
    title: "Industrial",
    minerals: "Kaolin, Limestone, Gypsum, Clay, Quartz, Silica sand, Graphite",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Gemstones",
    minerals: "Beryl, Gold, Tourmaline, and other precious stones found across the state",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782106051/images_morqn7.jpg",
  },
  {
    title: "Evaporites & Energy",
    minerals: "Salt, Brine, Hydrocarbon/Petroleum, and Uranium deposits",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783784239/images_owdnxb.jpg",
  },
];

export default async function SolidMineralsPage() {
  const supabase = await createClient();
  const { data: briefs } = await supabase
    .from("investment_briefs")
    .select("*")
    .eq("sector_slug", "solid-minerals")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1]">
          <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" alt="Solid Minerals" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Sector</span>
          <h1 className="font-serif text-6xl text-white mt-4">Solid Minerals</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="reveal-on-scroll mb-16">
          <h2 className="font-serif text-3xl text-gray-900 mb-6">Mineral Wealth</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Bauchi State boasts large deposits of solid minerals, with over 60 different varieties. Recent discoveries include hydrocarbon deposits. While the sector is currently dominated by artisanal miners, the Bauchi Mining Synergy and Exploration Limited has been set up to promote Public-Private Partnerships.</p>
          <p className="text-gray-600 leading-relaxed">The abundance of high-quality gypsum and limestone has already attracted over $1.5M in investment towards the establishment of a cement production company. The state is also blessed with substantial Hydrocarbon/Petroleum and Uranium deposits.</p>
        </div>

        <div className="reveal-on-scroll mb-24">
          <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Categories</span>
          <h2 className="font-serif text-3xl text-gray-900 mb-8">Mineral Varieties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mineralCategories.map((cat, i) => (
              <div key={cat.title} className="border border-gray-200 overflow-hidden hover:border-accent transition-colors group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 font-serif text-lg text-white">{cat.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.minerals}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {briefs && briefs.length > 0 && (
          <div className="mb-24">
            <div className="reveal-on-scroll text-center mb-12">
              <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Due Diligence</span>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Investment Brief</h2>
              <div className="w-10 h-px bg-accent mx-auto"></div>
            </div>
            <div className="reveal-on-scroll max-w-2xl mx-auto" style={{ transitionDelay: "100ms" }}>
              {briefs.map((brief) => (
                <DocumentBriefCard
                  key={brief.id}
                  title={brief.title}
                  description={brief.short_description}
                  documentUrl={brief.document_url}
                  fileType={brief.file_type}
                  fileSize={brief.file_size}
                />
              ))}
            </div>
          </div>
        )}

        <div className="reveal-on-scroll bg-primary-dark p-12 text-white">
          <h2 className="font-serif text-3xl mb-8">Incentives on Solid Minerals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Tax Exemption for the first three years of operation",
              "Custom and Import Duty Exemption on plant and machinery",
              "Tax Relief at 20% for Companies Income Tax (instead of 30%)",
              "95% Accelerated Capital Allowance in the first year",
              "Investment Tax Relief Allowance",
              "Provision of land at concessional rates"
            ].map((incentive) => (
              <div key={incentive} className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span className="text-white/80 text-sm">{incentive}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <Link href="/contact" className="inline-block bg-accent text-primary-dark px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent-light transition-colors">
            Invest in Minerals <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}