import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";

export interface ServiceDetailSectionProps {
  tagline: string;
  title: string;
  paragraphs: string[];
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  imageBadgeTagline?: string;
  imageBadgeTitle?: string;
}

export function ServiceDetailSection({
  tagline,
  title,
  paragraphs,
  ctaText = "Schedule a Consultation",
  ctaHref = "/contact",
  imageSrc,
  imageAlt,
  imageBadgeTagline,
  imageBadgeTitle,
}: ServiceDetailSectionProps) {
  return (
    <section className="py-[90px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 min-[993px]:grid-cols-2 gap-[60px] items-start">
          {/* Left Text Content */}
          <div className="fade-in">
            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
              {tagline}
            </div>
            <MixedTitle
              text={title}
              className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-[#052636] font-bold font-sans leading-[1.25] mb-6"
            />

            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-[1.05rem] text-[#334155] leading-[1.8] mb-5 font-sans"
              >
                {p}
              </p>
            ))}

            {ctaText && ctaHref && (
              <div className="mt-8">
                <Button href={ctaHref} variant="amber" size="lg">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* Right Sticky Image Container */}
          <div className="sticky top-[100px] rounded-[24px] overflow-hidden border border-[#e2e8f0] h-[460px] fade-in delay-1">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052636]/85 via-transparent to-transparent" />

            {(imageBadgeTagline || imageBadgeTitle) && (
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                {imageBadgeTagline && (
                  <div className="text-[0.82rem] font-bold tracking-widest text-white uppercase mb-1">
                    {imageBadgeTagline}
                  </div>
                )}
                {imageBadgeTitle && (
                  <div className="font-serif text-[1.45rem] font-bold">
                    {imageBadgeTitle}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
