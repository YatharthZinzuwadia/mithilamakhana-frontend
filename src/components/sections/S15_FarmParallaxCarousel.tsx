"use client";

import { useRef } from "react";
import Image from "next/image";

// High-quality Unsplash placeholders - replace src values with actual client farm photos
// by dropping them into /public/images/ and updating the src paths below.
const PARALLAX_CARDS = [
  {
    src: "/images/makhana_lotus_pond.png",
    alt: "Lotus pond at dawn – Mithila Mantra farm",
    label: "Bihar Lotus Ponds",
  },
  {
    src: "/images/makhana_harvest.png",
    alt: "Makhana harvest season in Mithila",
    label: "Harvest Season",
  },
  {
    src: "/images/makhana_raw_seeds.png",
    alt: "Green farmland in Bihar",
    label: "Fertile Mithila Soil",
  },
  {
    src: "/images/makhana_roasting.png",
    alt: "Sunrise over Mithila paddy fields",
    label: "Sunrise on the Farm",
  },
  {
    src: "/images/makhana_snacking.png",
    alt: "Fresh produce ready for roasting",
    label: "Fresh Harvest",
  }
];

// We double the list so the seamless loop never shows a gap
const doubled = [...PARALLAX_CARDS, ...PARALLAX_CARDS];

export default function S15_FarmParallaxCarousel() {
  return (
    <section 
      className="relative w-full bg-brand-black border-b-8 border-brand-black overflow-hidden py-16 md:py-20 pb-28 md:pb-20"
    >
      {/* Header badge – always readable against the dark background */}
      <div className="relative z-10 px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end gap-4">
        <div className="bg-[#F2C94C] border-4 border-brand-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] px-6 py-4 inline-block transform -rotate-1">
          <p className="font-body font-bold text-xs uppercase tracking-widest text-brand-black mb-1">
            Straight from the Source
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-black leading-none">
            Directly From<br />Our Farms
          </h2>
        </div>
        <p className="font-body font-bold text-white/70 text-sm md:text-base max-w-xs leading-snug">
          The lotus ponds of Bihar, where every Makhana begins its journey.
        </p>
      </div>

      {/* ── Autoscrolling strip ─────────────────────────────────── */}
      {/* Pure CSS infinite marquee – no GSAP dependency, no flicker */}
      <div
        className="flex w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="pr-6">
            <div className="relative flex-shrink-0 w-[75vw] md:w-[40vw] lg:w-[30vw] h-[52vw] md:h-[27vw] lg:h-[20vw] rounded-3xl overflow-hidden border-4 border-white/20 shadow-[8px_8px_0_rgba(255,255,255,0.1)] group">
              {/* Image fills the card */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />

              {/* Dark gradient overlay so the label is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Label chip at bottom-left */}
              <span className="absolute bottom-4 left-4 bg-[#F2C94C] text-brand-black font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full border-2 border-brand-black">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
