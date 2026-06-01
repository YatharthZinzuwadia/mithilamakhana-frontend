"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { gsap } from "gsap";

const flavoursList = [
  { name: "Raw Makhana", color: "#E8B430" },
  { name: "Peri Peri", color: "#D93838" },
  { name: "Cheese", color: "#F2C94C" },
  { name: "Cream & Onion", color: "#6FCF97" },
  { name: "Pudina", color: "#27AE60" },
  { name: "Black Pepper", color: "#2D3748" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(dropdownRef.current, 
        { y: -20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" }
      );
    }
  }, [dropdownOpen]);

  const isHomePage = pathname === "/";
  const shouldApplyScrolledStyle = isScrolled || !isHomePage;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 px-2 py-3 md:px-8 md:py-4 pointer-events-none">
      <div 
        className={clsx(
          "mx-auto flex items-center justify-between p-2 md:p-4 transition-all duration-300 pointer-events-auto",
          shouldApplyScrolledStyle 
            ? "max-w-4xl bg-white border-4 border-brand-black rounded-full shadow-[8px_8px_0_rgba(0,0,0,1)]" 
            : "max-w-7xl bg-transparent"
        )}
      >
        {/* Logo */}
        <div className="flex-1 flex items-center min-w-0">
          <Link href="/" className="group flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-[#D93838] border-2 border-brand-black rounded-full group-hover:scale-110 transition-transform flex items-center justify-center flex-shrink-0">
              <span className="font-black text-white text-[10px] md:text-xs">MM</span>
            </div>
            <span className={clsx(
              "font-display font-black text-base md:text-2xl tracking-tighter uppercase transition-colors truncate",
              shouldApplyScrolledStyle ? "text-brand-black" : "text-brand-white"
            )}>
              Mithila Mantra
            </span>
          </Link>
        </div>
        
        {/* Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/flavours"
              className={clsx(
                "px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-full transition-all border-2 border-transparent hover:border-brand-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)]",
                shouldApplyScrolledStyle ? "text-brand-black hover:bg-[#F2C94C]" : "text-white hover:bg-[#F2C94C] hover:text-brand-black",
                pathname === "/flavours" && (shouldApplyScrolledStyle ? "bg-brand-black text-white" : "bg-brand-gold text-brand-black")
              )}
            >
              Flavours
            </Link>
            
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                ref={dropdownRef}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-brand-white border-4 border-brand-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] overflow-hidden flex flex-col z-50 p-2"
              >
                {flavoursList.map((f, i) => (
                  <Link 
                    key={f.name} 
                    href={`/flavours#${f.name.toLowerCase().replace(/ & | /g, "-")}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-brand-black hover:text-white text-brand-black rounded-xl transition-colors font-bold text-sm uppercase group"
                  >
                    <span className="w-3 h-3 rounded-full border-2 border-brand-black group-hover:scale-125 transition-transform" style={{ backgroundColor: f.color }} />
                    {f.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/nutrition"
            className={clsx(
              "px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-full transition-all border-2 border-transparent hover:border-brand-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)]",
              shouldApplyScrolledStyle ? "text-brand-black hover:bg-[#6FCF97]" : "text-white hover:bg-[#6FCF97] hover:text-brand-black",
              pathname === "/nutrition" && (shouldApplyScrolledStyle ? "bg-brand-black text-white" : "bg-[#6FCF97] text-brand-black")
            )}
          >
            Nutrition
          </Link>

          <Link
            href="/our-story"
            className={clsx(
              "px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-full transition-all border-2 border-transparent hover:border-brand-black hover:shadow-[4px_4px_0_rgba(0,0,0,1)]",
              shouldApplyScrolledStyle ? "text-brand-black hover:bg-[#27AE60]" : "text-white hover:bg-[#27AE60] hover:text-brand-black",
              pathname === "/our-story" && (shouldApplyScrolledStyle ? "bg-brand-black text-white" : "bg-[#27AE60] text-brand-black")
            )}
          >
            Our Story
          </Link>
        </nav>
        
        {/* CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="/flavours"
            className="group relative bg-[#D93838] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300 border-2 border-brand-black shadow-[4px_4px_0_rgba(0,0,0,1)]"
          >
            Shop Now
            <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#F2C94C] border-2 border-brand-black rounded-full flex items-center justify-center text-[10px] text-brand-black font-black rotate-12 group-hover:animate-spin">
              NEW
            </span>
          </Link>
        </div>
      </div>
    </header>
    
    {/* Mobile Bottom Dock Navigation */}
    <div className="md:hidden fixed bottom-4 pb-[env(safe-area-inset-bottom,16px)] left-0 w-full px-4 z-50 pointer-events-auto">
      <div className="bg-brand-white border-4 border-brand-black rounded-full shadow-[8px_8px_0_rgba(0,0,0,1)] flex items-center justify-between p-1 relative">
        
        <Link href="/" className={clsx(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-colors",
          pathname === '/' ? "bg-brand-black text-white border-2 border-brand-black" : "text-brand-black"
        )}>
          <span className="font-black text-[9px] uppercase tracking-widest">Home</span>
        </Link>

        <Link href="/flavours" className={clsx(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-colors",
          pathname === '/flavours' ? "bg-[#D93838] text-white border-2 border-brand-black" : "text-brand-black"
        )}>
          <span className="font-black text-[9px] uppercase tracking-widest">Flavors</span>
        </Link>

        <div className="w-16 flex-shrink-0" /> {/* Spacer */}

        <Link href="/nutrition" className={clsx(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-colors",
          pathname === '/nutrition' ? "bg-[#6FCF97] border-2 border-brand-black" : "text-brand-black"
        )}>
          <span className="font-black text-[9px] uppercase tracking-widest">Health</span>
        </Link>

        <Link href="/our-story" className={clsx(
          "flex-1 flex flex-col items-center justify-center py-3 rounded-full transition-colors",
          pathname === '/our-story' ? "bg-[#27AE60] border-2 border-brand-black" : "text-brand-black"
        )}>
          <span className="font-black text-[9px] uppercase tracking-widest">Story</span>
        </Link>

        {/* Elevated Center Shop Button */}
        <Link href="/flavours" className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-brand-gold border-4 border-brand-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] flex items-center justify-center hover:-translate-y-1 transition-transform z-10">
            <span className="font-black text-[12px] uppercase text-center leading-none">Shop<br/>Now</span>
        </Link>
        
      </div>
    </div>
    </>
  );
}
