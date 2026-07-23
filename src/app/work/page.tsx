import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Work — Web4firm",
  description: "A sample of the kind of web design and development projects Web4firm builds.",
};

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    tag: "Web App",
    description: "A data-dense admin dashboard with real-time charts, built for speed and clarity.",
    gradient: "from-indigo-600 via-slate-800 to-violet-700",
  },
  {
    title: "E-Commerce Storefront",
    tag: "E-commerce",
    description: "A conversion-focused storefront with a fast checkout flow and product search.",
    gradient: "from-violet-700 via-slate-800 to-indigo-900",
  },
  {
    title: "Restaurant Booking Platform",
    tag: "Booking System",
    description: "An online reservations system with live availability and automated confirmations.",
    gradient: "from-slate-900 via-indigo-900 to-violet-800",
  },
  {
    title: "Clinic Scheduling Portal",
    tag: "Web App",
    description: "A patient-facing portal for booking appointments and managing records securely.",
    gradient: "from-indigo-900 via-slate-900 to-slate-700",
  },
  {
    title: "D2C Subscription Storefront",
    tag: "E-commerce",
    description: "A subscription-based storefront with recurring billing and a customer portal.",
    gradient: "from-violet-800 via-indigo-800 to-slate-900",
  },
  {
    title: "Real Estate Listings Site",
    tag: "Marketing Site",
    description: "A fast, map-driven listings site with saved searches and lead capture.",
    gradient: "from-slate-800 via-violet-900 to-indigo-900",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="A sample of what we build"
        description="These represent the kind of projects we take on. Ask us for full case studies from recent clients."
      />

      <section className="py-24">
        <Container>
          <Reveal stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div
                  className={`aspect-4/3 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} shadow-glow transition-transform duration-300 group-hover:-translate-y-1`}
                />
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.tag}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-secondary">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
