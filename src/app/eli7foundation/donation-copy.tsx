"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function DonationCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-7 h-7 flex items-center justify-center rounded border border-white/[0.1] hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-3 h-3 text-accent" />
      ) : (
        <Copy className="w-3 h-3 text-white/40" />
      )}
    </button>
  );
}