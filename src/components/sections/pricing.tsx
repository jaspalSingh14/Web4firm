import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const tiers = [
  {
    name: "Starter",
    price: "$2,500",
    note: "starting price",
    description: "A polished marketing site to get your business online fast.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "2 weeks delivery"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$7,500",
    note: "starting price",
    description: "For businesses that need a custom site with real functionality.",
    features: [
      "Up to 12 pages",
      "Custom design system",
      "CMS integration",
      "Advanced SEO & analytics",
      "4–6 weeks delivery",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "let's talk",
    description: "Complex web apps, e-commerce, or multi-team projects.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Dedicated project team",
      "Ongoing support contract",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Example starting rates — every project gets a custom quote after a
            short discovery call.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-transparent bg-primary text-on-primary shadow-glow lg:-translate-y-2"
                  : "border-border bg-card"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-xs font-semibold text-on-accent">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${tier.featured ? "" : "text-primary"}`}>
                {tier.name}
              </h3>
              <p className={`mt-4 text-sm ${tier.featured ? "opacity-70" : "text-secondary"}`}>
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold">{tier.price}</span>
                <span className={`text-xs ${tier.featured ? "opacity-60" : "text-muted-foreground"}`}>
                  {tier.note}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`mt-0.5 shrink-0 ${tier.featured ? "" : "text-accent"}`}
                    >
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={tier.featured ? "opacity-85" : "text-secondary"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex h-11 cursor-pointer items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-on-primary hover:bg-accent hover:text-on-accent"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
