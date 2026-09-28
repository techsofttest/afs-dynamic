import React from "react";
import type { Metadata } from "next";

import { InnerPageBanner } from "../../components/global/InnerPageBanner";
import { ContactSection } from "../../components/home/ContactSection";
import { ServiceDetailSection } from "../../components/services/ServiceDetailSection";
import { GoalCardsSection } from "../../components/services/GoalCardsSection";

import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get Mutual Funds Page Data
// --------------------------------------------------

async function getMutualFundsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mutual-funds`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Mutual Funds & Goal Planning page");
  }

  const data = await res.json();

  console.log(
    "========== MUTUAL FUNDS API RESPONSE ==========",
    JSON.stringify(data, null, 2),
  );

  return data;
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  try {
    const response = await getMutualFundsPage();

    const seo = response?.data?.seo ?? {};

    const title =
      seo.meta_title || "Mutual Funds & Goal Planning — Arpan Fin Serve";

    const description =
      seo.meta_description ||
      "Aligning disciplined investment strategies with clear life objectives for long-term wealth creation.";

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
      title: "Mutual Funds & Goal Planning — Arpan Fin Serve",

      description:
        "Aligning disciplined investments with clear life objectives for long-term wealth creation.",
    };
  }
}

// --------------------------------------------------
// Mutual Funds Page
// --------------------------------------------------

export default async function MutualFundsPage() {
  // ------------------------------------------------
  // Fetch Page + Contact Data
  // ------------------------------------------------

  const [pageData, contact] = await Promise.all([
    getMutualFundsPage(),
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
   *     struct_invest: {},
   *     life_obj: {}
   *   }
   * }
   */

  const data = pageData?.data ?? {};

  // ------------------------------------------------
  // Banner
  // ------------------------------------------------

  const banner = data?.bannerData ?? {};

  const bannerTitle = banner?.title || "Mutual Funds &";

  const bannerHighlight = banner?.highlight || "Goal Planning";

  const bannerSubtitle =
    banner?.description ||
    "Aligning disciplined investments with clear life objectives to achieve financial security and prosperity.";

  const bannerImage = banner?.image || "/banner/b1.png";

  // ------------------------------------------------
  // Investment / Structured Investing
  // ------------------------------------------------

  const investment = data?.struct_invest ?? {};

  const investmentTitle = investment?.title || "Turn Aspirations into";

  const investmentHighlight = investment?.highlight || "Measurable Wealth";

  const investmentParagraphs = Array.isArray(investment?.descriptions)
    ? investment.descriptions
    : [];

  const investmentImage =
    investment?.image || "/assets/images/home-page/h3.png";

  const investmentImageTitle =
    investment?.image_title || "Disciplined Investing";

  const investmentImageSubtitle =
    investment?.image_subtitle || "SIPs & Targeted Portfolio Growth";

  // ------------------------------------------------
  // Life Objectives
  // ------------------------------------------------

  const lifeObjectives = data?.life_obj ?? {};

  const lifeObjectivesTitle = lifeObjectives?.title || "Invest For Your";

  const lifeObjectivesHighlight = lifeObjectives?.highlight || "Key Goals";

  const goals = Array.isArray(lifeObjectives?.goals)
    ? lifeObjectives.goals
    : [];

  // ------------------------------------------------
  // Debug
  // ------------------------------------------------

  console.log("Banner Data:", banner);

  console.log("Investment Data:", investment);

  console.log("Life Objectives:", lifeObjectives);

  console.log("Life Objectives Title:", lifeObjectivesTitle);

  console.log("Life Objectives Highlight:", lifeObjectivesHighlight);

  console.log("Goals:", goals);

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
          INVESTMENT SECTION
      ========================== */}

      <ServiceDetailSection
        tagline={investmentTitle}
        title={investmentHighlight}
        paragraphs={investmentParagraphs}
        ctaText="Start Your SIP Plan"
        ctaHref="/contact"
        imageSrc={investmentImage}
        imageAlt="Goal Planning and Mutual Funds"
        imageBadgeTagline={investmentImageTitle}
        imageBadgeTitle={investmentImageSubtitle}
      />

      {/* =========================
          LIFE OBJECTIVES / GOALS
      ========================== */}

      <GoalCardsSection
        title={lifeObjectivesTitle}
        highlight={lifeObjectivesHighlight}
        goals={goals}
      />

      {/* =========================
          CONTACT
      ========================== */}

      <ContactSection contact={contact} />
    </>
  );
}
