"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire this up to a real backend (API route, Formspree, Resend, etc.)
    setStatus("submitted");
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Fill out the form and we&apos;ll get back to you within one
            business day.
          </p>
        </Reveal>

        {status === "submitted" ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-glow">
            <p className="text-lg font-semibold text-primary">Thanks — got it!</p>
            <p className="mt-2 text-sm text-secondary">
              We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-primary">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 block w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-8 text-sm font-semibold text-on-accent shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Send Message
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}
