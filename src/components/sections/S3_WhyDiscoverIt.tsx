"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function S3_WhyDiscoverIt() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.from(".s3-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0.8,
        opacity: 0,
        rotation: 5,
        duration: 0.8,
        ease: "back.out(1.5)",
        stagger: 0.2
      });

      // Auto-pulse animation for images
      gsap.to(".s3-blob", {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
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
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply pointer-events-none"
        src="https://assets.mixkit.co/videos/preview/mixkit-waffle-with-syrup-and-strawberries-in-macro-shot-43750-large.mp4" 
      />

      {/* ── Auto-pulsing image blobs ──────────────────────────────── */}
      
      {/* Top-left blob */}
      <div className="s3-blob absolute top-16 left-6 md:top-24 md:left-16 z-20 cursor-default">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-[8px_8px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80"
            alt="Lotus pond – Mithila farm"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
          Our Ponds
        </span>
      </div>

      {/* Bottom-right blob */}
      <div className="s3-blob absolute bottom-24 right-6 md:bottom-28 md:right-16 z-20 cursor-default">
        <div className="w-44 h-44 md:w-60 md:h-60 rounded-3xl overflow-hidden border-4 border-[#F2C94C] shadow-[8px_8px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef4564?w=600&q=80"
            alt="Makhana harvest"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F2C94C] text-brand-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
          The Harvest
        </span>
      </div>

      {/* Top-right blob (desktop only) */}
      <div className="s3-blob absolute top-12 right-8 md:top-20 md:right-32 z-20 cursor-default hidden md:block">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-3xl overflow-hidden border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80"
            alt="Roasting process"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-black text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-white shadow-[2px_2px_0_rgba(255,255,255,1)]">
          Roasted Right
        </span>
      </div>
      {/* ─────────────────────────────────────────────────────── */}

      <div className="relative z-10 text-center px-6 max-w-5xl mt-12 md:mt-0">
        <h2 className="s3-text font-display text-5xl md:text-7xl font-black text-brand-gold uppercase tracking-tighter drop-shadow-[6px_6px_0_rgba(0,0,0,1)] leading-none mb-10">
          WHY ARE YOU JUST DISCOVERING THIS?
        </h2>
        
        <div className="s3-text inline-block bg-white text-brand-black font-body text-xl md:text-2xl font-bold p-6 md:p-8 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] rotate-[-2deg] max-w-3xl space-y-4">
          <p>
            Makhana has been harvested in Mithila since ancient times, referenced in Ayurvedic scriptures as a wonder food.
          </p>
          <p>
            Hand-harvested from lotus ponds in Darbhanga, Bihar. Each puff is air-popped, never fried.
          </p>
          <div className="text-[#D93838] uppercase tracking-widest text-lg md:text-xl font-black pt-2">
            The secret is out.
          </div>
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
