import React from "react";
import { MixedTitle } from "../ui/MixedTitle";
interface RetirementEstateHeaderProps {
  title?: string;
  highlight?: string;
  description?: string;
}
export function RetirementEstateHeader({
  title = "Protecting Your Freedom",
  highlight = "& Legacy",
  description = "Retirement and estate planning are essential pillars of long-term financial security, ensuring both personal financial independence and the smooth transfer of wealth to future generations.",
}: RetirementEstateHeaderProps) {
  return (
    <section className="pt-[90px] pb-[60px] bg-white">
      {" "}
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {" "}
        <div className="max-w-[850px] mx-auto text-center fade-in">
          {" "}
          <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819] after:content-[''] after:w-[18px] after:h-[2px] after:bg-[#d98819]">
            {" "}
            Long-Term Financial Security{" "}
          </div>{" "}
          <MixedTitle
            text={title}
            highlight={highlight}
            className="text-[clamp(2.2rem,4vw,3rem)] text-[#052636] font-bold font-sans leading-[1.25] mb-6"
          />{" "}
          <p className="text-[1.1rem] text-[#334155] leading-[1.8] font-sans">
            {" "}
            {description}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
