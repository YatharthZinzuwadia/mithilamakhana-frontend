"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flavors = [
  { id: "raw", name: "Raw Makhana", color: "#E8B430", image: "/images/product_pouch_raw.png" },
  { id: "periperi", name: "Peri Peri", color: "#D93838", image: "/images/product_pouch_periperi.png" },
  { id: "cheese", name: "Cheese", color: "#F2C94C", image: "/images/product_pouch_cheese.png" },
  { id: "cream_onion", name: "Cream & Onion", color: "#6FCF97", image: "/images/product_pouch_cheese.png" },
  { id: "pudina", name: "Pudina", color: "#27AE60", image: "/images/product_pouch_raw.png" },
  { id: "pepper", name: "Black Pepper & Salt", color: "#2D3748", image: "/images/product_pouch_pepper.png" }
];

export default function S8_MakhanaConstellation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s8-pouch", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        rotation: () => Math.random() * 20 - 10,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-32 bg-[#2D3748] text-white overflow-hidden border-b-8 border-brand-black"
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-[5px_5px_0_rgba(0,0,0,1)] mb-4 text-[#F2C94C] transform rotate-1 leading-tight">
          Pick Your Crunch
        </h2>
        <p className="font-body text-base md:text-lg font-bold mb-12 max-w-xl mx-auto bg-brand-black p-4 rounded-xl border-2 border-[#F2C94C]">
          Whether you're craving spicy, cheesy, or the classic raw snap, we've got a flavor for every mood.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-10">
          {flavors.map((flavor, index) => (
            <div 
              key={flavor.id}
              className={`s8-pouch relative w-full aspect-[3/4] bg-white border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] hover:scale-105 transition-transform cursor-pointer group flex items-center justify-center`}
              style={{ transform: `rotate(${index % 2 === 0 ? 3 : -3}deg)` }}
            >
              {/* Color glow */}
              <div 
                className="absolute inset-0 m-6 rounded-full blur-[30px] opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: flavor.color }}
              />
              <div className="relative w-3/4 h-3/4">
                <Image 
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
              
              {/* Funky label */}
              <div className="absolute -bottom-6 bg-brand-black text-white px-4 py-2 rounded-full border-4 border-brand-black shadow-[4px_4px_0_#F2C94C] group-hover:-translate-y-2 transition-transform">
                <span className="font-display font-black uppercase text-sm">{flavor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
