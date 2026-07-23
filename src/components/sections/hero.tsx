import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 aspect-square w-[42rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-accent)] opacity-[0.14] blur-[100px]" />
        <div className="absolute top-40 -right-24 aspect-square w-72 rounded-full bg-accent/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="flex flex-col items-center gap-8 py-28 text-center sm:py-36">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-secondary shadow-glow backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
            Web design &amp; development agency
          </span>
        </Reveal>

        <Reveal>
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Websites engineered to turn visitors into{" "}
            <span className="text-gradient-accent">customers</span>
          </h1>
        </Reveal>

        <Reveal>
          <p className="max-w-2xl text-lg leading-8 text-secondary">
            Web4firm designs and builds fast, modern, conversion-focused
            websites and web apps for growing businesses — from first pixel
            to production launch.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-8 text-sm font-semibold text-on-accent shadow-glow transition-transform hover:scale-[1.02]"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-semibold text-primary transition-colors hover:bg-muted"
            >
              See Our Work
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
