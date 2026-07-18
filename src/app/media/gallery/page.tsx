import type { Metadata } from "next";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Visual stories showcasing the landscape, projects, and people of Bauchi State.",
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: images } = await supabase.from("gallery").select("*").order("sort_order");

  return (
    <main className="pb-24 overflow-x-hidden">
      {/* FIX 1: Removed "flex items-center" so hero doesn't collapse to 0 height on mobile */}
      <div className="pt-24 sm:pt-32 min-h-[40vh] pb-16 sm:pb-20 relative bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <div className="absolute inset-0 z-[1] opacity-20">
          <Image
            src="https://res.cloudinary.com/drnrbfltr/image/upload/v1781768276/WhatsApp_Image_2026-05-27_at_1.57.51_PM_th7r98.jpg"
            alt="Gallery"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          {/* FIX 3: tracking-widest causes invisible horizontal overflow on small screens */}
          <span className="text-accent text-xs font-semibold uppercase tracking-normal sm:tracking-widest">Visual Stories</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-4">Gallery</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* FIX 2: Removed "reveal-on-scroll" wrapper that keeps content at opacity: 0 if mobile observer fails */}
        {images && images.length > 0 ? (
          <GalleryClient images={images} />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">No gallery images yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}