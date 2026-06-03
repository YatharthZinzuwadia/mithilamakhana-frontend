"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timeline = [
  {
    year: "~500 BC",
    title: "Ancient Roots",
    text: "Makhana cultivation begins in the wetlands of Mithila region, Bihar. Ancient Ayurvedic texts reference lotus seeds as a sacred, healing food.",
    color: "#E8B430",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
  {
    year: "1400s",
    title: "Royal Pantries",
    text: "Makhana becomes a prized ingredient in the royal kitchens of Mithila kingdom. Offered in temple prasad and grand feasts.",
    color: "#6FCF97",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    year: "2000s",
    title: "The Export Surge",
    text: "India becomes the world's largest producer of Makhana, accounting for 90%+ of global production, yet it remains largely unknown to the modern consumer.",
    color: "#D93838",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef4564?w=800&q=80",
  },
  {
    year: "Today",
    title: "Mithila Mantra Makhanas is Born",
    text: "We take this 2500-year-old superfood and make it the snack the world deserves to know. From Darbhanga, Bihar — to every pantry, as Mithila Mantra Makhanas.",
    color: "#F2C94C",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  },
];

const values = [
  { icon: "🤝", title: "Community First", text: "We partner directly with the Mallah community — Bihar's traditional Makhana farmers — ensuring fair wages and sustainable harvesting." },
  { icon: "🌿", title: "Zero Compromise", text: "No artificial colors. No preservatives. No hydrogenated oils. If it's in our bag, it belongs there." },
  { icon: "🔬", title: "Science Meets Tradition", text: "Ancient food, modern nutrition science. We validate every health claim with real data so you can snack with confidence." },
  { icon: "♻️", title: "Sustainable Packaging", text: "Our packaging journey is ongoing. We're committed to reducing our environmental footprint with every new batch." },
];

export default function OurStoryPageContent() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-hero", {
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".timeline-item", {
        x: (i) => (i % 2 === 0 ? -80 : 80),
        opacity: 0,
        stagger: 0.25,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 65%",
        },
      });

      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        rotation: () => Math.random() * 8 - 4,
        stagger: 0.12,
        duration: 0.7,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 70%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="w-full min-h-screen bg-brand-white pb-40 md:pb-32">
      {/* Hero */}
      <section className="relative py-16 pt-28 md:pt-36 text-center px-4 sm:px-6 bg-brand-black text-white border-b-8 border-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <h1 className="story-hero relative z-10 font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[5px_5px_0_rgba(232,180,48,1)] text-white leading-tight">
          Our Story
        </h1>
        <p className="story-hero relative z-10 font-body text-base sm:text-xl md:text-2xl font-bold mt-4 sm:mt-6 max-w-2xl mx-auto text-white/80">
          A snack 2,500 years in the making.
        </p>
        <div className="story-hero relative z-10 mt-6 sm:mt-8 inline-block bg-[#F2C94C] text-brand-black px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border-4 border-white shadow-[8px_8px_0_rgba(255,255,255,0.3)] font-black text-base sm:text-xl uppercase tracking-widest transform -rotate-1">
          From Mithila to the World
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <blockquote className="font-display text-xl sm:text-2xl md:text-4xl font-black leading-tight tracking-tight text-brand-black">
          &ldquo;We didn&apos;t invent Makhana.{" "}
          <span className="text-[#D93838]">We just refused to let the world miss out on it.</span>&rdquo;
        </blockquote>
        <p className="mt-6 sm:mt-8 font-body text-base sm:text-lg font-bold text-brand-black/60">
          — Mithila Mantra Makhanas Founding Team, Darbhanga, Bihar
        </p>
      </section>

      {/* Visual Divider */}
      <div className="overflow-hidden border-y-4 border-brand-black bg-[#6FCF97] py-4">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] font-display text-xl font-black uppercase text-white">
          &nbsp;BIHAR • MITHILA • LOTUS PONDS • HAND HARVESTED • SLOW ROASTED • POND TO PACK • BIHAR • MITHILA • LOTUS PONDS • HAND HARVESTED • SLOW ROASTED • POND TO PACK •&nbsp;
        </div>
      </div>

      {/* Timeline */}
      <section className="timeline-section relative max-w-full overflow-hidden px-6 py-24 bg-[#FFF9E6]">
        {/* Madhubani-inspired Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #000 12px), repeating-linear-gradient(#000, #000)', backgroundSize: '24px 24px' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-center mb-12 sm:mb-16 text-brand-black">
            The 2,500 Year Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-brand-black hidden md:block border-x-2 border-white" />

            <div className="flex flex-col gap-16 md:gap-24">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`timeline-item flex flex-col md:flex-row gap-6 md:gap-12 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Text Content */}
                  <div className={`w-full md:w-[45%] flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div
                      className="bg-white border-4 border-brand-black rounded-3xl p-5 sm:p-8 shadow-[10px_10px_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300 w-full max-w-lg"
                      style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                    >
                      <span
                        className="font-black text-sm uppercase tracking-widest block mb-3 px-3 py-1 bg-brand-black rounded-full inline-block"
                        style={{ color: t.color }}
                      >
                        {t.year}
                      </span>
                      <h3 className="font-display font-black text-2xl uppercase mb-3 text-brand-black">{t.title}</h3>
                      <p className="font-body font-bold text-brand-black/80 text-base leading-relaxed">{t.text}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="w-10 h-10 rounded-full border-4 border-brand-black flex-shrink-0 hidden md:flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,1)] z-10"
                    style={{ backgroundColor: t.color }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Image Content */}
                  <div className="w-full md:w-[45%]">
                    <div 
                      className="w-full aspect-video md:aspect-[4/3] rounded-3xl border-4 border-brand-black overflow-hidden shadow-[10px_10px_0_rgba(0,0,0,1)] group"
                      style={{ transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)` }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={t.image} 
                        alt={t.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section bg-brand-black py-16 sm:py-24 px-4 sm:px-6 border-y-8 border-brand-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-center text-[#F2C94C] mb-8 sm:mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="value-card bg-white border-4 border-white rounded-2xl p-6 shadow-[6px_6px_0_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-transform duration-200"
              >
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-display font-black text-lg uppercase tracking-tight mb-2">{v.title}</h3>
                <p className="font-body font-bold text-brand-black/70 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Origin */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-[#E8B430] border-4 border-brand-black rounded-3xl p-10 shadow-[12px_12px_0_rgba(0,0,0,1)] transform -rotate-1">
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Where It All Happens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border-4 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <h3 className="font-black uppercase tracking-widest text-sm mb-2 text-[#D93838]">Production HQ</h3>
              <p className="font-bold text-lg">Shubhankarpur, Darbhanga<br/>Bihar – 846004, India</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <h3 className="font-black uppercase tracking-widest text-sm mb-2 text-[#27AE60]">Office</h3>
              <p className="font-bold text-lg">Amarsinh Colony, Baramati<br/>Pune, Maharashtra – 413115</p>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` }} />
    </main>
  );
}
