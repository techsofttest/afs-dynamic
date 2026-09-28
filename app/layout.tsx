import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { TopBar } from "../components/global/TopBar";
import { Navbar } from "../components/global/Navbar";
import { Footer } from "../components/global/Footer";
import { ScrollRevealProvider } from "../components/global/ScrollRevealProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpan Fin Serve — Financial Counselling and Beyond",
  description:
    "Arpan Fin Serve provides expert financial counselling, mutual fund planning, retirement and estate planning services tailored to your life goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <ScrollRevealProvider>
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
