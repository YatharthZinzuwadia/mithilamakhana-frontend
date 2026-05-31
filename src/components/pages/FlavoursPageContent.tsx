"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const flavors = [
  {
    id: "raw",
    name: "Raw Makhana",
    tagline: "Pure. Unadulterated. Original.",
    description:
      "The one that started it all. Harvested from the lotus ponds of Bihar, these are slow-roasted with zero artificial flavoring. The purest form of healthy snacking.",
    ingredients: ["Lotus Seeds (Makhana)", "Rock Salt", "Cold-pressed Oil"],
    nutrition: { protein: "9.7g", fat: "0.1g", calories: "347 kcal", fiber: "14.5g" },
    color: "#E8B430",
    bg: "bg-[#FFF9E6]",
    badge: "Best Seller",
    image: "/images/product_pouch_raw.png",
  },
  {
    id: "periperi",
    name: "Peri Peri",
    tagline: "Fiery. Bold. Addictive.",
    description:
      "An African fire meets Indian snacking. A blend of bird's eye chili, lemon zest, and smoked paprika that lights up every single seed.",
    ingredients: ["Lotus Seeds", "Bird's Eye Chili", "Smoked Paprika", "Lemon Zest", "Garlic"],
    nutrition: { protein: "9.2g", fat: "0.3g", calories: "351 kcal", fiber: "14g" },
    color: "#D93838",
    bg: "bg-[#FFF0F0]",
    badge: "Fan Favourite",
    image: "/images/product_pouch_periperi.png",
  },
  {
    id: "cheese",
    name: "Cheese",
    tagline: "Rich. Creamy. Indulgent.",
    description:
      "The indulgent one. Rich, tangy cheese flavor dusted over perfectly roasted makhana. It's the snack you'll want to hide from your friends.",
    ingredients: ["Lotus Seeds", "Cheddar Cheese Powder", "Milk Solids", "Cumin", "Rock Salt"],
    nutrition: { protein: "9.5g", fat: "0.5g", calories: "356 kcal", fiber: "13.8g" },
    color: "#F2C94C",
    bg: "bg-[#FFFBE6]",
    badge: "Kid Approved",
    image: "/images/product_pouch_cheese.png",
  },
  {
    id: "cream-onion",
    name: "Cream & Onion",
    tagline: "Tangy. Smooth. Classic.",
    description:
      "A timeless combination elevated by natural makhana. The cool sour cream balanced by sweet, caramelized onion is everything your taste buds expect and more.",
    ingredients: ["Lotus Seeds", "Dehydrated Onion", "Cream Powder", "White Pepper", "Rock Salt"],
    nutrition: { protein: "9.3g", fat: "0.4g", calories: "349 kcal", fiber: "14.1g" },
    color: "#6FCF97",
    bg: "bg-[#F0FFF6]",
    badge: "New Arrival",
    image: "/images/product_pouch_cheese.png",
  },
  {
    id: "pudina",
    name: "Pudina",
    tagline: "Refreshing. Minty. Zingy.",
    description:
      "Cool, zesty, and refreshingly light. Fresh mint leaves blended with tangy amchur and a whisper of black pepper. Your afternoon snack just got an upgrade.",
    ingredients: ["Lotus Seeds", "Dried Mint Leaves", "Amchur", "Black Pepper", "Rock Salt"],
    nutrition: { protein: "9.4g", fat: "0.2g", calories: "348 kcal", fiber: "14.3g" },
    color: "#27AE60",
    bg: "bg-[#F0FFF8]",
    badge: "Summer Pick",
    image: "/images/product_pouch_raw.png",
  },
  {
    id: "black-pepper",
    name: "Black Pepper & Salt",
    tagline: "Sophisticated. Minimal. Perfect.",
    description:
      "For the purists. Bold cracked black pepper meets fine sea salt on a perfectly roasted makhana. Sophisticated, clean, and dangerously snackable.",
    ingredients: ["Lotus Seeds", "Cracked Black Pepper", "Sea Salt", "Cold-pressed Oil"],
    nutrition: { protein: "9.6g", fat: "0.1g", calories: "346 kcal", fiber: "14.4g" },
    color: "#2D3748",
    bg: "bg-[#F7F7F7]",
    badge: "Chef's Choice",
    image: "/images/product_pouch_pepper.png",
  },
];

export default function FlavoursPageContent() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".flavor-hero-text", {
      y: 60,
      stagger: 0.15,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".flavor-card", {
      y: 80,
      rotation: () => Math.random() * 8 - 4,
      stagger: 0.1,
      duration: 0.7,
      ease: "back.out(1.5)",
      delay: 0.4,
    });
  }, []);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [active]);

  const flavor = flavors[active];

  return (
    <main className="w-full min-h-screen bg-brand-white pt-24 pb-32 md:pb-32">
      {/* Page Hero */}
      <section className="py-16 text-center px-6 border-b-8 border-brand-black bg-[#F2C94C]">
        <h1 className="flavor-hero-text font-display text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-[5px_5px_0_rgba(0,0,0,1)] text-brand-black leading-tight">
          Our Flavours
        </h1>
        <p className="flavor-hero-text font-body text-lg md:text-xl font-bold mt-4 max-w-xl mx-auto text-brand-black/80">
          6 varieties. Infinite reasons to snack.
        </p>
      </section>

      {/* Flavor Selector Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {flavors.map((f, i) => (
            <div key={f.id} className="flavor-card">
              <button
                onClick={() => setActive(i)}
                className={`w-full h-full relative flex flex-col items-center gap-3 p-4 rounded-2xl border-4 transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] -translate-y-2 scale-105 z-10"
                    : "border-transparent hover:border-brand-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1"
                }`}
                style={{ backgroundColor: active === i ? f.color : "#fff" }}
              >
                {/* Badge */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-black text-white text-[10px] font-black uppercase px-3 py-1 rounded-full whitespace-nowrap z-20">
                  {f.badge}
                </span>

                <div className="relative w-16 h-20 mt-2">
                  <Image src={f.image} alt={f.name} fill className="object-contain drop-shadow-lg" />
                </div>
                <span
                  className={`font-display font-black text-xs uppercase text-center leading-tight mt-auto ${
                    active === i ? "text-white drop-shadow" : "text-brand-black"
                  }`}
                >
                  {f.name}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Active Flavor Detail */}
        <div
          ref={detailRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Big Pouch */}
          <div
            className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl border-4 border-brand-black shadow-[16px_16px_0_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: flavor.color + "30" }}
          >
            <div
              className="absolute inset-0 opacity-50 rounded-3xl"
              style={{ backgroundColor: flavor.color }}
            />
            <div className="relative w-3/4 h-3/4 z-10">
              <Image
                src={flavor.image}
                alt={flavor.name}
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <span
                className="inline-block font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-brand-black mb-4"
                style={{ backgroundColor: flavor.color }}
              >
                {flavor.badge}
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tighter">
                {flavor.name}
              </h2>
              <p
                className="font-body text-xl font-bold mt-2"
                style={{ color: flavor.color !== "#E8B430" && flavor.color !== "#F2C94C" ? flavor.color : "#666" }}
              >
                {flavor.tagline}
              </p>
            </div>

            <div className="bg-white border-4 border-brand-black rounded-2xl p-6 shadow-[6px_6px_0_rgba(0,0,0,1)]">
              <p className="font-body text-base md:text-lg font-bold text-brand-black/80 leading-relaxed">
                {flavor.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-brand-black text-white rounded-2xl p-6 border-4 border-brand-black">
              <h3 className="font-display font-black uppercase tracking-widest text-sm mb-3 text-[#F2C94C]">
                Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {flavor.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-sm font-bold px-3 py-1 rounded-full border-2 border-white/30"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition Highlights */}
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(flavor.nutrition).map(([key, val]) => (
                <div
                  key={key}
                  className="bg-white border-4 border-brand-black rounded-xl p-3 text-center shadow-[4px_4px_0_rgba(0,0,0,1)]"
                >
                  <div className="font-display font-black text-xl" style={{ color: flavor.color }}>
                    {val}
                  </div>
                  <div className="font-bold uppercase text-xs text-brand-black/60 mt-1">{key}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:sales@mithilamantra.com?subject=Bulk Order Enquiry"
              className="inline-flex items-center justify-center gap-3 bg-brand-black text-white font-black uppercase tracking-widest text-lg px-8 py-4 rounded-2xl border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200"
            >
              Order This Flavour →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <div className="overflow-hidden border-y-4 border-brand-black bg-[#D93838] py-4">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display text-xl font-black uppercase text-white">
          &nbsp;MAKHANA • GUILT-FREE • HIGH PROTEIN • GLUTEN FREE • VEGAN • ROASTED NOT FRIED • LOW CALORIE • MAKHANA • GUILT-FREE • HIGH PROTEIN • GLUTEN FREE • VEGAN • ROASTED NOT FRIED • LOW CALORIE •&nbsp;
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` }} />
    </main>
  );
}
