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
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80"
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
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80"
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
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&q=80"
            alt="Lotus pond"
            className="w-full h-16 object-cover"
          />
          <p className="text-[9px] font-black uppercase tracking-wider text-brand-black/50 text-center mt-1">Lotus Pond</p>
        </div>
      </div>
      {/* ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="s11-card inline-block font-display text-4xl md:text-6xl font-black mb-10 bg-white px-6 py-3 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform -rotate-1 uppercase tracking-tighter leading-tight">
          Where Snacking Meets Wellness
        </h2>
        
        <div className="s11-card bg-[#F2C94C] p-6 md:p-10 border-4 border-brand-black rounded-3xl shadow-[10px_10px_0_rgba(0,0,0,1)] text-left mb-10 transform rotate-1">
          <p className="font-body text-lg md:text-xl leading-relaxed font-bold mb-4">
            At <span className="bg-white px-2 py-1 rounded border-2 border-brand-black">Mithila Mantra Makhanas</span>, we believe that healthy snacking doesn't have to be boring. 
            Born from the desire to combine nutrition with great taste, our brand brings you a delicious range of flavored makhanas (fox nuts) that are roasted to perfection.
          </p>
          <p className="font-body text-base md:text-lg font-bold text-brand-black/80">
            Sourced from the finest farms and processed with care, Mithila Mantra Makhanas are 
            <span className="text-[#D93838] uppercase px-1"> low in calories, high in protein, and rich in antioxidants </span> 
            – making them the perfect companion for your fitness goals, work breaks, binge-watching sessions, or even travel munchies.
          </p>
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
