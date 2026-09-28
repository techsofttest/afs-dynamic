import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getContact } from "@/lib/contact";

export async function Footer() {
  const currentYear = new Date().getFullYear();

  const contact = await getContact();

  return (
    <footer className="relative bg-[#052636] text-white/80 pt-[95px] pb-[45px] text-[0.9rem] overflow-hidden">
      {/* Background Watermark Text - Full Width, Faded Gradient from Light White (Bottom) to Transparent (Top) */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full flex justify-center items-end pointer-events-none select-none z-0 overflow-hidden leading-none translate-y-[28%]"
        aria-hidden="true"
      >
        <span className="w-full text-center text-[clamp(2.8rem,11.5vw,13rem)] font-serif font-black uppercase tracking-tight whitespace-nowrap leading-none bg-gradient-to-t from-white/20 via-white/5 to-transparent bg-clip-text text-transparent">
          Arpan Fin Serve
        </span>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 min-[577px]:grid-cols-2 min-[993px]:grid-cols-[2fr_1fr_1fr_1.2fr] gap-[50px] pb-[60px] border-b border-white/10">
          <div>
            <Link href="/">
              <Image
                src="/assets/logo/afs-logo.png"
                alt="Arpan Fin Serve"
                width={160}
                height={48}
                className="h-[78px] w-auto brightness-0 invert mb-5 object-contain"
              />
            </Link>

            <p className="leading-[1.75] text-white/80 max-w-[320px]">
              Providing structured, need-based financial counselling that helps
              individuals and families achieve clarity, discipline, and
              confidence.
            </p>
          </div>

          <div>
            <div className="text-[0.95rem] font-bold text-white mb-6">
              Quick Links
            </div>

            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/financial-counselling"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Financial Counselling
                </Link>
              </li>

              <li>
                <Link
                  href="/mutual-funds"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Mutual Funds &amp; Goals
                </Link>
              </li>

              <li>
                <Link
                  href="/retirement-estate"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Retirement &amp; Estate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[0.95rem] font-bold text-white mb-6">
              Our Services
            </div>

            <ul className="list-none flex flex-col gap-3 p-0 m-0">
              <li>
                <Link
                  href="/financial-counselling"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Financial Advisory
                </Link>
              </li>

              <li>
                <Link
                  href="/mutual-funds"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Mutual Funds
                </Link>
              </li>

              <li>
                <Link
                  href="/mutual-funds"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  SIP Planning
                </Link>
              </li>

              <li>
                <Link
                  href="/retirement-estate"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Retirement Plans
                </Link>
              </li>

              <li>
                <Link
                  href="/retirement-estate"
                  className="text-white/80 transition-colors duration-300 hover:text-[#d98819]"
                >
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[0.95rem] font-bold text-white mb-6">
              Contact Us
            </div>

            <p className="text-white/80 mb-2 font-medium">
              {contact.phone || "—"}
            </p>

            <p className="text-white/80 mb-2 font-medium">
              {contact.email || "—"}
            </p>

            <div
              className="text-white/80 mb-4"
              dangerouslySetInnerHTML={{
                __html: contact.address || "—",
              }}
            />

            <Link
              href="/contact"
              className="inline-block text-[0.82rem] font-bold text-[#d98819] uppercase tracking-wider hover:underline"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>

        <div className="flex flex-col min-[576px]:flex-row justify-between items-center gap-4 pt-8 text-[0.85rem] text-white/70">
          <div>&copy; {currentYear} Arpan Fin Serve. All rights reserved.</div>

          <div>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-normal hover:underline underline-offset-4 transition-colors"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
