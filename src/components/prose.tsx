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
        "[&>h3]:mt-8 [&>h3]:mb-2 [&>h3]:font-display [&>h3]:text-[15px] [&>h3]:font-semibold [&>h3]:text-ink",
        "[&>p]:mb-4",
        "[&>ul]:mb-4 [&>ul]:list-disc [&>ul]:space-y-1.5 [&>ul]:pl-5 [&>ul]:marker:text-faint",
        "[&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:space-y-1.5 [&>ol]:pl-5 [&>ol]:marker:text-faint",
        "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-dark",
        "[&_strong]:font-medium [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
