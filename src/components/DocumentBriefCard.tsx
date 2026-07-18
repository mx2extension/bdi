"use client";

import { useState } from "react";
import { Download, FileText, Loader2, AlertCircle } from "lucide-react";

interface DocumentBriefCardProps {
  title: string;
  description: string;
  documentUrl: string;
  fileType?: string;
  fileSize?: string | null;
}

export default function DocumentBriefCard({
  title,
  description,
  documentUrl,
  fileType = "PDF",
  fileSize,
}: DocumentBriefCardProps) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    setError(false);

    try {
      const response = await fetch(documentUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch document (HTTP ${response.status})`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${title.replace(/[^a-zA-Z0-9\s-_]/g, "").replace(/\s+/g, "-").toLowerCase()}.${fileType.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      setError(true);
      window.open(documentUrl, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 p-8 lg:p-10 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-5 mb-6">
        <div className="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0">
          <FileText className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
            Investment Brief
          </span>
          <h3 className="font-serif text-xl text-gray-900 leading-snug">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5">
            {fileType}
          </span>
          {fileSize && (
            <span className="text-xs text-gray-400">{fileSize}</span>
          )}
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center justify-center gap-2.5 bg-primary text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Preparing Download...
            </>
          ) : error ? (
            <>
              <AlertCircle className="w-4 h-4" />
              Open Document
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Download Investment Brief
            </>
          )}
        </button>
      </div>
    </div>
  );
}