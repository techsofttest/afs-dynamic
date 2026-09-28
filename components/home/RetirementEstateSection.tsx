import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";

interface Pillar {
  pillar?: string | null;
  title?: string | null;
  highlight?: string | null;
  description?: string | null;
  points?: string[] | null;
}

interface LookFutureContent {
  title?: string | null;
  highlight?: string | null;
  description?: string | null;
}

interface LookFuture {
  id?: number;
  content1?: LookFutureContent | null;
  content2?: Pillar[] | null;
  content3?: LookFutureContent | null;
}

interface RetirementEstateSectionProps {
  lookFuture?: LookFuture | null;
}

export function RetirementEstateSection({
  lookFuture,
}: RetirementEstateSectionProps) {
  if (!lookFuture) {
    return null;
  }

  const content1 = lookFuture.content1;
  const pillars = lookFuture.content2 ?? [];
  const content3 = lookFuture.content3;

  /*
   * MixedTitle accepts one "text" prop.
   * Therefore combine title + highlight.
   *
   * Example:
   * title     = "Retirement &"
   * highlight = "Estate Planning1"
   *
   * Result:
   * "Retirement & Estate Planning1"
   */
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
    <section id="retirement-estate" className="py-[100px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        {content1 && (
          <div className="text-center max-w-[600px] mx-auto mb-[50px] fade-in">
            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
              Look To The Future
            </div>

            {mixedTitle(content1.title, content1.highlight) && (
              <MixedTitle
                text={mixedTitle(content1.title, content1.highlight)}
                className="text-[clamp(2.1rem,3.5vw,2.8rem)] text-[#052636] mb-5 leading-[1.25]"
              />
            )}

            {content1.description && (
              <p className="text-[0.98rem] text-[#334155] leading-[1.7]">
                {content1.description}
              </p>
            )}
          </div>
        )}

        {/* =========================================
            PILLARS
        ========================================== */}

        {pillars.length > 0 && (
          <div className="grid grid-cols-1 min-[993px]:grid-cols-2 gap-8 mb-[40px]">
            {pillars.map((pillar, index) => {
              /*
               * First pillar = retirement
               * Second pillar = estate
               *
               * Keep the existing images/design.
               */
              const isRetirement = index === 0;

              return (
                <div
                  key={index}
                  className={
                    isRetirement
                      ? "rounded-[20px] p-[40px] relative overflow-hidden text-white fade-in delay-1"
                      : "rounded-[20px] p-[40px] relative overflow-hidden border border-[#e2e8f0] text-[#0f172a] fade-in delay-2"
                  }
                >
                  {/* Background Image */}

                  <img
                    src={
                      isRetirement
                        ? "/retirementestate/retirement.png"
                        : "/retirementestate/estate.png"
                    }
                    alt={
                      pillar.title ||
                      (isRetirement ? "Retirement Planning" : "Estate Planning")
                    }
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* Content */}

                  <div className="max-w-[320px] min-[576px]:max-w-[58%] relative z-10">
                    {/* Pillar Label */}

                    {pillar.pillar && (
                      <div className="font-serif text-[0.8rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-2">
                        {pillar.pillar}
                      </div>
                    )}

                    {/* Pillar Title */}

                    {pillar.title && (
                      <h3
                        className={
                          isRetirement
                            ? "text-[1.8rem] font-bold mb-1 text-white font-serif"
                            : "text-[1.8rem] font-bold mb-3 text-[#052636] font-serif"
                        }
                      >
                        {pillar.title}
                      </h3>
                    )}

                    {/* Highlight */}

                    {pillar.highlight && (
                      <p className="text-[0.98rem] text-[#d98819] font-semibold mb-4">
                        {pillar.highlight}
                      </p>
                    )}

                    {/* Description */}

                    {pillar.description && (
                      <p
                        className={
                          isRetirement
                            ? "text-[0.92rem] leading-[1.6] mb-6 text-white/90"
                            : "text-[0.92rem] leading-[1.6] mb-6 text-[#334155]"
                        }
                      >
                        {pillar.description}
                      </p>
                    )}

                    {/* Points */}

                    {pillar.points && pillar.points.length > 0 && (
                      <ul className="list-none flex flex-col gap-2.5 p-0">
                        {pillar.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className={
                              isRetirement
                                ? "flex items-center gap-2.5 text-[0.88rem] font-medium"
                                : "flex items-center gap-2.5 text-[0.88rem] font-medium"
                            }
                          >
                            <span className="text-[#d98819]">✓</span>

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================
            CONTENT 3 / CTA
        ========================================== */}

        {content3 && (
          <div className="bg-[#d98819] rounded-[14px] p-8 min-[993px]:px-[40px] flex flex-col min-[993px]:flex-row items-center justify-between gap-6 text-white text-center min-[993px]:text-left fade-in delay-3">
            <div className="max-w-[680px]">
              {mixedTitle(content3.title, content3.highlight) && (
                <MixedTitle
                  text={mixedTitle(content3.title, content3.highlight)}
                  as="h3"
                  className="!text-white text-[2rem] mb-1"
                  accentClass="font-serif italic font-normal text-white/90"
                />
              )}

              {content3.description && (
                <p className="text-[0.92rem] text-white/92">
                  {content3.description}
                </p>
              )}
            </div>

            <Button href="/contact" variant="navy" size="md">
              Start Planning Today
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
