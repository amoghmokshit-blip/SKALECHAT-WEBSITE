import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line">
      <Container className="max-w-3xl py-16 md:py-24">
        {eyebrow ? (
          <p className="mb-4 text-sm font-medium text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{lead}</p>
        ) : null}
      </Container>
    </section>
  );
}
