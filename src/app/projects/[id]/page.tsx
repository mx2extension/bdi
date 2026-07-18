import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// FIX: Added Promise<> to params type to prevent Next.js 15 build crashes
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase.from("projects").select("title").eq("id", id).single();
  return {
    title: project ? `${project.title} | Projects` : "Project Not Found",
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // FIX: Await params before using it
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: project } = await supabase
    .from("projects")
    .select("*, investment_sectors(title, slug)")
    .eq("id", id)
    .single();

  if (!project) {
    notFound();
  }

  const statusColors: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Completed: "bg-blue-100 text-blue-800",
  };

  return (
    <main className="pb-24 overflow-x-hidden">
      {/* HERO SECTION WITH PROJECT IMAGE */}
      <div className="pt-24 sm:pt-32 min-h-[50vh] pb-16 sm:pb-20 relative bg-primary-dark">
        {project.image_url && (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20 flex flex-col justify-end min-h-[inherit] pb-8">
          {/* Back Link */}
          <Link 
            href="/projects" 
            className="text-white/70 hover:text-white text-sm mb-6 inline-flex items-center gap-2 transition-colors self-start"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.investment_sectors && (
              <Link 
                href={`/investments/${project.investment_sectors.slug}`}
                className="text-xs font-semibold px-3 py-1 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                {project.investment_sectors.title}
              </Link>
            )}
            <span className={`text-xs font-semibold px-3 py-1 ${statusColors[project.status] || "bg-gray-100 text-gray-800"}`}>
              {project.status}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-4xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* PROJECT DETAILS BODY */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {project.description ? (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="whitespace-pre-wrap">{project.description}</p>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">Detailed information for this project is coming soon.</p>
        )}
      </div>
    </main>
  );
}