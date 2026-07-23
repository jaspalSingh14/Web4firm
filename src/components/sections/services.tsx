import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Web Design",
    description:
      "Clean, on-brand interfaces designed around your users and your goals — from wireframe to polished UI.",
    icon: (
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 10h16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible, well-engineered sites and apps built with modern frameworks like Next.js and React.",
    icon: (
      <path
        d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "E-commerce",
    description:
      "Storefronts that convert — product catalogs, checkout flows, and integrations built to sell.",
    icon: (
      <path
        d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "SEO & Performance",
    description:
      "Technical SEO, Core Web Vitals, and performance tuning so people can actually find and use your site.",
    icon: (
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.35-4.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Branding",
    description:
      "Logo, color, and typography systems that give your business a consistent, memorable identity.",
    icon: (
      <path
        d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, monitoring, and support so your site stays fast, secure, and up to date.",
    icon: (
      <path
        d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-lg text-secondary">
            End-to-end web design and development, tailored to how your
            business actually works.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-on-accent opacity-90 transition-opacity group-hover:opacity-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
