import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";

interface WhoWeAreContent {
  title: string;
  highlight: string;
  image: string | null;
  descriptions: string[];
  points: string[];
  final_content: {
    title: string;
    subtitle: string;
  };
}

interface WhoWeAreData {
  id: number;
  content1: WhoWeAreContent;
}

interface AboutSectionProps {
  data: WhoWeAreData;
}

export function AboutSection({ data }: AboutSectionProps) {
  const content = data.content1;

  return (
    <section id="about" className="py-[100px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 min-[993px]:grid-cols-[1fr_1.1fr] gap-[60px] items-stretch">
          {/* =========================
              IMAGE
          ========================== */}
          <div className="relative rounded-[20px] overflow-hidden h-[360px] min-[993px]:h-full fade-in">
            <img
              src={content.image || "/about/a2.png"}
              alt={content.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom Badge */}
            <div className="absolute bottom-6 left-6 bg-[#052636] text-white px-5 py-2.5 rounded-[30px] text-[0.85rem] font-semibold flex items-center gap-2.5 z-10">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {content.final_content.title} | {content.final_content.subtitle}
            </div>
          </div>

          {/* =========================
              CONTENT
          ========================== */}
          <div className="fade-in delay-1">
            {/* Eyebrow */}
            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
              Who We Are
            </div>

            {/* Dynamic Title */}
            <MixedTitle
              text={`${content.title} ${content.highlight}`}
              className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-[#052636] font-bold mb-5 font-sans leading-[1.25]"
            />

            {/* Dynamic Descriptions */}
            {content.descriptions.map((description, index) => (
              <p
                key={index}
                className={`text-[0.98rem] text-[#334155] ${
                  index === content.descriptions.length - 1 ? "mb-7" : "mb-3.5"
                } leading-[1.7]`}
              >
                {description}
              </p>
            ))}

            {/* Dynamic Points */}
            <ul className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-y-4 gap-x-6 list-none mb-[36px] p-0">
              {content.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-[0.92rem] font-semibold text-[#052636]"
                >
                  <div className="w-[20px] h-[20px] rounded-full bg-[#fef6e9] text-[#d98819] flex items-center justify-center shrink-0">
                    ✓
                  </div>

                  {point}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button href="/contact" variant="amber" size="lg">
              Know More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
