"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

const products = [
  { id: "raw", name: "Raw Makhana", color: "#E8B430", size: "100 G", image: "/images/product_pouch_raw.png", tags: ["Good Source of Magnesium", "Potassium, High Protein", "Low Fat", "Rich in Fiber"] },
  { id: "periperi", name: "Peri Peri", color: "#D93838", size: "50 GM", image: "/images/product_pouch_periperi.png", tags: ["Spicy", "Low Fat", "Rich in Fiber"] },
  { id: "cheese", name: "Cheese", color: "#F2C94C", size: "50 GM", image: "/images/product_pouch_cheese.png", tags: ["Cheesy", "High Protein", "Rich in Fiber"] },
  { id: "cream_onion", name: "Cream & Onion", color: "#6FCF97", size: "50 GM", image: "/images/product_pouch_cheese.png", tags: ["Tangy", "Low Calories", "Rich in Antioxidants"] },
  { id: "pudina", name: "Pudina", color: "#27AE60", size: "50 GM", image: "/images/product_pouch_raw.png", tags: ["Refreshing", "Low Fat", "Rich in Fiber"] },
  { id: "pepper", name: "Black Pepper & Salt", color: "#2D3748", size: "50 GM", image: "/images/product_pouch_pepper.png", tags: ["Classic", "High Protein", "Low Calories"] }
];

export default function S10_NaturalPuffLineup() {
  const [activeId, setActiveId] = useState(products[0].id);

  const activeProduct = products.find(p => p.id === activeId) || products[0];

  return (
    <section className="relative w-full py-24 bg-brand-white text-brand-black overflow-hidden transition-colors duration-500">
      {/* Infinite Marquee background */}
      <div className="absolute top-10 left-0 w-[200vw] flex overflow-hidden opacity-5 pointer-events-none select-none transform -rotate-2">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display text-9xl font-black uppercase">
          GLUTEN FREE • MSG FREE • ROASTED NOT FRIED • HIGH PROTEIN • 
        </div>
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display text-9xl font-black uppercase">
          GLUTEN FREE • MSG FREE • ROASTED NOT FRIED • HIGH PROTEIN • 
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Product Info */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex flex-wrap gap-2 mb-6">
            {products.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={clsx(
                  "px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all border-2 border-brand-black",
                  activeId === p.id 
                    ? "bg-brand-black text-brand-white shadow-[4px_4px_0_rgba(0,0,0,0.3)] scale-105" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {p.name}
              </button>
            ))}
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3 transition-colors duration-500 leading-tight" style={{ color: activeProduct.color }}>
            {activeProduct.name}
          </h2>
          
          <div className="bg-brand-black text-brand-white px-4 py-1 rounded-full font-bold tracking-widest text-sm mb-6">
            {activeProduct.size}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {activeProduct.tags.map(tag => (
              <div key={tag} className="flex items-center gap-2 bg-gray-100 border-2 border-brand-black px-3 py-1.5 rounded-lg font-bold text-xs">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: activeProduct.color }} />
                {tag}
              </div>
            ))}
          </div>
          
          <a
            href="mailto:sales@mithilamantra.com?subject=Order Enquiry"
            className="mt-8 w-full md:w-auto text-center inline-block bg-brand-black text-white px-8 py-3 rounded-2xl font-black text-sm tracking-widest uppercase border-4 border-brand-black shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200"
          >
            Order Now →
          </a>
        </div>

        {/* Right: Big Pouch Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div 
            className="absolute inset-0 rounded-full blur-[100px] opacity-30 transition-colors duration-500"
            style={{ backgroundColor: activeProduct.color }}
          />
          <div className="relative w-full max-w-xs md:max-w-md h-[50vw] max-h-[420px] md:h-auto md:aspect-[3/4] bg-white border-4 border-brand-black rounded-3xl shadow-[16px_16px_0_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <Image 
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-contain p-6 md:p-8 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}} />
    </section>
  );
}
