import type { Metadata } from "next";
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
} from "lucide-react";
import { FaYoutube, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { DonationCopyButton } from "./donation-copy";
import VideoPopup from "./VideoPopup";

export const metadata: Metadata = {
  title: "Eli7 Foundation — Empowering Communities, Changing Lives",
  description:
    "Eli7 Foundation is dedicated to uplifting underserved communities in Bauchi State through education, healthcare, women empowerment, and sustainable development.",
};

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

export default function Eli7FoundationPage() {
  return (
    <main className="bg-white">
      {/* Auto-play Video Popup */}
      <VideoPopup />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
              Empowering underserved communities in Bauchi State through education,
              healthcare, and sustainable development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#donate"
                className="inline-flex items-center gap-2.5 bg-accent text-primary-dark px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent/90 transition-all"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2.5 border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] text-white uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <section id="about" className="bg-gray-50 py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h2 className="font-serif text-4xl mb-6 text-gray-900">
              Starting Right Here in Bauchi
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Eli7 Foundation exists to uplift communities that are often overlooked.
              We believe real change begins at the grassroots — by listening to
              people, understanding their needs, and standing with them to find
              practical solutions.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Our impact has already started here in Bauchi State. We have
              successfully conducted our first community outreach and are actively
              preparing for the next one. These are early steps, but they are
              deliberate and grounded in a long-term commitment to the people of
              this state.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              Every outreach, every connection, every
              resource directed to the right place is a building block for the kind
              of future Bauchi deserves.
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
                Transparent & Accountable
              </div>
            </div>
          </div>
          <div
            className="reveal-on-scroll relative h-[550px]"
            style={{ transitionDelay: "150ms" }}
          >
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

      {/* ═══════════════════════════════════════
          LEADERSHIP
      ═══════════════════════════════════════ */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Leadership
            </span>
            <h2 className="font-serif text-4xl mb-4 text-gray-900">
              The People Behind Eli7
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
              A small, dedicated team driving the foundation&apos;s mission forward on the ground in Bauchi State.
            </p>
            <div className="w-10 h-px bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* Director of Operations */}
            <div
              className="reveal-on-scroll text-center group"
              style={{ transitionDelay: "0ms" }}
            >
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
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Leads the foundation&apos;s on-the-ground operations in Bauchi State, coordinating outreach planning, community engagement, and program execution.
              </p>
            </div>

            {/* Assistant */}
            <div
              className="reveal-on-scroll text-center group"
              style={{ transitionDelay: "120ms" }}
            >
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
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Supports the Director of Operations in logistics, communications, and coordination of foundation activities across communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════ */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Our Purpose
            </span>
            <h2 className="font-serif text-4xl mb-4 text-gray-900">
              Mission & Vision
            </h2>
            <div className="w-10 h-px bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className="reveal-on-scroll bg-white border border-gray-100 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: "0ms" }}
            >
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

            <div
              className="reveal-on-scroll bg-white border border-gray-100 p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: "120ms" }}
            >
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

      {/* ═══════════════════════════════════════
          FOCUS AREAS
      ═══════════════════════════════════════ */}
      <section className="bg-primary-dark py-32">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-16">
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
                  className="reveal-on-scroll group bg-white/[0.03] border border-white/[0.07] p-8 relative overflow-hidden hover:bg-accent/[0.06] hover:border-accent/20 transition-all duration-500"
                  style={{ transitionDelay: `${i * 80}ms` }}
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

      {/* ═══════════════════════════════════════
          OUR JOURNEY SO FAR
      ═══════════════════════════════════════ */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Progress
            </span>
            <h2 className="font-serif text-4xl mb-4 text-gray-900">
              Our Journey So Far
            </h2>
            <div className="w-10 h-px bg-accent mx-auto" />
          </div>

          <div className="reveal-on-scroll space-y-0">
            <div className="relative pl-10 pb-12 border-l border-accent/20 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-[7px] ring-4 ring-white" />
              <span className="text-[10px] text-accent font-semibold uppercase tracking-[0.2em]">
                Completed
              </span>
              <h4 className="font-serif text-xl text-gray-900 mt-2 mb-2">
                First Community Outreach
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We successfully carried out our first outreach here in Bauchi
                State — connecting directly with community members, understanding
                their needs, and providing on-the-ground support. This was not a
                placeholder event. Real people, real impact, real start.
              </p>
            </div>

            <div className="relative pl-10 pb-12 border-l border-white/20 group">
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
                ensure we show up where it matters most and deliver genuine value.
              </p>
            </div>

            <div className="relative pl-10 pb-2 border-l border-gray-200 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gray-200 -translate-x-[7px] ring-4 ring-white" />
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em]">
                Ahead
              </span>
              <h4 className="font-serif text-xl text-gray-900 mt-2 mb-2">
                Many More to Come
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                This is just the beginning. We are building something
                long-term in Bauchi State — more outreaches, deeper community
                engagement, and expanded reach as resources and capacity grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — horizontal scroll
      ═══════════════════════════════════════ */}
      <section className="py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
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

      {/* ═══════════════════════════════════════
          WHY SUPPORT US
      ═══════════════════════════════════════ */}
      <section className="bg-gray-50 py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="reveal-on-scroll relative h-[500px] order-2 lg:order-1"
            style={{ transitionDelay: "150ms" }}
          >
            <Image
              src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782108458/WhatsApp_Image_2026-05-27_at_1.57.49_PM_jzvkae.jpg"
              alt="Supporting communities in Bauchi"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-accent -z-10" />
          </div>

          <div className="reveal-on-scroll order-1 lg:order-2">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Why Support Us
            </span>
            <h2 className="font-serif text-4xl mb-8 text-gray-900">
              We&apos;re Doing the Real Work
            </h2>

            <div className="space-y-6">
              {[
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
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                    <span className="text-accent font-serif text-sm">0{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DONATE
      ═══════════════════════════════════════ */}
      <section id="donate" className="bg-primary py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="reveal-on-scroll">
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
              Your support — no matter the size — helps us reach more communities,
              do more outreaches, and make a real difference where it&apos;s needed most.
            </p>
          </div>

          <div
            className="reveal-on-scroll max-w-2xl mx-auto bg-white/[0.04] border border-white/[0.08] p-8 md:p-10 text-left"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white">Bank Transfer Details</h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Direct bank donation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account 1 — Parallex Bank */}
              <div className="bg-white/[0.03] border border-white/[0.06] p-5">
                <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">Account 1</span>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Bank</span>
                    <span className="text-white text-sm font-medium">Parallex Bank</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Account Number</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-base tracking-wider">2000674970</span>
                      <DonationCopyButton text="2000674970" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Account Name</span>
                    <span className="text-white text-sm font-medium">Chinemerem Nwankpa</span>
                  </div>
                </div>
              </div>

              {/* Account 2 — GTBank */}
              <div className="bg-white/[0.03] border border-white/[0.06] p-5">
                <span className="block text-[10px] text-accent font-semibold uppercase tracking-[0.2em] mb-4">Account 2</span>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Bank</span>
                    <span className="text-white text-sm font-medium">Guaranty Trust Bank (GTB)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Account Number</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-base tracking-wider">0426938072</span>
                      <DonationCopyButton text="0426938072" />
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-widest mb-1">Account Name</span>
                    <span className="text-white text-sm font-medium">Amarachi Sunday</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-white/40 uppercase tracking-widest">Email</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/80 text-sm">eli7foundation@gmail.com</span>
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
                with your name, amount, and date of transfer. All donations are acknowledged and accounted for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GET INVOLVED
      ═══════════════════════════════════════ */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-16">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Join Us
            </span>
            <h2 className="font-serif text-4xl mb-4 text-gray-900">Get Involved</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mt-4">
              Beyond donations, there are other ways to stand with us.
            </p>
            <div className="w-10 h-px bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="reveal-on-scroll group text-center p-8 border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SOCIAL HANDLES
      ═══════════════════════════════════════ */}
      <section className="bg-primary-dark py-24">
        <div className="container mx-auto px-6">
          <div className="reveal-on-scroll text-center mb-14">
            <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Connect With Us
            </span>
            <h2 className="font-serif text-4xl text-white mb-4">Follow Eli7 Foundation</h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Stay updated on our outreaches, progress, and how your support is making a difference.
            </p>
          </div>

          <div className="reveal-on-scroll flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5">
            {/* X / Twitter */}
            <a
              href="https://x.com/eli7foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-5 hover:bg-accent/[0.08] hover:border-accent/25 transition-all duration-500 min-w-[220px]"
            >
              <FaXTwitter className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-white text-sm font-medium group-hover:text-accent transition-colors">X (Twitter)</span>
                <span className="block text-[11px] text-white/25">@eli7foundation</span>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@eli7foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-5 hover:bg-accent/[0.08] hover:border-accent/25 transition-all duration-500 min-w-[220px]"
            >
              <FaYoutube className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-white text-sm font-medium group-hover:text-accent transition-colors">YouTube</span>
                <span className="block text-[11px] text-white/25">@eli7foundation</span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/eli7foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-5 hover:bg-accent/[0.08] hover:border-accent/25 transition-all duration-500 min-w-[220px]"
            >
              <FaInstagram className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-white text-sm font-medium group-hover:text-accent transition-colors">Instagram</span>
                <span className="block text-[11px] text-white/25">@eli7foundation</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348149193063"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] px-8 py-5 hover:bg-accent/[0.08] hover:border-accent/25 transition-all duration-500 min-w-[220px]"
            >
              <FaWhatsapp className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
              <div>
                <span className="block text-white text-sm font-medium group-hover:text-accent transition-colors">WhatsApp</span>
                <span className="block text-[11px] text-white/25">+234 814 919 3063</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CLOSING
      ═══════════════════════════════════════ */}
      <section className="bg-[#071a16] py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <Mail className="w-5 h-5 text-accent mx-auto mb-3" />
              <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">Email</h4>
              <a
                href="mailto:eli7foundation@gmail.com"
                className="text-white/80 text-sm hover:text-accent transition-colors"
              >
                eli7foundation@gmail.com
              </a>
            </div>
            <div>
              <MapPin className="w-5 h-5 text-accent mx-auto mb-3" />
              <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">Location</h4>
              <span className="text-white/80 text-sm">Bauchi State, Nigeria</span>
            </div>
            <div>
              <Heart className="w-5 h-5 text-accent mx-auto mb-3" />
              <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">Donate</h4>
              <a
                href="#donate"
                className="text-white/80 text-sm hover:text-accent transition-colors"
              >
                Support Our Work
              </a>
            </div>
            <div>
              <FaWhatsapp className="w-5 h-5 text-accent mx-auto mb-3" />
              <h4 className="text-xs text-white/40 uppercase tracking-widest mb-2">Call or WhatsApp</h4>
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
              This is a temporary page hosted on the BDI platform. Eli7 Foundation
              will transition to its own dedicated website in due course.
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
    </main>
  );
}