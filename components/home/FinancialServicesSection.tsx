import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";

/* =========================================================
   OUR SERVICES TYPES
========================================================= */

interface ServiceDescription {
  text: string;
  highlight: string | null;
  after_highlight: string;
}

interface ServiceContent {
  title: string;
  highlight: string;
  descriptions: ServiceDescription[];
}

interface ServiceCard {
  title: string;
  description: string;
}

interface OurServices {
  id: number;
  content1: ServiceContent;
  content2: ServiceCard[];
}

/* =========================================================
   HOW IT WORKS TYPES
========================================================= */

interface HowItWorksContent {
  title: string;
  highlight: string;
  description: string;
}

interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

interface HowItWorks {
  id: number;
  content1: HowItWorksContent;
  content2: HowItWorksStep[];
}

/* =========================================================
   PROPS
========================================================= */

interface FinancialServicesSectionProps {
  services: OurServices;
  howItWorks: HowItWorks;
}

/* =========================================================
   COMPONENT
========================================================= */

export function FinancialServicesSection({
  services,
  howItWorks,
}: FinancialServicesSectionProps) {
  const serviceContent = services.content1;
  const serviceCards = services.content2;

  const processContent = howItWorks.content1;
  const processSteps = howItWorks.content2;

  return (
    <section id="financial-counselling" className="py-[100px] bg-[#f8fafc]">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* =====================================================
            SERVICES SECTION
        ====================================================== */}

        <div className="grid grid-cols-1 min-[993px]:grid-cols-[1fr_1.2fr] gap-[50px] items-start">
          {/* ===================================================
              SERVICE CONTENT
          ==================================================== */}

          <div className="fade-in">
            {/* Eyebrow */}
            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
              Our Services
            </div>

            {/* Dynamic Title */}
            <MixedTitle
              text={`${serviceContent.title} ${serviceContent.highlight}`}
              className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-[#052636] mb-5 leading-[1.25]"
            />

            {/* Dynamic Descriptions */}
            {serviceContent.descriptions.map((description, index) => (
              <p
                key={index}
                className="text-[0.98rem] text-[#334155] leading-[1.7] mb-7"
              >
                {description.text}{" "}
                {description.highlight && (
                  <>
                    <strong className="font-bold text-[#0f172a]">
                      {description.highlight}
                    </strong>{" "}
                  </>
                )}
                {description.after_highlight}
              </p>
            ))}

            {/* Button */}
            <Button href="/contact" variant="amber" size="lg">
              Get Counselling
            </Button>
          </div>

          {/* ===================================================
              SERVICE CARDS
          ==================================================== */}

          <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-5 fade-in delay-1">
            {serviceCards.map((service, index) => {
              const darkCard = index === 0 || index === 3;

              return (
                <div
                  key={index}
                  className={`p-8 px-6 rounded-[14px] transition-transform duration-300 hover:-translate-y-1 ${
                    darkCard
                      ? "bg-[#052636] text-white"
                      : "bg-white text-[#0f172a] border border-[#e2e8f0]"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-[44px] h-[44px] rounded-[8px] flex items-center justify-center mb-5 ${
                      darkCard
                        ? "bg-white/10 text-white"
                        : "bg-[#e6f4f6] text-[#007a8c]"
                    }`}
                  >
                    {/* Budgeting */}
                    {index === 0 && (
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    )}

                    {/* Risk Management */}
                    {index === 1 && (
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}

                    {/* Tax Efficiency */}
                    {index === 2 && (
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
                        <line x1="12" y1="6" x2="12" y2="8" />
                        <line x1="12" y1="16" x2="12" y2="18" />
                      </svg>
                    )}

                    {/* Wealth Creation */}
                    {index === 3 && (
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                  </div>

                  {/* Dynamic Title */}
                  <h4
                    className={`font-serif text-[1.4rem] font-bold mb-2 ${
                      darkCard ? "text-white" : "text-[#052636]"
                    }`}
                  >
                    {service.title}
                  </h4>

                  {/* Dynamic Description */}
                  <p
                    className={`text-[0.88rem] leading-[1.6] ${
                      darkCard ? "text-white/90" : "text-[#334155]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <div className="mt-[100px] text-center fade-in delay-2">
          {/* Eyebrow */}
          <div className="text-[0.85rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#d98819]">
            How It Works
          </div>

          {/* Dynamic Process Title */}
          <MixedTitle
            text={`${processContent.title} ${processContent.highlight}`}
            as="h3"
            className="text-[2.5rem] text-[#052636] mb-3"
          />

          {/* Dynamic Process Description */}
          <p className="text-[0.98rem] text-[#334155] leading-[1.6] max-w-[600px] mx-auto mb-[50px]">
            {processContent.description}
          </p>

          <div className="relative max-w-[1140px] mx-auto">
            {/* Connecting Horizontal Line */}
            <div className="hidden min-[993px]:block absolute top-[29px] left-[12.5%] right-[12.5%] h-[3px] bg-gradient-to-r from-[#052636] via-[#2b7a9e] to-[#d98819] opacity-40 z-0" />

            <div className="grid grid-cols-1 min-[577px]:grid-cols-2 min-[993px]:grid-cols-4 gap-10 relative z-10">
              {/* Dynamic Process Steps */}
              {processSteps.map((step, index) => {
                const stepColors = [
                  "bg-[#052636]",
                  "bg-[#0b4d70]",
                  "bg-[#2b7a9e]",
                  "bg-[#d98819]",
                ];

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Step Number */}
                    <div
                      className={`w-[58px] h-[58px] rounded-full ${
                        stepColors[index] || "bg-[#052636]"
                      } text-white font-bold text-[1.15rem] flex items-center justify-center mb-5 shadow-md relative z-10`}
                    >
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h5 className="text-[1.35rem] font-bold text-[#052636] mb-2 font-serif">
                      {step.title}
                    </h5>

                    {/* Step Description */}
                    <p className="text-[0.95rem] text-[#64748b] leading-[1.6] max-w-[240px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
