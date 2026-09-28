import React from "react";
import type { Metadata } from "next";

import { AboutSection } from "../../components/home/AboutSection";
import { HowWeWorkSection } from "../../components/home/HowWeWorkSection";
import { TrustStrip } from "../../components/home/TrustStrip";
import { ContactSection } from "../../components/home/ContactSection";
import { InnerPageBanner } from "../../components/global/InnerPageBanner";

import { getTrust } from "@/lib/trust";
import { getWhoWeAre } from "@/lib/who-we-are";
import { getSimpleProcess } from "@/lib/simple-process";
import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get About Page Data
// --------------------------------------------------

async function getAboutPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-page`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch about page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutPage();

  const seo = aboutData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  const title = seo.meta_title || "About Us — Arpan Fin Serve";

  return {
    title,

    description,

    keywords: seo.meta_keywords || "",

    openGraph: {
      title,
      description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// --------------------------------------------------
// About Page
// --------------------------------------------------

export default async function AboutPage() {
  // ------------------------------------------------
  // Fetch About Page
  // ------------------------------------------------

  const aboutData = await getAboutPage();

  // ------------------------------------------------
  // Fetch Trust
  // ------------------------------------------------

  const trustPage = await getTrust();

  // ------------------------------------------------
  // Fetch Who We Are
  // ------------------------------------------------

  const whoWeArePage = await getWhoWeAre();

  // ------------------------------------------------
  // Fetch Simple Process
  // ------------------------------------------------

  const simpleProcessPage = await getSimpleProcess();

  // ------------------------------------------------
  // Fetch Contact
  // ------------------------------------------------

  const contactPage = await getContact();

  // ------------------------------------------------
  // Banner Data
  // ------------------------------------------------

  const bannerData = aboutData?.bannerData ?? {};

  const bannerTitle = bannerData?.title || "About";

  const bannerHighlight = bannerData?.highlight || "Us";

  const bannerSubtitle =
    bannerData?.description ||
    "Empowering your financial journey with trust, discipline, and personalized financial & legal expertise.";

  const bannerImage = bannerData?.image || "/banner/b1.png";

  return (
    <>
      {/* ------------------------------------------------
          Reusable Inner Page Banner
          ------------------------------------------------ */}

      <InnerPageBanner
        title={bannerTitle}
        highlight={bannerHighlight}
        subtitle={bannerSubtitle}
        bgImage={bannerImage}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: `About Us`,
          },
        ]}
      />

      {/* ------------------------------------------------
          Trust Strip
          ------------------------------------------------ */}

      <div className="relative z-20">
        <TrustStrip data={trustPage} />
      </div>

      {/* ------------------------------------------------
          Main About Us Section
          ------------------------------------------------ */}

      <div className="pt-10">
        <AboutSection data={whoWeArePage} />
      </div>

      {/* ------------------------------------------------
          How We Work Section
          ------------------------------------------------ */}

      <HowWeWorkSection simpleProcess={simpleProcessPage} />

      {/* ------------------------------------------------
          Contact & Consultation CTA Section
          ------------------------------------------------ */}

      <ContactSection contact={contactPage} />
    </>
  );
}
