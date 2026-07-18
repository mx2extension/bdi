import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentBriefCard from "@/components/DocumentBriefCard";

export const metadata: Metadata = {
  title: "Energy Investment",
  description: "Huge potentials in renewable energy, oil & gas, and backward & forward linkages in Bauchi State.",
};

const focusAreas = [
  { title: "Solar Energy", desc: "High irradiance suitable for massive solar farm developments across the state.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" },
  { title: "Wind Energy", desc: "Identified wind corridors with potential for utility-scale turbine installations.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783786857/images_tc4ykc.jpg" },
  { title: "Oil & Gas", desc: "Newly discovered hydrocarbon reserves requiring exploration and production investment.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783786745/images_v9b95v.jpg" },
  { title: "Off-grid Solutions", desc: "Massive demand for rural electrification mini-grids and standalone power systems.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783786152/images_jgsjlk.jpg" },
];

const academyPrograms = [
  { title: "Local Content Development", desc: "Ensuring Bauchi benefits directly from the hydrocarbon value chain." },
  { title: "Upstream Operations", desc: "Training in exploration, drilling, and field management." },
  { title: "Downstream Processing", desc: "Refining, petrochemicals, and distribution systems." },
  { title: "Pipeline Maintenance", desc: "Infrastructure integrity and safety operations." },
];

export default async function EnergyPage() {
  const supabase = await createClient();
  const { data: briefs } = await supabase
    .from("investment_briefs")
    .select("*")
    .eq("sector_slug", "energy")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1]">
          <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80" alt="Energy" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Sector</span>
          <h1 className="font-serif text-6xl text-white mt-4">Energy</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="reveal-on-scroll">
            <h2 className="font-serif text-3xl text-gray-900 mb-6">Powering the Future</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Bauchi State has huge potentials in Renewable Energy, Oil & Gas through backward and forward linkages. Following recent discoveries of hydrocarbon deposits, the state is positioning itself as a key player in Nigeria&apos;s energy sector.</p>
            <p className="text-gray-600 leading-relaxed">Investors have the opportunity to capitalize on high solar irradiance, wind corridors, and newly discovered petroleum reserves to generate sustainable power for the region.</p>
          </div>
          <div className="reveal-on-scroll bg-gray-50 p-8 border border-gray-100" style={{ transitionDelay: "150ms" }}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">Energy at a Glance</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Solar Irradiance</span><span className="font-semibold text-gray-900">Very High</span></li>
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Wind Corridors</span><span className="font-semibold text-gray-900">Identified</span></li>
              <li className="flex justify-between border-b border-gray-200 pb-4"><span>Hydrocarbon Deposits</span><span className="font-semibold text-gray-900">Recently Discovered</span></li>
              <li className="flex justify-between"><span>Off-grid Demand</span><span className="font-semibold text-gray-900">Massive</span></li>
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
            {focusAreas.map((item, i) => (
              <div key={item.title} className="reveal-on-scroll border border-gray-200 overflow-hidden hover:border-accent transition-colors group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 font-serif text-lg text-white leading-snug pr-4">{item.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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

        <div className="reveal-on-scroll bg-primary-dark p-12 text-white mb-24">
          <h2 className="font-serif text-3xl mb-6">Oil & Gas Academy, Alkaleri</h2>
          <p className="text-white/70 leading-relaxed mb-8">To support the energy sector and develop local capacity, the government has established the Oil and Gas Academy at Alkaleri. This academy is supported by industry giants like NNPC and Schlumberger to train local talent and ensure the state benefits directly from the hydrocarbon value chain.</p>
          <div className="flex flex-wrap gap-3">
            {academyPrograms.map((item) => (
              <span key={item.title} className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80">
                {item.title} — <span className="text-white/50">{item.desc}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="text-center reveal-on-scroll">
          <Link href="/contact" className="inline-block bg-accent text-primary-dark px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent-light transition-colors">
            Invest in Energy <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}