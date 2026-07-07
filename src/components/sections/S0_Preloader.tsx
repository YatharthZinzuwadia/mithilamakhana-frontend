"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { clsx } from "clsx";

// Psychology: Novelty Effect + First Impression anchoring
export default function S0_Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
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

      // Fade in logo
      tl.fromTo(textRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      });

      // Scale up and fade out the whole container
      tl.to(containerRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
      }, "+=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      className={clsx(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-white text-brand-black overflow-hidden",
      )}
    >
      <div ref={textRef} className="opacity-0 flex flex-col items-center justify-center">
        <img 
          src="/mithilamantralogo.png" 
          alt="मithila Mantra Makhana" 
          className="w-48 sm:w-64 md:w-80 h-auto object-contain" 
        />
      </div>
    </div>
  );
}
