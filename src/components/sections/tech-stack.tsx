import { Container } from "@/components/container";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export function TechStack() {
  return (
    <section className="border-y border-border bg-card">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Built with a modern, production-grade stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {stack.map((tech) => (
            <span key={tech} className="text-sm font-semibold text-secondary">
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
