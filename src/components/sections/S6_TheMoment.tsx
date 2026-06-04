"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger to fix "_context is not a function" error
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function S6_TheMoment() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.from(".s6-pop", {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.5)",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-[#6FCF97] text-brand-black overflow-hidden border-b-8 border-brand-black flex flex-col items-center justify-center"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#000 3px, transparent 3px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6 w-full">
        <h2 className="s6-pop font-display text-lg min-[360px]:text-xl min-[400px]:text-2xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight sm:tracking-tighter text-white drop-shadow-[3px_3px_0_rgba(0,0,0,1)] sm:drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mb-6 sm:mb-8 transform -rotate-1 sm:-rotate-2 leading-tight w-full max-w-full">
          THE <br />
          <span className="whitespace-nowrap inline-block">TRANSFORMATION</span>
        </h2>

        <div className="s6-pop bg-brand-gold p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] sm:shadow-[10px_10px_0_rgba(0,0,0,1)] transform rotate-1 sm:rotate-2 w-full max-w-2xl">
          <p className="font-body text-sm sm:text-lg md:text-xl font-bold leading-relaxed">
            From the deep ponds of Bihar to your pantry.
            <br className="hidden sm:block" />
            <span className="block mt-3 sm:mt-4">
              <span className="bg-brand-black text-white px-2 py-1 uppercase tracking-wide sm:tracking-widest text-[10px] sm:text-base inline-block">
                The ultimate healthy crunch.
              </span>
            </span>
          </p>
        </div>

        <div className="s6-pop mt-12 relative w-36 h-36 sm:w-48 sm:h-48 bg-white rounded-full border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <span className="font-display font-black text-xl sm:text-2xl uppercase text-center text-[#D93838] leading-tight">
            Super
            <br />
            Food!
          </span>
        </div>
      </div>
    </section>
  );
}
