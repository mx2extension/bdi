import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import JobFilters from "@/components/careers/JobFilters";
import { ArrowRight, Target, TrendingUp, Shield, Globe, Briefcase, ExternalLink } from "lucide-react";

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

      {/* ─── Find One Campus Partnership Section (Placed Right After Hero) ─── */}
      <section className="bg-gray-50 py-16 border-b border-gray-200 reveal-on-scroll">
        <div className="container mx-auto px-6">
          <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Logo & Info Header */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden p-2 border border-gray-100">
                    <Image
                      src="https://res.cloudinary.com/drnrbfltr/image/upload/v1786366443/84e84f1e-a42c-4792-8548-4d53fffb6708.png"
                      alt="Find One Campus Logo"
                      fill
                      className="object-contain p-1"
                      unoptimized
                    />
                  </div>
                  <div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-widest block">
                      Featured Talent Ecosystem
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-gray-900 mt-1">
                      Global & Remote Opportunities with FindOneCampus
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-base mb-6">
                  Through our strategic partnership with <strong>FindOneCampus</strong>, BDI is empowering local talent, skilled professionals, creators, and service providers across Bauchi State to gain direct access to globally competitive remote jobs and service demands.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-md border border-gray-100">
                    <Globe className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Global Marketplace</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Showcase your talents and get hired by international clients and teams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-md border border-gray-100">
                    <Briefcase className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">Provider Network</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Register your skill directory early to get selected easily by client searches.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="lg:col-span-4 bg-primary-dark text-white p-8 rounded-lg text-center flex flex-col justify-center items-center h-full">
                <h3 className="font-serif text-xl mb-3">Become a Service Provider</h3>
                <p className="text-white/70 text-xs mb-6 leading-relaxed">
                  Position yourself ahead of the curve. Set up your professional profile on Find One Campus today.
                </p>
                <a
                  href="https://www.findoncampus.com/become-a-provider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-primary-dark px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-colors rounded-sm"
                >
                  Register Now <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-white/40 text-[11px] mt-4">
                  Redirects to www.findoncampus.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  href="mailto:info.bdi.invest@gmail.com"
                  className="text-primary underline"
                >
                  info.bdi.invest@gmail.com
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
            href="mailto:info.bdi.invest@gmail.com?subject=Join Talent Network"
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