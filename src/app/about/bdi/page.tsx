import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About BDI" };

const investmentSectors = [
  "Agriculture", "Technology", "Manufacturing", "Education", "Tourism",
  "Healthcare", "Renewable Energy", "Housing", "Infrastructure", "Commerce", "Small Business Development",
];

const targetInvestors = [
  { label: "Local Investors", desc: "From across Nigeria" },
  { label: "African Investors", desc: "Across the continent" },
  { label: "International Businesses", desc: "Global market entrants" },
  { label: "Development Organisations", desc: "NGOs and agencies" },
  { label: "Strategic Partners", desc: "Long-term collaborators" },
  { label: "Philanthropic Institutions", desc: "Impact-driven funders" },
];

const findOneFeatures = [
  "Discover job opportunities",
  "Access scholarships",
  "Find internships and graduate trainee programmes",
  "Explore training opportunities",
  "Access useful educational and career resources",
  "Connect clients with skilled professionals and service providers",
];

const ecosystemFocus = [
  "Economic Development", "Investment Promotion", "Technology", "Employment",
  "Entrepreneurship", "Community Outreach", "Humanitarian Support",
  "Digital Innovation", "Commerce", "Youth Empowerment",
];

const phases = [
  { number: "01", title: "Land Mapping & Digital Structuring", description: "Comprehensive surveying, zoning, and classification of every parcel of land into a private digital platform for organised, future-ready development.", color: "bg-teal-500", lightColor: "bg-teal-50", textColor: "text-teal-600", borderColor: "border-teal-200" },
  { number: "02", title: "Legal Alignment & Governance", description: "Ensuring all development activities are backed by proper legal frameworks, regulatory compliance, and transparent governance structures.", color: "bg-purple-500", lightColor: "bg-purple-50", textColor: "text-purple-600", borderColor: "border-purple-200" },
  { number: "03", title: "Controlled Public Awareness", description: "Strategic communication to inform and engage stakeholders, communities, and the public about development plans and opportunities.", color: "bg-emerald-500", lightColor: "bg-emerald-50", textColor: "text-emerald-600", borderColor: "border-emerald-200" },
  { number: "04", title: "Early Mover Sector Activation", description: "Identifying and activating priority sectors with early investment incentives to create momentum and demonstrate viability.", color: "bg-amber-500", lightColor: "bg-amber-50", textColor: "text-amber-600", borderColor: "border-amber-200" },
  { number: "05", title: "Infrastructure & Migration", description: "Deploying critical infrastructure and facilitating the smooth transition of businesses, talent, and resources into activated zones.", color: "bg-rose-500", lightColor: "bg-rose-50", textColor: "text-rose-600", borderColor: "border-rose-200" },
  { number: "06", title: "Investor Adoption & Reveal", description: "Positioning activated and infrastructure-ready zones for investor onboarding, deal closure, and public launch of development milestones.", color: "bg-blue-500", lightColor: "bg-blue-50", textColor: "text-blue-600", borderColor: "border-blue-200" },
];

const developmentAreas = [
  { title: "Medical & Healthcare", description: "Top-notch healthcare facilities, modern hospitals, and accessible primary care centres across the state.", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80" },
  { title: "Research into African Medicine", description: "Supporting research and development in traditional and modern African medicine for global relevance.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80" },
  { title: "Security Integration", description: "Comprehensive security architecture ensuring safe environment for residents, businesses, and investors.", image: "https://images.unsplash.com/photo-1586953208270-767fc1b15b90?w=600&q=80" },
  { title: "Technology Development", description: "Building digital infrastructure, tech hubs, and innovation ecosystems to drive the knowledge economy.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { title: "Industries & Factories", description: "Establishing industrial zones and manufacturing facilities to create jobs and boost local production capacity.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
  { title: "Infrastructure & Roads", description: "Modern road networks, bridges, water systems, and public utilities to support economic activity.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80" },
  { title: "Tourism & Hospitality", description: "Developing tourism centres, cultural sites, and hospitality infrastructure to unlock Bauchi's tourism potential.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { title: "Revenue Generation", description: "Building sustainable revenue streams through diversified economic activities and efficient tax systems.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
  { title: "Media & Communications", description: "Strengthening media capacity and communication channels for transparency and public engagement.", image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&q=80" },
  { title: "NGO & Development Partners", description: "Collaborating with NGOs and development organisations for humanitarian support and community programmes.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { title: "Upgrade & Modern Development", description: "Systematic upgrading of existing structures, systems, and urban areas to meet modern standards.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { title: "Businesses & Commerce", description: "Fostering a thriving business environment with support for SMEs, markets, and enterprise development.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
];

const zoningSteps = [
  { step: "01", title: "Land Survey & Classification", description: "Every parcel of land is surveyed, zoned, and classified — residential, commercial, industrial, or mixed-use — creating a complete digital record of the state's land assets.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg> },
  { step: "02", title: "Digital Zoning Platform", description: "A private digital platform — not public — houses all zoning data, enabling smart allocation and strategic decision-making for government and approved partners.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg> },
  { step: "03", title: "Intelligent Zone Placement", description: "Ensures organised and intelligent growth with smart planning — placing the right developments in the right zones for maximum efficiency, sustainability, and long-term value.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg> },
];

export default function AboutBDI() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <div className="pt-32 min-h-[45vh] pb-20 relative bg-primary-dark flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782108619/WhatsApp_Image_2026-05-27_at_1.57.51_PM_as7i9h.jpg"
            alt="About BDI"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Who We Are</span>
          <h1 className="font-serif text-6xl text-white mt-4">About BDI</h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed text-lg">Building the Future of Bauchi State</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Our Mandate</span>
            <h2 className="font-serif text-4xl text-gray-900 mb-6">Driving Bauchi Towards a Prosperous Future</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Bauchi State Development Initiative (BDI) is a long-term development initiative established under MX2 Extension ENT. with a clear mission: to unlock the full economic, social, technological, and human potential of Bauchi State.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe Bauchi possesses the resources, talent, strategic location, and opportunities required to become one of Africa&apos;s leading centres for investment, innovation, entrepreneurship, education, and sustainable development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is not simply to improve the state, but to help position Bauchi as a globally recognised destination for business, opportunity, and progress.
            </p>
          </div>
          <div className="reveal-on-scroll relative h-[500px]" style={{ transitionDelay: "200ms" }}>
            <Image src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783864945/593eb828-05ce-470f-83d7-a2da65f33daa.png" alt="BDI Team" fill className="object-cover" />
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent -z-10"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal-on-scroll bg-white p-10 lg:p-12 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Vision</h3>
              <p className="font-serif text-2xl text-gray-900 leading-relaxed">To build a globally recognised Bauchi State that attracts investment, creates opportunities, empowers people, and serves as a leading example of sustainable development in Africa.</p>
            </div>
            <div className="reveal-on-scroll bg-white p-10 lg:p-12 border border-gray-100 shadow-sm" style={{ transitionDelay: "150ms" }}>
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Our mission is to promote the long-term development of Bauchi State by connecting people, businesses, investors, innovators, government institutions, development partners, and communities through practical initiatives that create measurable economic and social impact.</p>
              <p className="text-gray-600 leading-relaxed">We are committed to supporting efforts that increase employment, improve entrepreneurship, strengthen education, encourage innovation, attract investment, and improve the quality of life for everyone living in Bauchi State.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="reveal-on-scroll lg:col-span-2 flex flex-col justify-center">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">The Strategic Framework</span>
              <h2 className="font-serif text-4xl text-white mt-3 mb-6">7-Phase Development Model</h2>
              <p className="text-white/60 leading-relaxed mb-6">A controlled, strategically phased approach to transforming Bauchi State — from foundational land mapping through to continuous development and sustainable revenue generation.</p>
              <div className="w-10 h-px bg-accent"></div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {phases.map((phase, i) => (
                <div key={phase.number} className="reveal-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`flex items-start gap-5 p-5 border ${phase.borderColor} ${phase.lightColor} hover:shadow-lg transition-shadow duration-300`}>
                    <div className={`w-10 h-10 ${phase.color} flex items-center justify-center shrink-0`}>
                      <span className="text-white font-sans text-xs font-bold">{phase.number}</span>
                    </div>
                    <div>
                      <h4 className={`font-serif text-lg ${phase.textColor} mb-1`}>{phase.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="reveal-on-scroll mt-6 bg-gradient-to-r from-amber-400 to-amber-500 p-6 flex items-center gap-5" style={{ transitionDelay: "400ms" }}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>
                </div>
                <div>
                  <p className="text-white font-serif text-lg">Continuous Development Flywheel</p>
                  <p className="text-white/80 text-sm">Self-sustaining cycle of growth, reinvestment, and expansion — development that compounds over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Focus Areas */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">What We're Building</span>
          <h2 className="font-serif text-4xl text-gray-900 mt-3 mb-4">Development Focus Areas</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">BDI&apos;s strategic plan spans across critical sectors that together form the foundation for a modern, thriving, and self-sustaining Bauchi State.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developmentAreas.map((area, i) => (
            <div key={area.title} className="reveal-on-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="group relative overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-44 overflow-hidden">
                  <Image src={area.image} alt={area.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 font-serif text-lg text-white">{area.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Land Zoning */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Foundation Phase</span>
            <h2 className="font-serif text-4xl text-gray-900 mt-3 mb-4">Strategic Land Zoning & Sector Mapping Platform</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Comprehensive mapping and future-ready development — ensuring every parcel of land in Bauchi State is surveyed, zoned, classified, and digitally structured for intelligent growth.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {zoningSteps.map((item, i) => (
              <div key={item.step} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-primary flex items-center justify-center">
                    <span className="text-white font-sans text-xs font-bold">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-5 mt-2 text-primary">{item.icon}</div>
                  <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Comprehensive Mapping", "Future-Ready Development", "Smart Planning", "Organised Growth", "Digital Infrastructure"].map((tag) => (
              <span key={tag} className="bg-primary text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Working Alongside Government */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Collaboration</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Working Alongside Government Development Goals</h2>
          <p className="text-gray-600 leading-relaxed mb-8">BDI supports and complements the broader development aspirations of Bauchi State. Our vision aligns with the state&apos;s drive toward economic growth, infrastructure development, youth empowerment, digital transformation, investment promotion, and improved living standards.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Economic Growth", "Infrastructure Development", "Youth Empowerment", "Digital Transformation", "Investment Promotion", "Improved Living Standards"].map((goal) => (
              <span key={goal} className="bg-primary/5 text-primary border border-primary/20 px-5 py-2.5 text-sm font-medium">{goal}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8 leading-relaxed">We believe meaningful development is achieved when government, the private sector, communities, development organisations, and citizens work together toward shared goals.</p>
        </div>
      </section>

      {/* Investment Promotion */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Core Objective</span>
            <h2 className="font-serif text-4xl text-white mt-3 mb-4">Investment Promotion</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">One of BDI&apos;s core objectives is to showcase Bauchi State as one of Nigeria&apos;s most promising investment destinations. By presenting reliable information and highlighting the state&apos;s strengths, BDI seeks to attract investors and partners.</p>
          </div>

          <div className="reveal-on-scroll mb-16">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/50 mb-6 text-center">Investment Sectors</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {investmentSectors.map((sector) => (
                <span key={sector} className="border border-white/20 text-white/80 px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors duration-300 cursor-default">{sector}</span>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/50 mb-8 text-center">Who We Attract</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetInvestors.map((investor, i) => (
                <div key={investor.label} className="reveal-on-scroll border border-white/10 p-6 hover:border-accent/50 transition-colors duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-sm mb-4">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
                  </div>
                  <h4 className="font-serif text-lg text-white mb-1">{investor.label}</h4>
                  <p className="text-white/40 text-sm">{investor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FindOne Campus */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-on-scroll">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Innovation</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Economic Growth Through Innovation</h2>
            <p className="text-gray-600 leading-relaxed mb-6">BDI believes that technology plays a major role in modern development. For this reason, we support and promote digital platforms that solve real problems, create employment, and stimulate economic activity.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Among these initiatives is <span className="font-semibold text-gray-900">FindOne Campus</span>, a platform developed under MX2 Extension ENT. that connects students, graduates, job seekers, professionals, employers, and service providers.</p>
            <p className="text-gray-500 text-sm leading-relaxed">The platform contributes to workforce development while helping businesses discover qualified talent.</p>
          </div>
          <div className="reveal-on-scroll bg-gray-50 p-8 lg:p-10 border border-gray-100" style={{ transitionDelay: "150ms" }}>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">Through FindOne Campus, users can:</h3>
            <ul className="space-y-4">
              {findOneFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded-sm shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Entrepreneurship */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll relative h-[400px] order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Commerce" fill className="object-cover" />
              <div className="absolute -bottom-5 -left-5 w-full h-full border border-accent -z-10"></div>
            </div>
            <div className="reveal-on-scroll order-1 lg:order-2" style={{ transitionDelay: "150ms" }}>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Commerce</span>
              <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Supporting Entrepreneurship and Commerce</h2>
              <p className="text-gray-600 leading-relaxed mb-6">BDI also supports local commerce by encouraging digital participation in the economy.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Our ecosystem includes an online marketplace where individuals can advertise and resell products, making it easier for businesses and residents within Bauchi State to buy, sell, and connect through digital platforms.</p>
              <div className="bg-white p-6 border-l-4 border-accent">
                <p className="text-gray-700 font-serif text-lg italic">&ldquo;We believe empowering entrepreneurs and expanding market access are essential to building a stronger local economy.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Social Impact</span>
              <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-6">Community Development</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Development goes beyond infrastructure and investment. It also means improving lives.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Through <span className="font-semibold text-gray-900">Extend Love Initiative Foundation</span>, another initiative under MX2 Extension ENT., we carry out humanitarian and community development programmes aimed at supporting vulnerable communities and promoting social impact.</p>
              <p className="text-gray-500 text-sm leading-relaxed">Our outreach efforts have already begun within Bauchi State, reflecting our belief that lasting development must include compassion, inclusion, and community service.</p>
            </div>
            <div className="bg-primary p-8 flex flex-col justify-center">
              <p className="font-serif text-5xl text-white mb-4">❤️</p>
              <h3 className="font-serif text-xl text-white mb-3">Extend Love Initiative Foundation</h3>
              <p className="text-white/50 text-sm leading-relaxed">Humanitarian and community development programmes supporting vulnerable communities and promoting social impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="reveal-on-scroll text-center mb-12">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">MX2 Extension ENT.</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-4">Our Ecosystem</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">BDI operates within the broader ecosystem of MX2 Extension ENT., an organisation committed to building innovative solutions that create lasting value.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {ecosystemFocus.map((item, i) => (
              <div key={item} className="reveal-on-scroll bg-white border border-gray-100 px-4 py-5 text-center text-sm text-gray-700 font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 cursor-default" style={{ transitionDelay: `${i * 60}ms` }}>
                {item}
              </div>
            ))}
          </div>

          <p className="reveal-on-scroll text-center text-gray-500 text-sm mt-8 leading-relaxed">Each initiative contributes toward the shared objective of accelerating the development of Bauchi State.</p>
        </div>
      </section>

      {/* Commitment */}
      <section className="container mx-auto px-6 py-20">
        <div className="reveal-on-scroll max-w-3xl mx-auto text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Promise</span>
          <h2 className="font-serif text-3xl text-gray-900 mt-3 mb-8">Our Commitment</h2>
          <p className="text-gray-600 leading-relaxed mb-6">BDI is committed to creating lasting impact rather than temporary projects.</p>
          <p className="text-gray-600 leading-relaxed mb-6">We are building systems, partnerships, platforms, and opportunities that can continue to serve future generations. We believe the development of Bauchi State requires collaboration, innovation, strategic thinking, and consistent action.</p>
          <div className="border-t border-b border-gray-200 py-8 my-8">
            <p className="font-serif text-xl text-gray-900 leading-relaxed">Every partnership we build, every initiative we launch, and every opportunity we create is guided by one purpose:</p>
          </div>
          <p className="font-serif text-2xl text-primary leading-relaxed">To help Bauchi State exceed expectations, become globally competitive, and emerge as one of Africa&apos;s leading centres of opportunity, investment, innovation, and sustainable development.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">Partner With BDI</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">Join us in transforming Bauchi State. Whether you are an investor, development partner, or technical expert, there is a role for you.</p>
          <Link href="/contact" className="inline-block border border-accent text-accent px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent hover:text-primary-dark transition-all">Get In Touch</Link>
        </div>
      </section>
    </main>
  );
}