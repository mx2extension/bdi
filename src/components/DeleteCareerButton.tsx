"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function DeleteCareerButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete the position: "${title}"?`)) {
      const supabase = createClient();
      await supabase.from("careers").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-gray-400 hover:text-red-600 transition-colors p-2"
      title="Delete Position"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  );
}