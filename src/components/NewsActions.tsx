"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Trash2 } from "lucide-react";

export default function NewsActions({ id, isPublished }: { id: string; isPublished: boolean }) {
  const router = useRouter();

  const toggleStatus = async () => {
    const supabase = createClient();
    await supabase.from("news").update({ is_published: !isPublished }).eq("id", id);
    router.refresh();
  };

  const handleDelete = async () => {
    if (confirm("Delete this article?")) {
      const supabase = createClient();
      await supabase.from("news").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <button onClick={toggleStatus} className={`inline-flex items-center gap-1 text-xs font-semibold ${isPublished ? "text-green-600" : "text-gray-400"}`}>
        {isPublished ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        {isPublished ? "Published" : "Draft"}
      </button>
      <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  );
}