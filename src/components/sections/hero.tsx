import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="aspect-square w-[36rem] rounded-full bg-accent/10" />
      </div>

      <Container className="flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-secondary">
          Web design &amp; development agency
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
          We build websites that turn visitors into customers
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-secondary">
          Web4firm designs and develops fast, modern, conversion-focused
          websites and web apps for growing businesses — from first pixel to
          production launch.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-on-primary transition-colors hover:bg-accent cursor-pointer"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-semibold text-primary transition-colors hover:bg-muted cursor-pointer"
          >
            See Our Work
          </a>
        </div>
      </Container>
    </section>
  );
}
