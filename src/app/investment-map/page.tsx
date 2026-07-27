import type { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import InvestmentMapGrid from "./InvestmentMapGrid";
import { ShieldCheck, Sparkles, Building2, Trees, Zap, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Map | Strategic Frameworks",
  description: "Explore curated, research-driven investment proposals designed to unlock Bauchi State's economic potential.",
};

export default async function InvestmentMapPage() {
  const supabase = await createClient();
  const { data: opportunities } = await supabase
    .from("investment_opportunities")
    .select("*")
    .eq("is_published", true)
    .order("sort_order");

  return (
    <main className="pb-24 overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 min-h-[50vh] pb-16 sm:pb-24 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Investment Map Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 max-w-5xl">
          <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Strategic Initiatives
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight">
            Investment Map &amp; Frameworks
          </h1>
          <p className="text-white/80 mt-6 max-w-2xl leading-relaxed text-base sm:text-lg">
            A repository of well-examined contemplations and actionable economic blueprints—leveraging deep regional insights to strategically position Bauchi State for high-impact investment.
          </p>
        </div>
      </div>

      {/* Vision & Perspective Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest block mb-2">
                Executive Vision
              </span>
              <h2 className="font-serif text-3xl text-gray-900 mb-6 leading-snug">
                Positioning Bauchi State for Sustainable Growth
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  The proposals detailed here represent meticulous economic analysis and strategic contemplations tailored to highlight untapped opportunities across agriculture, energy, infrastructure, and innovation.
                </p>
                <p>
                  Rather than generic concepts, each blueprint explores structured execution models designed to attract capital, facilitate public-private synergy, and accelerate long-term state development.
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 group">
                <Image
                  src="https://res.cloudinary.com/drnrbfltr/image/upload/v1785144072/85becddd-d37a-4aa4-a5f8-d92318c9c8c7.png"
                  alt="BDI's VIEW"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 right-4 text-xs font-medium text-white/90 bg-black/40 backdrop-blur-md p-2.5 rounded border border-white/10">
                  KING'S VIEW
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sector Exploration */}
      <section className="py-20 min-h-[50vh]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl text-gray-900 mb-4">
              Explore Investment Proposals
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Select a sector below to reveal curated investment frameworks and full proposal documentation.
            </p>
          </div>

          <InvestmentMapGrid opportunities={opportunities || []} />
        </div>
      </section>

      {/* Comprehensive Investment Incentives & Ecosystem Advantages with Cloudinary Background Image */}
      <section className="py-24 relative overflow-hidden text-white">
        {/* Background Image replacing the green gradient block */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png"
            alt="Investment Incentives Background"
            fill
            className="object-cover"
          />
          {/* Dark overlay to maintain readability of text and cards */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest block mb-3">
              Strategic Edge &amp; Benefits
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6">
              Why Invest in Bauchi State
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Beyond sector-specific opportunities, investors are welcomed into an enabling business ecosystem backed by proactive government leadership, cost-effective operational advantages, and comprehensive fiscal harmonization.
            </p>
          </div>

          {/* Luxury Stylized Grid of Incentives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Government Support & Ease of Doing Business */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Proactive State Leadership</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The government is exceptionally welcoming and deeply committed to private-sector partnerships. Institutional frameworks are optimized to streamline public-private dialogues and fast-track project approvals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                Streamlined Execution
              </div>
            </div>

            {/* Card 2: Cost Advantages (Land & Labor) */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Affordable Land &amp; Labor</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enjoy access to vast, affordable land allocations across strategic corridors and a high proportion of capable, working-age population resulting in highly competitive operational and labor costs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                Low-Cost Operations
              </div>
            </div>

            {/* Card 3: Agriculture & Agro-Processing */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Trees className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Agriculture &amp; Agro-Allied</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Backed by millions of hectares of arable loamy soil and extensive irrigation potential. Benefits include pioneer status relief, zero import duties on machinery, and a 95% capital allowance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                Pioneer Status &amp; Tax Relief
              </div>
            </div>

            {/* Card 4: Solid Minerals & Mining */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Solid Minerals &amp; Mining</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Over 60 solid mineral varieties backed by 3-year full tax exemptions, customized equipment import duty waivers, and a reduced corporate income tax rate of 20% instead of 30%.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                3-Year Tax Holidays
              </div>
            </div>

            {/* Card 5: Tourism & Brownfields */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Tourism &amp; Brownfields</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Capitalize on the Pearl of Tourism, featuring premier wildlife parks, cultural heritage hubs, and hospitality brownfields primed for high-yield commercial upgrades and eco-resort scaling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                High-Growth Potential
              </div>
            </div>

            {/* Card 6: Infrastructure & Energy */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">Energy &amp; Infrastructure</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Massive state development focus on renewable energy, hydrocarbon exploration with specialized local training academies, mass housing, and modern multi-sector commercial transport grids.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent">
                Robust PPP Frameworks
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}