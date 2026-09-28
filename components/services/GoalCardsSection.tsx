import React from "react";
import { MixedTitle } from "../ui/MixedTitle";

interface Goal {
  id?: number;
  title: string;
  description: string;
  icon?: string;
}

interface GoalCardsSectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  goals?: Goal[];
}

function GoalIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "home":
      return (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="text-white shrink-0 mt-0.5"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );

    case "retirement":
      return (
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
      );

    case "education":
      return (
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
      );

    case "wealth":
      return (
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
      );

    default:
      return (
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="text-white shrink-0 mt-0.5"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function GoalCardsSection({
  title = "Invest For Your",
  highlight = "Key Goals",
  subtitle = "Life Objective Mapping",
  goals = [],
}: GoalCardsSectionProps) {
  const cardStyles = [
    "bg-[var(--teal-accent,#007a8c)] border border-[#e2e8f0]",
    "bg-[#d98819]",
    "bg-[var(--teal-accent,#007a8c)]",
    "bg-[#082d3e] border border-white/10",
  ];

  return (
    <section className="py-[90px] bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="text-center max-w-[650px] mx-auto mb-12 fade-in">
          <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-2 flex items-center justify-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819] after:content-[''] after:w-[18px] after:h-[2px] after:bg-[#d98819]">
            {subtitle}
          </div>

          <MixedTitle
            text={title}
            highlight={highlight}
            as="h3"
            className="text-[2.2rem] font-sans font-bold text-[#052636]"
          />
        </div>

        {/* Goal Cards */}
        <div className="grid grid-cols-1 min-[577px]:grid-cols-4 gap-6">
          {goals.map((goal, index) => {
            const cardStyle = cardStyles[index % cardStyles.length];

            const delayClass = index === 0 ? "" : `delay-${index}`;

            return (
              <div
                key={goal.id ?? index}
                className={`p-8 rounded-[24px] ${cardStyle} text-white flex flex-col justify-between min-h-[210px] fade-in ${delayClass}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-[2rem] font-bold text-white leading-tight">
                    {goal.title}
                  </h4>

                  <GoalIcon icon={goal.icon} />
                </div>

                <p className="text-[1.02rem] text-white/92 mt-auto pt-6">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
