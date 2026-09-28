import React from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";

interface PlanTodayContent1 {
  title?: string;
  highlight?: string;
  descriptions?: string[];
}

interface PlanTodayGoal {
  title?: string;
  description?: string;
}

interface PlanToday {
  id?: number;
  content1?: PlanTodayContent1;
  content2?: PlanTodayGoal[];
}

interface MutualFundsSectionProps {
  planToday?: PlanToday | null;
}

export function MutualFundsSection({ planToday }: MutualFundsSectionProps) {
  const content1 = planToday?.content1;
  const goals = planToday?.content2 ?? [];

  return (
    <section
      id="mutual-funds"
      className="relative bg-cover bg-center bg-no-repeat py-[100px] text-white before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.35)_55%,transparent_100%)]"
      style={{
        backgroundImage: "url('/plan-today/b1.png')",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-[2]">
        <div className="grid grid-cols-1 min-[993px]:grid-cols-2 gap-[60px] items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
              Plan Today
            </div>

            <MixedTitle
              text={`${content1?.title || ""} ${content1?.highlight || ""}`}
              className="!text-white text-[2.8rem] mb-5 leading-[1.25]"
            />

            {content1?.descriptions?.map((description, index) => (
              <p
                key={index}
                className={`text-[1.05rem] text-white/92 leading-[1.7] ${
                  index === content1.descriptions!.length - 1 ? "mb-8" : "mb-4"
                }`}
              >
                {description}
              </p>
            ))}

            <Button href="/contact" variant="white" size="lg">
              Explore Our Services
            </Button>
          </div>

          {/* Goal Cards */}
          <div className="fade-in delay-1">
            <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-6">
              {goals.map((goal, index) => {
                /*
                 * Keep the existing card colors/design:
                 * 0 = White
                 * 1 = Amber
                 * 2 = Teal
                 * 3 = Dark Navy
                 */

                const cardClasses = [
                  "bg-white text-[#052636]",
                  "bg-[#d98819] text-white",
                  "bg-[var(--teal-accent,#007a8c)] text-white",
                  "bg-[#082d3e] text-white border border-white/10",
                ];

                const titleClasses = [
                  "text-[#052636]",
                  "text-white",
                  "text-white",
                  "text-white",
                ];

                const descriptionClasses = [
                  "text-[#334155]",
                  "text-white/92",
                  "text-white/92",
                  "text-white/92",
                ];

                return (
                  <div
                    key={index}
                    className={`p-8 rounded-[24px] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[210px] ${
                      cardClasses[index] || cardClasses[3]
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4
                        className={`font-serif text-[1.75rem] font-bold leading-tight ${
                          titleClasses[index] || "text-white"
                        }`}
                      >
                        {goal.title || ""}
                      </h4>

                      {/* Card Icons */}
                      {index === 0 && (
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="text-[#d98819] shrink-0 mt-0.5"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                      )}

                      {index === 1 && (
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="text-white shrink-0 mt-0.5"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                        </svg>
                      )}

                      {index === 2 && (
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="text-white shrink-0 mt-0.5"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        </svg>
                      )}

                      {index === 3 && (
                        <svg
                          width="32"
                          height="32"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="text-white shrink-0 mt-0.5"
                        >
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
                        </svg>
                      )}
                    </div>

                    <p
                      className={`text-[1.02rem] mt-auto pt-6 font-normal ${
                        descriptionClasses[index] || "text-white/92"
                      }`}
                    >
                      {goal.description || ""}
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
