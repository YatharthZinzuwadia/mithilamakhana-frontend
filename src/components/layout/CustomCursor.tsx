"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { clsx } from "clsx";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if interactive element
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" ||
        target.closest("a") || 
        target.closest("button") ||
        target.dataset.cursor
      ) {
        setIsHovering(true);
        if (target.dataset.cursorText) {
          setHoverText(target.dataset.cursorText);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={clsx(
        "fixed top-0 left-0 w-4 h-4 bg-brand-gold rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center text-[8px] font-bold text-brand-black",
        isHovering ? "w-16 h-16 bg-brand-gold/90 backdrop-blur-sm" : ""
      )}
      style={{ mixBlendMode: "difference" }}
    >
      {isHovering && hoverText && <span>{hoverText}</span>}
    </div>
  );
}
