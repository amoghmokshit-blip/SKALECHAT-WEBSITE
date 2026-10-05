import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type BadgeProps = {
  href: string;
  store: "App Store" | "Google Play";
  className?: string;
  children: React.ReactNode;
};

const badgeBase =
  "store-badge group inline-flex items-center gap-2.5 rounded-xl border border-ink/10 bg-ink px-4 py-2.5 text-white shadow-sm transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// A store URL of "#" means the listing isn't published yet. Rather than render a
// broken link (bad for UX and crawlers), show an honest non-interactive
// "Coming soon" badge. Drop the real URLs into site.ts to activate the links.
function isLive(href: string) {
  return Boolean(href) && href !== "#";
}

function Badge({ href, store, className, children }: BadgeProps) {
  const live = isLive(href);
  const caption = live ? captionFor(store) : "Coming soon to";

  const inner = (
    <>
      {children}
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium tracking-wide text-white/70">
          {caption}
        </span>
        <span className="mt-1 font-display text-base font-semibold leading-tight">
          {store}
        </span>
      </span>
    </>
  );

  if (!live) {
    return (
      <span
        aria-label={`SkaleChat — coming soon to ${store}`}
        aria-disabled="true"
        className={cn(badgeBase, "cursor-default opacity-60", className)}
      >
        {inner}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={`Download SkaleChat on ${store}`}
      className={cn(badgeBase, "hover:-translate-y-0.5 hover:shadow-lg", className)}
    >
      {inner}
    </a>
  );
}

function captionFor(store: "App Store" | "Google Play") {
  return store === "App Store" ? "Download on the" : "GET IT ON";
}

const iconClass =
  "shrink-0 transition-transform duration-300 group-hover:scale-110";

function AppStoreBadge({ href, className }: { href: string; className?: string }) {
  return (
    <Badge href={href} store="App Store" className={className}>
      <svg
        viewBox="0 0 384 512"
        aria-hidden
        className={cn("h-7 w-7", iconClass)}
        fill="currentColor"
      >
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    </Badge>
  );
}

function PlayStoreBadge({ href, className }: { href: string; className?: string }) {
  return (
    <Badge href={href} store="Google Play" className={className}>
      <svg viewBox="0 0 512 512" aria-hidden className={cn("h-6 w-6", iconClass)}>
        <path
          fill="#00d2ff"
          d="M47 32.5C40.2 36.4 36 43.9 36 54.3v403.4c0 10.4 4.2 17.9 11 21.8l226-225.5z"
        />
        <path
          fill="#00e676"
          d="M47 32.5l226 225.5 62.9-62.7L85.9 20.9C73.4 13.8 60.3 13.9 47 32.5z"
          transform="translate(0 0)"
        />
        <path
          fill="#ffea00"
          d="M273 258L47 479.5c13.3 7.6 26.4 7 38.9-.1l250-144.7z"
        />
        <path
          fill="#ff3d00"
          d="M335.9 195.3L273 258l63.9 63.7 75.9-43.9c15.5-9 15.5-31.6 0-40.6z"
        />
      </svg>
    </Badge>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <AppStoreBadge href={site.appStoreUrl} />
      <PlayStoreBadge href={site.playStoreUrl} />
    </div>
  );
}
