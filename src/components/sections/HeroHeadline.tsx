"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/content";

const SLIDE_OFFSETS = [0, 190, 327, 507];
const SLIDE_DURATION = 3800;

export default function HeroHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative h-auto w-full overflow-hidden lg:h-[170px]"
      aria-live="polite"
    >
      <div
        className="hidden lg:absolute lg:left-[-51px] lg:top-0 lg:flex lg:w-[1025px] lg:flex-col lg:gap-[20px] lg:transition-transform lg:duration-[700ms] lg:ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translate3d(0, -${SLIDE_OFFSETS[index]}px, 0)` }}
      >
        {HERO_SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.title}
            className={`flex w-full shrink-0 flex-col ${
              slide.align === "center"
                ? "items-center gap-[8px] text-center"
                : "items-start text-right"
            }`}
            aria-hidden={slideIndex !== index}
          >
            <p className="h-[71px] w-full text-[40px] font-semibold leading-normal text-black">
              {slide.title}
            </p>
            <p className="w-full text-[24px] font-normal leading-normal text-black">
              {slide.body}
            </p>
          </div>
        ))}
      </div>

      <div className="relative lg:hidden">
        {HERO_SLIDES.map((slide, slideIndex) => (
          <div
            key={slide.title}
            className={`flex flex-col items-center gap-[8px] text-center transition-opacity duration-700 ${
              slideIndex === index
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0"
            }`}
            aria-hidden={slideIndex !== index}
          >
            <p className="w-full text-[26px] font-semibold leading-snug text-black sm:text-[32px]">
              {slide.title}
            </p>
            <p className="w-full text-[16px] font-normal leading-relaxed text-black sm:text-[20px]">
              {slide.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
