"use client";

import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteSubscriberButton({ id, email }: { id: string; email: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm(`Delete ${email}?`)) {
      const supabase = createClient();
      await supabase
        .from("newsletter_subscriptions")
        .delete()
        .eq("id", id);
      
      // Refresh the page to show the updated list
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 text-xs font-semibold uppercase tracking-widest hover:text-red-700"
    >
      <Trash2 className="w-3.5 h-3.5 inline mr-1" /> Delete
    </button>
  );
}