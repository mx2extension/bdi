"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteGalleryButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this image?")) {
      const supabase = createClient();
      await supabase.from("gallery").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="absolute top-2 right-2 bg-white/90 p-2 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}