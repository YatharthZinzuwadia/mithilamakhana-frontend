"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  { id: 1, title: "Harvest", icon: "🌸", desc: "Hand-picked from lotus ponds by local farmers." },
  { id: 2, title: "Sun-Dry", icon: "☀️", desc: "Dried naturally on traditional bamboo mats." },
  { id: 3, title: "Pop", icon: "🔥", desc: "Air-popped to perfection. Never fried." },
  { id: 4, title: "Season", icon: "🌶️", desc: "Coated with bold, authentic natural spices." },
  { id: 5, title: "Pack", icon: "📦", desc: "Sealed fresh to lock in the ultimate crunch." }
];

export default function S8_MakhanaConstellation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        rotation: () => Math.random() * 10 - 5,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
      
      gsap.from(".process-connector", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.15,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out"
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
        <div className="inline-block bg-[#F2C94C] text-brand-black px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-6 border-2 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,1)] transform -rotate-2">
          Our Process
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-[5px_5px_0_rgba(0,0,0,1)] mb-16 text-white leading-tight">
          From Pond to Pouch
        </h2>

        {/* Desktop Process Flow */}
        <div className="hidden lg:flex items-start w-full relative mt-20">
          {processSteps.map((step, index) => (
            <div key={step.id} className={index < processSteps.length - 1 ? "flex-1 flex items-start" : "flex items-start"}>
              <div className="relative flex flex-col items-center w-48 z-10 flex-shrink-0">
                <div className="process-step w-24 h-24 bg-white text-brand-black rounded-full border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] flex items-center justify-center text-4xl mb-6 transform hover:scale-110 transition-transform cursor-default">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D93838] text-white rounded-full border-2 border-brand-black flex items-center justify-center font-black text-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="process-step font-display font-black text-xl uppercase mb-2 text-[#F2C94C]">{step.title}</h3>
                <p className="process-step font-body text-sm font-bold text-gray-300 px-2">{step.desc}</p>
              </div>

              {/* Connector line filling the gap */}
              {index < processSteps.length - 1 && (
                <div className="flex-1 h-2 bg-brand-white border-y-2 border-brand-black mt-12 process-connector -ml-16 -mr-16 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Process Flow (Vertical) */}
        <div className="lg:hidden flex flex-col items-center gap-8 mt-10">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-step relative flex flex-col items-center text-center bg-white/10 p-6 rounded-3xl border-2 border-white/20 w-full max-w-sm">
              <div className="w-20 h-20 bg-white text-brand-black rounded-full border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] flex items-center justify-center text-3xl mb-4 transform -rotate-3">
                {step.icon}
              </div>
              <h3 className="font-display font-black text-2xl uppercase mb-2 text-[#F2C94C]">
                <span className="text-white opacity-50 mr-2">{step.id}.</span>{step.title}
              </h3>
              <p className="font-body text-sm font-bold text-gray-300">{step.desc}</p>
              
              {index < processSteps.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-8 bg-brand-white/30" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
