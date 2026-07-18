import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Investment Overview" };

export default async function InvestmentsPage() {
  const supabase = await createClient();
  const { data: sectors } = await supabase.from("investment_sectors").select("*").eq("is_published", true).order("sort_order");

  return (
    <main className="pb-24">
      {/* Hero Section with Integrated Image */}
      <div className="pt-32 min-h-[50vh] pb-20 relative bg-primary-dark flex items-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783840785/file_skcq8t.jpg"
          alt="Bauchi State Landscape"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Opportunities</span>
          <h1 className="font-serif text-6xl text-white mt-4 max-w-3xl">Investment Landscape</h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl">Bauchi State offers high-yield investment opportunities across multiple sectors, backed by government incentives.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 -mt-16 relative z-10">
          {[
            { title: "Strategic Location", desc: "Sharing boundaries with 7 states and access to Northern Nigerian markets." },
            { title: "Abundant Resources", desc: "4.2M hectares of arable land and over 60 mineral varieties." },
            { title: "Government Support", desc: "Tax holidays, pioneer status, and dedicated investment facilitation." },
            { title: "Young Population", desc: "7.5M people with 50% under 15—ready to be a formidable workforce." },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Explore Sectors</span>
          <h2 className="font-serif text-4xl text-gray-900 mb-4">Strategic Growth Sectors</h2>
          <div className="w-10 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors?.map((sector) => (
            <Link key={sector.id} href={`/investments/${sector.slug}`} className="group flex bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-400">
              <div className="w-1/3 bg-primary-dark flex items-center justify-center p-8 group-hover:bg-primary transition-colors">
                <span className="font-serif text-4xl text-accent">{sector.title.charAt(0)}</span>
              </div>
              <div className="w-2/3 p-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">{sector.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{sector.short_description}</p>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
          <Link href="/contact" className="group flex bg-primary-dark overflow-hidden hover:shadow-xl transition-all duration-400">
            <div className="w-1/3 bg-white/5 flex items-center justify-center p-8">
              <span className="font-serif text-4xl text-accent">+</span>
            </div>
            <div className="w-2/3 p-8">
              <h3 className="font-serif text-2xl text-white mb-3">Custom Inquiry</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">Have a unique investment idea not listed here? We are open to facilitating bespoke opportunities.</p>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">Contact BDI <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}