"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Run after DOM updates on page navigation
    const timeoutId = setTimeout(() => {
      const revealEls = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      );

      revealEls.forEach((el) => {
        // If element is already in viewport or top of page, make it visible immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      // Clean up timeout
    };
  }, [pathname]);

  return <>{children}</>;
}
