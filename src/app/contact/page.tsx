import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact — Web4firm",
  description: "Get in touch with Web4firm about your next web project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us a bit about what you're building and we'll get back to you within one business day."
      />
      <Contact />
    </>
  );
}
