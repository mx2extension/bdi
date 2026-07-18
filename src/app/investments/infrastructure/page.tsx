import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import DocumentBriefCard from "@/components/DocumentBriefCard";

export const metadata: Metadata = {
  title: "Infrastructure Investment",
  description: "Invest in modern transportation networks, logistics hubs, mass housing, and smart city developments in Bauchi State.",
};

const infraProjects = [
  { title: "Transportation & Traffic", desc: "Modern road networks, bridges, and traffic management systems to connect rural and urban hubs.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783787143/images_xp1iev.jpg" },
  { title: "Mass Housing", desc: "Development of affordable, high-quality residential estates to address the housing deficit.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80" },
  { title: "Waste Management", desc: "Establishment of modern waste collection, recycling, and disposal facilities across major cities.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783787321/images_e0prv9.jpg" },
  { title: "Flood & Erosion Control", desc: "Critical infrastructural interventions to manage water levels and prevent farmland degradation.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783787478/images_rolalb.jpg" },
  { title: "Modern Markets", desc: "Construction of standardized commercial markets to boost intra-state and inter-state trade.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783787677/images_zcmlgd.jpg" },
  { title: "Security Infrastructure", desc: "Investment in surveillance, communication networks, and security operational bases.", image: "https://res.cloudinary.com/drnrbfltr/image/upload/v1783788081/images_rv8yex.jpg" },
];

export default async function InfrastructurePage() {
  const supabase = await createClient();
  const { data: briefs } = await supabase
    .from("investment_briefs")
    .select("*")
    .eq("sector_slug", "infrastructure")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  return (
    <main className="pb-24">
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1]">
          <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80" alt="Infrastructure" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Investment Sector</span>
          <h1 className="font-serif text-6xl text-white mt-4">Infrastructure</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="reveal-on-scroll mb-16">
          <h2 className="font-serif text-3xl text-gray-900 mb-6">Building the Foundation</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Bauchi State focuses on Sustainable Environment & Physical Infrastructure. There is a critical need for modern transportation networks, logistics hubs, and smart city developments to support the growing economic activities in the state.</p>
          <p className="text-gray-600 leading-relaxed">With over 25% of the state budget dedicated to infrastructure and a robust Public-Private Partnership (PPP) framework in place, the environment is highly conducive for private capital injection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {infraProjects.map((item, i) => (
            <div key={item.title} className="reveal-on-scroll border border-gray-200 overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative h-40 overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h3 className="absolute bottom-3 left-5 font-serif text-lg text-white">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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

        <div className="reveal-on-scroll bg-gray-50 p-12 border border-gray-100 mb-24">
          <h3 className="font-serif text-2xl text-gray-900 mb-6 text-center">Brownfield Opportunities</h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">Beyond greenfield projects, there are massive opportunities in brownfield investments including Hospitality, Meat & Dairy Processing, and Ceramics Production.</p>
        </div>

        <div className="text-center reveal-on-scroll">
          <Link href="/contact" className="inline-block bg-accent text-primary-dark px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent-light transition-colors">
            Invest in Infrastructure <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}