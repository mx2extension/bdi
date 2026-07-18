// src/components/ScrollRevealer.js
'use client';

import { useEffect, useRef } from 'react';

export default function ScrollRevealer({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal-on-scroll">
      {children}
    </div>
  );
}