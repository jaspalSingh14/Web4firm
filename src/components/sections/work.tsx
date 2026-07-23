import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

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
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 bg-card py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-secondary">
            A sample of the kind of projects we build. Ask us for full case
            studies from recent clients.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
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

        <Reveal className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            View all work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
