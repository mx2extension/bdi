"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Pencil, Trash2, FileText, Link as LinkIcon } from "lucide-react";

const initialFormState = {
  title: "",
  category: "Agriculture",
  summary: "",
  image_url: "",
  pdf_url: "",
  location: "Bauchi State, Nigeria",
  sort_order: 0,
};

export default function AdminInvestmentMap() {
  const supabase = createClient();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState(initialFormState);

  const categories = [
    "Agriculture",
    "Energy",
    "Tourism",
    "Infrastructure",
    "Mining",
    "Manufacturing",
    "Healthcare",
    "ICT",
    "Education",
    "Other",
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("investment_opportunities")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error("Error fetching items:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return alert("Title is required.");

    setSubmitting(true);
    const payload = {
      title: formData.title.trim(),
      category: formData.category,
      summary: formData.summary.trim(),
      image_url: formData.image_url.trim(),
      pdf_url: formData.pdf_url.trim() || null,
      location: formData.location.trim(),
      sort_order: parseInt(String(formData.sort_order)) || 0,
    };

    try {
      if (editingId) {
        const { error } = await supabase
          .from("investment_opportunities")
          .update(payload)
          .eq("id", editingId);
        if (error) throw error;
        alert("Opportunity updated successfully!");
      } else {
        const { error } = await supabase
          .from("investment_opportunities")
          .insert([{ ...payload, is_published: true }]);
        if (error) throw error;
        alert("Opportunity added successfully!");
      }
      resetForm();
      fetchItems();
    } catch (err: any) {
      alert(`Error saving item: ${err?.message || String(err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (item: any) => {
    setFormData({
      title: item.title || "",
      category: item.category || "Agriculture",
      summary: item.summary || "",
      image_url: item.image_url || "",
      pdf_url: item.pdf_url || "",
      location: item.location || "Bauchi State, Nigeria",
      sort_order: item.sort_order || 0,
    });
    setEditingId(item.id);
    setShowForm(true);
  };

  const togglePublish = async (id: number, currentState: boolean) => {
    try {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, is_published: !currentState } : item
        )
      );
      const { error } = await supabase
        .from("investment_opportunities")
        .update({ is_published: !currentState })
        .eq("id", id);
      if (error) throw error;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      alert(`Failed to update status: ${message}`);
      fetchItems();
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this? This cannot be undone.")) return;
    try {
      setItems((prev) => prev.filter((item) => item.id !== id));
      const { error } = await supabase
        .from("investment_opportunities")
        .delete()
        .eq("id", id);
      if (error) throw error;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      alert(`Delete failed: ${message}`);
      fetchItems();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-gray-900">Investment Map</h1>
          <p className="text-sm text-gray-500 mt-1">Manage investment proposals and downloadable PDFs</p>
        </div>
        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" />
          {showForm ? "Cancel" : "Add Opportunity"}
        </button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8 shadow-sm">
          <h3 className="font-sans text-lg font-semibold text-gray-900 mb-6">
            {editingId ? "Edit Opportunity" : "Add New Opportunity"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="e.g. Bauchi Agricultural Hub"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location / State</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                placeholder="e.g. Bauchi State, Nigeria"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Project Summary <span className="text-gray-400 font-normal">(2-4 sentences)</span>
              </label>
              <textarea
                rows={3}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none"
                placeholder="Brief overview of the investment opportunity..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail Image URL</label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Proposal PDF URL <span className="text-gray-400 font-normal">(Supabase Storage Link)</span>
                </label>
                <input
                  type="url"
                  value={formData.pdf_url}
                  onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="https://project-id.supabase.co/storage/..."
                />
              </div>
            </div>

            <div className="w-32">
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
              <input
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-50"
            >
              {submitting ? "Saving..." : editingId ? "Update Opportunity" : "Add Opportunity"}
            </button>
          </form>
        </div>
      )}

      {/* Data Table */}
      {loading ? (
        <p className="text-gray-500 py-12 text-center">Loading opportunities...</p>
      ) : items.length === 0 ? (
        <div className="text-center py-16 bg-white border border-gray-200 rounded-lg">
          <p className="text-gray-400 mb-2">No investment opportunities added yet.</p>
          <button onClick={() => setShowForm(true)} className="text-primary text-sm font-semibold hover:underline">
            Add your first opportunity
          </button>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">Proposal</th>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-semibold text-gray-700 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id} className={`hover:bg-gray-50 transition-colors ${!item.is_published ? "opacity-50" : ""}`}>
                    <td className="px-6 py-4 font-medium text-gray-900 max-w-[250px] truncate">{item.title}</td>
                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap text-xs">{item.location}</td>
                    <td className="px-6 py-4">
                      {item.pdf_url ? (
                        <a
                          href={item.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline text-xs"
                        >
                          <FileText className="w-4 h-4" />
                          Has PDF
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">Missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublish(item.id, item.is_published)}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          item.is_published
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.is_published ? "Active" : "Paused"}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => togglePublish(item.id, item.is_published)}
                          className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                          title={item.is_published ? "Pause" : "Activate"}
                        >
                          <LinkIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}