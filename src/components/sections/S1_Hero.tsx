"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function S1_Hero() {
  const containerRef = useRef<HTMLSectionElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const textRef4 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 4-Step Automated Cinematic Sequence (No ScrollTrigger)
      const tl = gsap.timeline({ repeat: -1 }); // Loops indefinitely

      // Step 1: "BEFORE CHIPS."
      tl.fromTo(textRef1.current, 
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
      .to(textRef1.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.in" }, "+=1.5")

      // Step 2: "BEFORE POPCORN."
      .fromTo(textRef2.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
      .to(textRef2.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.in" }, "+=1.5")

      // Step 3: "THERE WAS MAKHANA."
      .fromTo(textRef3.current,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
      .to(textRef3.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.in" }, "+=1.5")

      // Step 4: "MITHILA MAKHANA!"
      .fromTo(textRef4.current,
        { opacity: 0, scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      )
      .to(textRef4.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.in" }, "+=3");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-brand-black overflow-hidden flex flex-col justify-center"
    >
      {/* Video Background - Fixed Link and Z-index */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 mix-blend-screen"
          // Using a reliable Pexels raw video link for food/nature
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4"
        />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      {/* Top Marquee */}
      <div className="absolute top-0 left-0 w-full bg-brand-gold text-brand-black py-2 z-20 overflow-hidden transform -skew-y-1 origin-top-left border-b-4 border-brand-black shadow-xl">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] font-display text-lg md:text-xl font-black uppercase">
          &nbsp;MITHILA MAKHANA • THE HEALTHIEST CRUNCH • MITHILA MAKHANA • THE HEALTHIEST CRUNCH • MITHILA MAKHANA • THE HEALTHIEST CRUNCH • 
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center p-6 text-center h-full">
        
        {/* Step 1 */}
        <h1 
          ref={textRef1}
          className="absolute font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white uppercase tracking-tighter drop-shadow-2xl opacity-0 px-4 text-center"
        >
          BEFORE CHIPS.
        </h1>

        {/* Step 2 */}
        <h1 
          ref={textRef2}
          className="absolute font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-gold uppercase tracking-tighter drop-shadow-2xl opacity-0 px-4 text-center"
        >
          BEFORE POPCORN.
        </h1>

        {/* Step 3 */}
        <h1 
          ref={textRef3}
          className="absolute font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white uppercase tracking-tight drop-shadow-2xl opacity-0 px-4 text-center"
        >
          THERE WAS MAKHANA.
        </h1>

        {/* Step 4 */}
        <div ref={textRef4} className="absolute flex flex-col items-center justify-center opacity-0 px-4 w-full">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-gold uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(217,56,56,1)] leading-none text-center">
            MITHILA<br/>MAKHANA!
          </h1>
          {/* Funky Starburst Badge */}
          <div className="absolute -top-8 -right-4 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-[#D93838] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] shadow-xl border-4 border-brand-black">
            <span className="font-bold text-white text-center leading-tight rotate-12 uppercase text-[10px] md:text-xs">
              100%<br/>Makhana
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
