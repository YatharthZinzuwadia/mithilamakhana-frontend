"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function S5_MithilaStory() {
  const containerRef = useRef<HTMLElement>(null);

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
          
          <div className="s5-item bg-white p-6 border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] rounded-2xl mb-8 transform -rotate-1">
            <p className="font-body text-lg md:text-xl font-bold leading-relaxed">
              Makhana isn't made in a factory. It is born in the aquatic heart of Darbhanga, Bihar — India's makhana capital. 
              <br/><br/>
              It takes months of careful cultivation in lotus ponds. Once hand-harvested, the seeds are sun-dried on traditional bamboo mats before being air-popped to perfection.
              <br/><br/>
              <span className="text-[#D93838] uppercase tracking-widest text-base">No artificial preservatives. No palm oil. No MSG.</span>
            </p>
          </div>

          <div className="s5-item grid grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-3 bg-[#6FCF97]/20 p-1.5 sm:p-3 rounded-xl border-2 border-brand-black">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#6FCF97] rounded-full border-2 border-brand-black flex items-center justify-center flex-shrink-0">
                <span className="font-black text-xs sm:text-lg">✓</span>
              </div>
              <p className="font-display font-black text-[9px] min-[360px]:text-[11px] sm:text-sm uppercase tracking-tight min-[360px]:tracking-normal sm:tracking-wider leading-tight">
                <span className="tracking-[-0.06em] sm:tracking-normal block">Authentic</span>
                Origin
              </p>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-3 bg-[#F2C94C]/20 p-1.5 sm:p-3 rounded-xl border-2 border-brand-black">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#F2C94C] rounded-full border-2 border-brand-black flex items-center justify-center flex-shrink-0">
                <span className="font-black text-xs sm:text-lg">🌱</span>
              </div>
              <p className="font-display font-black text-[9px] min-[360px]:text-[11px] sm:text-sm uppercase tracking-tight min-[360px]:tracking-normal sm:tracking-wider leading-tight">100%<br/>Natural</p>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-3 bg-[#D93838]/20 p-1.5 sm:p-3 rounded-xl border-2 border-brand-black">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#D93838] rounded-full border-2 border-brand-black flex items-center justify-center flex-shrink-0 text-white">
                <span className="font-black text-xs sm:text-lg">🌾</span>
              </div>
              <p className="font-display font-black text-[9px] min-[360px]:text-[11px] sm:text-sm uppercase tracking-tight min-[360px]:tracking-normal sm:tracking-wider leading-tight">Gluten<br/>Free</p>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-3 bg-[#2D3748]/10 p-1.5 sm:p-3 rounded-xl border-2 border-brand-black">
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-[#2D3748] rounded-full border-2 border-brand-black flex items-center justify-center flex-shrink-0 text-white">
                <span className="font-black text-xs sm:text-lg">✅</span>
              </div>
              <p className="font-display font-black text-[9px] min-[360px]:text-[11px] sm:text-sm uppercase tracking-tight min-[360px]:tracking-normal sm:tracking-wider leading-tight">FSSAI<br/>Certified</p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="s5-item relative w-full max-h-[50vh] md:max-h-none md:aspect-[4/5] bg-gray-200 border-4 border-brand-black shadow-[16px_16px_0_rgba(0,0,0,1)] rounded-3xl overflow-hidden md:rotate-2">
          <img 
            src="/images/makhana_ancient_roots.png" 
            alt="Mithila Origin" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
}
