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
        className="mb-8"
      >
        {/* Minimal Lotus Motif */}
        <path d="M50 85 C 30 65, 10 50, 50 15 C 90 50, 70 65, 50 85 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 85 C 30 75, 20 60, 50 25 C 80 60, 70 75, 50 85 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 85 C 40 80, 35 65, 50 35 C 65 65, 60 80, 50 85 Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 85 V 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div ref={textRef} className="font-display text-sm tracking-[0.3em] uppercase opacity-0 text-brand-white">
        Taste the Mithila Magic
      </div>
    </div>
  );
}
