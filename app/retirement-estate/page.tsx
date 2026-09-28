import React from "react";
import type { Metadata } from "next";

import { InnerPageBanner } from "../../components/global/InnerPageBanner";
import { ContactSection } from "../../components/home/ContactSection";
import { RetirementEstateHeader } from "../../components/services/RetirementEstateHeader";
import { RetirementEstateFeatureCards } from "../../components/services/RetirementEstateFeatureCards";
import { RetirementEstateFrameworkSection } from "../../components/services/RetirementEstateFrameworkSection";

import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get Retirement & Estate Planning Page Data
// --------------------------------------------------

async function getRetirementEstatePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/retirement-estate`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Retirement & Estate Planning page");
  }

  const data = await res.json();

  console.log(
    "========== RETIREMENT & ESTATE API RESPONSE ==========",
    JSON.stringify(data, null, 2),
  );

  return data;
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await getRetirementEstatePage();

    const seo = response?.data?.seo ?? {};

    const title =
      seo.meta_title || "Retirement & Estate Planning — Arpan Fin Serve";

    const description =
      seo.meta_description ||
      "Comprehensive financial framework securing your future while safeguarding your family legacy.";

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
  } catch {
    return {
      title: "Retirement & Estate Planning — Arpan Fin Serve",
      description:
        "Comprehensive financial framework securing your future while safeguarding your family legacy.",
    };
  }
}

// --------------------------------------------------
// Retirement & Estate Planning Page
// --------------------------------------------------

export default async function RetirementEstatePage() {
  // ------------------------------------------------
  // Fetch Page + Contact Data
  // ------------------------------------------------

  const [pageData, contact] = await Promise.all([
    getRetirementEstatePage(),
    getContact(),
  ]);

  /*
   * API response:
   *
   * {
   *   status: true,
   *   data: {
   *     seo: {},
   *     bannerData: {},
   *     protecting_freedom: {},
   *     planning: {
   *       retirement: {},
   *       estate: {}
   *     },
   *     financial_framework: {}
   *   }
   * }
   */

  const data = pageData?.data ?? {};

  // ------------------------------------------------
  // Banner
  // ------------------------------------------------

  const banner = data?.bannerData ?? {};

  const bannerTitle = banner?.title || "Retirement &";

  const bannerHighlight = banner?.highlight || "Estate Planning";

  const bannerSubtitle =
    banner?.description ||
    "Securing your personal financial independence and protecting your family legacy for generations to come.";

  const bannerImage = banner?.image || "/banner/b1.png";

  // ------------------------------------------------
  // Protecting Freedom
  // ------------------------------------------------

  const protectingFreedom = data?.protecting_freedom ?? {};

  const protectingFreedomTitle =
    protectingFreedom?.title || "Protecting Your Freedom";

  const protectingFreedomHighlight = protectingFreedom?.highlight || "& Legacy";

  const protectingFreedomDescription = protectingFreedom?.description || "";

  // ------------------------------------------------
  // Retirement & Estate Planning
  // ------------------------------------------------

  const planning = data?.planning ?? {};

  const retirement = planning?.retirement ?? {};

  const estate = planning?.estate ?? {};

  // ------------------------------------------------
  // Retirement Planning
  // ------------------------------------------------

  const retirementTitle = retirement?.title || "Retirement Planning";

  const retirementSubtitle = retirement?.subtitle || "";

  const retirementParagraphs = Array.isArray(retirement?.paragraphs)
    ? retirement.paragraphs
    : [];

  // ------------------------------------------------
  // Estate Planning
  // ------------------------------------------------

  const estateTitle = estate?.title || "Estate Planning";

  const estateSubtitle = estate?.subtitle || "";

  const estateParagraphs = Array.isArray(estate?.paragraphs)
    ? estate.paragraphs
    : [];

  // ------------------------------------------------
  // Financial Framework
  // ------------------------------------------------

  const financialFramework = data?.financial_framework ?? {};

  const financialFrameworkTitle =
    financialFramework?.title || "A Comprehensive";

  const financialFrameworkHighlight =
    financialFramework?.highlight || "Financial Framework";

  const financialFrameworkDescription = financialFramework?.description || "";

  // ------------------------------------------------
  // Debug
  // ------------------------------------------------

  console.log("Banner Data:", banner);

  console.log("Protecting Freedom:", protectingFreedom);

  console.log("Retirement Planning:", retirement);

  console.log("Estate Planning:", estate);

  console.log("Financial Framework:", financialFramework);

  // ------------------------------------------------
  // Render
  // ------------------------------------------------

  return (
    <>
      {/* =========================
          INNER PAGE BANNER
      ========================== */}

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
            label: `${bannerTitle} ${bannerHighlight}`,
          },
        ]}
      />

      {/* =========================
          PROTECTING FREEDOM
      ========================== */}

      <RetirementEstateHeader
        title={protectingFreedomTitle}
        highlight={protectingFreedomHighlight}
        description={protectingFreedomDescription}
      />

      {/* =========================
          RETIREMENT & ESTATE
          FEATURE CARDS
      ========================== */}

      <RetirementEstateFeatureCards
        retirement={{
          title: retirementTitle,
          subtitle: retirementSubtitle,
          paragraphs: retirementParagraphs,
        }}
        estate={{
          title: estateTitle,
          subtitle: estateSubtitle,
          paragraphs: estateParagraphs,
        }}
      />

      {/* =========================
          FINANCIAL FRAMEWORK
      ========================== */}

      <RetirementEstateFrameworkSection
        title={financialFrameworkTitle}
        highlight={financialFrameworkHighlight}
        description={financialFrameworkDescription}
      />

      {/* =========================
          CONTACT
      ========================== */}

      <ContactSection contact={contact} />
    </>
  );
}
