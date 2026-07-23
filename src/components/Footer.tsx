"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import { geoOrthographic } from "d3-geo";
import { FaYoutube, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const [rotation, setRotation] = useState<[number, number, number]>([0, -10, 0]);

  // Use a smooth interval to guarantee continuous motion without hydration clashes
  useEffect(() => {
    setIsMounted(true);
    
    const interval = setInterval(() => {
      setRotation((prev) => [prev[0] + 0.3, prev[1], prev[2]]); // Increase value to speed up rotation
    }, 50); // Updates roughly 20 times per second for smooth panning

    return () => clearInterval(interval);
  }, []);

  const projection = geoOrthographic()
    .scale(400)
    .center([0, 0])
    .rotate(rotation);

  return (
    <footer className="relative bg-[#0B231E] text-white/60 py-24 px-6 overflow-hidden">
      
      {/* --- Animated Rotating Map Background --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center scale-150 md:scale-125">
        {isMounted && (
          <ComposableMap
            projection={projection}
            width={800}
            height={800}
            style={{ width: "100%", height: "auto" }}
          >
            <Graticule stroke="#ffffff" strokeWidth={0.6} strokeOpacity={0.6} />
            <Sphere id="sphere" fill="transparent" stroke="#ffffff" strokeWidth={0.6} />

            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#ffffff" 
                    stroke="#0B231E" 
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#E85B45" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        )}
      </div>

      {/* --- Footer Content --- */}
      <div className="container mx-auto relative z-10">
        
        {/* Newsletter Section */}
        <div className="mb-16 pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">JOIN OUR NEWSLETTER</h2>
            <p>Kindly join our Newsletter by Subscribing &gt;&gt;</p>
          </div>
          <div className="w-full">
            <NewsletterForm />
          </div>
        </div>

        {/* SECTION 1: BDI Identity, Statement, Address & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 pb-12 border-b border-white/10">
          <div>
            <Link href="/" className="relative h-10 w-auto inline-block mb-6">
              <Image
                src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png"
                alt="BDI Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              The Bauchi State Development Initiative is a long-term development initiative established under MX2 Extension ENT. focused on economic transformation, investment promotion, and sustainable development in Bauchi State.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-xs text-accent uppercase tracking-widest mb-6">
              Bauchi,<br />Bauchi, Nigeria.
            </p>
            
            <div className="flex items-center gap-4 md:justify-end">
              <a href="https://x.com/bdi_investNGR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@BDI.investNGR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors" aria-label="YouTube">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/bauchi-development-initiative-bdi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: Navigation Links Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-6">Firm</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/firm/history" className="hover:text-accent hover:pl-1 transition-all">Our History</Link></li>
              <li><Link href="/firm/team" className="hover:text-accent hover:pl-1 transition-all">Leadership Team</Link></li>
              <li><Link href="/about/bdi" className="hover:text-accent hover:pl-1 transition-all">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-accent hover:pl-1 transition-all">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/investments" className="hover:text-accent hover:pl-1 transition-all">Investment Sectors</Link></li>
              <li><Link href="/impact" className="hover:text-accent hover:pl-1 transition-all">Our Impact</Link></li>
              <li><Link href="/media/news" className="hover:text-accent hover:pl-1 transition-all">Media Center</Link></li>
              <li><Link href="/investment-map" className="hover:text-accent hover:pl-1 transition-all">Investment Map</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-6">Initiatives</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/innovation" className="hover:text-accent hover:pl-1 transition-all">Innovation Hub</Link></li>
              <li><Link href="/e7i-foundation" className="hover:text-accent hover:pl-1 transition-all inline-block">E7I Foundation</Link></li>
              <li><a href="https://www.findoncampus.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:pl-1 transition-all inline-block">FindOneCampus</a></li>
              <li><Link href="/projects" className="hover:text-accent hover:pl-1 transition-all">Active Projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-accent hover:pl-1 transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-accent hover:pl-1 transition-all">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="hover:text-accent hover:pl-1 transition-all">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-accent hover:pl-1 transition-all">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Bauchi State Development Initiative. All rights reserved.</p>
          
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Messaging and design by{" "}
            <a 
              href="https://chinemeremking.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-serif text-[#E85B45] font-bold text-sm tracking-tight hover:underline"
            >
              CRBVX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}