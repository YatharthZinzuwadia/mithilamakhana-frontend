"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function S14_ContactWaitlist() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-[#E8B430] text-brand-black py-16 md:py-24 px-6 md:px-12 pb-28 md:pb-24 border-t-8 border-brand-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 20px 20px', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
        
        <div className="contact-item col-span-1 md:col-span-2 lg:col-span-1 bg-white p-6 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform -rotate-1">
          <h3 className="font-display text-3xl font-black uppercase mb-4 text-[#D93838]">
            Join the Move
          </h3>
          <p className="font-body text-lg font-bold mb-6 text-brand-black/80">
            Be the first to know when new flavors drop.
          </p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-100 border-2 border-brand-black p-3 rounded-xl outline-none w-full font-body placeholder:text-brand-black/50 text-brand-black font-bold focus:shadow-[4px_4px_0_rgba(0,0,0,1)] transition-shadow"
            />
            <button className="bg-brand-black text-white font-bold uppercase tracking-widest text-sm py-3 rounded-xl hover:bg-[#D93838] transition-colors border-2 border-brand-black">
              Subscribe
            </button>
          </div>
        </div>

        <div className="contact-item bg-white p-6 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform rotate-1">
          <h4 className="font-display font-black uppercase tracking-widest text-xl mb-4 text-[#27AE60] border-b-2 border-brand-black pb-2">
            HQ (Bihar)
          </h4>
          <p className="font-body text-lg font-bold text-brand-black/80 leading-relaxed">
            Mithila Mantra Makhanas<br />
            Shubhankarpur<br />
            Darbhanga, Bihar-846004
          </p>
        </div>

        <div className="contact-item bg-white p-6 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform -rotate-2">
          <h4 className="font-display font-black uppercase tracking-widest text-xl mb-4 text-[#27AE60] border-b-2 border-brand-black pb-2">
            Office (Pune)
          </h4>
          <p className="font-body text-lg font-bold text-brand-black/80 leading-relaxed">
            Amarsinh Colony<br />
            Malegaon BK, Baramati<br />
            Pune-Maharashtra 413115
          </p>
        </div>

        <div className="contact-item bg-white p-6 border-4 border-brand-black rounded-3xl shadow-[8px_8px_0_rgba(0,0,0,1)] transform rotate-2">
          <h4 className="font-display font-black uppercase tracking-widest text-xl mb-4 text-[#D93838] border-b-2 border-brand-black pb-2">
            Contact
          </h4>
          <ul className="font-body text-lg font-bold text-brand-black/80 space-y-2 mb-4">
            <li><a href="mailto:info@mithilamantra.com" className="hover:underline hover:text-[#D93838]">info@mithilamantra.com</a></li>
            <li><a href="mailto:sales@mithilamantra.com" className="hover:underline hover:text-[#D93838]">sales@mithilamantra.com</a></li>
          </ul>
          <div>
            <h5 className="font-black text-sm mb-1 uppercase">Business Hours</h5>
            <p className="font-body text-sm font-bold text-brand-black/70">
              Mon-Fri : 09:00 AM - 06:00PM<br />
              Sat : 10:00 AM - 04:00 PM<br />
              <strong className="text-[#D93838]">SUNDAY CLOSED</strong>
            </p>
          </div>
        </div>
      </div>
      
      {/* Nav Links */}
      <div className="contact-item mt-12 md:mt-16 border-t-4 border-brand-black pt-8 md:pt-12 flex flex-col items-center gap-6 md:gap-10 relative z-10 w-full text-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase text-brand-black tracking-tighter drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
            MITHILA MANTRA
          </h2>
          <nav className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {[
              { label: "Home", href: "/" },
              { label: "Our Flavours", href: "/flavours" },
              { label: "Nutrition", href: "/nutrition" },
              { label: "Our Story", href: "/our-story" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-brand-black text-white font-bold uppercase tracking-widest text-xs md:text-sm px-4 md:px-5 py-2 rounded-full border-2 border-brand-black hover:bg-white hover:text-brand-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="font-bold tracking-widest uppercase text-xs text-brand-black/70">
          © {new Date().getFullYear()} Mithila Mantra Makhanas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
