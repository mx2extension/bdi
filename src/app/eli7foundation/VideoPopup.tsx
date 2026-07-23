"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    setHasPlayed(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  if (!isOpen && hasPlayed) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={close}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl bg-primary-dark border border-white/10 overflow-hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-accent">E7I</span>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.25em]">
              Foundation
            </span>
          </div>

          <button
            onClick={close}
            className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video — 16:9 */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          {/*
            ============================================
            REPLACE THIS URL WITH YOUR ACTUAL YOUTUBE VIDEO
            Format: https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0
            ============================================
          */}
          <iframe
            src="https://www.youtube.com/embed/73FuSXGQS64?si=g2wMnr5PzFnYAe32"
            title="E7I Foundation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.06]">
          <p className="text-[11px] text-white/25 text-center">
            E7I Foundation — Impact starts here in Bauchi State
          </p>
        </div>
      </div>
    </div>
  );
}