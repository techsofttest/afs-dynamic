import React from "react";
import type { Metadata } from "next";

import { InnerPageBanner } from "../../components/global/InnerPageBanner";
import { ContactInfoSection } from "../../components/contact/ContactInfoSection";
import { ContactFormSection } from "../../components/contact/ContactFormSection";

import { getContact } from "@/lib/contact";

// --------------------------------------------------
// Get Contact Page Data
// --------------------------------------------------

async function getContactPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-page`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact page");
  }

  const result = await res.json();

  return result.data ?? {};
}

// --------------------------------------------------
// Dynamic SEO
// --------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const contactData = await getContactPage();

  const seo = contactData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  const title = seo.meta_title || "Contact Us — Arpan Fin Serve";

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
// Contact Page
// --------------------------------------------------

export default async function ContactPage() {
  // ------------------------------------------------
  // Fetch Contact Information
  // ------------------------------------------------

  const contactPage = await getContact();

  // ------------------------------------------------
  // Fetch Contact Page Banner + SEO Data
  // ------------------------------------------------

  const contactData = await getContactPage();

  // ------------------------------------------------
  // Banner Data
  // ------------------------------------------------

  const bannerData = contactData?.bannerData ?? {};

  const bannerTitle = bannerData?.title || "We're Here to Help You Build Your";

  const bannerHighlight = bannerData?.highlight || "Future";

  const bannerSubtitle =
    bannerData?.description ||
    "Get in touch with our team of experts for personalized financial counselling, mutual fund goal planning, and estate solutions.";

  const bannerImage = bannerData?.image || "/banner/b1.png";

  // ------------------------------------------------
  // Render
  // ------------------------------------------------

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
            label: `Contact Us`,
          },
        ]}
      />

      {/* ------------------------------------------------
          Contact Information
          ------------------------------------------------ */}

      <ContactInfoSection contact={contactPage} />

      {/* ------------------------------------------------
          Contact Form
          ------------------------------------------------ */}

      <ContactFormSection />
    </>
  );
}
