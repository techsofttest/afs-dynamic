import React from "react";
import type { Metadata } from "next";

import { HeroSection } from "../components/home/HeroSection";
import { TrustStrip } from "../components/home/TrustStrip";
import { AboutSection } from "../components/home/AboutSection";
import { FinancialServicesSection } from "../components/home/FinancialServicesSection";
import { MutualFundsSection } from "../components/home/MutualFundsSection";
import { RetirementEstateSection } from "../components/home/RetirementEstateSection";
import { HowWeWorkSection } from "../components/home/HowWeWorkSection";
import { ContactSection } from "../components/home/ContactSection";

import { getTrust } from "@/lib/trust";
import { getWhoWeAre } from "@/lib/who-we-are";
import { getSimpleProcess } from "@/lib/simple-process";
import { getContact } from "@/lib/contact";

async function getHomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-page`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home page");
  }

  const result = await res.json();

  return result.data ?? {};
}

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await getHomePage();

  const seo = homeData?.seo ?? {};

  const description = (seo.meta_description || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return {
    title: seo.meta_title || "Home",
    description,
    keywords: seo.meta_keywords || "",

    openGraph: {
      title: seo.meta_title || "Home",
      description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.meta_title || "Home",
      description,
    },
  };
}

export default async function Home() {
  const homeData = await getHomePage();

  // Fetch Trust
  const trustPage = await getTrust();

  // Fetch WhoWeAre
  const whoWeArePage = await getWhoWeAre();

  // Fetch SimpleProcess
  const simpleProcessPage = await getSimpleProcess();

  // Fetch Contact
  const contactPage = await getContact();

  // console.log("Home Data:", homeData);

  // console.log("Trust Page:", trustPage);

  // console.log("Simple Process Page:", simpleProcessPage);

  return (
    <>
      <HeroSection banner={homeData.banner} sliders={homeData.sliders} />
      <TrustStrip data={trustPage} />
      <AboutSection data={whoWeArePage} />

      <FinancialServicesSection
        services={homeData.our_services}
        howItWorks={homeData.how_it_works}
      />

      <MutualFundsSection planToday={homeData.plan_today} />
      <RetirementEstateSection lookFuture={homeData.look_future} />
      <HowWeWorkSection simpleProcess={simpleProcessPage} />
      <ContactSection contact={contactPage} />
    </>
  );
}
