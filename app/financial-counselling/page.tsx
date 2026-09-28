import React from "react";
import type { Metadata } from "next";

import { InnerPageBanner } from "../../components/global/InnerPageBanner";
import { ContactSection } from "../../components/home/ContactSection";
import { ServiceDetailSection } from "../../components/services/ServiceDetailSection";
import { FinancialCounsellingCoverageSection } from "../../components/services/FinancialCounsellingCoverageSection";

import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get Financial Counselling Page Data
// --------------------------------------------------

async function getFinancialCounsellingPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/financial-counselling`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch financial counselling page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getFinancialCounsellingPage();

  const seo = pageData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  const title = seo.meta_title || "Financial Counselling — Arpan Fin Serve";

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
// Financial Counselling Page
// --------------------------------------------------

export default async function FinancialCounsellingPage() {
  // ------------------------------------------------
  // Fetch Financial Counselling Page
  // ------------------------------------------------

  const pageData = await getFinancialCounsellingPage();

  // ------------------------------------------------
  // Fetch Contact Data
  // ------------------------------------------------

  const contact = await getContact();

  // ------------------------------------------------
  // Page Sections
  // ------------------------------------------------

  const bannerData = pageData?.bannerData ?? {};
  const personalizedGuidance = pageData?.personalized_guidance ?? {};
  const counsellingCovers = pageData?.counselling_covers ?? {};

  /*
  |--------------------------------------------------------------------------
  | Banner
  |--------------------------------------------------------------------------
  */

  const bannerTitle = bannerData?.title || "Financial";

  const bannerHighlight = bannerData?.highlight || "Counselling";

  const bannerSubtitle =
    bannerData?.description ||
    "Structured, personalized guidance to help you organize, manage, and elevate your financial life.";

  const bannerImage = bannerData?.image || "/banner/b1.png";

  /*
  |--------------------------------------------------------------------------
  | Personalized Guidance
  |--------------------------------------------------------------------------
  */

  const guidanceTitle =
    [personalizedGuidance?.title, personalizedGuidance?.highlight]
      .filter(Boolean)
      .join(" ") || "Client-Centric & Need-Based Counselling";

  const guidanceParagraphs = Array.isArray(personalizedGuidance?.descriptions)
    ? personalizedGuidance.descriptions
    : [];

  const guidanceImage =
    personalizedGuidance?.image || "/assets/images/home-page/h1.png";

  const finalContent = personalizedGuidance?.final_content ?? {};

  /*
  |--------------------------------------------------------------------------
  | Counselling Covers
  |--------------------------------------------------------------------------
  */

  const counsellingItems = Array.isArray(counsellingCovers?.items)
    ? counsellingCovers.items
    : [];

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <>
      {/* ------------------------------------------------
          Top Banner
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
            label: `Financial Counselling`,
          },
        ]}
      />

      {/* ------------------------------------------------
          Personalized Guidance
          ------------------------------------------------ */}

      <ServiceDetailSection
        tagline="Personalized Guidance"
        title={guidanceTitle}
        paragraphs={guidanceParagraphs}
        ctaText="Schedule a Consultation"
        ctaHref="/contact"
        imageSrc={guidanceImage}
        imageAlt="Financial Counselling Session"
        imageBadgeTagline={finalContent?.title || "Empowering Your Decisions"}
        imageBadgeTitle={
          finalContent?.subtitle || "Clarity. Discipline. Confidence."
        }
      />

      {/* ------------------------------------------------
          Counselling Coverage
          ------------------------------------------------ */}

      <FinancialCounsellingCoverageSection
        title={counsellingCovers?.title}
        highlight={counsellingCovers?.highlight}
        items={counsellingItems}
      />

      {/* ------------------------------------------------
          Contact
          ------------------------------------------------ */}

      <ContactSection contact={contact} />
    </>
  );
}
