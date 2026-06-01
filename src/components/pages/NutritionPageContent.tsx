"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const nutrients = [
  { name: "Protein", makhana: 9.7, chips: 6.2, popcorn: 11.0, unit: "g", color: "#6FCF97" },
  { name: "Fat", makhana: 0.1, chips: 35.0, popcorn: 4.5, unit: "g", color: "#D93838", lowerIsBetter: true },
  { name: "Calories", makhana: 347, chips: 536, popcorn: 387, unit: "kcal", color: "#F2C94C", lowerIsBetter: true },
  { name: "Fiber", makhana: 14.5, chips: 3.1, popcorn: 14.5, unit: "g", color: "#27AE60" },
];

const benefits = [
  {
    icon: "💪",
    title: "High Protein",
    detail: "9.7g per 100g — more than most nuts and seeds. Keeps you fuller, longer.",
    color: "#6FCF97",
  },
  {
    icon: "🔥",
    title: "Low Calories",
    detail: "Only 347 kcal/100g vs 536 kcal for chips. Snack more, guilt less.",
    color: "#F2C94C",
  },
  {
    icon: "🌿",
    title: "Gluten Free",
    detail: "100% naturally gluten-free. Safe for celiac and gluten-sensitive diets.",
    color: "#27AE60",
  },
  {
    icon: "🐾",
    title: "Vegan",
    detail: "No animal products. No compromise on taste.",
    color: "#D93838",
  },
  {
    icon: "⚡",
    title: "Rich in Magnesium",
    detail: "Supports energy metabolism, muscle function, and better sleep.",
    color: "#6FCF97",
  },
  {
    icon: "❤️",
    title: "Heart Healthy",
    detail: "Low saturated fat content. Rich in potassium which supports healthy blood pressure.",
    color: "#D93838",
  },
  {
    icon: "🧠",
    title: "Antioxidant Rich",
    detail: "Contains kaempferol — an antioxidant linked to reduced inflammation.",
    color: "#F2C94C",
  },
  {
    icon: "🌾",
    title: "Gut Friendly",
    detail: "14.5g fiber per 100g feeds your microbiome and aids digestion.",
    color: "#27AE60",
  },
];

export default function NutritionPageContent() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".nutr-hero", {
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });

      // Animate benefit cards
      gsap.from(".benefit-card", {
        y: 60,
        rotation: () => Math.random() * 8 - 4,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 70%",
        },
      });

      // Animate progress bars
      gsap.utils.toArray<HTMLElement>(".bar-fill").forEach((bar) => {
        const width = bar.dataset.width;
        gsap.from(bar, {
          width: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full min-h-screen bg-brand-white pb-40 md:pb-32">
      {/* Hero */}
      <section className="py-20 pt-32 text-center px-6 border-b-8 border-brand-black bg-[#6FCF97]">
        <h1 className="nutr-hero font-display text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[5px_5px_0_rgba(0,0,0,1)] text-white leading-tight">
          Our Quality Promise
        </h1>
        <p className="nutr-hero font-body text-xl md:text-2xl font-bold mt-4 max-w-2xl mx-auto text-brand-black bg-white px-6 py-3 rounded-2xl border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] inline-block transform -rotate-1">
          Zero compromise on purity, taste, and your health.
        </p>
      </section>

      {/* Certifications */}
      <section className="bg-[#F2C94C] py-12 px-6 border-b-8 border-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display font-black text-3xl uppercase tracking-tighter md:w-1/3 text-center md:text-left">
            Certified Excellence
          </h2>
          <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-6">
            {["100% Organic", "Non-GMO Verified", "Gluten-Free Certified", "Vegan", "HACCP Certified"].map((cert, i) => (
              <div 
                key={cert} 
                className="bg-white px-6 py-3 border-4 border-brand-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] font-black text-sm uppercase tracking-widest hover:-translate-y-1 transition-transform"
                style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter text-center mb-3">
          Makhana vs. The Competition
        </h2>
        <p className="text-center font-bold text-base text-brand-black/70 mb-10">Per 100g serving</p>

        <div className="flex flex-col gap-8">
          {nutrients.map((n) => {
            const maxVal = Math.max(n.makhana, n.chips, n.popcorn);
            const mPct = (n.makhana / maxVal) * 100;
            const cPct = (n.chips / maxVal) * 100;
            const pPct = (n.popcorn / maxVal) * 100;

            return (
              <div key={n.name} className="bg-white border-4 border-brand-black rounded-2xl p-6 shadow-[6px_6px_0_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-black text-2xl uppercase">{n.name}</h3>
                  <span className="font-bold text-sm text-brand-black/60 uppercase tracking-widest">{n.unit}</span>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Makhana */}
                  <div className="flex items-center gap-4">
                    <span className="w-28 font-black text-sm uppercase text-right flex-shrink-0">Mithila Mantra</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 border-2 border-brand-black overflow-hidden relative">
                      <div
                        className="bar-fill h-full rounded-full flex items-center justify-end pr-3 font-black text-sm"
                        data-width={`${mPct}%`}
                        style={{ width: `${mPct}%`, backgroundColor: n.color }}
                      >
                        {n.makhana}{n.unit}
                      </div>
                    </div>
                    {n.lowerIsBetter && mPct < 50 && (
                      <span className="text-[#27AE60] font-black text-xs uppercase whitespace-nowrap">✓ Best</span>
                    )}
                    {!n.lowerIsBetter && mPct === 100 && (
                      <span className="text-[#27AE60] font-black text-xs uppercase whitespace-nowrap">✓ Best</span>
                    )}
                  </div>
                  {/* Chips */}
                  <div className="flex items-center gap-4 opacity-80">
                    <span className="w-28 font-bold text-sm uppercase text-right flex-shrink-0 text-brand-black/60">Chips</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 border-2 border-brand-black overflow-hidden">
                      <div
                        className="bar-fill h-full rounded-full flex items-center justify-end pr-3 font-bold text-sm bg-[#E8B430]"
                        data-width={`${cPct}%`}
                        style={{ width: `${cPct}%` }}
                      >
                        {n.chips}{n.unit}
                      </div>
                    </div>
                  </div>
                  {/* Popcorn */}
                  <div className="flex items-center gap-4 opacity-80">
                    <span className="w-28 font-bold text-sm uppercase text-right flex-shrink-0 text-brand-black/60">Popcorn</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-8 border-2 border-brand-black overflow-hidden">
                      <div
                        className="bar-fill h-full rounded-full flex items-center justify-end pr-3 font-bold text-sm bg-[#6FCF97]"
                        data-width={`${pPct}%`}
                        style={{ width: `${pPct}%` }}
                      >
                        {n.popcorn}{n.unit}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-10">
          8 Reasons to Switch Today
        </h2>
        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="benefit-card bg-white border-4 border-brand-black rounded-2xl p-6 shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-200"
              style={{ transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)` }}
            >
              <span className="text-4xl mb-4 block">{b.icon}</span>
              <h3
                className="font-display font-black text-lg uppercase tracking-tight mb-2"
                style={{ color: b.color }}
              >
                {b.title}
              </h3>
              <p className="font-body font-bold text-brand-black/70 text-xs leading-relaxed">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-black text-white py-20 px-6 text-center border-y-8 border-brand-black mt-12">
        <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#F2C94C] drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)] mb-6">
          Ready to make the switch?
        </h2>
        <a
          href="/flavours"
          className="inline-flex items-center gap-3 bg-[#F2C94C] text-brand-black font-black uppercase tracking-widest text-lg px-10 py-5 rounded-2xl border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200"
        >
          Shop All Flavours →
        </a>
      </section>
    </main>
  );
}
