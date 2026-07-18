"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  id: string;
  image_url: string;
  title: string;
  subtitle: string | null;
  button_text: string | null;
  button_link: string | null;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[current];

  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
          }`}
        >
          <Image
            src={slide.image_url}
            alt={slide.title}
            fill
            className={`object-cover transition-transform duration-[8000ms] ease-out ${
              i === current ? "scale-100" : "scale-105"
            }`}
            unoptimized
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/60 to-transparent z-[3]" />

      {/* Content */}
      <div className="absolute top-1/2 -translate-y-1/2 z-[4] w-full md:w-3/5 pl-[6%] pr-6">
        <span className="block text-accent text-xs font-semibold uppercase tracking-[0.2em] border-l-2 border-accent pl-4 mb-6">
          Bauchi State Development Initiative
        </span>
        <h1 className="font-serif text-4xl md:text-7xl text-white mb-6 max-w-2xl leading-tight transition-opacity duration-500">
          {activeSlide.title}
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-lg mb-10 font-light transition-opacity duration-500">
          {activeSlide.subtitle}
        </p>
        {activeSlide.button_text && (
          <Link
            href={activeSlide.button_link || "/investments"}
            className="inline-block bg-accent text-primary-dark px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-accent-light transition-all hover:-translate-y-1"
          >
            {activeSlide.button_text}
          </Link>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-[6%] z-[5] flex gap-6 items-center">
        {/* Dots */}
        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === current ? "w-[50px] bg-accent" : "w-[30px] bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary-dark transition-all text-sm"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary-dark transition-all text-sm"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}