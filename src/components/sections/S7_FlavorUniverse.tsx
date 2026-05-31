"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { clsx } from "clsx";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flavors = [
  { id: "raw", name: "Raw Makhana", color: "#E8B430", description: "Unadulterated pure crunch. Exactly as harvested from the ponds.", image: "/images/product_pouch_raw.png" },
  { id: "periperi", name: "Peri Peri", color: "#D93838", description: "A fiery blend of African bird's eye chili and select spices.", image: "/images/product_pouch_periperi.png" },
  { id: "cheese", name: "Cheese", color: "#F2C94C", description: "Rich, creamy, and indulgent. The classic comfort flavor.", image: "/images/product_pouch_cheese.png" },
  { id: "cream_onion", name: "Cream & Onion", color: "#6FCF97", description: "The perfect balance of smooth sour cream and zesty onion.", image: "/images/product_pouch_cheese.png" }, 
  { id: "pudina", name: "Pudina", color: "#27AE60", description: "Refreshing mint leaves blended with tangy Indian spices.", image: "/images/product_pouch_raw.png" }, 
  { id: "pepper", name: "Black Pepper & Salt", color: "#2D3748", description: "The sophisticated minimalist. Cracked pepper and sea salt.", image: "/images/product_pouch_pepper.png" }
];

export default function S7_FlavorUniverse() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        }
      });
      
      tl.to(track, {
        xPercent: -100 + (100 / flavors.length),
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-brand-white text-brand-black overflow-hidden border-b-8 border-brand-black flex flex-col"
    >
      {/* Moved Marquee from Hero to here */}
      <div className="absolute top-0 left-0 w-full bg-[#D93838] text-white py-3 z-20 overflow-hidden border-b-4 border-brand-black shadow-xl">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite_reverse] font-body text-lg font-bold uppercase tracking-widest">
          &nbsp;GUILT-FREE SNACKING • RICH IN PROTEIN • GLUTEN FREE • VEGAN • LOW FAT • GUILT-FREE SNACKING • RICH IN PROTEIN • GLUTEN FREE • VEGAN • LOW FAT •
        </div>
      </div>

      <div className="pt-26 md:pt-34 px-6 md:px-10 z-10 flex-shrink-0">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-brand-black">
          Flavor Universe
        </h2>
      </div>

      <div 
        ref={trackRef}
        className="flex-1 flex w-[600vw] items-center"
      >
        {flavors.map((flavor, i) => (
          <div 
            key={flavor.id}
            className="w-[100vw] h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 md:px-12 pb-20 md:pb-0"
          >
            {/* Funky Pouch Container */}
            <div className="relative w-full max-w-[280px] md:max-w-sm h-[40vh] md:h-[60vh] bg-white border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] flex justify-center items-center transform transition-transform hover:scale-105 hover:-rotate-2 flex-shrink-0">
              {/* Colored abstract background blob */}
              <div 
                className="absolute inset-0 m-4 rounded-full blur-[30px] opacity-40"
                style={{ backgroundColor: flavor.color }}
              />
              <div className="relative w-[90%] h-[90%]">
                <Image 
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            <div className="w-full max-w-md text-center md:text-left bg-white p-6 md:p-8 rounded-3xl border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] transform rotate-1">
              <h3 
                className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 md:mb-4 leading-none"
                style={{ color: flavor.color !== "#2D3748" ? flavor.color : "#000" }}
              >
                {flavor.name}
              </h3>
              <p className="font-body text-base md:text-xl font-bold text-brand-black/80">
                {flavor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-10 z-10 flex gap-2">
        <div className="w-12 h-12 rounded-full border-4 border-brand-black bg-brand-gold flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)] animate-bounce">
          <span className="font-black text-xl">→</span>
        </div>
        <span className="font-bold uppercase tracking-widest text-sm self-center bg-white px-4 py-2 border-2 border-brand-black rounded-full">Scroll</span>
      </div>
    </section>
  );
}
