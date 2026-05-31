"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function S3_WhyDiscoverIt() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".s3-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0.8,
        opacity: 0,
        rotation: 5,
        duration: 0.8,
        ease: "back.out(1.5)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center bg-[#D93838] overflow-hidden border-b-8 border-brand-black">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
        src="https://assets.mixkit.co/videos/preview/mixkit-waffle-with-syrup-and-strawberries-in-macro-shot-43750-large.mp4" 
      />

      {/* ── Floating image blobs ──────────────────────────────── */}
      {/* Starts as a small circle; expands on hover to reveal the farm photo */}
      {/* Swap the Unsplash URLs with /images/your-client-farm-photo.jpg when ready */}

      {/* Top-left blob */}
      <div className="absolute top-16 left-6 md:top-24 md:left-16 z-20 group cursor-pointer">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-[6px_6px_0_rgba(0,0,0,0.5)]
                        transition-all duration-500 ease-out
                        group-hover:w-52 group-hover:h-52 md:group-hover:w-72 md:group-hover:h-72 group-hover:rounded-3xl group-hover:shadow-[12px_12px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80"
            alt="Lotus pond – Mithila farm"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-black text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-brand-black">
          Our Ponds
        </span>
      </div>

      {/* Bottom-right blob */}
      <div className="absolute bottom-24 right-6 md:bottom-28 md:right-16 z-20 group cursor-pointer">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-[#F2C94C] shadow-[6px_6px_0_rgba(0,0,0,0.5)]
                        transition-all duration-500 ease-out
                        group-hover:w-52 group-hover:h-52 md:group-hover:w-64 md:group-hover:h-64 group-hover:rounded-3xl group-hover:shadow-[12px_12px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef4564?w=600&q=80"
            alt="Makhana harvest"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F2C94C] text-brand-black text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-brand-black">
          The Harvest
        </span>
      </div>

      {/* Top-right blob (desktop only – avoids clutter on mobile) */}
      <div className="absolute top-12 right-8 md:top-20 md:right-32 z-20 group cursor-pointer hidden md:block">
        <div className="w-10 h-10 rounded-full overflow-hidden border-4 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,0.5)]
                        transition-all duration-500 ease-out
                        group-hover:w-48 group-hover:h-48 group-hover:rounded-3xl group-hover:shadow-[10px_10px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80"
            alt="Roasting process"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Roasted Right
        </span>
      </div>
      {/* ─────────────────────────────────────────────────────── */}

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="s3-text font-display text-5xl md:text-7xl font-black text-brand-gold uppercase tracking-tighter drop-shadow-[6px_6px_0_rgba(0,0,0,1)] leading-none mb-10">
          WHY ARE YOU JUST DISCOVERING THIS?
        </h2>
        
        <div className="s3-text inline-block bg-white text-brand-black font-body text-xl md:text-2xl font-bold p-6 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] rotate-[-2deg] max-w-2xl">
          Because for centuries, it was the best kept secret of the Mithila region. 
          <br/><br/>
          <span className="text-[#D93838] uppercase tracking-widest text-base">The secret is out.</span>
        </div>
      </div>
      
      {/* Marquee Divider */}
      <div className="absolute bottom-10 left-0 w-full bg-brand-black text-brand-gold py-2 border-y-4 border-white transform rotate-3 scale-110 shadow-2xl">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] font-display text-3xl font-black uppercase">
          &nbsp;MITHILA MAKHANA • MITHILA MAKHANA • MITHILA MAKHANA • MITHILA MAKHANA • MITHILA MAKHANA • 
        </div>
      </div>
    </section>
  );
}
