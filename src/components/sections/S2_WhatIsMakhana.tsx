"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { clsx } from "clsx";

const CAROUSEL_IMAGES = [
  "/images/makhana_snacking.png", // Snacking
  "/images/makhana_lotus_pond.png", // Lotus Pond
  "/images/makhana_harvest.png", // Harvest
  "/images/makhana_raw_seeds.png", // Raw seeds
];

export default function S2_WhatIsMakhana() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-cycling image carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s2-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.2)"
      });
      
      // Floating animation for decorative elements
      gsap.to(".s2-float", {
        y: -15,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#F2C94C] text-brand-black overflow-hidden border-b-8 border-brand-black">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      {/* Floating Decorative Elements */}
      <div className="s2-float absolute top-20 left-10 text-4xl opacity-50 select-none">🌶️</div>
      <div className="s2-float absolute bottom-20 left-20 text-4xl opacity-50 select-none">🌿</div>
      <div className="s2-float absolute top-40 right-10 text-4xl opacity-50 select-none">✨</div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-center">
        
        {/* Left Side: Images & Shapes */}
        <div className="relative w-full max-w-sm mx-auto md:max-w-none aspect-square flex justify-center items-center">
          <div className="s2-element absolute w-3/4 h-3/4 bg-brand-black rotate-6 rounded-3xl" />
          
          <div className="s2-element absolute w-3/4 h-3/4 bg-white -rotate-3 rounded-3xl border-4 border-brand-black overflow-hidden shadow-[12px_12px_0_rgba(0,0,0,1)] relative">
            {CAROUSEL_IMAGES.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt="Makhana visuals" 
                className={clsx(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>

          {/* Floating badge - Fixed anchoring (closer to bottom-center of image) */}
          <div className="s2-element absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 md:translate-y-8 bg-[#6FCF97] border-4 border-brand-black rounded-full p-4 md:p-6 shadow-[8px_8px_0_rgba(0,0,0,1)] z-20 hover:scale-110 transition-transform">
            <p className="font-display font-black text-lg md:text-2xl uppercase rotate-[-5deg] text-center leading-tight">Snack<br/>Attack!</p>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="s2-element font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 drop-shadow-[4px_4px_0_rgba(255,255,255,1)] leading-tight">
            What EXACTLY is Makhana?
          </h2>
          
          {/* Enriched Content Strip */}
          <div className="s2-element flex flex-wrap gap-2 mb-6">
            <span className="bg-[#D93838] text-white px-3 py-1 font-black uppercase text-xs tracking-widest rounded-full border-2 border-brand-black shadow-[2px_2px_0_#000]">Grown in Lotus Ponds</span>
            <span className="bg-[#2D3748] text-white px-3 py-1 font-black uppercase text-xs tracking-widest rounded-full border-2 border-brand-black shadow-[2px_2px_0_#000]">Air-Popped, Not Fried</span>
            <span className="bg-white text-brand-black px-3 py-1 font-black uppercase text-xs tracking-widest rounded-full border-2 border-brand-black shadow-[2px_2px_0_#000]">Zero Cholesterol</span>
          </div>

          <div className="s2-element font-body text-lg md:text-xl leading-relaxed font-bold space-y-4">
            <p className="bg-white p-5 border-4 border-brand-black rounded-2xl shadow-[6px_6px_0_rgba(0,0,0,1)]">
              It's not corn. It's not a potato. It's the seed of the <strong>Euryale Ferox</strong> water lily.
            </p>
            <p className="bg-brand-black text-white p-5 border-4 border-brand-black rounded-2xl shadow-[6px_6px_0_rgba(0,0,0,1)]">
              Harvested by hand from the ponds of Bihar, popped like popcorn, but infinitely healthier. 
            </p>
            <p className="p-5 font-bold text-brand-black/70">
              A 2500-year-old superfood that's about to take over your pantry.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
