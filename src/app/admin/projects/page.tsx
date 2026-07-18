import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, Pencil } from "lucide-react";
import ProjectActions from "@/components/ProjectActions";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*, investment_sectors(title, slug)")
    .order("created_at", { ascending: false }); // Removed eq is_published to show all

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl text-gray-900">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Project
        </Link>
      </div>

      {projects && projects.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Project</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Sector</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Status</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{project.title}</td>
                  <td className="p-4 text-gray-500">
                    {project.investment_sectors?.title || "Uncategorized"}
                  </td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-3 py-1 ${
                      project.status === "Active" ? "bg-green-100 text-green-800" :
                      project.status === "Completed" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/admin/projects/${project.id}`}
                      className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </Link>
                    <ProjectActions id={project.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No projects yet.</p>
          <Link href="/admin/projects/new" className="text-primary text-sm font-semibold underline">Add the first project</Link>
        </div>
      )}
    </div>
  );
}