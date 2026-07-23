import { Container } from "@/components/container";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Happy clients" },
  { value: "5+", label: "Years building the web" },
  { value: "98%", label: "Client satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
