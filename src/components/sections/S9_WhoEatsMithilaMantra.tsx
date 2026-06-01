"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const archetypes = [
  {
    id: "builder",
    title: "The Builder",
    subtitle: "More protein, zero guilt",
    description: "The ultimate post-workout crunch. High plant protein. Zero inflammatory seed oils.",
    color: "#E8B430",
    emoji: "🏋️‍♂️",
  },
  {
    id: "performer",
    title: "The Performer",
    subtitle: "Clean energy for long days",
    description: "No sugar crashes, just pure, unstoppable fuel. Perfect for deep focus and busy schedules.",
    color: "#D93838",
    emoji: "🎭",
  },
  {
    id: "explorer",
    title: "The Explorer",
    subtitle: "Boldly flavored",
    description: "Lightweight, travel-ready, and authentically spiced for your next wild adventure.",
    color: "#6FCF97",
    emoji: "🧭",
  },
];

export default function S9_WhoEatsMithilaMantra() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".archetype-card", {
        y: 60,
        rotation: () => Math.random() * 8 - 4,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-brand-white text-brand-black border-b-8 border-brand-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '25px 25px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-brand-black text-[#F2C94C] font-bold uppercase tracking-widest text-xs px-5 py-2 rounded-full mb-4">
            Perfect For
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight">
            Every Lifestyle
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archetypes.map((a, i) => (
            <div
              key={a.id}
              className="archetype-card group relative flex flex-col overflow-hidden rounded-3xl border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-300 bg-white"
              style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)` }}
            >
              {/* Color block top */}
              <div
                className="w-full h-32 md:h-48 flex items-center justify-center text-7xl md:text-8xl border-b-4 border-brand-black"
                style={{ backgroundColor: a.color }}
              >
                {a.emoji}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <span className="font-bold uppercase tracking-widest text-xs text-brand-black/50 mb-2">
                  {a.subtitle}
                </span>
                <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-4">
                  {a.title}
                </h3>
                <p className="font-body font-bold text-base md:text-lg text-brand-black/80 leading-relaxed flex-1">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
