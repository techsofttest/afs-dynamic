import React from "react";
interface PlanningSection {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
}
interface RetirementEstateFeatureCardsProps {
  retirement?: PlanningSection;
  estate?: PlanningSection;
}
export function RetirementEstateFeatureCards({
  retirement = {},
  estate = {},
}: RetirementEstateFeatureCardsProps) {
  return (
    <section className="w-full">
      {" "}
      {/* Retirement Card - Full Width, White Content */}{" "}
      <div className="w-full relative overflow-hidden text-white fade-in min-h-[580px] flex items-center">
        {" "}
        <img
          src="/retirementestate/retirement.png"
          alt={retirement.title || "Retirement Planning"}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />{" "}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#052636]/95 via-[#052636]/80 to-[#052636]/40 min-[768px]:max-w-[70%]" /> */}{" "}
        <div className="max-w-[1240px] mx-auto px-6 py-24 min-[768px]:py-28 w-full relative z-10">
          {" "}
          <div className="max-w-[680px]">
            {" "}
            <h3 className="text-[clamp(2.6rem,5vw,3.6rem)] font-serif font-bold text-white mb-2 leading-tight">
              {" "}
              {retirement.title || "Retirement Planning"}{" "}
            </h3>{" "}
            {retirement.subtitle && (
              <p className="text-[1.2rem] text-[#d98819] font-semibold mb-5">
                {" "}
                {retirement.subtitle}{" "}
              </p>
            )}{" "}
            {retirement.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-[1.05rem] text-white/95 leading-[1.8] mb-4"
                    : "text-[1.05rem] text-white/90 leading-[1.8] font-medium"
                }
              >
                {" "}
                {paragraph}{" "}
              </p>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Estate Card - Full Width, Black Content */}{" "}
      <div className="w-full relative overflow-hidden text-[#052636] fade-in delay-1 min-h-[580px] flex items-center">
        {" "}
        <img
          src="/retirementestate/estate.png"
          alt={estate.title || "Estate Planning"}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />{" "}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/88 to-white/30 min-[768px]:max-w-[70%]" />{" "}
        <div className="max-w-[1240px] mx-auto px-6 py-24 min-[768px]:py-28 w-full relative z-10">
          {" "}
          <div className="max-w-[680px]">
            {" "}
            <h3 className="text-[clamp(2.6rem,5vw,3.6rem)] font-serif font-bold text-[#052636] mb-5 leading-tight">
              {" "}
              {estate.title || "Estate Planning"}{" "}
            </h3>{" "}
            {estate.subtitle && (
              <p className="text-[1.2rem] text-[#d98819] font-semibold mb-5">
                {" "}
                {estate.subtitle}{" "}
              </p>
            )}{" "}
            {estate.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-[1.05rem] text-[#334155] leading-[1.8] mb-4"
                    : "text-[1.05rem] text-[#052636] leading-[1.8] font-medium"
                }
              >
                {" "}
                {paragraph}{" "}
              </p>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
