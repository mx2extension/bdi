"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !isHome || isScrolled;

  const navLinks = [
    {
      label: "About",
      href: "#",
      children: [
        { label: "About BSG", href: "/about/bsg" },
        { label: "About BDI", href: "/about/bdi" },
      ],
    },
    {
      label: "Investment",
      href: "#",
      children: [
        { label: "Overview", href: "/investments" },
        { label: "Agriculture", href: "/investments/agriculture" },
        { label: "Solid Minerals", href: "/investments/solid-minerals" },
        { label: "Tourism", href: "/investments/tourism" },
        { label: "Energy", href: "/investments/energy" },
        { label: "Infrastructure", href: "/investments/infrastructure" },
      ],
    },
    { label: "Projects", href: "/projects" },
    {
      label: "Firm",
      href: "#",
      children: [
        { label: "Our History", href: "/firm/history" },
        { label: "Leadership Team", href: "/firm/team" },
        { label: "About Us", href: "/about/bdi" },
        { label: "Careers", href: "/careers" },
        { label: "Investment Map", href: "/investment-map" },
        { label: "ELI7 Foundation", href: "/eli7foundation" },
      ],
    },
    {
      label: "Media",
      href: "#",
      children: [
        { label: "News", href: "/media/news" },
        { label: "Gallery", href: "/media/gallery" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isSolid
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <Link href="/" className="relative h-10 w-auto">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png"
            alt="BDI Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* HOME LINK: Only appears when not on homepage */}
          {!isHome && (
            <Link
              href="/"
              className={`flex items-center gap-1 text-xs font-medium uppercase tracking-widest transition-colors ${
                isSolid ? "text-gray-800 hover:text-accent" : "text-white/90 hover:text-accent"
              }`}
            >
              Home
            </Link>
          )}

          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.children ? "#" : link.href}
                className={`flex items-center gap-1 text-xs font-medium uppercase tracking-widest transition-colors ${
                  isSolid ? "text-gray-800 hover:text-accent" : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {link.children && openDropdown === link.label && (
                <ul className="absolute top-full left-0 mt-0 w-56 bg-white border-t-2 border-accent shadow-xl py-2 rounded-b-sm opacity-100 visible translate-y-0 transition-all z-[60]">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        href={child.href}
                        className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary capitalize tracking-normal transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[70]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? (
            <X className="text-gray-800" />
          ) : (
            <Menu className={isSolid ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl p-8 pt-20 transition-transform duration-300 lg:hidden z-[60] ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col">
          {/* HOME LINK IN MOBILE: Only appears when not on homepage */}
          {!isHome && (
            <li className="border-b border-gray-100">
              <Link
                href="/"
                className="block py-4 text-gray-800 font-medium"
                onClick={() => setIsMobileOpen(false)}
              >
                Home
              </Link>
            </li>
          )}

          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-gray-100">
              {link.children ? (
                <>
                  <button
                    className="w-full text-left py-4 text-gray-800 font-medium flex justify-between items-center"
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === link.label && (
                    <ul className="pl-4 pb-4">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-gray-500 hover:text-primary transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-4 text-gray-800 font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}