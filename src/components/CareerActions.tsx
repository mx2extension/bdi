"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function CareerActions({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Delete this job position?")) {
      const supabase = createClient();
      await supabase.from("careers").delete().eq("id", id);
      router.refresh();
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-700 ml-4">
      <Trash2 className="w-3 h-3" />
    </button>
  );
}