"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  id: string;
  image_url: string;
  caption: string | null;
  category: string;
};

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setSelected(img)}
            className="relative w-full break-inside-avoid group overflow-hidden block"
            style={{ height: i % 3 === 0 ? "400px" : i % 3 === 1 ? "300px" : "350px" }}
          >
            <Image
              src={img.image_url}
              alt={img.caption || "Gallery image"}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-6">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                {img.category && (
                  <span className="text-xs text-accent font-semibold uppercase tracking-widest">{img.category}</span>
                )}
                {img.caption && <p className="text-white text-sm mt-1">{img.caption}</p>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setSelected(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={selected.image_url} alt={selected.caption || ""} fill className="object-contain" />
          </div>
          {selected.caption && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center max-w-2xl">
              {selected.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}