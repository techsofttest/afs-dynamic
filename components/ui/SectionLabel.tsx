import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  centered?: boolean;
  color?: string;
  className?: string;
}

export function SectionLabel({ children, centered = false, color, className = "" }: SectionLabelProps) {
  const alignClass = centered ? "justify-center" : "";
  const textColor = color ? "" : "text-[#d98819]";
  const inlineStyle = color ? { color } : undefined;

  return (
    <div
      className={`text-[0.78rem] font-bold tracking-[0.14em] uppercase mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-current ${textColor} ${alignClass} ${className}`}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}
