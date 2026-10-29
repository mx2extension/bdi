"use client";

import { Trash2 } from "lucide-react";

interface DeleteSubmissionButtonProps {
  id: string;
  name: string;
  deleteAction: (formData: FormData) => Promise<void>;
}

export default function DeleteSubmissionButton({
  id,
  name,
  deleteAction,
}: DeleteSubmissionButtonProps) {
  return (
    <form action={deleteAction} className="inline">
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-red-500 text-xs font-semibold uppercase tracking-widest hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
        onClick={(e) => {
          if (!confirm(`Are you sure you want to delete this submission from ${name}?`)) {
            e.preventDefault();
          }
        }}
      >
        <Trash2 className="w-3.5 h-3.5 inline mr-1" /> Delete
      </button>
    </form>
  );
}