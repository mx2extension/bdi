import type { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import InvestmentMapGrid from "./InvestmentMapGrid";

export const metadata: Metadata = {
  title: "Investment Map",
  description: "Explore investment-ready proposals across Agriculture, Energy, Tourism, and more in Bauchi State.",
};

export default async function InvestmentMapPage() {
  const supabase = await createClient();
  const { data: opportunities } = await supabase
    .from("investment_opportunities")
    .select("*")
    .eq("is_published", true)
    .order("sort_order");

  return (
    <main className="pb-24 overflow-x-hidden">
      {/* Hero Section - Mobile Safe */}
      <div className="pt-24 sm:pt-32 min-h-[45vh] pb-16 sm:pb-20 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Investment Map Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="block text-accent text-xs font-semibold uppercase tracking-normal sm:tracking-widest mb-4">Opportunities</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight">Investment Map</h1>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed text-base sm:text-lg">
            Explore a curated repository of investment-ready projects driving Bauchi&apos;s economic transformation. Download detailed proposals directly.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <section className="bg-gray-50 py-24 min-h-[50vh]">
        <div className="container mx-auto px-6">
          <InvestmentMapGrid opportunities={opportunities || []} />
        </div>
      </section>
    </main>
  );
}