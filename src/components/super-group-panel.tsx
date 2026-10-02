import Image from "next/image";
import { cn } from "@/lib/cn";

function ReadTicks() {
  return (
    <svg
      viewBox="0 0 16 11"
      className="h-3 w-3.5 text-white/85"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 5.5 4 8.5 9.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 8 7 8.5 12.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TheirBubble({
  sender,
  children,
}: {
  sender: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-[78%] flex-col">
      <span className="mb-1 pl-1 text-xs font-semibold text-accent">
        {sender}
      </span>
      <div className="rounded-2xl rounded-tl-md border border-line bg-white px-3.5 py-2 text-sm leading-snug text-ink shadow-[0_1px_1px_rgba(16,16,18,0.04)]">
        {children}
      </div>
    </div>
  );
}

export function SuperGroupPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "floaty w-full max-w-[400px] overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_2px_4px_rgba(16,16,18,0.04),0_18px_50px_-16px_rgba(83,96,236,0.28)]",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-tint">
          <Image
            src="/brand/splash-badge.png"
            alt=""
            width={26}
            height={26}
            className="h-6 w-6"
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-ink">
            Super Group
          </p>
          <p className="truncate text-xs text-faint">
            Property deal &middot; 4 members
          </p>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-2.5 py-1 text-xs font-medium text-accent-dark"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z" />
          </svg>
          Private
        </span>
      </div>

      {/* Chat body */}
      <div className="space-y-3 bg-subtle px-4 py-5">
        {/* System notice */}
        <div className="pop flex justify-center" style={{ animationDelay: "0.1s" }}>
          <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-muted ring-1 ring-line">
            Contact details are hidden
          </span>
        </div>

        <div className="pop flex justify-start" style={{ animationDelay: "0.3s" }}>
          <TheirBubble sender="Member A">
            Is the 3BHK still available?
          </TheirBubble>
        </div>

        <div className="pop flex justify-start" style={{ animationDelay: "0.6s" }}>
          <TheirBubble sender="Member B">
            Yes — sharing the details here.
          </TheirBubble>
        </div>

        {/* Mine */}
        <div className="pop flex justify-end" style={{ animationDelay: "0.95s" }}>
          <div className="flex max-w-[78%] flex-col items-end">
            <div className="rounded-2xl rounded-tr-md bg-accent px-3.5 py-2 text-sm leading-snug text-white shadow-[0_1px_2px_rgba(83,96,236,0.35)]">
              Great — let&rsquo;s keep it all in the group.
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/75">
                12:04
                <ReadTicks />
              </span>
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="pop flex justify-start" style={{ animationDelay: "1.35s" }}>
          <div className="flex max-w-[78%] flex-col">
            <span className="mb-1 pl-1 text-xs font-semibold text-accent">
              Member C
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-line bg-white px-3.5 py-3">
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-faint" />
              <span
                className="typing-dot h-1.5 w-1.5 rounded-full bg-faint"
                style={{ animationDelay: "0.15s" }}
              />
              <span
                className="typing-dot h-1.5 w-1.5 rounded-full bg-faint"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 border-t border-line bg-white px-3 py-3">
        <div className="flex h-10 flex-1 items-center rounded-full bg-subtle px-4 text-sm text-faint">
          Message
        </div>
        <span className="relative grid h-10 w-10 shrink-0 place-items-center">
          <span
            className="absolute inset-0 rounded-full bg-accent/30 animate-ping"
            aria-hidden
          />
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            className="relative grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition-transform duration-200 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M4 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
