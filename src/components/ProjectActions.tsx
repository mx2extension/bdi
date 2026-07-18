"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function ProjectActions({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this project?")) {
      const supabase = createClient();
      await supabase.from("projects").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 ml-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest"
    >
      <Trash2 className="w-3 h-3" /> Delete
    </button>
  );
}