"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { clsx } from "clsx";

// Psychology: Novelty Effect + First Impression anchoring
export default function S0_Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // We want the preloader to show on initial load, but for dev it can be annoying,
    // so we'll run it quickly. In production, this would ensure fonts/assets are loaded.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => setIsComplete(true), 500);
        }
      });

      // Simple SVG stroke animation without DrawSVG plugin
      const paths = svgRef.current?.querySelectorAll("path");
      if (paths) {
        paths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 1
          });
          
          tl.to(path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: 0.1
          }, 0);
        });
      }

      // Fade in text
      tl.fromTo(textRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");

      // Scale up and fade out the whole container
      tl.to(containerRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
      }, "+=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      className={clsx(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black text-brand-gold overflow-hidden",
      )}
    >
      <svg 
        ref={svgRef}
        width="120" 
        height="120" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8 overflow-visible"
      >
        {/* Blooming Lotus Motif */}
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Center Petal */}
          <path d="M50 80 C 45 60, 35 40, 50 15 C 65 40, 55 60, 50 80 Z" />
          {/* Inner Left Petal */}
          <path d="M50 80 C 35 70, 20 50, 30 25 C 40 40, 45 60, 50 80 Z" />
          {/* Inner Right Petal */}
          <path d="M50 80 C 65 70, 80 50, 70 25 C 60 40, 55 60, 50 80 Z" />
          {/* Outer Left Petal */}
          <path d="M50 80 C 25 80, 5 60, 10 40 C 20 55, 35 70, 50 80 Z" />
          {/* Outer Right Petal */}
          <path d="M50 80 C 75 80, 95 60, 90 40 C 80 55, 65 70, 50 80 Z" />
          {/* Water ripples / Base */}
          <path d="M30 90 Q 50 95 70 90" strokeWidth="1.5" />
          <path d="M40 95 Q 50 98 60 95" strokeWidth="1.5" />
        </g>
      </svg>

      <div ref={textRef} className="font-display text-sm tracking-[0.3em] uppercase opacity-0 text-brand-white">
        Taste the Mithila Magic
      </div>
    </div>
  );
}
