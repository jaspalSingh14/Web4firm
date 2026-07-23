import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "+", label: "Years building the web" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export function Stats() {
  return (
    <section className="py-20">
      <Container>
        <Reveal stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-glow"
            >
              <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
