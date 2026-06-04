"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function S11_WhyMakhanaWins() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s11-card", {
        y: 50,
        opacity: 0,
        rotation: () => Math.random() * 6 - 3,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 px-6 bg-[#6FCF97] text-brand-black border-b-8 border-brand-black overflow-hidden"
    >
      {/* ── Floating Polaroid photos ─────────────────────────── */}
      {/* Replace Unsplash URLs with /images/client-farm-photo.jpg when ready */}

      {/* Left polaroid */}
      <div className="absolute -left-4 top-16 md:left-8 md:top-24 z-0 -rotate-6 opacity-80 hidden md:block">
        <div className="bg-white border-2 border-brand-black/20 shadow-[6px_6px_0_rgba(0,0,0,0.25)] p-2 pb-8 w-36">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/makhana_lotus_pond.png"
            alt="Farm view"
            className="w-full h-28 object-cover"
          />
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-black/60 text-center mt-2">Bihar Farm</p>
        </div>
      </div>

      {/* Right polaroid */}
      <div className="absolute -right-4 top-10 md:right-10 md:top-20 z-0 rotate-5 opacity-80 hidden md:block">
        <div className="bg-white border-2 border-brand-black/20 shadow-[6px_6px_0_rgba(0,0,0,0.25)] p-2 pb-8 w-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/makhana_roasting.png"
            alt="Makhana roasting"
            className="w-full h-24 object-cover"
          />
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-black/60 text-center mt-2">Slow Roasted</p>
        </div>
      </div>

      {/* Bottom-left small polaroid */}
      <div className="absolute left-4 bottom-16 md:left-20 md:bottom-12 z-0 rotate-3 opacity-70 hidden md:block">
        <div className="bg-white border-2 border-brand-black/20 shadow-[4px_4px_0_rgba(0,0,0,0.2)] p-2 pb-6 w-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/makhana_harvest.png"
            alt="Lotus pond"
            className="w-full h-16 object-cover"
          />
          <p className="text-[9px] font-black uppercase tracking-wider text-brand-black/50 text-center mt-1">Lotus Pond</p>
        </div>
      </div>
      {/* ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="s11-card inline-block font-display text-2xl sm:text-4xl md:text-6xl font-black mb-10 bg-white px-4 sm:px-6 py-3 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform -rotate-1 uppercase tracking-tighter leading-tight max-w-full">
          Where Snacking Meets Wellness
        </h2>
        
        <div className="s11-card bg-[#F2C94C] p-6 md:p-10 border-4 border-brand-black rounded-3xl shadow-[10px_10px_0_rgba(0,0,0,1)] text-left mb-10 transform rotate-1">
          <p className="font-body text-lg md:text-xl leading-relaxed font-bold mb-8 text-center md:text-left">
            At <span className="bg-white px-2 py-1 rounded border-2 border-brand-black">Mithila Mantra Makhanas</span>, we believe that healthy snacking doesn't have to be boring. 
            Sourced from the finest farms and processed with care, our makhanas are the ultimate superfood.
          </p>
          
          <div className="bg-white rounded-2xl border-4 border-brand-black p-6 shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
            <h3 className="font-display font-black text-2xl uppercase mb-6 text-center tracking-tight border-b-2 border-brand-black/10 pb-4">
              The Nutritional Edge <span className="text-sm font-bold block text-gray-500 normal-case tracking-normal mt-1">(per 100g)</span>
            </h3>

            {/* Protein Comparison */}
            <div className="mb-8">
              <div className="flex justify-between font-black uppercase text-sm mb-2">
                <span>Protein</span>
                <span className="text-[#D93838]">Makhana Wins</span>
              </div>
              
              <div className="space-y-3 font-body text-xs sm:text-sm font-bold">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-16 sm:w-24 text-right text-xs sm:text-sm flex-shrink-0">Makhana</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 border-2 border-brand-black overflow-hidden relative">
                    <div className="bg-[#6FCF97] h-full" style={{ width: '90%' }}></div>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-brand-black text-[10px] sm:text-xs font-black">9.7g</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 opacity-60">
                  <span className="w-16 sm:w-24 text-right text-xs sm:text-sm flex-shrink-0">Chips</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 border-2 border-brand-black overflow-hidden relative">
                    <div className="bg-gray-400 h-full" style={{ width: '60%' }}></div>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-[10px] sm:text-xs font-black">6.5g</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calories Comparison */}
            <div>
              <div className="flex justify-between font-black uppercase text-sm mb-2">
                <span>Calories</span>
                <span className="text-[#6FCF97]">Less is More</span>
              </div>
              
              <div className="space-y-3 font-body text-xs sm:text-sm font-bold">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="w-16 sm:w-24 text-right text-xs sm:text-sm flex-shrink-0">Makhana</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 border-2 border-brand-black overflow-hidden relative">
                    <div className="bg-[#F2C94C] h-full" style={{ width: '65%' }}></div>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-brand-black text-[10px] sm:text-xs font-black">347 kcal</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 opacity-60">
                  <span className="w-16 sm:w-24 text-right text-xs sm:text-sm flex-shrink-0">Chips</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 border-2 border-brand-black overflow-hidden relative">
                    <div className="bg-[#D93838] h-full" style={{ width: '100%' }}></div>
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-[10px] sm:text-xs font-black">536 kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="s11-card inline-block bg-brand-black text-white p-6 border-4 border-white rounded-3xl shadow-[8px_8px_0_rgba(255,255,255,1)] transform -rotate-2">
          <p className="font-display text-xl md:text-3xl font-black uppercase tracking-tighter mb-3">
            We're more than just a snack
          </p>
          <p className="font-bold text-[#F2C94C] tracking-widest uppercase text-lg">
            Snack Smart. Snack Pure. Snack Mithila.
          </p>
        </div>
      </div>
    </section>
  );
}
