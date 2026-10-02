import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { StoreBadges } from "./store-badges";
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
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label="SkaleChat home"
            >
              <Image
                src="/brand/splash-badge.png"
                alt=""
                width={34}
                height={34}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ width: 34, height: 34 }}
              />
              <span className="font-display text-xl font-bold tracking-[-0.01em] text-ink">
                SkaleChat
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">{site.tagline}</p>

            <StoreBadges className="mt-6" />

            <div className="mt-6 space-y-1.5 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                {site.email}
              </a>
              <br />
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-muted transition-colors hover:text-ink"
                    >
                      <span className="h-px w-0 bg-ink transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p className="leading-5">
            {site.legalName}
            <span className="mx-2 text-line">|</span>
            CIN: {site.cin}
          </p>
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
