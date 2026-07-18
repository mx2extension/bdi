import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore active and completed development projects driving economic transformation in Bauchi State.",
};

export default async function ProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*, investment_sectors(title, slug)")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  const statusColors: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Completed: "bg-blue-100 text-blue-800",
  };

  return (
    <main className="pb-24 overflow-x-hidden">
      <div className="pt-24 sm:pt-32 min-h-[40vh] pb-16 sm:pb-20 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1782561824/5b840287-582b-4833-a671-b7701bc87206.png"
            alt="Projects"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <span className="text-accent text-xs font-semibold uppercase tracking-normal sm:tracking-widest">Development</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-4">Our Projects</h1>
          <p className="text-white/70 text-base sm:text-lg mt-6 max-w-xl">
            Tracking the progress of strategic initiatives transforming Bauchi State&apos;s economy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group border border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:border-transparent block"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 ${statusColors[project.status] || "bg-gray-100 text-gray-800"}`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-8">
                  {project.investment_sectors && (
                    <span className="text-xs text-accent font-semibold uppercase tracking-normal sm:tracking-widest">
                      {project.investment_sectors.title}
                    </span>
                  )}
                  <h3 className="font-serif text-xl text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-1">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects published yet. Check back soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}