import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentBriefCard from "@/components/DocumentBriefCard";

export const metadata: Metadata = {
  title: "Tourism Investment",
  description: "Discover the Pearl of Tourism. Invest in Yankari Game Reserve, Wikki Warm Springs, and Sumu Wildlife Park in Bauchi State.",
};

const attractions = [
  { title: "Yankari Game Reserve", subtitle: "Nigeria's premier game reserve", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1781769441/images_ezxfdb.jpg" },
  { title: "Wikki Warm Springs", subtitle: "Crystal clear natural springs", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783785776/images_eqglan.jpg" },
  { title: "Sumu Wildlife Park", subtitle: "Home to giraffes, zebras, and oryx from Namibia", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783785862/images_wilv5g.jpg" },
  { title: "Cultural Heritage Sites", subtitle: "Historical monuments and vibrant festivals", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782101239/2_slt7ei.jpg" },
];

export default async function TourismPage() {
  const supabase = await createClient();
  const { data: briefs } = await supabase
    .from("investment_briefs")
    .select("*")
    .eq("sector_slug", "tourism")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1]">
          <Image src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1920&q=80" alt="Tourism" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Sector</span>
          <h1 className="font-serif text-6xl text-white mt-4">Tourism</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">The Pearl of Tourism</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="reveal-on-scroll mb-16">
          <h2 className="font-serif text-3xl text-gray-900 mb-6">A Premier Destination</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Bauchi State is a top destination in Nigeria, famed for attractions like Yankari Game Reserve, Sumu Wildlife Park, and a rich cultural heritage. It offers a unique blend of history, nature, and adventure in northeastern Nigeria.</p>
          <p className="text-gray-600 leading-relaxed">The state is home to numerous tourist attractions including wildlife parks, historical sites, monuments, and vibrant cultural festivals. The Wikki Resort provides accommodation, a conservation centre, a museum, and conference facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {attractions.map((item, i) => (
            <div key={item.title} className="reveal-on-scroll relative h-72 overflow-hidden border border-gray-200 group" style={{ transitionDelay: `${i * 100}ms` }}>
              <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
                <p className="text-white/70 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
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

        <div className="reveal-on-scroll bg-gray-50 p-12 border border-gray-100 mb-16">
          <h3 className="font-serif text-2xl text-gray-900 mb-8 text-center">Biodiversity at Yankari</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block font-sans text-4xl font-light text-accent mb-2">52</span>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Mammal Species</p>
            </div>
            <div>
              <span className="block font-sans text-4xl font-light text-accent mb-2">350+</span>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Bird Species</p>
            </div>
            <div>
              <span className="block font-sans text-4xl font-light text-accent mb-2">17</span>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Reptile Species</p>
            </div>
            <div>
              <span className="block font-sans text-4xl font-light text-accent mb-2">7</span>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Amphibian Types</p>
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll mb-16">
          <h3 className="font-serif text-2xl text-gray-900 mb-4">Sumu Wildlife Park</h3>
          <p className="text-gray-600 leading-relaxed">Home to exotic animals including giraffes, zebras, impalas, and oryx trans-located from Namibia. Sumu represents a massive opportunity for eco-tourism, hospitality investment, and safari ventures.</p>
        </div>

        <div className="text-center reveal-on-scroll">
          <Link href="/contact" className="inline-block bg-accent text-primary-dark px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent-light transition-colors">
            Invest in Tourism <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}