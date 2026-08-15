// src/components/PdfViewerClient.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Download, X, Eye, ZoomIn, ZoomOut } from "lucide-react";

// Setup the worker thread required by PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerClientProps {
  pdfUrl: string;
}

export default function PdfViewerClient({ pdfUrl }: PdfViewerClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  
  // Zoom state (1 = 100%)
  const [scale, setScale] = useState(1.0);
  
  // State to hold the actual width of the modal container
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the width of the container whenever the modal opens or screen resizes
  useEffect(() => {
    if (!isOpen) return;

    const updateWidth = () => {
      if (containerRef.current) {
        // Subtract 32px for the padding (p-4 = 16px on each side)
        setContainerWidth(containerRef.current.clientWidth - 32);
      }
    };

    // Initial width
    updateWidth();
    
    // Update on resize
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setScale(1.0); // Reset zoom when a new doc loads
  }

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3.0)); // Max zoom 300%
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5)); // Min zoom 50%

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow"
      >
        <Eye className="w-4 h-4" /> View PDF Proposal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <span className="font-serif text-base sm:text-lg text-gray-900 truncate pr-2">Proposal Document</span>
              
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* ZOOM CONTROLS */}
                <div className="flex items-center gap-1 border-r border-gray-300 pr-2 sm:pr-3 mr-1">
                  <button
                    onClick={handleZoomOut}
                    className="bg-white border border-gray-300 rounded-md p-1.5 hover:bg-gray-100 transition-colors"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4 text-gray-700" />
                  </button>
                  <span className="text-xs font-semibold text-gray-600 w-10 text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="bg-white border border-gray-300 rounded-md p-1.5 hover:bg-gray-100 transition-colors"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                <a
                  href={pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
                <a
                  href={pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden bg-primary p-2 rounded-lg"
                  aria-label="Download"
                >
                  <Download className="w-4 h-4 text-white" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Close PDF viewer"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div 
              ref={containerRef} 
              className="flex-1 w-full bg-gray-200 overflow-auto flex justify-center p-4"
            >
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="p-10 text-sm text-gray-500">Loading document...</div>}
                error={<div className="p-10 text-sm text-red-500">Failed to load PDF.</div>}
              >
                <div className="flex flex-col items-center gap-4">
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page 
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      // Base width is the container width, multiplied by the zoom scale
                      width={containerWidth ? containerWidth * scale : undefined} 
                      className="shadow-lg bg-white"
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  ))}
                </div>
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
}