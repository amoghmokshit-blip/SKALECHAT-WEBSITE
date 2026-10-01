import Link from "next/link";
import { Container } from "./container";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/product", label: "Product" },
      { href: "/contact", label: "Get Started" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/company", label: "Company" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-ink"
            >
              SkaleChat
            </Link>
            <p className="mt-3 text-sm leading-6 text-muted">{site.tagline}</p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-medium text-ink">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>
            {site.legalName} &middot;{" "}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} SkaleChat. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
