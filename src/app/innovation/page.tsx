import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Innovation Hub",
  description: "BDI Innovation Desk — bridging radical ideas to sovereign opportunities in Bauchi State.",
};

const sectors = [
  { title: "Technology & Startups", desc: "Software solutions, fintech, agritech apps, and tech-driven platforms aiming to solve local challenges." },
  { title: "Business & Commerce", desc: "SMEs, sustainable retail, value-chain optimization, and innovative modern marketplace frameworks." },
  { title: "Infrastructure & Energy", desc: "Community-level engineering designs, clean energy installations, logistics, and spatial utilities." },
  { title: "Talent, Art & Culture", desc: "Creative media production, high-value artistic ventures, cultural preservation, and unique digital talent." },
];

const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"];

const workflow = [
  { step: "01", title: "Submit & Pitch", desc: "Send your exhaustive pitch deck, project proposal, or business canvas directly to our review board via our dedicated channels." },
  { step: "02", title: "Investigation & Vetting", desc: "Our project desk rigorously assesses the viability, socio-economic potential, and compliance parameters of your business or NGO model." },
  { step: "03", title: "Media Showcase", desc: "Selected innovators are interviewed and showcased across our media channels, putting your vision directly in front of public eyes and digital influencers." },
  { step: "04", title: "High-Level Mediation", desc: "We clear the bureaucratic path, directly presenting vetted, high-impact innovations to government cabinets, institutional headers, and global investors." },
];

export default function InnovationPage() {
  return (
    <main className="pb-24">
      {/* HERO */}
      <section className="pt-32 min-h-[55vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-transparent z-10" />
        <div className="absolute inset-0 z-[1] opacity-10">
          <Image src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782103064/images_swmfo6.jpg" alt="Innovation" fill className="object-cover" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
            BDI Innovation Desk
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl text-white mt-4 max-w-3xl leading-tight">
            Bridging Radical Ideas to Sovereign Opportunities
          </h1>
          <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
            Great ideas shouldn&apos;t die in locked rooms. We act as the ultimate catalyst, turning grassroots innovation, startups, and NGOs into state-backed infrastructure and internationally funded assets.
          </p>
        </div>
      </section>

      {/* WHY INNOVATION MATTERS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Catalyst View</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Why Your Voice Dictates the Future</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sovereign progress relies heavily on intellectual disruption. Young minds have the localized solutions but lack the key access codes to direct government authority.
              </p>
              <p>
                BDI acts as your legal and operational intermediary. By presenting a structured, vetted case to ministries and high-network investors, we remove the friction of traditional bureaucracy, driving localized talent straight into mainstream development pipelines.
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
            <div className="bg-primary-dark p-10 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
                </div>
                <h3 className="font-serif text-xl text-white">The Manifest Matrix</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                We actively scout for intellectual property that solves real systemic bottlenecks in northern Nigeria. If your startup or NGO creates jobs and efficiency, we will carry it forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET SECTORS */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll text-center mb-14">
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Target Sectors of Disruption</h2>
            <div className="w-10 h-px bg-accent mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-lg mx-auto">We match innovative solutions across these primary structural ecosystems.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec, i) => (
              <div key={sec.title} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white border border-gray-100 p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    {i === 0 && <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>}
                    {i === 1 && <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>}
                    {i === 2 && <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>}
                    {i === 3 && <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>}
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 mb-3">{sec.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{sec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCELERATION ECOSYSTEM */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll text-center mb-14">
            <h2 className="font-serif text-3xl text-white mb-3">The Acceleration Ecosystem</h2>
            <div className="w-10 h-px bg-accent mx-auto mb-4"></div>
            <p className="text-white/50 max-w-lg mx-auto">How we track, amplify, and elevate your pitch straight to leadership tables.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((flow, i) => (
              <div key={flow.step} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="border border-white/10 p-8 h-full hover:border-accent/40 transition-colors duration-300">
                  <span className="font-serif text-4xl text-accent/40 block mb-4">{flow.step}</span>
                  <h3 className="font-serif text-lg text-white mb-3">{flow.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTION CORE */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="reveal-on-scroll">
            <div className="bg-gray-50 border border-gray-100 p-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </div>
                <h2 className="font-serif text-xl text-gray-900">Official Pitch Desk</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                Submit your complete formal proposal, blueprint documents, executive summary, or pitch canvas directly to our operations office.
              </p>
              <a
                href="mailto:info.bdi.invest@gmail.com"
                className="inline-flex items-center gap-2 bg-accent text-primary-dark px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-colors w-fit"
              >
                Email Proposals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </a>
              <p className="text-xs text-gray-400 mt-4">Accepted Formats: PDF / Deck Links (Response timeline: 72 hrs)</p>
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ transitionDelay: "150ms" }}>
            <div className="bg-primary-dark border border-white/10 p-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" /></svg>
                </div>
                <h2 className="font-serif text-xl text-white">Command Attention</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                Want instant momentum? Bypass the lines. Create a short video tag or brief layout pitch, upload it, and tag our official social handles using our campaign tag.
              </p>
              <div className="bg-white/5 border border-white/10 px-5 py-3 inline-block mb-6">
                <span className="text-accent font-sans text-lg font-bold tracking-wide">@bdi_investngr</span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/bauchi-development-initiative-bdi/", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "X", href: "https://x.com/bdi_investNGR/", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "YouTube", href: "https://youtube.com/@bdi.investngr?si=cc0ntpsBixHKBr-X", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  { label: "Instagram", href: "https://www.instagram.com/bdi_investngr/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}