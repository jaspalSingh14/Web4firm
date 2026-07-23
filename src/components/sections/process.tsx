import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, users, and goals to scope the right solution.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes and UI design tailored to your brand, reviewed with you at every step.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop with modern, maintainable code and test across devices.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We ship it, monitor performance, and stay on for updates and support.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How we work
          </h2>
          <p className="mt-4 text-lg text-secondary">
            A straightforward process that keeps you in the loop from kickoff
            to launch.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="text-sm font-bold text-gradient-accent tabular-nums">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
