import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  MapPin,
  Briefcase,
  Clock,
  Building2,
  ArrowLeft,
  Mail,
  ChevronRight,
} from "lucide-react";

interface Career {
  id: string;
  title: string;
  description?: string | null;
  location?: string | null;
  type?: string | null;
  department?: string | null;
  salary_range?: string | null;
  requirements?: string[] | null;
  responsibilities?: string[] | null;
  created_at: string;
  is_published: boolean;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const supabase = await createClient();
  const { id } = await params;
  const { data: career } = await supabase
    .from("careers")
    .select("title")
    .eq("id", id)
    .eq("is_published", true)
    .single();

  return {
    title: career ? `${career.title} — Careers` : "Position Not Found",
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { id } = await params;

  const { data: career } = await supabase
    .from("careers")
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .single();

  if (!career) {
    notFound();
  }

  const { data: relatedCareers } = await supabase
    .from("careers")
    .select("id, title, location, type, department, created_at")
    .eq("is_published", true)
    .neq("id", id)
    .order("created_at", { ascending: false })
    .limit(3);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const job = career as Career;

  const descriptionParagraphs = job.description
    ? job.description.split(/\n\n+/).filter((p) => p.trim())
    : [];

  return (
    <main className="pb-24">
      {/* ─── Thin Header ─── */}
      <div className="pt-32 pb-10 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10" />
        <div className="container mx-auto px-6 relative z-20">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-accent px-2.5 py-1">
              BDI
            </span>
            {job.department && (
              <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                {job.department}
              </span>
            )}
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl text-white">{job.title}</h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-white/50">
            {job.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
            )}
            {job.type && (
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                {job.type}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Posted {formatDate(job.created_at)}
            </span>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column — Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            {descriptionParagraphs.length > 0 && (
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                  About This Role
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {descriptionParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <div>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column — Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Apply Card */}
              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <h3 className="font-serif text-xl text-gray-900 mb-6">Apply for this position</h3>
                <a
                  href={`mailto:careers@bdi.gov.ng?subject=Application for ${job.title}`}
                  className="flex items-center justify-center gap-2 w-full bg-accent text-primary-dark px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Apply Now
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Send your CV and cover letter to info.bdi.invest@gmail.com
                </p>
              </div>

              {/* Job Summary Card */}
              <div className="bg-gray-50 border border-gray-100 p-8">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                  Job Summary
                </h3>
                <ul className="space-y-4 text-sm">
                  {job.department && (
                    <li className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Department</p>
                        <p className="text-gray-900 font-medium">{job.department}</p>
                      </div>
                    </li>
                  )}
                  {job.type && (
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Type</p>
                        <p className="text-gray-900 font-medium">{job.type}</p>
                      </div>
                    </li>
                  )}
                  {job.location && (
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Location</p>
                        <p className="text-gray-900 font-medium">{job.location}</p>
                      </div>
                    </li>
                  )}
                  {job.salary_range && (
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Salary Range</p>
                        <p className="text-gray-900 font-medium">{job.salary_range}</p>
                      </div>
                    </li>
                  )}
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Posted</p>
                      <p className="text-gray-900 font-medium">{formatDate(job.created_at)}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Related Positions ─── */}
      {relatedCareers && relatedCareers.length > 0 && (
        <section className="bg-gray-50">
          <div className="container mx-auto px-6 py-16">
            <h2 className="font-serif text-2xl text-gray-900 mb-8">Other Open Positions</h2>
            <div className="space-y-3">
              {relatedCareers.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/careers/${rc.id}`}
                  className="flex items-center justify-between bg-white border border-gray-200 p-5 hover:border-primary transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-2 py-0.5">
                        BDI
                      </span>
                      {rc.department && (
                        <span className="text-xs text-gray-400">{rc.department}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-gray-900 group-hover:text-primary transition-colors">
                      {rc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-500">
                      {rc.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rc.location}
                        </span>
                      )}
                      {rc.type && (
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" />
                          {rc.type}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1 whitespace-nowrap group-hover:gap-2 transition-all shrink-0">
                    View job
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
              >
                View all open positions <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}