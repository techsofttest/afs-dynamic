import React from "react";
import { MixedTitle } from "../ui/MixedTitle";

interface CounsellingCoverageItem {
  number: string;
  title: string;
  description: string;
}

interface FinancialCounsellingCoverageSectionProps {
  title?: string;
  highlight?: string;
  items?: CounsellingCoverageItem[];
}

export function FinancialCounsellingCoverageSection({
  title = "What Financial",
  highlight = "Counselling Covers",
  items = [],
}: FinancialCounsellingCoverageSectionProps) {
  const sectionTitle =
    [title, highlight].filter(Boolean).join(" ") ||
    "What Financial Counselling Covers";

  return (
    <section className="py-[90px] bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="text-center max-w-[650px] mx-auto mb-12 fade-in">
          <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-2 flex items-center justify-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819] after:content-[''] after:w-[18px] after:h-[2px] after:bg-[#d98819]">
            Comprehensive Coverage
          </div>

          <MixedTitle
            text={sectionTitle}
            as="h3"
            className="text-[2.2rem] font-sans font-bold text-[#052636]"
          />
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 min-[577px]:grid-cols-2 min-[993px]:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={`${item.number}-${index}`}
              className={`bg-white p-9 rounded-[24px] border border-[#e2e8f0] flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-md transition-shadow fade-in ${
                index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
              }`}
            >
              <div>
                {/* Number */}
                <div className="w-[54px] h-[54px] rounded-full bg-[#fef6e9] text-[#d98819] flex items-center justify-center font-bold mb-6 text-[1.25rem]">
                  {item.number}
                </div>

                {/* Title */}
                <h4 className="font-serif text-[1.6rem] font-bold text-[#052636] mb-3 leading-tight">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-[1.05rem] text-[#334155] leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
