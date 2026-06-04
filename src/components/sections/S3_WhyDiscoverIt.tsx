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
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#D93838] overflow-hidden border-b-8 border-brand-black"
    >
      {/* Image Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/makhana_snacking.png"
        alt="Makhana snacking background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none"
      />

      {/* ── Auto-pulsing image blobs ──────────────────────────────── */}

      {/* Top-left blob — hidden on mobile to prevent overlap */}
      <div className="s3-blob absolute top-16 left-6 md:top-24 md:left-16 z-20 cursor-default hidden md:block">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-[8px_8px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/makhana_lotus_pond.png"
            alt="Lotus pond – Mithila farm"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-brand-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
          Our Ponds
        </span>
      </div>

      {/* Bottom-right blob — hidden on mobile to prevent overlap */}
      <div className="s3-blob absolute bottom-24 right-6 md:bottom-28 md:right-16 z-20 cursor-default hidden md:block">
        <div className="w-44 h-44 md:w-60 md:h-60 rounded-3xl overflow-hidden border-4 border-[#F2C94C] shadow-[8px_8px_0_rgba(0,0,0,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/makhana_harvest.png"
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
            src="/images/makhana_roasting.png"
            alt="Roasting process"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-black text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-white shadow-[2px_2px_0_rgba(255,255,255,1)]">
          Roasted Right
        </span>
      </div>
      {/* ─────────────────────────────────────────────────────── */}

      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mt-8 md:mt-0">
        <h2 className="s3-text font-display text-3xl sm:text-5xl md:text-7xl font-black text-brand-gold uppercase tracking-tighter drop-shadow-[6px_6px_0_rgba(0,0,0,1)] leading-none mb-8 break-words">
          WHY ARE YOU JUST DISCOVERING THIS?
        </h2>

        <div className="s3-text inline-block bg-white text-brand-black font-body text-base sm:text-xl md:text-2xl font-bold p-4 sm:p-6 md:p-8 rounded-3xl border-4 border-brand-black shadow-[10px_10px_0_rgba(0,0,0,1)] rotate-[-2deg] w-full max-w-3xl space-y-4">
          <p>
            Makhana has been harvested in Mithila since ancient times,
            referenced in Ayurvedic scriptures as a wonder food.
          </p>
          <p>
            Hand-harvested from lotus ponds in Darbhanga, Bihar. Each puff is
            air-popped, never fried.
          </p>
          <div className="text-[#D93838] uppercase tracking-widest text-base sm:text-lg md:text-xl font-black pt-2">
            The secret is out.
          </div>
        </div>
      </div>

      {/* Marquee Divider */}
      <div className="absolute bottom-10 left-0 w-full bg-brand-black text-brand-gold py-2 border-y-4 border-white transform rotate-3 scale-110 shadow-2xl">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] font-display text-3xl font-black uppercase">
          &nbsp;MITHILA MANTRA • MITHILA MANTRA • MITHILA MANTRA • MITHILA
          MAKHANA • MITHILA MANTRA •
        </div>
      </div>
    </section>
  );
}
