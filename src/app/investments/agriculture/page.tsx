import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentBriefCard from "@/components/DocumentBriefCard";

export const metadata: Metadata = {
  title: "Agriculture Investment",
  description: "Explore commercial farming, agro-processing, beauty raw materials, and arts & crafts opportunities in Bauchi State with 4.2 million hectares of arable land.",
};

const opportunityBoxes = [
  {
    title: "Priority Value Chains (Agro-Food Processing)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    items: [
      "Cereal and Legume: Maize, Rice, Millet, Groundnuts",
      "Oil Seeds: Sesame",
      "Agro-Forestry: Gum Arabic, Mango, Date Palm",
      "Livestock: Sheep, Goat, Cattle (Meat processing)",
    ],
  },
  {
    title: "Large Scale Commercial Production",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782105727/images_w3najr.jpg",
    items: [
      "Rice and Soya bean production",
      "Sesame seeds",
      "Livestock, Fisheries, and Poultry",
      "Pasture Production (Gamba grass etc.)",
    ],
  },
  {
    title: "Natural Beauty & Cosmetics Raw Materials",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783784635/images_phjoju.jpg",
    items: [
      "Shea Butter — extracted from the shea tree, a key export",
      "Coconut Oil & Cold-pressed Sesame Oil",
      "Aloe Vera — cultivated for gel and cosmetic use",
      "Fragrance & Essential Oils from local flora for perfumery",
    ],
  },
  {
    title: "Arts, Crafts & Industrial Raw Materials",
    image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783784906/images_fzecsc.jpg",
    items: [
      "Plant-based Dyes — Indigo, Henna for textile and leather",
      "Natural Fibers — Cotton, Sisal, Raffia for weaving",
      "Calabash, Gourd, and Wood for carvings & ornaments",
      "Hides & Skin for quality leather craft production",
    ],
  },
];

export default async function AgriculturePage() {
  const supabase = await createClient();
  const { data: briefs } = await supabase
    .from("investment_briefs")
    .select("*")
    .eq("sector_slug", "agriculture")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1]">
          <Image src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80" alt="Agriculture" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Sector</span>
          <h1 className="font-serif text-6xl text-white mt-4">Agriculture</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal-on-scroll">
            <h2 className="font-serif text-3xl text-gray-900 mb-6">Backbone of the Economy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Agriculture is the backbone of Bauchi State&apos;s economy, with 80% of the population engaged in the production of food and cash crops.</p>
            <p className="text-gray-600 leading-relaxed">The state boasts vast arable land of high quality—4.2 million hectares of loamy alluvial soil, of which only 1.8 million hectares are currently under cultivation. Predominant crops include cereals (sorghum, millet, rice, maize), vegetables, and tree crops like gum Arabic.</p>
          </div>
          <div className="reveal-on-scroll bg-gray-50 p-8 border border-gray-100" style={{ transitionDelay: "150ms" }}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">Key Statistics</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Arable Land</span><span className="font-semibold text-gray-900">4.2M Hectares</span></li>
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Current Cultivation</span><span className="font-semibold text-gray-900">1.8M Hectares</span></li>
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Irrigation Capacity</span><span className="font-semibold text-gray-900">181,000 Hectares</span></li>
              <li className="flex justify-between"><span>Population Engaged</span><span className="font-semibold text-gray-900">80%</span></li>
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <div className="reveal-on-scroll text-center mb-12">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">What We Offer</span>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">Investment Opportunities</h2>
            <div className="w-10 h-px bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunityBoxes.map((box, i) => (
              <div key={box.title} className="reveal-on-scroll border border-gray-200 overflow-hidden hover:border-accent transition-colors group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={box.image} alt={box.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 font-serif text-lg text-white leading-snug pr-4">{box.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
          <h2 className="font-serif text-3xl mb-8">Sectoral Incentives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Availability of Land for agricultural purposes",
              "Opportunity for establishing agro-processing industries",
              "Pioneer status relief for specific agricultural activities",
              "95% Capital Allowance",
              "Zero Import Duty on equipment and machinery",
              "Lower Corporate Income Tax rate"
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
            Invest in Agriculture <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}