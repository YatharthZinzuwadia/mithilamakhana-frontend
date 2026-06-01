"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function S1_Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const textRef4 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3-Step Automated Cinematic Sequence
      const tl = gsap.timeline({ repeat: -1 });

      // Group 1
      tl.fromTo(textRef1.current, 
        { opacity: 0, scale: 0.5, rotation: -10 },
        { opacity: 1, scale: 1, rotation: -3, duration: 1.5, ease: "elastic.out(1, 0.4)" }
      )
      .to(textRef1.current, { opacity: 0, scale: 1.2, duration: 0.5, ease: "power2.in" }, "+=2.5")

      // Group 2
      .fromTo(textRef2.current,
        { opacity: 0, scale: 0.5, rotation: 10 },
        { opacity: 1, scale: 1, rotation: 2, duration: 1.5, ease: "elastic.out(1, 0.4)" }
      )
      .to(textRef2.current, { opacity: 0, scale: 1.2, duration: 0.5, ease: "power2.in" }, "+=2.5")

      // Group 3
      .fromTo(textRef3.current,
        { opacity: 0, scale: 0.5, rotation: -10 },
        { opacity: 1, scale: 1, rotation: -2, duration: 1.5, ease: "elastic.out(1, 0.4)" }
      )
      .to(textRef3.current, { opacity: 0, scale: 1.2, duration: 0.5, ease: "power2.in" }, "+=3.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-brand-black overflow-hidden flex flex-col justify-center"
    >
      {/* Funky Poster Background */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <Image 
          src="/images/hero-poster-clean.png"
          alt="Mithila Mantra Funky Poster"
          fill
          priority
          className="object-cover opacity-100"
        />
        {/* Subtle colorful gradient overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-cyan-500/10" />
      </div>

      {/* Top Marquee */}
      <div className="absolute top-0 left-0 w-full bg-brand-gold text-brand-black py-2 z-20 overflow-hidden transform -skew-y-1 origin-top-left border-b-4 border-brand-black shadow-xl">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] font-display text-lg md:text-xl font-black uppercase">
          &nbsp;MITHILA MAKHANA • THE HEALTHIEST CRUNCH • MITHILA MAKHANA • THE HEALTHIEST CRUNCH • MITHILA MAKHANA • THE HEALTHIEST CRUNCH • 
        </div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center pt-20">
        
        {/* Group 1 */}
        <div ref={textRef1} className="absolute flex flex-col items-center justify-center opacity-0 w-full px-4">
          <h1 
            className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] italic text-[#FFE818]"
            style={{ 
              WebkitTextStroke: "6px black", 
              textShadow: "10px 10px 0px rgba(0,0,0,1)",
              paintOrder: "stroke fill" 
            }}
          >
            FORGET CHIPS.<br/>
            DITCH THE POPCORN.
          </h1>
        </div>

        {/* Group 2 */}
        <div ref={textRef2} className="absolute flex flex-col items-center justify-center opacity-0 w-full px-4">
          <h1 
            className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] italic text-[#FFE818]"
            style={{ 
              WebkitTextStroke: "6px black", 
              textShadow: "10px 10px 0px rgba(0,0,0,1)",
              paintOrder: "stroke fill"
            }}
          >
            ENTER THE<br/>
            SUPER SNACK.
          </h1>
        </div>

        {/* Group 3 */}
        <div ref={textRef3} className="absolute flex flex-col items-center justify-center opacity-0 w-full px-4">
          <h1 
            className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] italic text-[#FFE818]"
            style={{ 
              WebkitTextStroke: "6px black", 
              textShadow: "10px 10px 0px rgba(0,0,0,1)",
              paintOrder: "stroke fill"
            }}
          >
            MITHILA<br/>
            MAKHANA!
          </h1>
          
          {/* Funky Starburst Badge */}
          <div className="absolute -top-16 md:-top-24 right-0 md:right-12 w-28 h-28 md:w-40 md:h-40 bg-[#FF007F] rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite] shadow-[8px_8px_0_rgba(0,0,0,1)] border-8 border-brand-black">
            <span className="font-black text-white text-center leading-tight rotate-12 uppercase text-base md:text-xl" style={{ textShadow: "2px 2px 0px black" }}>
              100%<br/>CRUNCH!
            </span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
