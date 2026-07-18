import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Our History",
  description: "Trace the evolution of the Bauchi State Development Initiative from the founding of MX2 Extension ENT. to our current strategic framework.",
};

const timeline = [
  {
    phase: "Phase 1",
    title: "The Genesis — MX2 Extension ENT.",
    description: "The story of BDI begins with the founding of MX2 Extension ENT., an organisation established with a clear conviction: that innovative solutions, properly structured and strategically deployed, can create lasting value for communities and economies. From its earliest days, MX2 Extension ENT. focused on building digital platforms and systems designed to solve real problems — particularly in underserved regions.",
    highlight: "Foundation laid for an ecosystem of innovation-driven development.",
  },
  {
    phase: "Phase 2",
    title: "FindOne Campus — Connecting Talent to Opportunity",
    description: "One of the first major initiatives to emerge from the MX2 ecosystem was FindOne Campus — a digital platform built to connect students, graduates, job seekers, professionals, employers, and service providers. The platform was developed to address a critical gap: the disconnect between talented individuals and the opportunities that could change their lives. Through FindOne Campus, users can discover jobs, access scholarships, find internships, explore training, and connect with skilled professionals.",
    highlight: "First tangible product bridging workforce development and economic opportunity.",
  },
  {
    phase: "Phase 3",
    title: "Extend Love Initiative Foundation — Compassion in Action",
    description: "Recognising that true development must go beyond infrastructure and investment to include human welfare, MX2 Extension ENT. launched the Extend Love Initiative Foundation. This humanitarian arm was created to carry out community development programmes aimed at supporting vulnerable communities and promoting social impact. Outreach efforts began within Bauchi State, reflecting a deep belief that lasting development must include compassion, inclusion, and community service.",
    highlight: "Humanitarian and social impact work embedded into the development DNA.",
  },
  {
    phase: "Phase 4",
    title: "The Birth of BDI",
    description: "With a growing ecosystem of technology platforms, community programmes, and a deepening understanding of Bauchi State's landscape, the need for a dedicated, structured development initiative became clear. The Bauchi State Development Initiative (BDI) was formally established under MX2 Extension ENT. with a singular mission: to unlock the full economic, social, technological, and human potential of Bauchi State. BDI was not created as a temporary project — it was designed as a long-term vehicle for transformation.",
    highlight: "BDI established as a long-term development initiative, not a temporary programme.",
  },
  {
    phase: "Phase 5",
    title: "The Strategic Framework Takes Shape",
    description: "BDI developed its 7-Phase Development Model — a controlled, strategically phased approach to transforming Bauchi State. Beginning with Land Mapping & Digital Structuring, through Legal Alignment, Controlled Public Awareness, Early Mover Sector Activation, Infrastructure & Migration, Investor Adoption & Reveal, and culminating in a Continuous Development Flywheel. Alongside this, the Strategic Land Zoning & Sector Mapping Platform was conceived — a comprehensive system to survey, zone, classify, and digitally structure every parcel of land for intelligent, future-ready development.",
    highlight: "A world-class strategic framework designed for controlled, sustainable transformation.",
  },
  {
    phase: "Phase 6",
    title: "Defining the Development Focus",
    description: "BDI articulated its comprehensive development focus areas spanning top-notch healthcare, research into African medicine, security integration, technology development, industries and factories, infrastructure and roads, tourism and hospitality, revenue generation, media and communications, NGO and development partner collaboration, upgrade and modern development, and businesses and commerce. Each area was identified not in isolation, but as part of an interconnected system where progress in one sector accelerates progress in others.",
    highlight: "12 interconnected focus areas forming a holistic development blueprint.",
  },
  {
    phase: "Present",
    title: "Building Systems, Not Just Projects",
    description: "BDI is now actively operational — promoting investment across agriculture, technology, manufacturing, education, tourism, healthcare, renewable energy, and more. The organisation is working alongside government development goals, supporting the state's drive toward economic growth, infrastructure development, youth empowerment, digital transformation, and improved living standards. Through its ecosystem — encompassing economic development, investment promotion, technology, employment, entrepreneurship, community outreach, humanitarian support, digital innovation, commerce, and youth empowerment — BDI is building systems, partnerships, platforms, and opportunities designed to serve future generations.",
    highlight: "Active operations across the full ecosystem — building for the long term.",
  },
];

const milestones = [
  { number: 7, label: "Phase Strategic Model" },
  { number: 12, label: "Development Focus Areas" },
  { number: 11, label: "Investment Sectors" },
  { number: 10, label: "Ecosystem Pillars" },
];

export default function HistoryPage() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <div className="pt-32 min-h-[40vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" alt="History" fill className="object-cover" unoptimized />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Journey</span>
          <h1 className="font-serif text-6xl text-white mt-4">Our History</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">
            From a conviction about innovation&apos;s power to transform communities — to a structured framework for rebuilding an entire state.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="reveal-on-scroll">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            The story of the Bauchi State Development Initiative is not a story about government programmes or political cycles. It is the story of an organisation — MX2 Extension ENT. — that believed Bauchi State possessed the resources, talent, strategic location, and opportunities required to become one of Africa&apos;s leading centres for investment, innovation, and sustainable development.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            What began with digital platforms connecting talent to opportunity grew into a humanitarian foundation, and eventually into a comprehensive, long-term development initiative with a strategic framework designed to transform an entire state — not through temporary projects, but through systems, partnerships, and platforms built to serve future generations.
          </p>
        </div>
      </section>

      {/* Milestones Strip — ANIMATED COUNTERS */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div key={m.label} className="reveal-on-scroll text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-serif text-5xl text-white">
                <AnimatedCounter target={m.number} />
              </div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 py-24 max-w-4xl">
        <div className="reveal-on-scroll mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">How We Got Here</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3">The Evolution</h2>
        </div>

        <div className="relative border-l-2 border-gray-200 ml-6 space-y-16">
          {timeline.map((item, i) => (
            <div key={item.phase} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative pl-10">
                <div
                  className={`absolute -left-[25px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm ${
                    i === timeline.length - 1 ? "bg-accent" : "bg-primary"
                  }`}
                ></div>

                <div
                  className={`p-8 border bg-white transition-shadow duration-300 hover:shadow-lg ${
                    i === timeline.length - 1 ? "border-accent" : "border-gray-100"
                  }`}
                >
                  <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                    {item.phase}
                  </span>
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="bg-gray-50 px-4 py-3 border-l-4 border-primary">
                    <p className="text-sm text-gray-700 font-medium">{item.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Ecosystem That Made It Possible */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Foundation</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">The Ecosystem That Made BDI Possible</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              BDI did not emerge in isolation. It was born from an existing ecosystem of initiatives under MX2 Extension ENT. — each one addressing a different piece of the development puzzle. Together, they provided the experience, infrastructure, and conviction needed to launch a comprehensive state-level development initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-on-scroll">
              <div className="bg-white p-8 border border-gray-100 h-full">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-5">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">FindOne Campus</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A digital platform connecting students, graduates, job seekers, professionals, employers, and service providers — contributing to workforce development and helping businesses discover qualified talent.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: "100ms" }}>
              <div className="bg-white p-8 border border-gray-100 h-full">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-sm mb-5">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">Extend Love Initiative Foundation</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A humanitarian and community development initiative carrying out programmes aimed at supporting vulnerable communities and promoting social impact within Bauchi State.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
              <div className="bg-white p-8 border border-gray-100 h-full">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm mb-5">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">Digital Commerce Platform</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  An online marketplace where individuals can advertise and resell products — making it easier for businesses and residents within Bauchi State to buy, sell, and connect through digital platforms.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: "300ms" }}>
              <div className="bg-white p-8 border border-gray-100 h-full">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-sm mb-5">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">Land Zoning & Sector Mapping</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A strategic platform for surveying, zoning, and classifying every parcel of land — creating a private digital foundation for organised, intelligent, and future-ready development across the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The BDI Difference */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="reveal-on-scroll">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">What Sets Us Apart</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-10">The BDI Difference</h2>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Not a Project — A System",
              description: "BDI was designed from the outset as a long-term system, not a time-bound project. We are building platforms, partnerships, and structures that outlast any single programme or administration.",
            },
            {
              title: "Born from Execution, Not Just Theory",
              description: "BDI emerged only after MX2 Extension ENT. had already built and operated real platforms — FindOne Campus, the commerce marketplace, Extend Love Initiative Foundation. The strategic framework was shaped by practical experience, not just planning documents.",
            },
            {
              title: "Private Sector DNA, Public Sector Mission",
              description: "As an initiative under MX2 Extension ENT., BDI operates with private sector agility and innovation culture while pursuing a mission that serves the public good — economic transformation, job creation, and improved quality of life for all residents of Bauchi State.",
            },
            {
              title: "Controlled Phases, Not Chaotic Rush",
              description: "The 7-Phase Development Model ensures that transformation happens in a controlled, strategic sequence — from foundational land mapping through to investor adoption and the continuous development flywheel. Every phase builds on the one before it.",
            },
          ].map((item, i) => (
            <div key={item.title} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex gap-6">
                <div className="w-px bg-gradient-to-b from-primary to-transparent shrink-0"></div>
                <div className="pb-2">
                  <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Moving Forward CTA */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-6 py-20 max-w-4xl text-center">
          <div className="reveal-on-scroll">
            <h2 className="font-serif text-4xl text-white mb-4">Moving Forward</h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Every partnership we build, every initiative we launch, and every opportunity we create is guided by one purpose: to help Bauchi State exceed expectations, become globally competitive, and emerge as one of Africa&apos;s leading centres of opportunity, investment, innovation, and sustainable development.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              We are not waiting for the future. We are building it — one phase, one platform, one partnership at a time.
            </p>
            <Link
              href="/about-bdi"
              className="inline-block border border-accent text-accent px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:text-primary-dark transition-all"
            >
              Learn More About BDI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}