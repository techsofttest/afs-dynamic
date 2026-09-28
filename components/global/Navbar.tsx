"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[1000] bg-white border-b border-[#e2e8f0] py-3" id="mainNav">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/assets/logo/afs-logo.png"
              alt="Arpan Fin Serve Logo"
              width={160}
              height={42}
              className="h-[42px] w-auto max-h-[42px] object-contain"
              priority
            />
          </Link>

          <ul className={`${navOpen ? "flex flex-col absolute top-full left-0 w-full bg-white border-b border-[#e2e8f0] p-6 shadow-md" : "hidden min-[1121px]:flex"} list-none items-center gap-[clamp(14px,1.8vw,24px)] m-0 p-0`} id="navLinks">
            <li><Link href="/" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">Home</Link></li>
            <li><Link href="/about" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">About Us</Link></li>
            <li><Link href="/financial-counselling" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">Financial Counselling</Link></li>
            <li><Link href="/mutual-funds" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">Mutual Funds &amp; Goal Planning</Link></li>
            <li><Link href="/retirement-estate" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">Retirement Planning</Link></li>
            <li><Link href="/contact" onClick={() => setNavOpen(false)} className="text-[0.86rem] font-semibold text-[#052636] whitespace-nowrap transition-colors duration-300 hover:text-[#d98819]">Contact</Link></li>
          </ul>

          <div className="shrink-0 hidden min-[576px]:block">
            <Button href="/contact" variant="navy" size="sm" showDot>
              Book a Free Consultation
            </Button>
          </div>

          <button
            className="min-[1121px]:hidden bg-transparent border-0 cursor-pointer p-1 flex flex-col gap-1.25"
            aria-label="Toggle navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="block w-6 h-0.5 bg-[#052636]"></span>
            <span className="block w-6 h-0.5 bg-[#052636]"></span>
            <span className="block w-6 h-0.5 bg-[#052636]"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
