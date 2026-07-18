import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Plus, Pencil } from "lucide-react";
import NewsActions from "@/components/NewsActions";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const supabase = await createClient();
  const { data: news } = await supabase
    .from("news")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl text-gray-900">News Articles</h1>
        <Link
          href="/admin/news/new"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Article
        </Link>
      </div>

      {news && news.length > 0 ? (
        <div className="bg-white border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Title</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Date</th>
                <th className="text-left p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Status</th>
                <th className="text-right p-4 font-semibold text-gray-700 uppercase text-xs tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((article) => (
                <tr key={article.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <span className="font-medium text-gray-900 block">{article.title}</span>
                    <span className="text-xs text-gray-400">/{article.slug}</span>
                  </td>
                  <td className="p-4 text-gray-500">
                    {new Date(article.published_at).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <NewsActions id={article.id} isPublished={article.is_published} />
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      href={`/admin/news/${article.id}`}
                      className="text-primary text-xs font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                    >
                      <Pencil className="w-3 h-3" /> Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border border-gray-200 bg-white">
          <p className="text-gray-500 mb-4">No news articles yet.</p>
          <Link href="/admin/news/new" className="text-primary text-sm font-semibold underline">Create the first article</Link>
        </div>
      )}
    </div>
  );
}