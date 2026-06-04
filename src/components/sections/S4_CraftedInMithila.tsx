"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function S4_CraftedInMithila() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-4 md:px-8 bg-brand-white text-brand-black border-b-8 border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex-1">
            <div className="inline-block bg-brand-black text-white px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-4 border-2 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
              Crafted in Mithila
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              The Crunch<br/>
              <span className="text-[#D93838]">You Can Hear.</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="font-body font-bold text-lg text-gray-600 leading-relaxed border-l-4 border-[#F2C94C] pl-6">
              We ditched the deep fryer and perfected the art of the slow roast. The result? A snack that is impossibly light, outrageously crunchy, and deeply satisfying.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Main Large Feature */}
          <div className="bento-item md:col-span-2 md:row-span-2 relative rounded-[2rem] border-4 border-brand-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)] bg-[#FFF9E6] group flex flex-col justify-end p-10 min-h-[400px]">
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/makhana_snacking.png" 
                alt="Flavour burst"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="inline-block bg-white text-brand-black px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-4">
                Slow Roasted
              </span>
              <h3 className="font-display font-black text-4xl md:text-5xl uppercase text-white mb-2 leading-none">
                Never Fried.<br/>Ever.
              </h3>
              <p className="font-body font-bold text-white/90 text-lg max-w-md">
                Cooked slowly in small batches to draw out moisture and lock in the ultimate crispy texture.
              </p>
            </div>
          </div>

          {/* Small Feature 1 */}
          <div className="bento-item relative rounded-[2rem] border-4 border-brand-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)] bg-[#6FCF97] p-8 flex flex-col justify-center group hover:bg-[#5EBE86] transition-colors">
            <h3 className="font-display font-black text-3xl uppercase text-brand-black mb-3">
              Pond to<br/>Pack
            </h3>
            <p className="font-body font-bold text-brand-black/80 text-sm">
              Sourced directly from the lotus ponds of Bihar, ensuring maximum freshness and fair wages.
            </p>
            {/* Geometric accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
          </div>

          {/* Small Feature 2 */}
          <div className="bento-item relative rounded-[2rem] border-4 border-brand-black overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,1)] bg-[#2D3748] p-8 flex flex-col items-center justify-center group">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/makhana_raw_seeds.png')] bg-cover bg-center" />
            <div className="relative z-10 text-center">
              <h3 className="font-display font-black text-4xl uppercase text-[#F2C94C] mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                Bold Flavor
              </h3>
              <p className="font-body font-bold text-white/80 text-sm">
                Coated in natural, authentic spices that hit the spot perfectly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
