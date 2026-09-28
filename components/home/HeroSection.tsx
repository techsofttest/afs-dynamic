"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface HeroTitle {
  before: string;
  highlight: string;
  after: string;
}

interface HeroBanner {
  id: number;
  title: HeroTitle;
  description: string;
}

interface HeroSlider {
  id: number;
  image: string;
  image_url: string;
}

interface HeroSectionProps {
  banner: HeroBanner;
  sliders: HeroSlider[];
}

export function HeroSection({ banner, sliders }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sliders.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [sliders.length]);

  return (
    <section
      id="home"
      className="relative h-[70vh] min-h-[520px] max-h-[720px] bg-white flex items-center overflow-hidden p-0 w-full"
    >
      <div className="flex items-center justify-between w-full h-full relative">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="max-w-[580px] ml-[max(24px,calc((100vw-1240px)/2))] p-0 z-[5] w-full">
          <div className="relative z-[5] fade-in">
            {/* Eyebrow */}
            <div className="text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#b5894b] mb-3.5 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#b5894b]">
              YOUR FINANCIAL PARTNER
            </div>

            {/* Dynamic Heading */}
            <h1 className="text-[clamp(2.4rem,3.6vw,3.4rem)] text-[#0b2535] font-bold mb-4.5 leading-[1.15] font-serif">
              {banner.title.before}{" "}
              <em className="italic text-[#d88923] font-semibold font-serif">
                {banner.title.highlight}
              </em>
              <br />
              {banner.title.after.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}

                  {index < banner.title.after.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Dynamic Description */}
            <p className="text-[0.98rem] text-[#475569] mb-7 max-w-[480px] leading-[1.65]">
              {banner.description}
            </p>

            {/* CTA */}
            <Button href="/contact" variant="amber" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>

        {/* =========================
            RIGHT SLIDER
        ========================== */}
        <div className="absolute top-0 right-0 w-full min-[993px]:w-[48vw] h-full flex justify-end items-end overflow-hidden z-[1] fade-in delay-1 opacity-20 min-[993px]:opacity-100">
          {sliders.map((slider, idx) => (
            <img
              key={slider.id}
              src={slider.image_url}
              alt={`Financial planning slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Carousel Slide Indicators */}
          {sliders.length > 1 && (
            <div className="absolute bottom-6 right-8 z-20 flex gap-2">
              {sliders.map((slider, idx) => (
                <button
                  key={slider.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 bg-[#d88923]"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
