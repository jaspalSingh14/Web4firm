import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services — Web4firm",
  description: "Web design, development, e-commerce, SEO, branding, and ongoing support from Web4firm.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to launch and grow online"
        description="From first design file to production deploy, we cover the full build — and stay on to help it grow."
      />
      <Services />
      <Process />
      <CtaBanner />
    </>
  );
}
