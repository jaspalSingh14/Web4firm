import { Container } from "@/components/container";

export function CtaBanner() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-8 py-16 text-center text-on-primary">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something great?
          </h2>
          <p className="max-w-lg text-white/70">
            Tell us about your project and we&apos;ll get back to you within
            one business day.
          </p>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-primary transition-colors hover:bg-white/90 cursor-pointer"
          >
            Start a Project
          </a>
        </div>
      </Container>
    </section>
  );
}
