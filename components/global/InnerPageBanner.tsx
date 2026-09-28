import React from "react";
import Link from "next/link";

import { MixedTitle } from "../ui/MixedTitle";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InnerPageBannerProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function InnerPageBanner({
  title,
  highlight,
  subtitle,
  bgImage = "/assets/images/home-page/h1.png",
  breadcrumbs,
}: InnerPageBannerProps) {
  const finalBreadcrumbs = breadcrumbs ?? [
    {
      label: "Home",
      href: "/",
    },
    {
      label: `${title}${highlight ? ` ${highlight}` : ""}`,
    },
  ];

  return (
    <section className="relative py-[80px] min-[993px]:py-0 min-[993px]:h-[60vh] min-[993px]:min-h-[440px] min-[993px]:max-h-[620px] bg-[#052636] text-white overflow-hidden text-center flex items-center justify-center">
      {/* Background Image with Deep Gradient Overlays */}
      <img
        src={bgImage}
        alt={`${title}${highlight ? ` ${highlight}` : ""}`}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#052636]/70 via-[#052636]/45 to-[#041a25]/75" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#052636_100%)] opacity-80" />

      {/* Elegant Geometric Shape Layer */}

      {/* Concentric Rings Left */}
      <div className="absolute -left-[80px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/10 hidden min-[768px]:block pointer-events-none" />

      <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-[#d98819]/25 hidden min-[768px]:block pointer-events-none" />

      {/* Concentric Rings Right */}
      <div className="absolute -right-[80px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/10 hidden min-[768px]:block pointer-events-none" />

      <div className="absolute -right-[40px] top-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-[#d98819]/25 hidden min-[768px]:block pointer-events-none" />

      {/* Floating Rotated Diamond Accents */}
      <div className="absolute left-[12%] top-[20%] w-[60px] h-[60px] border border-white/10 rotate-45 hidden min-[993px]:block pointer-events-none" />

      <div className="absolute right-[12%] bottom-[20%] w-[60px] h-[60px] border border-[#d98819]/20 rotate-45 hidden min-[993px]:block pointer-events-none" />

      {/* Dot Matrix Pattern Accents */}
      <div className="absolute left-[5%] bottom-[15%] w-[120px] h-[60px] opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] hidden min-[768px]:block pointer-events-none" />

      <div className="absolute right-[5%] top-[15%] w-[120px] h-[60px] opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] hidden min-[768px]:block pointer-events-none" />

      {/* Banner Content Container */}
      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-[10] flex flex-col items-center">
        {/* Breadcrumb Badge */}
        {finalBreadcrumbs && finalBreadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-[0.82rem] font-medium text-white/90 shadow-sm">
              {finalBreadcrumbs.map((item, index) => {
                const isLast = index === finalBreadcrumbs.length - 1;

                return (
                  <li key={index} className="flex items-center gap-2">
                    {index > 0 && (
                      <span className="text-[#d98819] font-bold">/</span>
                    )}

                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="hover:text-[#d98819] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[#d98819] font-semibold">
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Banner Title */}
        <MixedTitle
          text={title}
          highlight={highlight}
          as="h1"
          className="text-[clamp(2.5rem,4.8vw,3.8rem)] font-bold font-sans leading-[1.15] text-white tracking-tight drop-shadow-md mb-4"
        />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[1.05rem] min-[768px]:text-[1.12rem] text-white/88 max-w-[660px] mx-auto leading-[1.65] font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
