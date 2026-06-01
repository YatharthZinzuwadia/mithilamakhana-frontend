"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function S4_CraftedInMithila() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s4-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scale: 0.8,
        y: 50,
        opacity: 0,
        rotation: () => Math.random() * 10 - 5,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 px-6 bg-[#2D3748] text-white flex flex-col items-center justify-center overflow-hidden border-b-8 border-brand-black"
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615486171448-4fd1ab6c9682?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark moody texture"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#2D3748]/80 mix-blend-multiply" />
      </div>

      {/* Background colored blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#D93838] rounded-full blur-[80px] opacity-40 z-0" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F2C94C] rounded-full blur-[100px] opacity-30 z-0" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block s4-box bg-[#F2C94C] text-brand-black px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-8 border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] transform -rotate-3">
          Roasted, Not Fried!
        </div>
        
        <h2 className="s4-box font-display text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase drop-shadow-[5px_5px_0_rgba(0,0,0,1)] leading-tight">
          The Crunch <br/> You Can Hear.
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 mt-12">
          <div className="s4-box bg-white text-brand-black p-8 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] flex flex-col items-center transform rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all">
            <span className="text-6xl mb-4">🌾</span>
            <h3 className="font-display font-black text-2xl uppercase mb-3">Pond to Pack</h3>
            <p className="font-body font-bold text-gray-600 text-base text-center">Sourced directly from the lotus ponds of Bihar.</p>
          </div>
          
          <div className="s4-box bg-[#6FCF97] text-brand-black p-8 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] flex flex-col items-center transform -rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all">
            <span className="text-6xl mb-4">🔥</span>
            <h3 className="font-display font-black text-2xl uppercase mb-3">Slow Roasted</h3>
            <p className="font-body font-bold text-gray-800 text-base text-center">Never fried. Roasted to absolute crispy perfection.</p>
          </div>
          
          <div className="s4-box bg-[#D93838] text-white p-8 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] flex flex-col items-center transform rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all">
            <span className="text-6xl mb-4">🧂</span>
            <h3 className="font-display font-black text-2xl uppercase mb-3">Flavored Right</h3>
            <p className="font-body font-bold text-white/90 text-base text-center">Coated with bold, natural spices that hit the spot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
