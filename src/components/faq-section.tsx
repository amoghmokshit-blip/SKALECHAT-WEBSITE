import { Container } from "./container";
import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";

export type Faq = { q: string; a: string };

// Renders a visible FAQ list. Pair with <JsonLd data={faqPage(faqs)} /> using the
// SAME array so the structured data always matches what's on the page.
export function FaqSection({
  heading = "Frequently asked questions",
  faqs,
  className,
}: {
  heading?: string;
  faqs: Faq[];
  className?: string;
}) {
  return (
    <section className={cn("border-t border-line", className)}>
      <Container className="max-w-3xl py-20 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <dl className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className="py-6">
                <dt className="font-display text-lg font-semibold text-ink">
                  {f.q}
                </dt>
                <dd className="mt-3 text-[15px] leading-7 text-muted">{f.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
