import Link from "next/link";
import { Container } from "@/components/container";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "E-commerce", href: "#services" },
      { label: "SEO & Performance", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-on-primary">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Web4firm
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            We design and build fast, modern websites and web apps that help
            businesses grow online.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-white/90">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Web4firm. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
