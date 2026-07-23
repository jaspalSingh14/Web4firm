import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Pricing — Web4firm",
  description: "Example starting rates for Web4firm web design and development packages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Straightforward packages, custom quotes"
        description="Every project is scoped individually — these are starting points to give you a sense of range."
      />
      <Pricing />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
