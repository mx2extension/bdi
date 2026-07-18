"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2, Pencil } from "lucide-react";
import Link from "next/link";

export default function ImpactActions({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Delete this story?")) {
      const supabase = createClient();
      await supabase.from("impact_stories").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Link href={`/admin/impact/${id}`} className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline flex items-center">
        <Pencil className="w-3 h-3 mr-1" /> Edit
      </Link>
      <button onClick={handleDelete} className="text-red-500 hover:text-red-700 flex items-center text-xs font-semibold uppercase tracking-widest">
        <Trash2 className="w-3 h-3 mr-1" /> Delete
      </button>
    </div>
  );
}