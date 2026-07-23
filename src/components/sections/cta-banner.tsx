import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function CtaBanner() {
  return (
    <section className="py-24">
      <Container>
        <Reveal className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-[image:var(--gradient-accent)] px-8 py-16 text-center text-on-accent">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <h2 className="relative max-w-xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something great?
          </h2>
          <p className="relative max-w-lg opacity-85">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Start a Project
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
