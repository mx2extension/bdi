"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
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
  Menu,
  X,
  Copy,
} from "lucide-react";
import {
  FaYoutube,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa6";
import { DonationCopyButton } from "./donation-copy";
import VideoPopup from "./VideoPopup";

/* ───────────────────────────────────────────
   DATA
─────────────────────────────────────────── */

const navSections = [
  { id: "home", label: "Home", icon: LayoutDashboard },
  { id: "about", label: "About Us & Team", icon: UsersRound },
  { id: "focus", label: "Focus Areas & Impact", icon: Compass },
  { id: "campaign", label: "Current Campaign", icon: Heart },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "support", label: "Support Us", icon: HeartHandshake },
  { id: "connect", label: "Connect", icon: MessageCircle },
  { id: "thank-you", label: "Thank You", icon: Heart },
];

const galleryImages = [
    {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1787232909/1d6b61c3-2f2a-4ad8-b810-6ba70ea816f8.png",
    caption: "Community engagement in Bauchi State",
  },
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
    {
    src: "https://res.cloudinary.com/drnrbfltr/image/upload/v1787237885/06af440f-84f4-4de8-9501-58d83c2703a7.png",
    caption: "Menstural heath outreach in Bauchi State (Questionaire and awareness session)",
  }
];

const focusAreas = [
  {
    icon: HeartHandshake,
    title: "Women & Girls’ Empowerment",
    description:
      "Advancing the dignity, rights, health, education, leadership and economic opportunities of women and girls, while helping remove barriers that limit their participation and potential.",
  },
  {
    icon: UsersRound,
    title: "Disability Inclusion & Accessibility",
    description:
      "Promoting equal participation for persons with disabilities through inclusive programmes, accessible opportunities, community awareness and support that recognises every person’s abilities and rights.",
  },
  {
    icon: GraduationCap,
    title: "Education & Youth Development",
    description:
      "Supporting access to learning, school supplies, life skills and opportunities that help children and young people build knowledge, confidence and a stronger future.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellbeing",
    description:
      "Promoting health awareness and practical community-based support, including menstrual health education and improved access to essential health resources.",
  },
  {
    icon: Baby,
    title: "Child Protection & Welfare",
    description:
      "Supporting children’s rights, safety, nutrition and wellbeing while helping create caring environments where every child can grow with dignity.",
  },
  {
    icon: HomeIcon,
    title: "Community Development & Essential Needs",
    description:
      "Working with communities to identify priorities and strengthen access to essential resources, practical support and sustainable local solutions.",
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
    title: "Volunteer on the Ground",
    desc: "Join our outreach team in Bauchi State and support community activities directly.",
    href: "https://wa.me/2347034684943",
  },
  {
    icon: Sparkles,
    title: "Volunteer Your Skills",
    desc: "Contribute your professional skills in areas such as design, writing, technology, media, research, fundraising, communications or administration.",
    href: `mailto:eli7foundation@gmail.com?subject=${encodeURIComponent("I would like to volunteer my skills with ELI7 Foundation")}`,
  },
  {
    icon: HandHeart,
    title: "Partner With Us",
    desc: "Organizations and individuals can work with us to co-support specific outreaches and programmes.",
    href: "mailto:eli7foundation@gmail.com?subject=Partnership%20with%20ELI7%20Foundation",
  },
  {
    icon: Mail,
    title: "Spread the Word",
    desc: "Share our work with your network — visibility helps us reach more people.",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgofund.me%2F47539e4f4",
  },
];

const CHILDRENS_DAY_PDF =
  "https://yevhfmwfjpebpdbmuvot.supabase.co/storage/v1/object/public/bdi-assets/ELI7_Childrens_Day_Outreach_Proposal_Gwalameji.pdf";

const MENSTRUAL_HEALTH_PDF =
  "https://yevhfmwfjpebpdbmuvot.supabase.co/storage/v1/object/public/bdi-assets/ELI7_Foundation_Outreach_2.pdf";

const GOFUNDME_LINK = "https://gofund.me/47539e4f4";

// Replace the text below with your actual Flutterwave payment link.
// Use your website's thank-you URL as Flutterwave's redirect URL:
// https://YOUR-DOMAIN/YOUR-PAGE#thank-you
const FLUTTERWAVE_PAYMENT_LINK = "https://flutterwave.com/pay/eli7menstrualhealth6000girls";

// Public campaign link used in every share message (do not replace with Flutterwave).
const CAMPAIGN_SHARE_LINK = GOFUNDME_LINK;
const CERTIFICATE_WATERMARK_URL =
  "https://res.cloudinary.com/drnrbfltr/image/upload/v1794763399/681d4e2f-777f-43b6-9624-31e52c494f44.png";
const WHATSAPP_CONTACT_LINK = "https://wa.me/2347034684943";
const X_CONTACT_LINK = "https://x.com/elih7foundation";
const LINKEDIN_CONTACT_LINK = "https://www.linkedin.com/in/amarachi-sunday-8b30891a6/";

/* ───────────────────────────────────────────
   MAIN COMPONENT
─────────────────────────────────────────── */

export default function Eli7FoundationPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const pageRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "thank-you") {
      setActiveSection("thank-you");
    } else if (hash && navSections.some((s) => s.id === hash)) {
      setActiveSection(hash);
    }
  }, []);

  useEffect(() => {
    const onPop = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (hash === "thank-you") setActiveSection("thank-you");
      else if (navSections.some((s) => s.id === hash)) setActiveSection(hash);
      else if (!hash) setActiveSection("home");
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Hide the host platform's header/footer and injected chat widgets.
  // A MutationObserver also catches chat boxes that load after the page.
  useEffect(() => {
    const selectors = [
      "body header",
      "body footer",
      "body [role='banner']",
      "body [role='contentinfo']",
      "body #tidio-chat",
      "body #intercom-container",
      "body .crisp-client",
      "body [data-testid*='chat' i]",
      "body [id*='chat' i]",
      "body [class*='chat' i]",
      "body [aria-label*='chat' i]",
      "body iframe[title*='chat' i]",
      "body iframe[title*='messenger' i]",
      "body iframe[src*='tawk.to']",
      "body iframe[src*='intercom']",
      "body iframe[src*='crisp']",
      "body iframe[src*='tidio']",
      "body iframe[src*='chatbase']",
      "body [data-chat-widget]",
    ];
    const hidden = new Map<HTMLElement, { display: string; priority: string }>();

    const hideHostElements = () => {
      document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((element) => {
        if (pageRootRef.current?.contains(element) || hidden.has(element)) return;
        hidden.set(element, {
          display: element.style.getPropertyValue("display"),
          priority: element.style.getPropertyPriority("display"),
        });
        element.style.setProperty("display", "none", "important");
      });
    };

    hideHostElements();
    const observer = new MutationObserver(hideHostElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      hidden.forEach(({ display, priority }, element) => {
        if (display) element.style.setProperty("display", display, priority);
        else element.style.removeProperty("display");
      });
    };
  }, []);

  const navigate = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div ref={pageRootRef} className="min-h-screen">
      <style>{`
        @keyframes sFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .s-enter { animation: sFadeIn .35s ease-out; }
        body > #tidio-chat,
        body > #intercom-container,
        body > .crisp-client,
        body > [id*="chat" i],
        body > [class*="chat" i],
        body > [aria-label*="chat" i],
        body > iframe[title*="chat" i],
        body > iframe[title*="messenger" i],
        body > iframe[src*="tawk.to"],
        body > iframe[src*="intercom"],
        body > iframe[src*="crisp"],
        body > iframe[src*="tidio"],
        body > iframe[src*="chatbase"] { display: none !important; }
      `}</style>

      <VideoPopup />

      {/* ═══════════════════════════════════
          DESKTOP TOP NAVIGATION
      ═══════════════════════════════════ */}
      <header className="hidden lg:flex fixed top-0 inset-x-0 z-50 h-[76px] items-center justify-between gap-6 px-7 xl:px-10 bg-[#080f0c]/95 backdrop-blur-xl border-b border-white/[0.07]">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 shrink-0"
          aria-label="Eli7 Foundation home"
        >
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1793762135/a_clean_vector_style_sticker_emoji_illustration_on_bnu77d.png"
            alt="Eli7 Foundation"
            width={42}
            height={42}
            className="object-contain"
            unoptimized
          />
          <span className="text-white text-[15px] font-semibold tracking-wide">Eli7 <span className="text-accent">Foundation</span></span>
        </button>

        <nav aria-label="Main navigation" className="flex items-center justify-end gap-0.5 xl:gap-1 min-w-0">
          {navSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            const isSupport = section.id === "support";
            return (
              <button
                key={section.id}
                data-nav={section.id}
                onClick={() => navigate(section.id)}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 xl:px-3 py-2 text-[11px] xl:text-xs font-medium transition-colors duration-200 ${
                  isSupport
                    ? "ml-1 bg-accent text-[#080f0c] hover:bg-accent/90"
                    : isActive
                      ? "text-accent bg-white/[0.07]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {section.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* ═══════════════════════════════════
          MOBILE FLOATING NAVIGATION
      ═══════════════════════════════════ */}
      <div className="lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-[99999] w-[min(94vw,460px)]">
        {mobileMoreOpen && (
          <>
            <button
              className="fixed inset-0 z-[99998] bg-black/20"
              aria-label="Close navigation menu"
              onClick={() => setMobileMoreOpen(false)}
            />
            <nav
              aria-label="Mobile navigation menu"
              className="absolute top-[58px] left-1/2 -translate-x-1/2 z-[99999] w-full max-h-[72vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#101a15] p-2 shadow-2xl shadow-black/30"
            >
              <div className="px-3 py-2 mb-1 border-b border-white/[0.08]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                  Eli7 Foundation
                </p>
                <p className="text-xs text-white/40 mt-1">Where would you like to go?</p>
              </div>
              {navSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    data-nav={section.id}
                    onClick={() => {
                      navigate(section.id);
                      setMobileMoreOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-white/75 hover:bg-white/[0.06]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{section.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  </button>
                );
              })}
            </nav>
          </>
        )}

        <button
          onClick={() => setMobileMoreOpen((open) => !open)}
          aria-expanded={mobileMoreOpen}
          aria-label={mobileMoreOpen ? "Close navigation" : "Open navigation"}
          className="relative z-[99999] mx-auto flex w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-[#080f0c]/95 px-5 py-3 text-white shadow-xl shadow-black/30 ring-1 ring-white/10 backdrop-blur-xl transition-transform active:scale-95"
        >
          {mobileMoreOpen ? (
            <X className="h-5 w-5 text-accent" />
          ) : (
            <Menu className="h-5 w-5 text-accent" />
          )}
          <span className="text-xs font-semibold tracking-wide">
            {mobileMoreOpen ? "Close" : "Navigate"}
          </span>
        </button>
      </div>

      {/* ═══════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════ */}
      <main className="pt-16 lg:pt-[76px] pb-8 lg:pb-0 bg-[#0b2118]">
        {activeSection === "thank-you" && (
          <div key="thank-you" className="s-enter">
            <SectionThankYou />
          </div>
        )}
        {activeSection === "home" && (
          <div key="home" className="s-enter">
            <SectionHero onNav={navigate} />
            <SectionDirectorsNote />
          </div>
        )}
        {activeSection === "about" && (
          <div key="about" className="s-enter">
            <SectionAbout />
            <SectionMissionVision />
            <SectionTeam />
          </div>
        )}
        {activeSection === "focus" && (
          <div key="focus" className="s-enter">
            <SectionFocusAreas />
            <SectionJourney />
            <SectionChildrensDay />
          </div>
        )}
        {activeSection === "campaign" && (
          <div key="campaign" className="s-enter">
            <SectionCampaign />
          </div>
        )}
        {activeSection === "gallery" && (
          <div key="gallery" className="s-enter">
            <SectionGallery />
          </div>
        )}
        {activeSection === "support" && (
          <div key="support" className="s-enter">
            <SectionDonate />
            <SectionWhySupport />
          </div>
        )}
        {activeSection === "connect" && (
          <div key="connect" className="s-enter">
            <SectionGetInvolved />
            <SectionSocial />
            <SectionContact onNav={navigate} />
          </div>
        )}
      </main>
    </div>
  );
}

/* ─── we need these at module level ─── */
import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════
   SECTION COMPONENTS
═══════════════════════════════════════════ */

function SectionHero({ onNav }: { onNav: (id: string) => void }) {
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

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1793762135/a_clean_vector_style_sticker_emoji_illustration_on_bnu77d.png"
                alt="Eli7 Foundation"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]">
              <span className="text-accent">Eli7</span> Foundation
            </h1>
          </div>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
          Extending Love, Empowering Communities, and Building Futures Across Nigeria.
          
We are a dedicated women-led organization building a framework where vulnerable populations, persons with disabilities, and underserved communities thrive as equal participants in society especially women and girls through education, health, economic empowerment and protection. Through your support, we break barriers and build sustainable futures across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNav("support")}
              className="inline-flex items-center gap-2.5 bg-accent text-primary-dark px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent/90 transition-all"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </button>
            <button
              onClick={() => onNav("about")}
              className="inline-flex items-center gap-2.5 border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] text-white uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

function SectionDirectorsNote() {
  return (
    <section className="bg-primary-dark py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="border-l-2 border-accent/30 pl-8 md:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1793762135/a_clean_vector_style_sticker_emoji_illustration_on_bnu77d.png"
                alt="Eli7 Foundation"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="block text-accent text-[10px] font-semibold uppercase tracking-[0.2em]">
              From the Director of Operations
            </span>
          </div>

          <p className="text-white/65 text-[15px] md:text-base leading-[1.85] mb-5">
            There are communities across Northern Nigeria that many people will
            never see places where basic needs like clean water, sanitary
            products, and even a single nutritious meal are not guarantees, but
            privileges. These are not headlines. They are real people, real
            families, and real children who deserve more than being forgotten.
          </p>

          <p className="text-white/65 text-[15px] md:text-base leading-[1.85] mb-5">
At ELI7, our mission is to catalyze inclusive transformation by advancing the rights and opportunities of persons with disabilities, underserved communities, especially women and girls. We break barriers through education, healthcare, economic empowerment, and protection initiatives, ensuring full participation in Nigerian society.
          </p>

          <p className="text-white/45 text-[15px] md:text-base leading-[1.85] mb-8">
            We know that with the support of as many people as possible —
            people who carry love in their hearts and a genuine desire to see
            others lifted there is no limit to what we can achieve together.
            This is just the beginning.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden border border-accent/20 flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1787737369/d2ab0c13-fa51-4d64-b2a3-765caa32c239.png"
                alt="Amarachi Sunday"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="block text-white text-sm font-medium">
                Amarachi Sunday
              </span>
              <span className="block text-white/30 text-[11px]">
                Director of Operations, Eli7 Foundation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function SectionAbout() {
  return (
    <section className="bg-[#10291f] py-32">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-white">
            Starting Right Here in Bauchi
          </h2>
          <p className="mb-4 leading-relaxed text-white/70">
The Extend Love Initiative Foundation (ELI7 Foundation) is a dynamic, women-led organization operating nationwide across Nigeria, with deep foundational roots across Bauchi State and Northern Nigeria. We exist because temporary relief is never enough; true transformation requires building sustainable, self-reliant structures that permanently eradicate poverty and alter the heavy circumstances life has forced upon vulnerable populations.
          </p>
          <p className="mb-4 leading-relaxed text-white/70">
While we maintain a fierce, deliberate dedication to empowering young girls and women who carry the heartbeat of our homes, our scope and mandate are broad and inclusive. We build independent community systems, functional support networks, and structural frameworks that operate beyond traditional limitations—ensuring that every vulnerable individual, family, and person living with a disability is equipped to stand independently and thrive on their own terms.
          </p>
          <p className="mb-8 leading-relaxed text-white/70">
            Every outreach, every connection, every resource directed to the
            right place is a building block for the kind of future Bauchi
            deserves.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-white/55">
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
    <section className="bg-[#0d241a] py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Purpose
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
            Mission &amp; Vision
          </h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#102d21] border border-white/10 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">
              Our Mission
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              To identify and meet the real needs of underserved communities in
              Bauchi State through practical, on-the-ground interventions in
              education, healthcare, and community development — one outreach at
              a time.
            </p>
          </div>

          <div className="bg-[#102d21] border border-white/10 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">
              Our Vision
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
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
    <section className="bg-[#10291f] py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
            The People Behind Eli7
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto mt-4">
            A small, dedicated team driving the foundation&apos;s mission forward
            on the ground in Bauchi State.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <div className="text-center group">
            <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1787737369/d2ab0c13-fa51-4d64-b2a3-765caa32c239.png"
                alt="Director of Operations — Eli7 Foundation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            <h3 className="font-serif text-xl text-white mb-1">
              Amarchi Sunday
            </h3>
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
              Executive Director of Operations
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs mx-auto mb-4">
              Leads the foundation&apos;s on-the-ground operations in Bauchi State,
              coordinating outreach planning, community engagement, and program
              execution.
            </p>
            <a
              href="https://www.linkedin.com/in/amarachi-sunday-8b30891a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-white/40 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="text-center group">
            <div className="relative w-56 h-56 mx-auto mb-6 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783866068/c96ec03f-dc64-4451-a9de-55f781ed3f23.png"
                alt="Treasurer — Eli7 Foundation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            <h3 className="font-serif text-xl text-white mb-1">
              Mary Okorie
            </h3>
            <p className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
              Treasurer
            </p>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs mx-auto mb-4">
              Manages the foundation&apos;s financial resources, ensuring transparency and accountability in all fiscal matters.
            </p>
            <a
              href="https://www.linkedin.com/in/okorie-mary-ngozi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-white/40 hover:text-[#0A66C2] transition-colors"
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
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
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
    <section className="bg-[#0d241a] py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Progress
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
            Our Journey So Far
          </h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </div>

        <div className="space-y-0">
          <div className="relative pl-10 pb-12 border-l border-accent/20">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] ring-4 ring-[#0d241a]" />
            <span className="text-[10px] text-accent font-semibold uppercase tracking-[0.2em]">
              Completed
            </span>
            <h4 className="font-serif text-xl text-white mt-2 mb-2">
              First Community Outreach
            </h4>
            <p className="text-sm text-white/55 leading-relaxed">
              We successfully carried out our first outreach here in Bauchi State
              — connecting directly with community members, understanding their
              needs, and providing on-the-ground support. Real people, real
              impact, real start.
            </p>
          </div>

          <div className="relative pl-10 pb-12 border-l border-white/20">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-white border-2 border-accent -translate-x-[7px] ring-4 ring-[#0d241a]">
              <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            </div>
            <span className="text-[10px] text-accent/60 font-semibold uppercase tracking-[0.2em]">
              In Progress
            </span>
            <h4 className="font-serif text-xl text-white mt-2 mb-2">
              Second Outreach — In Preparation
            </h4>
            <p className="text-sm text-white/55 leading-relaxed">
              We are currently planning and mobilizing for our next community
              outreach in Bauchi State. Every detail is being considered to
              ensure we show up where it matters most.
            </p>
          </div>

          <div className="relative pl-10 pb-2 border-l border-white/15">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#244737] -translate-x-[7px] ring-4 ring-[#0d241a]" />
            <span className="text-[10px] text-white/40 font-semibold uppercase tracking-[0.2em]">
              Ahead
            </span>
            <h4 className="font-serif text-xl text-white mt-2 mb-2">
              Many More to Come
            </h4>
            <p className="text-sm text-white/55 leading-relaxed">
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
    <section className="bg-[#10291f] py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-[#102d21] border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
          <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <span className="inline-block bg-[#173a2a] text-[#e7c45a] border border-[#e7c45a]/20 text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 mb-4">
                Completed — May 2026
              </span>
              <h3 className="font-serif text-2xl text-white mb-2">
                Children&apos;s Day Community Outreach
              </h3>
              <p className="text-sm text-white/55">
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
            <div className="bg-[#10291f] border border-white/10 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                100+
              </span>
              <span className="text-[10px] text-white/55 uppercase tracking-[0.15em]">
                Children Clothed &amp; Fed
              </span>
            </div>
            <div className="bg-[#10291f] border border-white/10 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                100%
              </span>
              <span className="text-[10px] text-white/55 uppercase tracking-[0.15em]">
                Healthy Homemade Meals
              </span>
            </div>
            <div className="bg-[#10291f] border border-white/10 p-5 text-center">
              <span className="block font-serif text-3xl text-accent mb-1">
                ₦165K
              </span>
              <span className="text-[10px] text-white/55 uppercase tracking-[0.15em]">
                Total Project Value
              </span>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed">
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

function SectionCampaign() {
  return (
    <section id="outreach-campaign-2026" className="bg-[#0d241a] py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="block text-rose-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Active Campaign
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
            Menstrual Health Education &amp; Support Programme
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto mt-4">
            Our most ambitious outreach yet — reaching thousands of adolescent
            girls across schools in Bauchi State.
          </p>
          <div className="w-10 h-px bg-rose-400 mx-auto mt-6" />
        </div>

        <div className="bg-[#10291f] border border-pink-500/15 p-8 md:p-10 relative overflow-hidden">
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { value: "4,000–6,000", label: "Girls to be Reached" },
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

            <p className="text-sm text-pink-100/40 leading-relaxed mb-8">
              Beyond workshops and sanitary product distribution, this programme
              includes parent and teacher sensitisation, physical wellness
              journals, and the development of{" "}
              <span className="text-pink-400 font-medium">Amara</span> — a
              multilingual digital health companion app with Hausa language
              support and offline capability for sustained, long-term impact.
            </p>

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
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
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
    <section className="bg-[#10291f] py-32">
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
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 text-white">
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
                  <h4 className="font-serif text-lg text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/55 leading-relaxed">
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
    <section id="donate" className="bg-primary py-20 md:py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto mb-12 bg-white/[0.04] border border-white/[0.08] p-6 md:p-10 text-left">
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
            <div className="bg-white/[0.03] border border-white/[0.06] p-5">
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">
                Account 1
              </span>
              <div className="space-y-4">
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
                    Bank
                  </span>
                  <span className="text-white text-sm font-medium">
                    Parallex Bank
                  </span>
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

            <div className="bg-white/[0.03] border border-white/[0.06] p-5">
              <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">
                Account 2
              </span>
              <div className="space-y-4">
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
                    Bank
                  </span>
                  <span className="text-white text-sm font-medium">
                    Guaranty Trust Bank (GTB)
                  </span>
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

        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 mb-8">
          <Heart className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em]">
            Support Our Cause
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
          Support What We&apos;re Building
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
          We&apos;re at the beginning of something meaningful in Bauchi State.
          Your support — no matter the size — helps us reach more communities
          and make a real difference where it&apos;s needed most.
        </p>

        <a
          href={FLUTTERWAVE_PAYMENT_LINK.startsWith("https://") ? FLUTTERWAVE_PAYMENT_LINK : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!FLUTTERWAVE_PAYMENT_LINK.startsWith("https://")}
          onClick={(event) => {
            if (!FLUTTERWAVE_PAYMENT_LINK.startsWith("https://")) {
              event.preventDefault();
              alert("Add your Flutterwave payment link in the FLUTTERWAVE_PAYMENT_LINK constant near the top of this file.");
            }
          }}
          className="inline-flex items-center justify-center gap-3 bg-accent text-[#0b2118] px-9 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#f3d77c] transition-colors"
        >
          <Heart className="w-4 h-4" />
          Donate Securely with Flutterwave
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="mt-4 text-[11px] text-white/35">You&apos;ll be redirected to Flutterwave&apos;s secure payment page. This option is intended for supporters making payments from Nigeria.</p>

        <div className="max-w-3xl mx-auto mt-12 grid md:grid-cols-2 gap-5 text-left">
          <div className="bg-white/[0.04] border border-white/10 p-6">
            <h3 className="font-serif text-xl text-white mb-2">Supporting us from outside Nigeria?</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              If you are in the United States, Europe or another country and Flutterwave does not work for you, please use our GoFundMe campaign.
            </p>
            <a
              href={GOFUNDME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold underline underline-offset-4"
            >
              Donate through GoFundMe <ExternalLink className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-white/50">
              <a href={GOFUNDME_LINK} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 underline underline-offset-2">#SupportAccurateOutreach</a>
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 p-6">
            <h3 className="font-serif text-xl text-white mb-2">Having trouble donating?</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              If you cannot complete a donation, you can still support this work. Contact us through WhatsApp, LinkedIn, X or email and we will be happy to help.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a href={WHATSAPP_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">WhatsApp</a>
              <a href={LINKEDIN_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">LinkedIn</a>
              <a href={X_CONTACT_LINK} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">X</a>
              <a href="mailto:eli7foundation@gmail.com" className="text-accent underline underline-offset-4">Email</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


function SectionThankYou() {
  const [supporterName, setSupporterName] = useState("");
  const [certificateFormat, setCertificateFormat] = useState("a4");
  const [copied, setCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);
  // Social sharing must carry the public campaign link, not the Flutterwave checkout URL.
  const donationUrl = CAMPAIGN_SHARE_LINK;
  const shareText = "I’m supporting ELI7 Foundation’s Menstrual Health Education & Support Programme, helping girls in underserved schools access menstrual health education and essential hygiene support. Join me in reaching thousands of girls across Bauchi State. Every contribution makes a difference.";
  const shareMessage = `${shareText} ${donationUrl}`;
  const encodedShare = encodeURIComponent(shareMessage);
  const certificateName = supporterName.trim() || "Our Valued Supporter";
  const formatStyles: Record<string, CSSProperties> = {
    a4: { aspectRatio: "1.414 / 1", width: "100%", maxWidth: "760px" },
    square: { aspectRatio: "1 / 1", width: "100%", maxWidth: "600px" },
    portrait: { aspectRatio: "4 / 5", width: "100%", maxWidth: "560px" },
  };
  const printPage = certificateFormat === "a4" ? "A4 landscape" : certificateFormat === "square" ? "8in 8in" : "8in 10in";

  const shareToInstagramOrTikTok = async (platformUrl: string) => {
    const message = `${shareText} ${donationUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Support ELI7 Foundation",
          text: shareText,
          url: donationUrl,
        });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(message);
      window.alert("Your campaign message and donation link have been copied. Paste them into your post or message.");
    } catch {
      window.prompt("Copy this campaign message and donation link:", message);
    }
    window.open(platformUrl, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(donationUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this support link:", donationUrl);
    }
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setMessageCopied(true);
      window.setTimeout(() => setMessageCopied(false), 2200);
    } catch {
      window.prompt("Copy this campaign message and link:", shareMessage);
    }
  };

  return (
    <section className="min-h-[85vh] bg-[#0b2118] py-16 md:py-24 text-white">
      <style>{`
        @page { size: ${printPage}; margin: 0; }
        @media print {
          html, body { width: 100% !important; height: 100% !important; margin: 0 !important; padding: 0 !important; background: #fffdf6 !important; }
          body * { visibility: hidden !important; }
          #eli7-appreciation-certificate, #eli7-appreciation-certificate * { visibility: visible !important; }
          #eli7-appreciation-certificate {
            position: fixed !important; inset: 0 !important;
            width: 100% !important; height: 100% !important;
            max-width: none !important; aspect-ratio: auto !important;
            margin: 0 !important; box-shadow: none !important;
            box-sizing: border-box !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            page-break-after: avoid !important; break-after: avoid-page !important;
          }
          #eli7-appreciation-certificate > div { height: 100% !important; }
          .no-print { display: none !important; }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="w-14 h-14 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center mx-auto mb-5">
            <Heart className="w-6 h-6 text-accent" />
          </div>
          <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.24em]">With sincere gratitude</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-4 mb-4">Thank You for Standing With Us</h1>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your generosity helps advance dignity, opportunity and inclusion. We are grateful that you have chosen to stand alongside ELI7 Foundation and the communities we serve.
          </p>
          <p className="text-white/35 text-xs mt-4 max-w-2xl mx-auto">If you have just made a payment, please keep your Flutterwave receipt as payment confirmation. This page does not independently verify transactions.</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-7 items-start">
          <div className="min-w-0">
            <div
              id="eli7-appreciation-certificate"
              style={formatStyles[certificateFormat]}
              className="mx-auto relative overflow-hidden bg-[#f7f3e7] text-[#153b2a] p-3 sm:p-4 shadow-2xl"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: `url("${CERTIFICATE_WATERMARK_URL}")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "58% auto",
                  opacity: 0.12,
                }}
              />
              <div className="absolute inset-0 pointer-events-none opacity-[0.10]" aria-hidden="true">
                <svg viewBox="0 0 1200 850" preserveAspectRatio="none" className="w-full h-full">
                  <g fill="none" stroke="#557b61" strokeWidth="1.25">
                    <path d="M-80 110 C80 10 180 25 250 105 S420 205 520 115 700 5 820 95 1030 195 1280 55" />
                    <path d="M-90 145 C70 45 180 60 235 135 S420 240 540 150 705 40 835 130 1050 230 1290 90" />
                    <path d="M-100 180 C60 80 175 95 220 165 S420 275 560 185 710 75 850 165 1070 265 1300 125" />
                    <path d="M-90 650 C80 540 190 560 275 640 S450 755 570 665 760 540 880 635 1080 740 1290 600" />
                    <path d="M-100 690 C70 580 190 600 260 675 S450 795 590 705 760 580 895 675 1090 780 1300 640" />
                    <path d="M-110 730 C60 620 185 640 245 710 S450 835 610 745 770 620 910 715 1100 820 1310 680" />
                    <path d="M300 -40 C220 70 260 160 350 220 S470 350 390 450 280 600 370 900" />
                    <path d="M340 -50 C260 70 300 165 390 230 S510 360 430 465 320 610 410 910" />
                    <path d="M380 -60 C300 70 340 175 430 240 S550 370 470 480 360 620 450 920" />
                    <path d="M900 -40 C820 70 860 160 950 220 S1070 350 990 450 880 600 970 900" />
                    <path d="M940 -50 C860 70 900 165 990 230 S1110 360 1030 465 920 610 1010 910" />
                  </g>
                  <g fill="none" stroke="#c4a85b" strokeWidth="1">
                    <path d="M-40 390 C100 300 220 320 300 390 S470 500 590 410 790 300 900 390 1100 500 1240 380" />
                    <path d="M-50 425 C90 335 220 355 285 425 S470 535 610 445 790 335 915 425 1110 535 1250 415" />
                    <path d="M-60 460 C80 370 215 390 270 460 S470 570 630 480 800 370 930 460 1120 570 1260 450" />
                  </g>
                </svg>
              </div>
              <div className="relative z-10 h-full w-full border-[3px] border-[#b99432] p-2 sm:p-3">
                <div className="h-full w-full border border-[#d9c78d] px-4 py-5 sm:px-8 sm:py-7 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-[5px] border-l-[5px] border-[#b99432]" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-[5px] border-r-[5px] border-[#b99432]" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[5px] border-l-[5px] border-[#b99432]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[5px] border-r-[5px] border-[#b99432]" />
                  <div className="relative z-10 w-full">
                    <p className="text-[9px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#1d5a3d]">Extend Love Initiative Foundation</p>
                    <p className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#8c7128] mt-1">ELI7 Foundation · Nigeria</p>
                    <div className="w-12 h-px bg-[#b99432] mx-auto my-4 sm:my-5" />
                    <p className="font-serif text-xl sm:text-3xl md:text-4xl font-semibold tracking-[0.04em] text-[#17452f]">CERTIFICATE</p>
                    <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.28em] text-[#9a7824] mt-1">Of Appreciation</p>
                    <p className="text-[10px] sm:text-xs text-[#52685b] mt-5 sm:mt-7">Proudly presented to</p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#173f2c] mt-2 mb-3 break-words">{certificateName}</h2>
                    <div className="w-2/3 h-px bg-[#c9b36c] mx-auto" />
                    <p className="text-[10px] sm:text-xs md:text-sm text-[#52685b] leading-relaxed max-w-xl mx-auto mt-4 sm:mt-5">
                      Thank you, {certificateName}, for your generosity and commitment to extending love, empowering communities and building a more inclusive future. Your support helps ELI7 Foundation advance the dignity and potential of every person.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
                      <Image
                        src="https://res.cloudinary.com/drnrbfltr/image/upload/v1793762135/a_clean_vector_style_sticker_emoji_illustration_on_bnu77d.png"
                        alt="ELI7 Foundation logo"
                        width={34}
                        height={34}
                        unoptimized
                        className="object-contain"
                      />
                      <p className="font-serif italic text-sm sm:text-base text-[#24583d]">With gratitude,</p>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#1d5a3d] mt-1">ELI7 Foundation</p>
                    <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3">
                      <span className="w-8 sm:w-12 h-px bg-[#c9b36c]" />
                      <span className="text-[#b99432] text-lg">✦</span>
                      <span className="w-8 sm:w-12 h-px bg-[#c9b36c]" />
                    </div>
                    <p className="text-[7px] sm:text-[8px] tracking-[0.2em] uppercase text-[#8a9a8e] mt-2">www.mx2bdi.com/eli7foundation</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-white/35 mt-3 no-print">Preview of your personalised certificate</p>
          </div>

          <div className="no-print space-y-5">
            <div className="bg-[#102d21] border border-white/10 p-5 sm:p-6">
              <h3 className="font-serif text-xl sm:text-2xl mb-2">Your certificate of appreciation</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">Add the name you would like us to address the certificate to, then choose its layout.</p>
              <label htmlFor="supporter-name" className="block text-[10px] uppercase tracking-[0.16em] text-white/55 mb-2">Name to appear on certificate</label>
              <input id="supporter-name" value={supporterName} onChange={(event) => setSupporterName(event.target.value)} maxLength={64} placeholder="Enter your full name" className="w-full bg-[#071a12] border border-white/15 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-accent" />
              <label htmlFor="certificate-format" className="block text-[10px] uppercase tracking-[0.16em] text-white/55 mt-5 mb-2">Certificate format</label>
              <select id="certificate-format" value={certificateFormat} onChange={(event) => setCertificateFormat(event.target.value)} className="w-full bg-[#071a12] border border-white/15 px-4 py-3 text-white outline-none focus:border-accent">
                <option value="a4">A4 landscape — formal certificate</option>
                <option value="square">Square — 1:1</option>
                <option value="portrait">Portrait — 4:5</option>
              </select>
              <button onClick={() => window.print()} className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-accent text-[#0b2118] px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#f3d77c] transition-colors">
                <Download className="w-4 h-4" /> Download Certificate (PDF)
              </button>
              <p className="text-[10px] text-white/40 mt-3">A clean, single-page certificate will open in the print window. Select “Save as PDF” to download it without the rest of the website.</p>
            </div>

            <div className="bg-[#102d21] border border-white/10 p-5 sm:p-6">
              <h3 className="font-serif text-xl mb-2">Help someone discover our work</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">Share ELI7 Foundation’s work with friends, family and colleagues. The message below includes the campaign link so people can open it or copy it.</p>
              <div className="rounded-lg border border-white/10 bg-[#071a12] p-4 mb-4">
                <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{shareMessage}</p>
              </div>
              <button onClick={copyMessage} className="w-full mb-3 flex items-center justify-center gap-2 bg-accent text-[#0b2118] px-5 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#f3d77c] transition-colors">
                <Copy className="w-4 h-4" /> {messageCopied ? "Message and Link Copied" : "Copy Full Message and Link"}
              </button>
              <button onClick={copyLink} className="w-full flex items-center justify-center gap-2 border border-accent/50 text-accent px-5 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-accent/10 transition-colors">
                <Copy className="w-4 h-4" /> {copied ? "Link Copied" : "Copy Donation / Support Link"}
              </button>
              <p className="text-[10px] text-white/35 mt-5 mb-3 uppercase tracking-[0.16em]">Share the campaign</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/?text=${encodedShare}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share ELI7 Foundation on WhatsApp"
                  title="WhatsApp"
                  className="w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#45df80] flex items-center justify-center hover:bg-[#25D366]/25 transition-colors"
                ><FaWhatsapp className="w-5 h-5" /></a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(donationUrl)}&summary=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share ELI7 Foundation on LinkedIn"
                  title="LinkedIn"
                  className="w-11 h-11 rounded-full bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#58a9f4] flex items-center justify-center hover:bg-[#0A66C2]/25 transition-colors"
                ><FaLinkedin className="w-5 h-5" /></a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(donationUrl)}&quote=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share ELI7 Foundation on Facebook"
                  title="Facebook"
                  className="w-11 h-11 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#6aa5ff] flex items-center justify-center hover:bg-[#1877F2]/25 transition-colors"
                ><FaFacebookF className="w-4 h-4" /></a>
                <button
                  type="button"
                  onClick={() => shareToInstagramOrTikTok("https://www.instagram.com/")}
                  aria-label="Share ELI7 Foundation on Instagram"
                  title="Instagram"
                  className="w-11 h-11 rounded-full bg-[#E4405F]/15 border border-[#E4405F]/30 text-[#f17a91] flex items-center justify-center hover:bg-[#E4405F]/25 transition-colors"
                ><FaInstagram className="w-5 h-5" /></button>
                <button
                  type="button"
                  onClick={() => shareToInstagramOrTikTok("https://www.tiktok.com/")}
                  aria-label="Share ELI7 Foundation on TikTok"
                  title="TikTok"
                  className="w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                ><FaTiktok className="w-5 h-5" /></button>
              </div>
              <p className="text-[10px] text-white/30 mt-3 leading-relaxed">WhatsApp shares the message directly. For Instagram and TikTok, your device’s share sheet opens with the campaign message and donation link ready to share.</p>
            </div>
            <a href={CAMPAIGN_SHARE_LINK} target="_blank" rel="noopener noreferrer" className="block text-center text-accent text-xs underline underline-offset-4">Open the campaign donation page</a>
          </div>
        </div>

        <div className="no-print text-center mt-10">
          <button onClick={() => { window.history.replaceState(null, "", "#home"); window.dispatchEvent(new PopStateEvent("popstate")); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-white/45 hover:text-accent text-xs uppercase tracking-widest">Return to ELI7 Foundation</button>
        </div>
      </div>
    </section>
  );
}

function SectionGetInvolved() {
  return (
    <section className="bg-[#0d241a] py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Join Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-white">
            Get Involved
          </h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto mt-4">
            Beyond donations, there are other ways to stand with us.
          </p>
          <div className="w-10 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {getInvolvedItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block text-center p-7 border border-white/10 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {item.desc}
                </p>
              </a>
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
      href: "https://x.com/elih7foundation",
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
      href: WHATSAPP_CONTACT_LINK,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      handle: "Connect with our team",
      href: LINKEDIN_CONTACT_LINK,
    },
  ];

  return (
    <section className="bg-primary-dark py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
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

function SectionContact({ onNav }: { onNav: (id: string) => void }) {
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
              onClick={() => onNav("support")}
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