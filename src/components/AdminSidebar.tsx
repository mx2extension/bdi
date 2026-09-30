"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Newspaper, Image, FolderOpen, Briefcase, Heart, 
  Users, FileText, ExternalLink, LogOut, Mail, 
  MapPin, Menu, X
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const supabase = createClient();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Hero Slides", href: "/admin/hero", icon: Image },
    { label: "News", href: "/admin/news", icon: Newspaper },
    { label: "Gallery", href: "/admin/gallery", icon: FolderOpen },
    { label: "Projects", href: "/admin/projects", icon: Briefcase },
    { label: "Impact", href: "/admin/impact", icon: Heart },
    { label: "Careers", href: "/admin/careers", icon: Users },
    { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
    { label: "Submissions", href: "/admin/submissions", icon: FileText },
    { label: "Investment Map", href: "/admin/investment-map", icon: MapPin },
  ];

  const handleLogout = async () => {
    setIsOpen(false);
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <>
      {/* Floating Toggle Button (Visible only on mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-primary-dark text-white rounded-full shadow-lg border border-white/20 hover:bg-primary-dark/90 focus:outline-none transition-all"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop Overlay when menu is open */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Slide-out Sidebar Drawer */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 border-r border-white/10 flex flex-col flex-shrink-0 bg-primary-dark text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header with Close/Cancel Button */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link 
            href="/admin" 
            onClick={() => setIsOpen(false)}
            className="font-serif text-xl font-semibold hover:text-accent transition-colors"
          >
            BDI<span className="text-accent">.</span> Admin
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white/60 hover:text-white p-1 rounded-md hover:bg-white/10"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors ${
                  isActive 
                    ? "bg-white/10 text-accent font-medium" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" /> {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 mt-auto space-y-2">
          <Link 
            href="/" 
            target="_blank" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:text-white hover:bg-white/5"
          >
            <ExternalLink className="w-4 h-4" /> View Site
          </Link>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:text-red-400 hover:bg-white/5 w-full text-left"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </aside>
    </>
  );
}