"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, FolderOpen } from "lucide-react";

export default function InvestmentMapGrid({ opportunities }: { opportunities: any[] }) {
  const categories = Array.from(new Set(opportunities.map((o) => o.category).filter(Boolean)));
  
  // Initialize with "ALL" or null based on your preference. Let's make "ALL" available.
  const [selectedCategory, setSelectedCategory] = useState<string | null>("ALL");

  const filteredOpportunities = 
    selectedCategory === "ALL"
      ? opportunities
      : selectedCategory
      ? opportunities.filter((o) => o.category === selectedCategory)
      : [];

  return (
    <div>
      {/* Category Pills */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {/* ALL SECTORS BUTTON */}
        <button
          onClick={() => setSelectedCategory("ALL")}
          className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider border rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            selectedCategory === "ALL"
              ? "bg-primary text-white border-primary shadow-md"
              : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          All Sectors
        </button>

        {/* DYNAMIC CATEGORY BUTTONS */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider border rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              selectedCategory === cat
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            {cat}
          </button>
        ))}
      </div>

      {/* Conditional Content Display */}
      {!selectedCategory ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200 max-w-xl mx-auto">
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-base font-semibold text-gray-800 mb-1">
            No Sector Selected
          </h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Please choose an investment sector above to view analyzed project frameworks and proposals.
          </p>
        </div>
      ) : filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((item) => {
            // Fallback to item.id if item.slug is missing in Supabase
            const targetSlug = item.slug || item.id;

            return (
              <Link
                key={item.id}
                href={`/investment-map/${targetSlug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {item.image_url ? (
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image Available
                    </div>
                  )}
                  {item.category && (
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                      {item.category}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location || "Bauchi State, Nigeria"}</span>
                  </div>

                  <h3 className="font-serif text-xl text-gray-900 mb-6 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-dark">
                    <span>View Full Framework</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">No proposals indexed under this sector currently.</p>
        </div>
      )}
    </div>
  );
}