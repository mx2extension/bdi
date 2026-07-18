"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Briefcase, Search, Clock, ArrowUpDown, ChevronRight, Wifi } from "lucide-react";

interface Career {
  id: string;
  title: string;
  description?: string | null;
  location?: string | null;
  type?: string | null;
  department?: string | null;
  requirements?: string[] | null;
  created_at: string;
}

export default function JobFilters({ careers }: { careers: Career[] }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const types = useMemo(
    () => [...new Set(careers.map((c) => c.type).filter(Boolean))] as string[],
    [careers]
  );
  const locations = useMemo(
    () => [...new Set(careers.map((c) => c.location).filter(Boolean))] as string[],
    [careers]
  );
  const departments = useMemo(
    () => [...new Set(careers.map((c) => c.department).filter(Boolean))] as string[],
    [careers]
  );

  const hasRemote = useMemo(() => {
    const kw = ["remote", "hybrid", "virtual"];
    return careers.some((c) => c.type && kw.some((k) => c.type!.toLowerCase().includes(k)));
  }, [careers]);

  const filtered = useMemo(() => {
    let result = [...careers];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q)) ||
          (c.department && c.department.toLowerCase().includes(q))
      );
    }

    if (typeFilter === "remote") {
      const kw = ["remote", "hybrid", "virtual"];
      result = result.filter((c) => c.type && kw.some((k) => c.type!.toLowerCase().includes(k)));
    } else if (typeFilter !== "all") {
      result = result.filter((c) => c.type === typeFilter);
    }

    if (locationFilter !== "all") result = result.filter((c) => c.location === locationFilter);
    if (departmentFilter !== "all") result = result.filter((c) => c.department === departmentFilter);

    switch (sort) {
      case "newest":
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [careers, search, typeFilter, locationFilter, departmentFilter, sort]);

  const clearFilters = () => {
    setSearch("");
    setTypeFilter("all");
    setLocationFilter("all");
    setDepartmentFilter("all");
    setSort("newest");
  };

  const hasActiveFilters = search || typeFilter !== "all" || locationFilter !== "all" || departmentFilter !== "all";

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const isRemoteType = (type: string | null | undefined) => {
    if (!type) return false;
    const kw = ["remote", "hybrid", "virtual"];
    return kw.some((k) => type.toLowerCase().includes(k));
  };

  const selectClass = "px-3 py-2.5 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-primary bg-white cursor-pointer";

  return (
    <div>
      {/* ─── Filter Bar ─── */}
      <div className="bg-white border border-gray-200 p-4 sm:p-5 mb-6">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, keyword, or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={`${selectClass} min-w-[130px]`}>
              <option value="all">All Types</option>
              {hasRemote && <option value="remote">Remote</option>}
              {types.filter((t) => !isRemoteType(t)).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {locations.length > 0 && (
              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className={`${selectClass} min-w-[150px]`}>
                <option value="all">All Locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            )}

            {departments.length > 0 && (
              <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className={`${selectClass} min-w-[160px]`}>
                <option value="all">All Departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            )}

            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="pl-9 pr-3 py-2.5 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-primary bg-white cursor-pointer">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="az">A — Z</option>
                <option value="za">Z — A</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "position" : "positions"} found
          </p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="text-xs text-primary font-semibold hover:underline">Clear all filters</button>
          )}
        </div>
      </div>

      {/* ─── Card Grid ─── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="block bg-white border border-gray-200 hover:border-primary transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <span className="text-white font-sans text-[10px] font-bold uppercase tracking-wider">BDI</span>
                  </div>
                  {job.department && (
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider truncate">{job.department}</span>
                  )}
                </div>

                <h3 className="font-serif text-lg text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  {job.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                  {job.location && (
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                  )}
                  {job.type && (
                    <span className="flex items-center gap-1">
                      {isRemoteType(job.type) ? <Wifi className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                      {job.type}
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-100 px-6 py-3.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />{formatDate(job.created_at)}
                </span>
                <span className="text-accent text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-gray-200">
          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-600 font-serif text-lg mb-1">No positions found</p>
          <p className="text-sm text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="text-sm text-primary font-semibold hover:underline">Clear all filters</button>
          )}
        </div>
      )}
    </div>
  );
}