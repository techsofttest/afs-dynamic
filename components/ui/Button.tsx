import React from "react";

export interface ButtonProps {
  variant?: "amber" | "navy" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  showDot?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [key: string]: any;
}

export function Button({
  variant = "amber",
  size = "md",
  href,
  showArrow = true,
  showDot = false,
  type = "button",
  className = "",
  children,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2.5 font-semibold rounded-[10px] overflow-hidden transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 select-none before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700";

  const variantClasses = {
    amber: "bg-[#d98819] text-white hover:bg-[#c47712] shadow-[#d98819]/20",
    navy: "bg-[#052636] text-white hover:bg-[#0b3c53] shadow-[#052636]/20",
    white: "bg-white text-[#052636] hover:bg-[#f8fafc] shadow-black/10 font-bold",
    outline:
      "border-2 border-[#052636] text-[#052636] hover:bg-[#052636] hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-[0.82rem]",
    md: "px-6 py-3 text-[0.9rem]",
    lg: "px-7 py-3.5 text-[0.95rem]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {showDot && (
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
        </span>
      )}
      {children}
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
