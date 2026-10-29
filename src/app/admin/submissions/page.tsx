"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Plus, Trash2, Eye, X, Mail, Calendar, User } from "lucide-react";

export const dynamic = "force-dynamic";

interface Submission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at: string;
}

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function fetchSubmissions() {
      const { data } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (data) setSubmissions(data);
      setLoading(false);
    }
    fetchSubmissions();
  }, [supabase]);

  async function handleDelete(id: string, name: string, e: React.MouseEvent) {
    e.stopPropagation(); // Prevent opening the modal when clicking delete
    if (confirm(`Are you sure you want to delete this submission from ${name}?`)) {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (!error) {
        setSubmissions(submissions.filter((sub) => sub.id !== id));
        if (selectedSubmission?.id === id) setSelectedSubmission(null);
      } else {
        alert("Failed to delete submission.");
      }
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Contact Submissions</h1>
          <p className="text-sm text-gray-500 mt-1">{submissions.length} total submissions</p>
        </div>
        <Link
          href="/admin/submissions/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Submission
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">Loading submissions...</div>
      ) : submissions.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Name / Email</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Subject</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Date</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Message Preview</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr
                  key={sub.id}
                  onClick={() => setSelectedSubmission(sub)}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  title="Click to view full message"
                >
                  <td className="p-4 font-medium text-gray-900">
                    {sub.name}
                    <div className="text-gray-500 font-normal text-xs">{sub.email}</div>
                  </td>
                  <td className="p-4 text-gray-600 font-medium">{sub.subject || "N/A"}</td>
                  <td className="p-4 text-gray-500 whitespace-nowrap">
                    {new Date(sub.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-gray-600 text-sm max-w-xs truncate">
                    {sub.message}
                  </td>
                  <td className="p-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => setSelectedSubmission(sub)}
                      className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline mr-4 inline-flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                    <button
                      onClick={(e) => handleDelete(sub.id, sub.name, e)}
                      className="text-red-500 text-xs font-semibold uppercase tracking-widest hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No submissions yet.</p>
          <Link href="/admin/submissions/new" className="text-primary text-sm font-semibold underline">Add a submission</Link>
        </div>
      )}

      {/* ─── Full Message View Modal ─── */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white border border-gray-200 rounded-lg shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                  {selectedSubmission.subject || "Submission Details"}
                </span>
                <h3 className="font-serif text-xl text-gray-900 mt-1">Message Details</h3>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md border border-gray-100 text-sm">
                <div className="flex items-center gap-2.5 text-gray-700">
                  <User className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Sender Name</p>
                    <p className="font-medium text-gray-900">{selectedSubmission.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-gray-700">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Email Address</p>
                    <a href={`mailto:${selectedSubmission.email}`} className="font-medium text-primary hover:underline">
                      {selectedSubmission.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-gray-700 sm:col-span-2">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Date Received</p>
                    <p className="font-medium text-gray-900">
                      {new Date(selectedSubmission.created_at).toLocaleString("en-US", {
                        dateStyle: "full",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Message Content */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Full Message</h4>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-md text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 bg-gray-50 px-6 py-4 border-t border-gray-200">
              <a
                href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject || "BDI Inquiry"}`}
                className="bg-primary text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Reply via Email
              </a>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="bg-gray-200 text-gray-700 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}