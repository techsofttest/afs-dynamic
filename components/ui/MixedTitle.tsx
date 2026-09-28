import React from "react";

export interface MixedTitleProps {
  text: string;
  highlight?: string;
  className?: string;
  accentClass?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
}

export function MixedTitle({
  text,
  highlight,
  className = "",
  accentClass = "text-[#d98819]",
  as: Component = "h2",
}: MixedTitleProps) {
  if (!text && !highlight) return null;

  /*
   * If highlight is provided explicitly,
   * use the dynamic title + highlight values from the API.
   */
  if (highlight) {
    return (
      <Component className={className}>
        {text && <>{text} </>}

        <span className={`font-serif italic font-normal ${accentClass}`}>
          {highlight}
        </span>
      </Component>
    );
  }

  /*
   * Existing behavior:
   * If no highlight is provided, highlight the last 2 words.
   *
   * This keeps all existing MixedTitle usages working.
   */
  if (!text) return null;

  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return <Component className={className}>{text}</Component>;
  }

  const mainPart = words.slice(0, Math.max(1, words.length - 2)).join(" ");

  const serifPart = words.slice(Math.max(1, words.length - 2)).join(" ");

  return (
    <Component className={className}>
      {mainPart}{" "}
      <span className={`font-serif italic font-normal ${accentClass}`}>
        {serifPart}
      </span>
    </Component>
  );
}
