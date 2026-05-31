"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S5_MithilaStory() {
  const containerRef = useRef<HTMLSectionElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s5-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 bg-brand-white text-brand-black overflow-hidden border-b-8 border-brand-black"
    >
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2C94C] rounded-full blur-[80px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D93838] rounded-full blur-[100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col">
          <h2 className="s5-item font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-brand-black drop-shadow-[3px_3px_0_#D93838] leading-tight">
            THE MITHILA STORY
          </h2>
          
          <div className="s5-item bg-white p-6 border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] rounded-2xl mb-6 transform -rotate-1">
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed">
              Makhana isn't made in a factory. It is born in the aquatic heart of Bihar. 
              <br/><br/>
              It takes months of careful cultivation in lotus ponds, followed by the rigorous, ancient practice of hand-harvesting by the Mallah community.
            </p>
          </div>

          <div className="s5-item flex items-center gap-4">
            <div className="w-16 h-16 bg-[#6FCF97] rounded-full border-4 border-brand-black flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <span className="font-black text-2xl">✓</span>
            </div>
            <p className="font-display font-black text-2xl uppercase tracking-widest">
              Authentic Origin
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="s5-item relative w-full max-h-[50vh] md:max-h-none md:aspect-[4/5] bg-gray-200 border-4 border-brand-black shadow-[16px_16px_0_rgba(0,0,0,1)] rounded-3xl overflow-hidden md:rotate-2">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
            alt="Mithila Origin" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
}
