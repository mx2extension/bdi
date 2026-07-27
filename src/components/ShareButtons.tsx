"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/media/news/${slug}` : "";

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents the Link tag from triggering navigation
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleShare = (e: React.MouseEvent, platformUrl: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(platformUrl, "_blank", "noopener,noreferrer");
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 mt-4" onClick={(e) => e.preventDefault()}>
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Share:</span>
      
      {/* Twitter / X */}
      <button
        onClick={(e) => handleShare(e, `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`)}
        className="text-xs text-gray-600 hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded"
        title="Share on X"
      >
        Twitter
      </button>

      {/* LinkedIn */}
      <button
        onClick={(e) => handleShare(e, `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)}
        className="text-xs text-gray-600 hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded"
        title="Share on LinkedIn"
      >
        LinkedIn
      </button>

      {/* WhatsApp */}
      <button
        onClick={(e) => handleShare(e, `https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`)}
        className="text-xs text-gray-600 hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded"
        title="Share on WhatsApp"
      >
        WhatsApp
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="text-xs text-gray-600 hover:text-primary transition-colors bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded"
        title="Copy Link"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}