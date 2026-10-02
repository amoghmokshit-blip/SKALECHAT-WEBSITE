import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  markSize = 36,
}: {
  className?: string;
  markSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-[-0.01em] text-ink",
        className,
      )}
      aria-label="SkaleChat home"
    >
      <span className="logo-mark relative inline-flex items-center justify-center">
        <span
          aria-hidden
          className="logo-glow absolute inset-0 rounded-[30%] bg-accent/30 blur-md"
        />
        <Image
          src="/brand/splash-badge.png"
          alt=""
          width={markSize}
          height={markSize}
          priority
          style={{ width: markSize, height: markSize }}
          className="logo-breathe relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        />
      </span>
      SkaleChat
    </Link>
  );
}
