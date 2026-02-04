import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import HowItWorks from "@/components/sections/HowItWorks";
import PricingPreview from "@/components/sections/PricingPreview";
import LocalTrust from "@/components/sections/LocalTrust";
import BottomCTA from "@/components/sections/BottomCTA";

export const metadata: Metadata = {
  title: "Summit Studio | Custom Software for Local Business",
  description:
    "Eliminate manual work and save 20+ hours per week. Custom software built for your business. Transparent pricing, no jargon. Cookeville, TN.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <PricingPreview />
      <LocalTrust />
      <BottomCTA />
    </>
  );
}
