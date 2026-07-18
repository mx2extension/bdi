import type { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact",
  description: "Discover the measurable socio-economic impact of BDI's initiatives across Bauchi State.",
};

const interventions = [
  {
    category: "Workforce Development",
    description: "FindOne Campus platform connecting students, graduates, job seekers, and professionals to job opportunities, scholarships, internships, and training — directly addressing the talent-opportunity gap in Bauchi.",
    stat: "6",
    statLabel: "Core services connecting talent to opportunity"
  },
  {
    category: "Community Outreach",
    description: "Extend Love Initiative Foundation carrying out humanitarian programmes and community development across Bauchi State — supporting vulnerable populations with compassion and inclusion.",
    stat: "Active",
    statLabel: "Ground-level outreach across Bauchi communities"
  },
  {
    category: "Economic Activation",
    description: "Investment promotion across 11 sectors, digital commerce marketplace, and Innovation Desk pipeline — diversifying Bauchi's economy and expanding market access for local businesses.",
    stat: "11",
    statLabel: "Investment sectors actively promoted globally"
  },
  {
    category: "Digital Infrastructure",
    description: "Strategic Land Zoning & Sector Mapping Platform deployed to survey, zone, classify, and digitally structure every parcel of land — ensuring organised, future-ready development.",
    stat: "3",
    statLabel: "Digital platforms built and operational"
  }
];

const targetedImpact = [
  {
    area: "Top-Notch Healthcare",
    description: "Partnering to upgrade primary healthcare facilities and improve access to quality medical services across all 323 wards in Bauchi State.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    area: "Industries & Factories",
    description: "Attracting investment for manufacturing facilities that create jobs, boost local production capacity, and reduce import dependency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    area: "Security Integration",
    description: "Supporting comprehensive security architecture that ensures a safe environment for residents, businesses, and investors to thrive.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    area: "Revenue Generation",
    description: "Building sustainable internal revenue streams through diversified economic activities, efficient tax systems, and reduced federal dependency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    area: "Technology & Digital Transformation",
    description: "Building tech hubs, digital platforms, and innovation ecosystems to drive the knowledge economy and connect Bauchi to the global digital landscape.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    area: "Tourism & Hospitality",
    description: "Unlocking Bauchi's tourism potential through the development of cultural sites, eco-tourism, and hospitality infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
      </svg>
    ),
  },
];

const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"];

export default async function ImpactPage() {
  const supabase = await createClient();
  const { data: impacts } = await supabase
    .from("impact_stories")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  return (
    <main className="pb-24">
      {/* Hero */}
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-15">
          <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80" alt="Impact" fill className="object-cover" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Results</span>
          <h1 className="font-serif text-6xl text-white mt-4">Our Impact</h1>
          <p className="text-white/60 text-lg mt-4 max-w-xl">Real initiatives. Measurable outcomes. Lasting change across Bauchi State.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        {/* Numbered Impact Stories */}
        <div className="mb-24">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Our Footprint</span>
            <h2 className="font-serif text-4xl text-gray-900 mb-4">Creating Measurable Impact</h2>
            <div className="w-10 h-px bg-accent mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {impacts?.map((item, i) => (
              <div key={item.id} className="reveal-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex gap-8 py-10 border-b border-gray-200 group">
                  <span className="font-serif text-5xl text-gray-100 group-hover:text-accent/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    {item.metric && (
                      <span className="inline-block bg-accent/10 text-primary text-xs font-semibold px-4 py-2 uppercase tracking-widest">
                        {item.metric}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Sector Interventions */}
        <div className="bg-gray-50 p-12 lg:p-20 mb-24">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">BDI Interventions</span>
            <h2 className="font-serif text-4xl text-gray-900 mb-4">Key Sector Interventions</h2>
            <div className="w-10 h-px bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interventions.map((item, i) => (
              <div key={item.category} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-8 border border-gray-100">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-sans text-4xl font-light text-accent">{item.stat}</span>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{item.category}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{item.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Targeted Impact */}
        <div className="mb-24">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Looking Ahead</span>
            <h2 className="font-serif text-4xl text-gray-900 mb-4">Targeted Impact</h2>
            <div className="w-10 h-px bg-accent mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              BDI&apos;s strategic plan targets transformative outcomes across these critical areas — building on what we&apos;ve started and scaling towards comprehensive state-wide impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetedImpact.map((item, i) => (
              <div key={item.area} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="bg-gray-50 border border-gray-100 p-8 hover:border-primary/30 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 mb-3">{item.area}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Showcase */}
        <div className="mb-24">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">In Action</span>
            <h2 className="font-serif text-4xl text-gray-900 mb-4">Impact in Focus</h2>
            <div className="w-10 h-px bg-accent mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-lg mx-auto">
              Watch highlights from our programmes, community outreach, and stakeholder engagements across Bauchi State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoIds.map((id, i) => (
              <div key={i} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`BDI Impact Spotlight ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Want to contribute to Bauchi&apos;s development story?</p>
          <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors">
            Partner With Us
          </Link>
        </div>
      </div>
    </main>
  );
}