import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const placeholders = [
  {
    quote: "Add a short quote from a real client here — what result did the project deliver for them?",
    name: "Client name",
    role: "Role, Company",
  },
  {
    quote: "Add a short quote from a real client here — what was it like working with Web4firm?",
    name: "Client name",
    role: "Role, Company",
  },
  {
    quote: "Add a short quote from a real client here — what would they tell a friend considering us?",
    name: "Client name",
    role: "Role, Company",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-card py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What clients say
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Placeholder quotes below — swap in real client testimonials before
            launch.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {placeholders.map((item, i) => (
            <figure
              key={i}
              className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-border bg-background p-6"
            >
              <blockquote className="text-sm italic leading-6 text-secondary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
