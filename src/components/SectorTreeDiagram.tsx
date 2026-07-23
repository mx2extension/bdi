"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

interface Sector {
  id: string;
  title: string;
  slug: string;
  short_description: string;
}

interface Point {
  x: number;
  y: number;
}

function cubicBezier(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  const mt = 1 - t;
  return {
    x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
    y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y,
  };
}

export default function SectorTreeDiagram({ sectors = [] }: { sectors: Sector[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgWidth, setSvgWidth] = useState(1100);
  const [isReady, setIsReady] = useState(false);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setSvgWidth(containerRef.current.clientWidth || 1100);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Handle empty state gracefully so it doesn't blow up in height
  if (!sectors || sectors.length === 0) {
    return null;
  }

  const W = svgWidth;
  const p0: Point = { x: W * 0.02, y: W * 0.08 };
  const p1: Point = { x: W * 0.28, y: W * 0.18 };
  const p2: Point = { x: W * 0.72, y: W * 0.18 };
  const p3: Point = { x: W * 0.98, y: W * 0.08 };

  const arcPath = `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;

  const N = sectors.length;
  const cardPoints: Point[] = sectors.map((_, i) => {
    const t = N === 1 ? 0.5 : 0.08 + 0.84 * (i / (N - 1));
    return cubicBezier(t, p0, p1, p2, p3);
  });

  const dotPoints: Point[] = [];
  for (let i = 0; i < N - 1; i++) {
    const tA = 0.08 + 0.84 * (i / (N - 1));
    const tB = 0.08 + 0.84 * ((i + 1) / (N - 1));
    const tMid = (tA + tB) / 2;
    dotPoints.push(cubicBezier(tMid, p0, p1, p2, p3));
  }

  const maxY = Math.max(...cardPoints.map((p) => p.y));
  const svgH = maxY + 200; // Keep tight padding below cards

  return (
    <section className="bg-primary-dark py-16 relative overflow-hidden">
      {/* Background Image Layer with Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/drnrbfltr/image/upload/v1783840785/file_skcq8t.jpg"
          alt="Investment Landscape Background"
          fill
          className="object-cover opacity-100"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark" />
      </div>

      {/* Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(212,175,55,0.06)_0%,transparent_55%)] pointer-events-none relative z-10" />

      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Investment Landscape
          </span>
          <h2 className="font-serif text-3xl mb-2 text-white">Strategic Growth Sectors</h2>
          <div className="w-10 h-px bg-accent mx-auto" />
        </div>

        {/* ══════ DESKTOP ARC DIAGRAM ══════ */}
        <div className="hidden lg:block">
          <div
            ref={containerRef}
            className="relative mx-auto max-w-6xl w-full"
            style={{ height: svgH }}
          >
            {/* ── SVG Arc Layer ── */}
            <svg
              className="absolute top-0 left-0 pointer-events-none"
              width={W}
              height={svgH}
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.06" />
                  <stop offset="25%" stopColor="#d4af37" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="0.55" />
                  <stop offset="75%" stopColor="#d4af37" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.06" />
                </linearGradient>
                <linearGradient id="arcGradV" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0.05" />
                </linearGradient>
                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={arcPath}
                stroke="#d4af37"
                strokeWidth="12"
                strokeOpacity="0.04"
                filter="url(#arcGlow)"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={isReady ? "0" : "1"}
                style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1) 0.1s" }}
              />

              <path
                d={arcPath}
                stroke="#d4af37"
                strokeWidth="4"
                strokeOpacity="0.08"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={isReady ? "0" : "1"}
                style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) 0.1s" }}
              />

              <path
                d={arcPath}
                stroke="url(#arcGrad)"
                strokeWidth="1.5"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset={isReady ? "0" : "1"}
                style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) 0.1s" }}
              />

              {cardPoints.map((pt, i) => (
                <line
                  key={`drop-${i}`}
                  x1={pt.x}
                  y1={pt.y}
                  x2={pt.x}
                  y2={pt.y + 14}
                  stroke="url(#arcGradV)"
                  strokeWidth="1"
                  opacity={isReady ? 1 : 0}
                  style={{ transition: `opacity 0.5s ease ${i * 0.08 + 1.2}s` }}
                />
              ))}

              {cardPoints.map((pt, i) => (
                <g key={`node-${i}`} style={{ transition: `opacity 0.5s ease ${i * 0.08 + 1.1}s`, opacity: isReady ? 1 : 0 }}>
                  <circle cx={pt.x} cy={pt.y} r="6" fill="#d4af37" fillOpacity="0.1" />
                  <circle cx={pt.x} cy={pt.y} r="3.5" fill="#0a0a0a" stroke="#d4af37" strokeWidth="1.5" />
                  <circle cx={pt.x} cy={pt.y} r="1.5" fill="#d4af37" />
                </g>
              ))}

              {dotPoints.map((pt, i) => (
                <circle
                  key={`sm-${i}`}
                  cx={pt.x}
                  cy={pt.y}
                  r="1.5"
                  fill="#d4af37"
                  opacity={isReady ? 0.25 : 0}
                  style={{ transition: `opacity 0.5s ease ${i * 0.12 + 1.4}s` }}
                />
              ))}
            </svg>

            {/* ── Sector Cards ── */}
            {sectors.map((sector, i) => {
              const pt = cardPoints[i];
              if (!pt) return null;
              return (
                <div
                  key={sector.id}
                  className="absolute"
                  style={{
                    left: pt.x,
                    top: pt.y + 14,
                    width: 180,
                    transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.08 + 0.8}s`,
                    opacity: isReady ? 1 : 0,
                    transform: isReady ? "translate(-50%, 0)" : "translate(-50%, 18px)",
                  }}
                >
                  <Link
                    href={`/investments/${sector.slug}`}
                    className="group block bg-white/[0.025] border border-white/[0.07] rounded-lg p-3.5 text-center hover:bg-accent/[0.07] hover:border-accent/20 transition-all duration-500 relative overflow-hidden shadow-lg"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                    <span className="block font-serif text-[22px] text-white/[0.035] group-hover:text-accent/10 transition-colors duration-500 mb-1 select-none leading-none">
                      0{i + 1}
                    </span>

                    <h4 className="font-serif text-[13px] text-white mb-1 group-hover:text-accent transition-colors duration-300 leading-snug">
                      {sector.title}
                    </h4>

                    <p className="text-[10px] text-white/25 leading-[1.4] mb-2.5 group-hover:text-white/45 transition-colors duration-300 line-clamp-2">
                      {sector.short_description}
                    </p>

                    <span className="text-accent text-[8px] font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                      Explore <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════ MOBILE TIMELINE ══════ */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="relative mt-4">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/15 to-transparent" />

            <div className="space-y-4">
              {sectors.map((sector, i) => (
                <div key={sector.id}>
                  <Link
                    href={`/investments/${sector.slug}`}
                    className="group flex gap-4 items-start"
                  >
                    <div className="w-12 flex-shrink-0 flex items-start justify-center pt-4 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/30 group-hover:bg-accent transition-all duration-300 ring-4 ring-primary-dark" />
                    </div>

                    <div className="flex-1 bg-white/[0.025] border border-white/[0.07] p-3.5 rounded-lg group-hover:bg-accent/[0.07] group-hover:border-accent/20 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                      <span className="block text-accent/20 font-serif text-lg mb-1 group-hover:text-accent/40 transition-colors select-none leading-none">
                        0{i + 1}
                      </span>
                      <h4 className="font-serif text-sm text-white mb-1 group-hover:text-accent transition-colors">
                        {sector.title}
                      </h4>
                      <p className="text-xs text-white/30 leading-relaxed mb-2.5 group-hover:text-white/50 transition-colors">
                        {sector.short_description}
                      </p>
                      <span className="text-accent text-[8px] font-semibold uppercase tracking-[0.18em] inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        Explore <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}