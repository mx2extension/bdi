"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Newspaper, Image, FolderOpen, Briefcase, Heart, 
  Users, FileText, ExternalLink, LogOut, Mail, 
  MapPin
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminSidebar() {
  const pathname = usePathname();
  const supabase = createClient();

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
    { label: "Investment Map", href: "/admin/investment-map", icon: MapPin }, // Added item
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };

  return (
    <aside className="w-64 border-r border-white/10 flex flex-col flex-shrink-0 bg-primary-dark text-white">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="font-serif text-xl font-semibold hover:text-accent transition-colors">
          BDI<span className="text-accent">.</span> Admin
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors ${isActive ? "bg-white/10 text-accent font-medium" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <Icon className="w-4 h-4" /> {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 mt-auto space-y-2">
        <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:text-white hover:bg-white/5">
          <ExternalLink className="w-4 h-4" /> View Site
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded text-sm text-white/60 hover:text-red-400 hover:bg-white/5 w-full text-left">
          <LogOut className="w-4 h-4" /> Log Out
        </button>
      </div>
    </aside>
  );
}