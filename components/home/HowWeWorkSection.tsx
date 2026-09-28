import React from "react";
import { MixedTitle } from "../ui/MixedTitle";

/* ==================================================
   TYPES
================================================== */

interface SimpleProcessStep {
  number: string;
  title: string;
  description: string;
  image: string | null;
}

interface SimpleProcessContent1 {
  title: string;
  highlight: string;
  description: string;
}

interface SimpleProcess {
  id: number;
  content1: SimpleProcessContent1;
  content2: SimpleProcessStep[];
}

interface HowWeWorkSectionProps {
  simpleProcess?: SimpleProcess | null;
}

/* ==================================================
   COMPONENT
================================================== */

export function HowWeWorkSection({ simpleProcess }: HowWeWorkSectionProps) {
  /* ==================================================
     EMPTY / INVALID DATA
  ================================================== */

  if (!simpleProcess) {
    return null;
  }

  const content1 = simpleProcess.content1;
  const steps = simpleProcess.content2 ?? [];

  /* ==================================================
     COMBINE TITLE + HIGHLIGHT

     MixedTitle accepts only:
       text

     So:
       title = "How We Work"
       highlight = "With You"

     becomes:
       "How We Work With You"
  ================================================== */

  const mixedTitle = (title?: string | null, highlight?: string | null) => {
    return [title, highlight]
      .filter(
        (value): value is string =>
          typeof value === "string" && value.trim() !== "",
      )
      .join(" ")
      .trim();
  };

  return (
    <section className="py-[100px] bg-[#f8fafc]">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        {content1 && (
          <div className="text-center max-w-[650px] mx-auto mb-[40px] fade-in">
            {/* Eyebrow - kept as static because API
                does not contain an eyebrow field */}

            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819] after:content-[''] after:w-[18px] after:h-[2px] after:bg-[#d98819]">
              Simple Process
            </div>

            {/* Dynamic Title */}

            {mixedTitle(content1.title, content1.highlight) && (
              <MixedTitle
                text={mixedTitle(content1.title, content1.highlight)}
                className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-[#052636] font-bold font-sans leading-[1.25] mb-4"
              />
            )}

            {/* Dynamic Description */}

            {content1.description && (
              <p className="text-[0.98rem] text-[#334155] leading-[1.6]">
                {content1.description}
              </p>
            )}
          </div>
        )}

        {/* ==================================================
            PROCESS STEPS
        ================================================== */}

        {steps.length > 0 && (
          <div className="grid grid-cols-1 min-[577px]:grid-cols-2 min-[993px]:grid-cols-3 gap-[30px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-[16px] border border-[#e2e8f0] overflow-hidden fade-in ${
                  index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
                } shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="h-[250px] overflow-hidden">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title || "Process step"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f1f5f9] flex items-center justify-center">
                      <span className="text-[#94a3b8] text-sm">
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="p-7">
                  <div className="flex items-center gap-3.5 mb-3.5">
                    {/* Number */}

                    {step.number && (
                      <div className="w-[36px] h-[36px] rounded-full bg-[#fef6e9] text-[#d98819] font-bold text-[0.95rem] flex items-center justify-center shrink-0">
                        {step.number}
                      </div>
                    )}

                    {/* Title */}

                    {step.title && (
                      <h4 className="text-[1.45rem] text-[#052636] font-bold font-serif leading-snug">
                        {step.title}
                      </h4>
                    )}
                  </div>

                  {/* Description */}

                  {step.description && (
                    <p className="text-[1rem] text-[#334155] leading-[1.65]">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
