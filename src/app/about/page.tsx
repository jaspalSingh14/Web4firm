import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About — Web4firm",
  description: "Web4firm is a web design and development studio focused on fast, well-built sites.",
};

const values = [
  {
    title: "Built to perform",
    description:
      "We treat Core Web Vitals and load time as design constraints, not an afterthought — fast sites convert better.",
  },
  {
    title: "Plain communication",
    description:
      "No jargon, no black boxes. You'll always know what stage your project is at and why we made each call.",
  },
  {
    title: "Code you can keep",
    description:
      "We build on standard, well-documented stacks so your site isn't locked to us if you ever need to move on.",
  },
  {
    title: "Accessible by default",
    description:
      "Keyboard navigation, color contrast, and screen-reader support are part of every build, not a retrofit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small studio focused on doing web work well"
        description="Web4firm designs and builds websites and web apps for businesses that want a site that actually performs — not just looks good in a mockup."
      />

      <section className="py-24">
        <Container className="max-w-3xl">
          <Reveal className="space-y-6 text-lg leading-8 text-secondary">
            <p>
              We started Web4firm because too many business websites ship
              slow, hard to update, and disconnected from what the business
              actually needs. Our approach is straightforward: understand the
              goal first, then design and build the smallest thing that
              achieves it well.
            </p>
            <p>
              Every project runs through the same process — discovery,
              design, build, launch — with you involved at each step, not
              just at the kickoff call and the final handoff.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-card py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              What we care about
            </h2>
          </Reveal>
          <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{value.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <Process />
      <Stats />
      <CtaBanner />
    </>
  );
}
