import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "indigo" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  // App's signature lime CTA with dark ink label
  primary:
    "bg-lime text-lime-ink hover:bg-lime-dark shadow-[0_6px_22px_-10px_rgba(83,96,236,0.5)]",
  secondary:
    "border border-line bg-white text-ink hover:border-ink/20 hover:bg-subtle",
  indigo:
    "bg-accent text-white hover:bg-accent-dark shadow-[0_8px_24px_-10px_rgba(83,96,236,0.7)]",
  ghost: "text-muted hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
