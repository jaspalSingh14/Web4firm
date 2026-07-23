import Link from "next/link";
import { Container } from "@/components/container";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "E-commerce", href: "/services" },
      { label: "SEO & Performance", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer text-footer-fg">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Web4firm
          </Link>
          <p className="mt-3 max-w-sm text-sm footer-muted">
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
                  <Link
                    href={link.href}
                    className="text-sm footer-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs footer-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Web4firm. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </Container>
      </div>
    </footer>
  );
}
