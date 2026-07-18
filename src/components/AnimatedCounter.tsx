"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  divisor?: number;
  format?: "comma" | "decimal";
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  decimals = 0,
  divisor = 1,
  format = "decimal",
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const el = ref.current;
    if (!el) return;

    let startTime: number | null = null;
    let raf: number;

    function formatValue(n: number): string {
      if (format === "comma") {
        return Math.round(n).toLocaleString("en-US") + suffix;
      }
      return (n / divisor).toFixed(decimals) + suffix;
    }

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      if (el) el.textContent = formatValue(ease * target);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasAnimated, target, decimals, divisor, format, suffix, duration]);

  return (
    <span
      ref={ref}
      className="font-serif text-4xl lg:text-5xl text-white tabular-nums"
    >
      {format === "comma" ? "0" : (0).toFixed(decimals)}{suffix}
    </span>
  );
}