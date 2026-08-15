// src/components/PdfViewer.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import the client component, disabling Server-Side Rendering
const PdfViewerClient = dynamic(() => import("./PdfViewerClient"), {
  ssr: false,
  loading: () => (
    <button
      disabled
      className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg cursor-wait"
    >
      Loading Viewer...
    </button>
  ),
});

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  return <PdfViewerClient pdfUrl={pdfUrl} />;
}