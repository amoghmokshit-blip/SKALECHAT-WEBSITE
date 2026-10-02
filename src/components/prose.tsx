import { cn } from "@/lib/cn";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl text-[15px] leading-7 text-muted",
        "[&>h2]:mt-12 [&>h2]:mb-3 [&>h2]:font-display [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-ink",
        "[&>h2:first-child]:mt-0",
        "[&>p]:mb-4",
        "[&>ul]:mb-4 [&>ul]:list-disc [&>ul]:space-y-1.5 [&>ul]:pl-5 [&>ul]:marker:text-faint",
        "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-dark",
        "[&_strong]:font-medium [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
