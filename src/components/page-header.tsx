import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 aspect-square w-[32rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-accent)] opacity-[0.12] blur-[100px]" />
      </div>
      <Container className="py-20 text-center sm:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary">
            {description}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
