"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FLAVORS = [
  { id: 1, name: "Peri Peri", color: "#D93838", heat: "Hot", bgImage: "/images/makhana_snacking.png", productImg: "/products/peri-peri-flavour-no-bg.png" },
  { id: 2, name: "Cheese", color: "#F2C94C", heat: "Mild", bgImage: "/images/makhana_snacking.png", productImg: "/products/cheese-flavour-no-bg.jpg" },
  { id: 3, name: "Cream & Onion", color: "#6FCF97", heat: "Mild", bgImage: "/images/makhana_snacking.png", productImg: "/products/cream-and-onion-flavour-no-bg.png" },
  { id: 4, name: "Pudina", color: "#27AE60", heat: "Mild", bgImage: "/images/makhana_snacking.png", productImg: "/products/pudina-flavour-no-bg.png" },
  { id: 5, name: "Magic Masala", color: "#C67C3B", heat: "Medium", bgImage: "/images/makhana_snacking.png", productImg: "/products/magic-masala-flavour-no-bg.png" }
];

export default function S7_FlavorUniverse() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop/tablet for horizontal scroll
    let ctx: gsap.Context;
    
    // We check for window width to prevent horizontal scroll issues on mobile
    if (window.innerWidth > 768) {
      ctx = gsap.context(() => {
        const sections = gsap.utils.toArray(".flavor-panel");
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + scrollContainerRef.current?.offsetWidth
          }
        });
      }, sectionRef);
    } else {
      // Mobile vertical reveal
      ctx = gsap.context(() => {
        gsap.from(".flavor-panel", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8
        });
      }, sectionRef);
    }

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-brand-black w-full md:h-screen md:min-h-[600px] flex flex-col md:overflow-hidden border-y-8 border-brand-black"
    >
      <div className="md:absolute top-8 left-8 z-20 p-6 md:p-0">
        <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(217,56,56,1)] leading-none">
          Flavor<br/>Universe
        </h2>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row md:w-[600vw] h-full"
      >
        {FLAVORS.map((flavor) => (
          <div 
            key={flavor.id} 
            className="flavor-panel relative w-full md:w-screen h-[70vh] md:h-screen md:min-h-[600px] flex-shrink-0 flex items-center justify-center p-8 group border-b-4 md:border-b-0 md:border-r-8 border-brand-black"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={flavor.bgImage} 
                alt={`${flavor.name} background`}
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-60" style={{ backgroundColor: flavor.color }} />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl">
              {/* Product Pouch */}
              <div className="relative w-48 h-64 md:w-64 md:h-80 mb-6 drop-shadow-[15px_15px_0_rgba(0,0,0,0.5)] transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500">
                <Image 
                  src={flavor.productImg} 
                  alt={flavor.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Badges */}
              <div className="flex gap-3 mb-6 transform -rotate-2">
                <span className="bg-brand-black text-white px-4 py-2 rounded-full font-black uppercase tracking-widest text-sm border-2 border-white shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  {flavor.heat} Heat
                </span>
                <span className="bg-white text-brand-black px-4 py-2 rounded-full font-black uppercase tracking-widest text-sm border-2 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  100% Natural
                </span>
              </div>
              
              <h3 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-10 mb-6 leading-none group-hover:scale-105 transition-transform">
                {flavor.name}
              </h3>
              
              <button className="bg-white text-brand-black px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(0,0,0,1)] transition-all">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
