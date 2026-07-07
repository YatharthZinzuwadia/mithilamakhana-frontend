"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx } from "clsx";

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
    heat: "Mild",
    image: "/products/makhana-in-a-bowl-photo-no-bg.png",
  },
  {
    id: "periperi",
    name: "Peri Peri",
    tagline: "Fiery. Bold. Addictive.",
    description:
      "Higher Fat Content Due To Oil/ghee Used In Seasoning. Rich In Fiber & Protein, Making It A Healthy Snack Option. Increased Sodium Levels Due To Peri Peri Seasoning. Spicy & Tangy Taste From Chili, Paprika, And Other Spices.",
    ingredients: ["Makhana (Fox Nuts)", "Edible Oil", "Chili Powder", "Paprika", "Garlic Powder", "Salt", "Lemon Powder"],
    nutrition: { protein: "9.2g", fat: "0.3g", calories: "351 kcal", fiber: "14g" },
    color: "#D93838",
    bg: "bg-[#FFF0F0]",
    badge: "Fan Favourite",
    heat: "Spicy",
    image: "/products/peri-peri-flavour-no-bg.png",
  },
  {
    id: "cheese",
    name: "Cheese",
    tagline: "Rich. Creamy. Indulgent.",
    description:
      "Higher Fat & Calorie Content Due To Cheese And Oil/ghee. Good Protein Source From Cheese And Makhana. Rich In Calcium For Bone Health. Increased Sodium Due To Cheese Seasoning. Mildly Sweet & Savory Balance Due To Added Sugar.",
    ingredients: ["Makhana (Fox Nuts)", "Edible Oil", "Cheese Powder", "Dehydrated Onion Powder", "Dehydrated Garlic Powder", "Salt"],
    nutrition: { protein: "9.5g", fat: "0.5g", calories: "356 kcal", fiber: "13.8g" },
    color: "#F2994A",
    bg: "bg-[#FFFBE6]",
    badge: "Kid Approved",
    heat: "Mild",
    image: "/products/cheese-flavour-no-bg.jpg",
  },
  {
    id: "cream-onion",
    name: "Cream & Onion",
    tagline: "Tangy. Smooth. Classic.",
    description:
      "Higher Fat & Calorie Content Due To Cream-Based Seasoning. Good Protein & Fiber Source For A Healthy Snack. Increased Sodium Levels Due To Seasoning. Rich, Savory Flavor With A Crunchy Texture.",
    ingredients: ["Makhana (Fox Nuts)", "Edible Oil", "Dehydrated Onion Powder", "Dehydrated Garlic Powder", "Salt", "Cream Flavoring"],
    nutrition: { protein: "9.3g", fat: "0.4g", calories: "349 kcal", fiber: "14.1g" },
    color: "#6FCF97",
    bg: "bg-[#F0FFF6]",
    badge: "New Arrival",
    heat: "Mild",
    image: "/products/cream-and-onion-flavour-no-bg.png",
  },
  {
    id: "pudina",
    name: "Pudina",
    tagline: "Refreshing. Minty. Zingy.",
    description:
      "Higher Energy & Fat Content Due To Seasoning And Light Roasting With Oil/ghee. Good Protein Source For A Healthy Snack. Sodium Content Is Increased Due To Salt. Rich In Fiber & Antioxidants From Black Pepper.",
    ingredients: ["Makhana (Fox Nuts)", "Edible Oil", "Pudina (Mint) Powder", "Salt", "Black Salt", "Cumin Powder", "Dry Mango Powder (Amchur)", "Natural Herbs & Spices"],
    nutrition: { protein: "9.4g", fat: "0.2g", calories: "348 kcal", fiber: "14.3g" },
    color: "#27AE60",
    bg: "bg-[#F0FFF8]",
    badge: "Summer Pick",
    heat: "Mild",
    image: "/products/pudina-flavour-no-bg.png",
  },
  {
    id: "magic-masala",
    name: "Magic Masala",
    tagline: "Spicy. Tangy. Magical.",
    description:
      "Higher Fat Content Due To Oil/ghee Used In Seasoning. Rich In Fiber & Protein, Making It A Healthy Snack Option. Increased Sodium Levels Due To Seasoning. Spicy & Tangy Taste From Chili, Paprika, And Other Spices.",
    ingredients: ["Makhana (Fox Nuts)", "Coriander", "Turmeric", "Aniseed (Saunf)", "Black Pepper", "Fenugreek", "Ginger", "Clove", "Green Cardamom", "Nutmeg"],
    nutrition: { protein: "9.6g", fat: "0.1g", calories: "346 kcal", fiber: "14.4g" },
    color: "#C67C3B",
    bg: "bg-[#FFF4E6]",
    badge: "Chef's Choice",
    heat: "Medium",
    image: "/products/magic-masala-flavour-no-bg.png",
  },
];

type FilterType = "All" | "Mild" | "Medium" | "Spicy";

export default function FlavoursPageContent() {
  const [activeId, setActiveId] = useState(flavors[0].id);
  const [filter, setFilter] = useState<FilterType>("All");
  const detailRef = useRef<HTMLDivElement>(null);

  // Filter logic
  const filteredFlavors = flavors.filter(f => filter === "All" || f.heat === filter);

  // Reset active flavor if current active is filtered out
  useEffect(() => {
    if (!filteredFlavors.find(f => f.id === activeId)) {
      setActiveId(filteredFlavors[0]?.id || flavors[0].id);
    }
  }, [filter, filteredFlavors, activeId]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".flavor-filter", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(".flavor-card", 
        { scale: 0.8, y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".flavor-grid",
            start: "top 95%",
          },
          scale: 1,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.5)",
        }
      );
    });

    return () => ctx.revert();
  }, [filter]);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" }
      );
    }
  }, [activeId]);

  const activeFlavor = flavors.find(f => f.id === activeId) || flavors[0];

  return (
    <main className="w-full min-h-screen bg-brand-white pt-36 md:pt-48 pb-40">
      
      {/* ── Filter Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-black text-center">
          Pick Your Crunch
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 bg-white p-1.5 sm:p-2 rounded-full border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)]">
          {(["All", "Mild", "Medium", "Spicy"] as FilterType[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                "flavor-filter px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-black uppercase text-xs tracking-widest transition-all",
                filter === f 
                  ? "bg-brand-black text-white" 
                  : "bg-transparent text-brand-black hover:bg-gray-100"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Active Flavor Full-Hero Section ── */}
      <section 
        ref={detailRef}
        className="max-w-7xl mx-auto px-6 mb-24"
      >
        <div 
          className="relative w-full rounded-[2rem] border-8 border-brand-black shadow-[16px_16px_0_rgba(0,0,0,1)] overflow-hidden flex flex-col lg:flex-row min-h-[70vh]"
          style={{ backgroundColor: activeFlavor.color }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

          {/* Left: Product Image & Badges */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-10 lg:border-r-8 lg:border-brand-black bg-white/10 backdrop-blur-sm">
            <span className="bg-brand-black text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-black uppercase tracking-widest text-xs sm:text-sm border-2 border-white shadow-[4px_4px_0_rgba(0,0,0,1)] mb-4 sm:mb-8 transform -rotate-2">
              {activeFlavor.heat} Heat
            </span>
            
            <div className="relative w-44 h-56 sm:w-64 sm:h-80 md:w-80 md:h-[400px] hover:scale-105 hover:rotate-3 transition-transform duration-500 z-10 drop-shadow-[20px_20px_0_rgba(0,0,0,0.4)]">
              <Image
                src={activeFlavor.image}
                alt={activeFlavor.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="w-full lg:w-1/2 bg-white p-5 sm:p-8 md:p-12 flex flex-col justify-center">
            <span 
              className="inline-block self-start font-black text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-brand-black mb-3 sm:mb-4"
              style={{ backgroundColor: activeFlavor.color, color: activeFlavor.color === '#2D3748' || activeFlavor.color === '#D93838' ? 'white' : 'black' }}
            >
              {activeFlavor.badge}
            </span>
            
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-1 sm:mb-2 text-brand-black leading-none">
              {activeFlavor.name}
            </h2>
            <p className="font-display text-sm sm:text-xl md:text-2xl font-bold text-gray-500 uppercase tracking-tight mb-4 sm:mb-8">
              {activeFlavor.tagline}
            </p>

            <div className="bg-gray-50 border-4 border-brand-black rounded-2xl p-3 sm:p-6 shadow-[6px_6px_0_rgba(0,0,0,1)] mb-4 sm:mb-8">
              <p className="font-body text-sm sm:text-base md:text-lg font-bold text-brand-black/80 leading-relaxed">
                {activeFlavor.description}
              </p>
            </div>

            {/* Nutrition: 2x2 on mobile, 4 cols on larger screens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-8">
              {Object.entries(activeFlavor.nutrition).map(([key, val]) => (
                <div key={key} className="bg-white border-2 border-brand-black rounded-xl p-2 sm:p-3 text-center shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col justify-center">
                  <div className="font-display font-black text-sm sm:text-lg md:text-xl truncate" style={{ color: activeFlavor.color }}>{val}</div>
                  <div className="font-bold uppercase text-[9px] sm:text-[10px] text-brand-black/60 mt-1">{key}</div>
                </div>
              ))}
            </div>

            <a
              href="mailto:sales@mithilamantra.com?subject=Bulk Order Enquiry"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-brand-black text-white font-black uppercase tracking-widest text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-5 rounded-2xl border-4 border-brand-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-200"
            >
              Order This Flavour →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flavor-grid">
        <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tighter mb-4 sm:mb-6 text-brand-black">
          Explore {filter === "All" ? "All" : filter} Flavors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-20">
          {filteredFlavors.map((f) => (
            <div key={f.id} className="flavor-card">
              <button
                onClick={() => {
                  setActiveId(f.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={clsx(
                  "w-full h-full relative flex flex-col items-center gap-3 p-4 rounded-2xl border-4 transition-all duration-300 cursor-pointer overflow-hidden group",
                  activeId === f.id
                    ? "border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] bg-white"
                    : "border-transparent bg-gray-50 hover:border-brand-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:bg-white"
                )}
              >
                {/* Active Indicator Line */}
                {activeId === f.id && (
                  <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: f.color }} />
                )}

                <div className="relative w-24 h-32 md:w-32 md:h-40 mt-4 group-hover:scale-110 transition-transform">
                  <Image src={f.image} alt={f.name} fill className="object-contain drop-shadow-md" />
                </div>
                <span className="font-display font-black text-xs uppercase text-center leading-tight mt-auto text-brand-black">
                  {f.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
