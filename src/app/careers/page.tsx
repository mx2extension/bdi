import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import JobFilters from "@/components/careers/JobFilters";
import { ArrowRight, Target, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Bauchi State Development Initiative. Explore open positions and contribute to Bauchi's economic transformation.",
};

export default async function CareersPage() {
  const supabase = await createClient();
  const { data: careers } = await supabase
    .from("careers")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  return (
    <main className="pb-24">
      {/* ─── Hero ─── */}
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10" />
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1780465975/f28e8cbb-fec5-49b5-8016-b6dbb68c87a2.png"
            alt="Careers"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Join Us
          </span>
          <h1 className="font-serif text-6xl text-white mt-4">Careers at BDI</h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl">
            Be part of the team transforming Bauchi State. We look for passionate
            individuals ready to drive sustainable development.
          </p>
        </div>
      </div>

      {/* ─── Why Work Here ─── */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Target className="w-6 h-6 text-accent" />,
              title: "Meaningful Impact",
              desc: "Directly contribute to the economic transformation of Bauchi State and the lives of 7.5 million people.",
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-accent" />,
              title: "Growth Opportunities",
              desc: "Work alongside international development partners and gain exposure to global best practices.",
            },
            {
              icon: <Shield className="w-6 h-6 text-accent" />,
              title: "Competitive Benefits",
              desc: "Attractive compensation, capacity building, and a supportive work environment.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="reveal-on-scroll bg-gray-50 p-8 border-l-2 border-accent hover:shadow-lg transition-shadow duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-sm mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ─── Open Positions ─── */}
        <div className="mb-8 reveal-on-scroll">
          <h2 className="font-serif text-3xl text-gray-900 mb-2">Open Positions</h2>
          <p className="text-gray-500">
            {careers && careers.length > 0
              ? `We have ${careers.length} open ${careers.length === 1 ? "position" : "positions"}. Find the right role for you.`
              : "Check back soon for new opportunities."}
          </p>
        </div>

        <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
          {careers && careers.length > 0 ? (
            <JobFilters careers={careers} />
          ) : (
            <div className="text-center py-16 border border-gray-200 bg-white">
              <p className="text-gray-500 mb-4">
                There are no open positions at the moment.
              </p>
              <p className="text-sm text-gray-400">
                Please check back regularly or send your CV to{" "}
                <a
                  href="mailto:careers@bdi.gov.ng"
                  className="text-primary underline"
                >
                  careers@bdi.gov.ng
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Join Talent Network CTA ─── */}
      <section className="bg-primary-dark reveal-on-scroll">
        <div className="container mx-auto px-6 py-24 text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">
            Talent Network
          </span>
          <h2 className="font-serif text-4xl text-white mt-4 mb-4">
            Find your next opportunity.
          </h2>
          <p className="text-white/60 max-w-lg mx-auto leading-relaxed mb-8">
            Get connected to the right team at the right time. Submit your
            details and we&apos;ll reach out when a matching role opens up.
          </p>
          <a
            href="mailto:talent@bdi.gov.ng?subject=Join Talent Network"
            className="inline-flex items-center gap-2 bg-accent text-primary-dark px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-colors"
          >
            Join Now <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-white/30 text-xs mt-6">
            Just a few minutes to get discovered
          </p>
        </div>
      </section>
    </main>
  );
}