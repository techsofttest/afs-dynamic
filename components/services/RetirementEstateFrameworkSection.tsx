import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";
interface RetirementEstateFrameworkSectionProps {
  title?: string;
  highlight?: string;
  description?: string;
}
export function RetirementEstateFrameworkSection({
  title = "A Comprehensive",
  highlight = "Financial Framework",
  description = "Together, retirement and estate planning create a comprehensive financial framework—securing your future while safeguarding your legacy.",
}: RetirementEstateFrameworkSectionProps) {
  return (
    <section className="relative py-[100px] bg-[#052636] text-white text-center overflow-hidden">
      {" "}
      {/* Concentric Rings Left */}{" "}
      <div className="absolute -left-[80px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/10 hidden min-[768px]:block pointer-events-none" />{" "}
      <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-[#d98819]/25 hidden min-[768px]:block pointer-events-none" />{" "}
      {/* Concentric Rings Right */}{" "}
      <div className="absolute -right-[80px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/10 hidden min-[768px]:block pointer-events-none" />{" "}
      <div className="absolute -right-[40px] top-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-[#d98819]/25 hidden min-[768px]:block pointer-events-none" />{" "}
      {/* Floating Rotated Diamond Accents */}{" "}
      <div className="absolute left-[10%] top-[25%] w-[50px] h-[50px] border border-white/10 rotate-45 hidden min-[993px]:block pointer-events-none" />{" "}
      <div className="absolute right-[10%] bottom-[25%] w-[50px] h-[50px] border border-[#d98819]/25 rotate-45 hidden min-[993px]:block pointer-events-none" />{" "}
      {/* Dot Matrix Pattern Accents */}{" "}
      <div className="absolute left-[5%] bottom-[15%] w-[120px] h-[60px] opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] hidden min-[768px]:block pointer-events-none" />{" "}
      <div className="absolute right-[5%] top-[15%] w-[120px] h-[60px] opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] hidden min-[768px]:block pointer-events-none" />{" "}
      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10">
        {" "}
        <div className="max-w-[900px] mx-auto fade-in">
          {" "}
          <MixedTitle
            text={title}
            highlight={highlight}
            className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-white font-bold font-sans leading-[1.25] mb-5"
          />{" "}
          <p className="text-[1.2rem] min-[768px]:text-[1.3rem] text-white/90 leading-[1.8] mb-8 font-sans">
            {" "}
            {description}{" "}
          </p>{" "}
          <Button href="/contact" variant="amber" size="lg">
            {" "}
            Plan Your Legacy Today{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
