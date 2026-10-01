"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "./button";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-300 after:content-['']",
                isActive(item.href)
                  ? "text-ink after:scale-x-100"
                  : "text-muted after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="h-9 px-4">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 grid h-10 w-10 place-items-center rounded-md text-ink md:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden>
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-200",
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-1 py-2.5 text-[15px] transition-colors",
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/contact"
              className="mt-3 w-full"
              variant="primary"
            >
              Get Started
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
