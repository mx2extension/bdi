"use client";

import { useState } from "react";
import Image from "next/image";

export default function InvestmentMapGrid({ opportunities }: { opportunities: any[] }) {
  const categories = [
    "All Sectors",
    ...Array.from(new Set(opportunities.map((o) => o.category).filter(Boolean))),
  ];

  const [activeCategory, setActiveCategory] = useState("All Sectors");

  const filteredOpportunities =
    activeCategory === "All Sectors"
      ? opportunities
      : opportunities.filter((o) => o.category === activeCategory);

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-16 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 text-xs font-semibold uppercase tracking-normal sm:tracking-widest border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredOpportunities.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                {item.image_url ? (
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Top Meta: Category & Location */}
                <div className="flex items-center justify-between mb-4">
                  {item.category && (
                    <span className="block text-accent text-xs font-semibold uppercase tracking-widest">
                      {item.category}
                    </span>
                  )}
                  
                  {/* State Location Pin */}
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {item.location || "Bauchi State, Nigeria"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Summary strictly limited to 4 lines */}
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
                  {item.summary}
                </p>

                {/* Download Button - Highly Visible */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  {item.pdf_url ? (
                    <a
                      href={item.pdf_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download Investment Proposal
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-3 bg-gray-200 text-gray-500 px-6 py-4 text-xs font-bold uppercase tracking-widest cursor-not-allowed"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Proposal Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-400 text-lg mb-4">No opportunities found in this sector yet.</p>
          <button
            onClick={() => setActiveCategory("All Sectors")}
            className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline"
          >
            View All Sectors
          </button>
        </div>
      )}
    </div>
  );
}