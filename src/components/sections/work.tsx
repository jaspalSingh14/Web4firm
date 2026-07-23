import { Container } from "@/components/container";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    tag: "Web App",
    description: "A data-dense admin dashboard with real-time charts, built for speed and clarity.",
    gradient: "from-slate-800 via-slate-700 to-sky-700",
  },
  {
    title: "E-Commerce Storefront",
    tag: "E-commerce",
    description: "A conversion-focused storefront with a fast checkout flow and product search.",
    gradient: "from-sky-800 via-slate-800 to-slate-900",
  },
  {
    title: "Restaurant Booking Platform",
    tag: "Booking System",
    description: "An online reservations system with live availability and automated confirmations.",
    gradient: "from-slate-900 via-sky-900 to-slate-700",
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 bg-card py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-secondary">
            A sample of the kind of projects we build. Ask us for full case
            studies from recent clients.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} transition-transform duration-300 group-hover:-translate-y-1`}
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
        </div>
      </Container>
    </section>
  );
}
