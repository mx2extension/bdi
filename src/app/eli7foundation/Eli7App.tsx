"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Target,
  Eye,
  Users,
  BookOpen,
  HandHeart,
  Stethoscope,
  Home as HomeIcon,
  Droplets,
  Baby,
  GraduationCap,
  Mail,
  MapPin,
  Check,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
  LayoutDashboard,
  Info,
  UsersRound,
  Compass,
  Flag,
  Image as ImageIcon,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import {
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";
import { DonationCopyButton } from "./donation-copy";
import VideoPopup from "./VideoPopup";

/* ───────────────────────────────────────────
   DATA
─────────────────────────────────────────── */

const navSections = [
  { id: "home", label: "Home", icon: LayoutDashboard },
  { id: "about", label: "About Us", icon: Info },
  { id: "team", label: "Our Team", icon: UsersRound },
  { id: "focus", label: "Focus Areas", icon: Compass },
  { id: "impact", label: "Our Impact", icon: Flag },
  { id: "campaign", label: "Current Campaign", icon: Heart },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "support", label: "Support Us", icon: HeartHandshake },
  { id: "connect", label: "Connect", icon: MessageCircle },
];

const galleryImages = [
  {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1781768276/WhatsApp_Image_2026-05-27_at_1.57.51_PM_th7r98.jpg",
    caption: "Community engagement in Bauchi State",
  },
  {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782108455/WhatsApp_Image_2026-05-27_at_2.24.08_PM_n7ewbi.jpg",
    caption: "Community engagement in Bauchi State",
  },
  {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782108440/WhatsApp_Image_2026-05-27_at_2.24.05_PM_snfttq.jpg",
    caption: "Community engagement in Bauchi State",
  },
  {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1782108616/WhatsApp_Image_2026-05-27_at_2.24.02_PM_jmfh65.jpg",
    caption: "Community engagement in Bauchi State",
  },
];

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting access to quality learning through scholarships, school supplies, and classroom support for children in underserved communities.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Facilitating free medical outreach and health awareness campaigns in communities with limited access to healthcare facilities.",
  },
  {
    icon: HandHeart,
    title: "Women Empowerment",
    description:
      "Creating pathways for women through skills acquisition, small business support, and leadership development programs.",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description:
      "Working towards improved access to clean water and proper sanitation in rural and peri-urban areas.",
  },
  {
    icon: Baby,
    title: "Child Welfare",
    description:
      "Advocating for child rights, supporting nutritional needs, and creating safe environments for vulnerable children.",
  },
  {
    icon: HomeIcon,
    title: "Community Development",
    description:
      "Partnering with local leaders to identify and address the most pressing needs in each community.",
  },
];

const whySupportItems = [
  {
    title: "Honest About Where We Are",
    desc: "We won't inflate numbers or claim impact we haven't made. What we've done, we've done. What's ahead, we're working towards.",
  },
  {
    title: "On the Ground in Bauchi",
    desc: "We are physically present and engaged — not operating from a distance. Every outreach is hands-on and community-centered.",
  },
  {
    title: "Every Naira Counts",
    desc: "We're at an early stage, which means your support goes directly where it's needed most — no bloated overheads, no bureaucracy.",
  },
  {
    title: "Building to Last",
    desc: "We're not here for one-off photo ops. We're building a foundation for sustained, growing impact across Bauchi State.",
  },
];

const getInvolvedItems = [
  {
    icon: Users,
    title: "Volunteer",
    desc: "Join us on the ground during our outreach programs in Bauchi State.",
  },
  {
    icon: HandHeart,
    title: "Partner",
    desc: "Organizations and individuals who want to co-support specific outreaches.",
  },
  {
    icon: Mail,
    title: "Spread the Word",
    desc: "Share our work with your network — visibility helps us reach more people.",
  },
];

/* ───────────────────────────────────────────
   PDF LINKS
─────────────────────────────────────────── */

const CHILDRENS_DAY_PDF =
  "https://yevhfmwfjpebpdbmuvot.supabase.co/storage/v1/object/public/bdi-assets/ELI7_Childrens_Day_Outreach_Proposal_Gwalameji.pdf";

const MENSTRUAL_HEALTH_PDF =
  "https://yevhfmwfjpebpdbmuvot.supabase.co/storage/v1/object/public/bdi-assets/ELI7_Foundation_Outreach_2.pdf";

const GOFUNDME_LINK = "https://gofund.me/47539e4f4";

/* ───────────────────────────────────────────
   MAIN COMPONENT
─────────────────────────────────────────── */

export default function Eli7App() {
  const [activeSection, setActiveSection] = useState("home");

  /* Handle direct hash navigation (e.g. from LinkedIn) */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && navSections.some((s) => s.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  /* Browser back/forward support */
  useEffect(() => {
    const onPop = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (navSections.some((s) => s.id === hash)) setActiveSection(hash);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      {/* Section fade-in keyframes */}
      <style>{`
        @keyframes sFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .s-enter { animation: sFadeIn .35s ease-out; }
      `}</style>

      <VideoPopup />

      {/* ═══════════════════════════════════
          DESKTOP SIDEBAR
      ═══════════════════════════════════ */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 z-50 w-16 bg-[#080f0c] border-r border-white/[0.04] flex-col items-center pt-5">
        {/* Logo mark */}
        <button
          onClick={() => navigate("home")}
          className="mb-8 group relative"
        >
          <span className="font-serif text-accent text-xl font-light tracking-tight">
            E7
          </span>
        </button>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col items-center gap-0.5 w-full">
          {navSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => navigate(section.id)}
                className={`group relative flex items-center justify-center w-full py-3 transition-colors duration-200 ${
                  isActive
                    ? "text-accent"
                    : "text-white/25 hover:text-white/55"
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-accent rounded-r-full" />
                )}
                <Icon className="w-[18px] h-[18px]" />

                {/* Tooltip */}
                <span
                  className="absolute left-full ml-4 px-3 py-1.5 bg-[#1a1a1a] border border-white/[0.08] text-white text-[11px] font-medium rounded-lg shadow-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap z-[100]"
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ═══════════════════════════════════
          MOBILE BOTTOM BAR
      ═══════════════════════════════════ */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080f0c]/95 backdrop-blur-md border-t border-white/[0.04] flex items-center justify-around px-0.5 py-1">
        {navSections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => navigate(section.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1.5 rounded-lg transition-colors duration-200 ${
                isActive ? "text-accent" : "text-white/25"
              }`}
            >
              {isActive && (
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-accent rounded-full" />
              )}
              <Icon className="w-[18px] h-[18px]" />
            </button>
          );
        })}
      </nav>

      {/* ═══════════════════════════════════
          MAIN CONTENT AREA
      ═══════════════════════════════════ */}
      <main className="lg:pl-16 pb-20 lg:pb-0 bg-white">
        {/* ─── HOME ─── */}
        {activeSection === "home" && (
          <div key="home" className="s-enter">
            <SectionHero />
          </div>
        )}

        {/* ─── ABOUT ─── */}
        {activeSection === "about" && (
          <div key="about" className="s-enter">
            <SectionAbout />
            <SectionMissionVision />
          </div>
        )}

        {/* ─── TEAM ─── */}
        {activeSection === "team" && (
          <div key="team" className="s-enter">
            <SectionTeam />
          </div>
        )}

        {/* ─── FOCUS AREAS ─── */}
        {activeSection === "focus" && (
          <div key="focus" className="s-enter">
            <SectionFocusAreas />
          </div>
        )}

        {/* ─── IMPACT ─── */}
        {activeSection === "impact" && (
          <div key="impact" className="s-enter">
            <SectionJourney />
            <SectionChildrensDay />
          </div>
        )}

        {/* ─── CAMPAIGN ─── */}
        {activeSection === "campaign" && (
          <div key="campaign" className="s-enter">
            <SectionCampaign />
          </div>
        )}

        {/* ─── GALLERY ─── */}
        {activeSection === "gallery" && (
          <div key="gallery" className="s-enter">
            <SectionGallery />
          </div>
        )}

        {/* ─── SUPPORT ─── */}
        {activeSection === "support" && (
          <div key="support" className="s-enter">
            <SectionWhySupport />
            <SectionDonate />
          </div>
        )}

        {/* ─── CONNECT ─── */}
        {activeSection === "connect" && (
          <div key="connect" className="s-enter">
            <SectionGetInvolved />
            <SectionSocial />
            <SectionContact />
          </div>
        )}
      </main>
    </>
  );
}

/* ═══════════════════════════════════════════
   SECTION COMPONENTS
═══════════════════════════════════════════ */

function SectionHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781768259/WhatsApp_Image_2026-05-27_at_2.24.01_PM_gxtb3g.jpg"
        alt="Eli7 Foundation — Community Impact"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent z-10" />

      <div className="container mx-auto px-6 relative z-20 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 mb-8">
            <Heart className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em]">
              Non-Profit Initiative
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
            Eli7 <span className="text-accent">Foundation</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Empowering underserved communities in Bauchi State through
            education, healthcare, and sustainable development.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.querySelector('[data-nav="support"]') as HTMLElement | null;
                el?.click();
              }}
              className="inline-flex items-center gap-2.5 bg-accent text-primary-dark px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent/90 transition-all"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('[data-nav="about"]') as HTMLElement | null;
                el?.click();
              }}
              className="inline-flex items-center gap-2.5 border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] text-white uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

function SectionAbout() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About Us
          </span>
          <h2 className="font-serif text-4xl mb-6 text-gray-900">
            Starting Right Here in Bauchi
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Eli7 Foundation exists to uplift communities that are often
            overlooked. We believe real change begins at the grassroots — by
            listening to people, understanding their needs, and standing with
            them to find practical solutions.
          </p>
          <p className="mb-4 leading-relaxed text-gray-600">
            Our impact has already started here in Bauchi State. We have
            successfully conducted our first community outreach and are actively
            preparing for the next one. These are early steps, but they are
            deliberate and grounded in a long-term commitment to the people of
            this state.
          </p>
          <p className="mb-8 leading-relaxed text-gray-600">
            Every outreach, every connection, every resource directed to the
            right place is a building block for the kind of future Bauchi
            deserves.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Community-First Approach
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Operating in Bauchi State
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Transparent &amp; Accountable
            </div>
          </div>
        </div>
        <div className="relative h-[550px]">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781768259/WhatsApp_Image_2026-05-27_at_2.24.01_PM_gxtb3g.jpg"
            alt="Community in Bauchi State"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent -z-10" />
          <div className="absolute -bottom-6 -left-6 bg-primary-dark border border-accent/30 px-6 py-5 z-10">
            <span className="block text-accent font-serif text-3xl font-light">
              Eli7
            </span>
            <span className="text-[9px] text-white/50 uppercase tracking-[0.25em]">
              Impact Has Started
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMissionVision() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Purpose
          </span>
          <h2 className="font-serif text-4xl mb-4 text-gray-900">
            Mission &amp; Vision
          </h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-2xl text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To identify and meet the real needs of underserved communities in
              Bauchi State through practical, on-the-ground interventions in
              education, healthcare, and community development — one outreach at
              a time.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-2xl text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A Bauchi where no community is left behind — where every person
              has a fair shot at a healthy, educated, and dignified life,
              supported by people who genuinely care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTeam() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Leadership
          </span>
          <h2 className="font-serif text-4xl mb-4 text-gray-900">
            The People Behind Eli7
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
            A small, dedicated team driving the foundation&apos;s mission forward
            on the ground in Bauchi State.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {/* Director of Operations */}
          <div className="text-center group">
            <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783866796/3e58da7f-1e04-49a9-9518-7910b7743888.png"
                alt="Director of Operations — Eli7 Foundation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-1">
              Amarchi Sunday
            </h3>
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
              Director of Operations
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
              Leads the foundation&apos;s on-the-ground operations in Bauchi State,
              coordinating outreach planning, community engagement, and program
              execution.
            </p>
            <a
              href="https://www.linkedin.com/in/amarachi-sunday-8b30891a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Assistant */}
          <div className="text-center group">
            <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783866068/c96ec03f-dc64-4451-a9de-55f781ed3f23.png"
                alt="Assistant — Eli7 Foundation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-1">
              Mary Okorie
            </h3>
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
              Assistant
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
              Supports the Director of Operations in logistics, communications,
              and coordination of foundation activities across communities.
            </p>
            <a
              href="https://www.linkedin.com/in/okorie-mary-ngozi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionFocusAreas() {
  return (
    <section className="bg-primary-dark py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We&apos;re About
          </span>
          <h2 className="font-serif text-4xl mb-4 text-white">
            Our Focus Areas
          </h2>
          <p className="text-white/45 text-sm max-w-xl mx-auto mt-4">
            These are the areas we are committed to addressing as we grow our
            presence in Bauchi State.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="group bg-white/[0.03] border border-white/[0.07] p-8 relative overflow-hidden hover:bg-accent/[0.06] hover:border-accent/20 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-[13px] text-white/35 leading-relaxed group-hover:text-white/55 transition-colors">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionJourney() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Progress
          </span>
          <h2 className="font-serif text-4xl mb-4 text-gray-900">
            Our Journey So Far
          </h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </div>

        <div className="space-y-0">
          <div className="relative pl-10 pb-12 border-l border-accent/20">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] ring-4 ring-white" />
            <span className="text-[10px] text-accent font-semibold uppercase tracking-[0.2em]">
              Completed
            </span>
            <h4 className="font-serif text-xl text-gray-900 mt-2 mb-2">
              First Community Outreach
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              We successfully carried out our first outreach here in Bauchi State
              — connecting directly with community members, understanding their
              needs, and providing on-the-ground support. Real people, real
              impact, real start.
            </p>
          </div>

          <div className="relative pl-10 pb-12 border-l border-white/20">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-white border-2 border-accent -translate-x-[7px] ring-4 ring-white">
              <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            </div>
            <span className="text-[10px] text-accent/60 font-semibold uppercase tracking-[0.2em]">
              In Progress
            </span>
            <h4 className="font-serif text-xl text-gray-900 mt-2 mb-2">
              Second Outreach — In Preparation
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              We are currently planning and mobilizing for our next community
              outreach in Bauchi State. Every detail is being considered to
              ensure we show up where it matters most.
            </p>
          </div>

          <div className="relative pl-10 pb-2 border-l border-gray-200">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gray-200 -translate-x-[7px] ring-4 ring-white" />
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">
              Ahead
            </span>
            <h4 className="font-serif text-xl text-gray-900 mt-2 mb-2">
              Many More to Come
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              This is just the beginning. We are building something long-term in
              Bauchi State — more outreaches, deeper engagement, and expanded
              reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionChildrensDay() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white border border-gray-100 p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
          <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <span className="inline-block bg-green-50 text-green-700 text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">
                Completed — May 2026
              </span>
              <h3 className="font-serif text-2xl text-gray-900 mb-2">
                Children&apos;s Day Community Outreach
              </h3>
              <p className="text-sm text-gray-500">
                Gwalameji, Bauchi State &middot; Project Code: ELI7-OUT-2026-01
              </p>
            </div>
            <a
              href={CHILDRENS_DAY_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-dark text-white px-6 py-3 text-[11px] font-semibold uppercase tracking-widest hover:bg-primary-dark/90 transition-all flex-shrink-0 self-start"
            >
              <Download className="w-4 h-4" />
              Download Report
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="bg-gray-50 border border-gray-100 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                100+
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
                Children Clothed &amp; Fed
              </span>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                100%
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
                Healthy Homemade Meals
              </span>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                ₦165K
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.15em]">
                Total Project Value
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            Our first flagship outreach successfully served over 100 children
            with nutritious homemade rice meals, healthy Zobo drinks, and clean
            clothing through our Clothes Bank Initiative. Through a
            community-driven model of micro-donations and in-kind contributions,
            we demonstrated how transparent, grassroots mobilization can create
            immediate, tangible impact without relying on massive external
            grants.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── CAMPAIGN — pink/rose themed ─── */
function SectionCampaign() {
  return (
    <section className="bg-[#faf5f7] py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="block text-rose-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Active Campaign
          </span>
          <h2 className="font-serif text-4xl mb-4 text-gray-900">
            Menstrual Health Education &amp; Support Programme
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
            Our most ambitious outreach yet — reaching thousands of adolescent
            girls across schools in Bauchi State.
          </p>
          <div className="w-10 h-px bg-rose-400 mx-auto mt-6" />
        </div>

        <div className="bg-[#1a0a12] border border-pink-500/15 p-8 md:p-10 relative overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-pink-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                  </span>
                  2026 / 2027 Programme
                </span>
                <h3 className="font-serif text-2xl text-white mb-2">
                  Comprehensive School Outreach &amp; Amara Digital Platform
                </h3>
                <p className="text-sm text-white/40">
                  20–30 Schools Target &middot; Bauchi State
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href={MENSTRUAL_HEALTH_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-widest hover:bg-white/[0.1] hover:border-pink-500/25 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Proposal
                </a>
                <a
                  href={GOFUNDME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 text-[11px] font-semibold uppercase tracking-widest hover:bg-pink-600 transition-all"
                >
                  <Heart className="w-4 h-4" />
                  GoFundMe
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { value: "4,000–6,000", label: "Girls Reached" },
                { value: "144K+", label: "Sanitary Pads" },
                { value: "20–30", label: "Schools" },
                { value: "Amara", label: "Digital Health App" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-pink-500/[0.05] border border-pink-500/10 p-5 text-center"
                >
                  <span className="block font-serif text-2xl md:text-3xl text-pink-400 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-pink-300/30 uppercase tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-pink-100/40 leading-relaxed mb-8">
              Beyond workshops and sanitary product distribution, this programme
              includes parent and teacher sensitisation, physical wellness
              journals, and the development of{" "}
              <span className="text-pink-400 font-medium">Amara</span> — a
              multilingual digital health companion app with Hausa language
              support and offline capability for sustained, long-term impact.
            </p>

            {/* Funding Tiers */}
            <div className="bg-white/[0.03] border border-pink-500/10 p-6">
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <h4 className="font-serif text-lg text-white">Funding Tiers</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] border border-pink-500/10 p-5">
                  <span className="block text-[10px] text-pink-400/70 font-semibold uppercase tracking-[0.2em] mb-2">
                    Tier 1 — Field Operations
                  </span>
                  <span className="block font-serif text-2xl text-white mb-2">
                    $32,000 – $48,000
                  </span>
                  <p className="text-[12px] text-white/30 leading-relaxed">
                    Fully funds direct physical outreach — sanitary pads, hygiene
                    kits, workshops, and community advocacy across 20–30
                    schools.
                  </p>
                </div>
                <div className="bg-pink-500/[0.06] border border-pink-500/20 p-5">
                  <span className="block text-[10px] text-pink-400 font-semibold uppercase tracking-[0.2em] mb-2">
                    Tier 2 — Complete Programme
                  </span>
                  <span className="block font-serif text-2xl text-pink-400 mb-2">
                    $47,000 – $75,000
                  </span>
                  <p className="text-[12px] text-white/40 leading-relaxed">
                    Includes all field operations plus full development and
                    deployment of the Amara digital health platform for long-term
                    impact.
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-pink-500/10">
                <a
                  href={GOFUNDME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-pink-500 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-pink-600 transition-all"
                >
                  <Heart className="w-4 h-4" />
                  Contribute to This Outreach
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <p className="text-[10px] text-white/20 mt-3 leading-relaxed">
                  This GoFundMe campaign is temporary and will be taken down
                  once the project is fully funded and completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionGallery() {
  return (
    <section className="bg-primary-dark min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <div>
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Our Stories
            </span>
            <h2 className="font-serif text-4xl text-white">
              The Communities We Serve
            </h2>
          </div>
        </div>
      </div>

      <div className="pl-6 md:pl-[calc((100vw-1200px)/2+24px)] flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="group relative min-w-[320px] md:min-w-[420px] h-[450px] md:h-[500px] flex-shrink-0 overflow-hidden cursor-pointer snap-start"
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="420px"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <p className="text-white text-base font-medium leading-relaxed drop-shadow-lg">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
        <div className="min-w-[calc((100vw-1200px)/2)] md:min-w-[24px] flex-shrink-0" />
      </div>
    </section>
  );
}

function SectionWhySupport() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] order-2 lg:order-1">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782108458/WhatsApp_Image_2026-05-27_at_1.57.49_PM_jzvkae.jpg"
            alt="Supporting communities in Bauchi"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute -bottom-5 -left-5 w-full h-full border border-accent -z-10" />
        </div>

        <div className="order-1 lg:order-2">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Why Support Us
          </span>
          <h2 className="font-serif text-4xl mb-8 text-gray-900">
            We&apos;re Doing the Real Work
          </h2>

          <div className="space-y-6">
            {whySupportItems.map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                  <span className="text-accent font-serif text-sm">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDonate() {
  return (
    <section id="donate" className="bg-primary py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 mb-8">
          <Heart className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em]">
            Support Our Cause
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Support What We&apos;re Building
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          We&apos;re at the beginning of something meaningful in Bauchi State.
          Your support — no matter the size — helps us reach more communities
          and make a real difference where it&apos;s needed most.
        </p>

        <div className="max-w-2xl mx-auto bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 text-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-white">
                Bank Transfer Details
              </h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
                Direct bank donation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account 1 */}
            <div className="bg-white/[0.03] border border-white/[0.06] p-5">
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">
                Account 1
              </span>
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Bank
                  </span>
                  <span className="text-white text-sm font-medium">
                    Parallex Bank
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Account Number
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono text-base tracking-wider">
                      2000674970
                    </span>
                    <DonationCopyButton text="2000674970" />
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Account Name
                  </span>
                  <span className="text-white text-sm font-medium">
                    Chinemerem Nwankpa
                  </span>
                </div>
              </div>
            </div>

            {/* Account 2 */}
            <div className="bg-white/[0.03] border border-white/[0.06] p-5">
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">
                Account 2
              </span>
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Bank
                  </span>
                  <span className="text-white text-sm font-medium">
                    Guaranty Trust Bank (GTB)
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Account Number
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono text-base tracking-wider">
                      0426938072
                    </span>
                    <DonationCopyButton text="0426938072" />
                  </div>
                </div>
                <div>
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">
                    Account Name
                  </span>
                  <span className="text-white text-sm font-medium">
                    Amarachi Sunday
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-white/40 uppercase tracking-widest">
                Email
              </span>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm">
                  eli7foundation@gmail.com
                </span>
                <DonationCopyButton text="eli7foundation@gmail.com" />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-white/[0.06]">
            <p className="text-[11px] text-white/30 leading-relaxed">
              After making a transfer, please send confirmation to{" "}
              <a
                href="mailto:eli7foundation@gmail.com"
                className="text-accent/60 hover:text-accent transition-colors underline underline-offset-2"
              >
                eli7foundation@gmail.com
              </a>{" "}
              with your name, amount, and date of transfer. All donations are
              acknowledged and accounted for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionGetInvolved() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Join Us
          </span>
          <h2 className="font-serif text-4xl mb-4 text-gray-900">
            Get Involved
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
            Beyond donations, there are other ways to stand with us.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {getInvolvedItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group text-center p-8 border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionSocial() {
  const socials = [
    {
      icon: FaXTwitter,
      label: "X (Twitter)",
      handle: "@eli7foundation",
      href: "https://x.com/eli7foundation",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      handle: "@eli7foundation",
      href: "https://youtube.com/@eli7foundation",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@eli7foundation",
      href: "https://instagram.com/eli7foundation",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      handle: "+234 814 919 3063",
      href: "https://wa.me/2348149193063",
    },
  ];

  return (
    <section className="bg-primary-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Connect With Us
          </span>
          <h2 className="font-serif text-4xl text-white mb-4">
            Follow Eli7 Foundation
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Stay updated on our outreaches, progress, and how your support is
            making a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-5 hover:bg-accent/[0.08] hover:border-accent/25 transition-all duration-500 min-w-[220px]"
            >
              <s.icon className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-white text-sm font-medium group-hover:text-accent transition-colors">
                  {s.label}
                </span>
                <span className="block text-[11px] text-white/25">
                  {s.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionContact() {
  return (
    <section className="bg-[#071a16] py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto text-center">
          <div>
            <Mail className="w-5 h-5 text-accent mx-auto mb-3" />
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">
              Email
            </h4>
            <a
              href="mailto:eli7foundation@gmail.com"
              className="text-white/80 text-sm hover:text-accent transition-colors"
            >
              eli7foundation@gmail.com
            </a>
          </div>
          <div>
            <MapPin className="w-5 h-5 text-accent mx-auto mb-3" />
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">
              Location
            </h4>
            <span className="text-white/80 text-sm">Bauchi State, Nigeria</span>
          </div>
          <div>
            <Heart className="w-5 h-5 text-accent mx-auto mb-3" />
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">
              Donate
            </h4>
            <button
              onClick={() => {
                const el = document.querySelector<HTMLElement>('[data-nav="support"]');
                el?.click();
              }}
              className="text-white/80 text-sm hover:text-accent transition-colors"
            >
              Support Our Work
            </button>
          </div>
          <div>
            <FaWhatsapp className="w-5 h-5 text-accent mx-auto mb-3" />
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">
              Call or WhatsApp
            </h4>
            <a
              href="https://wa.me/2347034684943"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-sm hover:text-accent transition-colors"
            >
              +234 703 468 4943
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-16 pt-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-serif text-2xl text-accent">Eli7</span>
            <span className="text-white/30 text-sm">Foundation</span>
          </div>
          <p className="text-[11px] text-white/20 leading-relaxed max-w-lg mx-auto">
            This is a temporary page hosted on the BDI platform. Eli7
            Foundation will transition to its own dedicated website in due
            course.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-[10px] text-white/30 uppercase tracking-widest hover:text-accent transition-colors"
            >
              &larr; Back to BDI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}