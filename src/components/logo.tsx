import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  markSize = 28,
}: {
  className?: string;
  markSize?: number;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-[-0.01em] text-ink",
        className,
      )}
      aria-label="SkaleChat home"
    >
      <Image
        src="/brand/splash-badge.png"
        alt=""
        width={markSize}
        height={markSize}
        priority
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
      />
      SkaleChat
    </Link>
  );
}
