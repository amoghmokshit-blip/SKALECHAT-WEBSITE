import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { FaqSection, type Faq } from "@/components/faq-section";
import { breadcrumbList, faqPage } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "SkaleChat Pricing — Free for Members, Admins Pay to Host",
  description:
    "SkaleChat pricing is simple: members join every Super Group for free, and admins pay to host. Talk to us for current plans and pricing.",
};

const plans = [
  {
    name: "Member",
    price: "Free",
    tagline: "For anyone invited into a Super Group.",
    includes: [
      "Join any Super Group you're invited to",
      "Take part under a private alias",
      "Your phone number stays hidden",
      "End-to-end encrypted conversations",
    ],
    cta: { label: "Get the app", href: "/contact" },
    highlight: false,
  },
  {
    name: "Admin",
    price: "Paid",
    tagline: "For the person who hosts and controls the group.",
    includes: [
      "Create and host Super Groups",
      "Invite members and assign aliases",
      "See members' real identities",
      "Control who's in the room and what they see",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    highlight: true,
  },
];

const faqs: Faq[] = [
  {
    q: "Is SkaleChat free for members?",
    a: "Yes. If you're invited into a Super Group, joining and taking part is free. Members never pay.",
  },
  {
    q: "Who pays for a Super Group?",
    a: "The admin — the person who creates and hosts the group — pays. Everyone they invite joins for free.",
  },
  {
    q: "How do I get current pricing for hosting?",
    a: "Admin pricing depends on how you plan to use SkaleChat. Contact us and we'll share the current plans and help you get set up.",
  },
  {
    q: "What platforms does SkaleChat run on?",
    a: "SkaleChat runs on both Android and iOS. It is built India-first.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLd data={faqPage(faqs)} />
      <PageHeader
        eyebrow="Pricing"
        title="Members free. Admins pay to host."
        lead="There's nothing to pay to take part in a Super Group. Hosting one is a paid plan — talk to us and we'll match it to how you work."
      />

      <section>
        <Container className="py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 120} className="h-full">
                <div
                  className={
                    "flex h-full flex-col rounded-[20px] border p-8 " +
                    (plan.highlight
                      ? "border-accent/40 bg-accent-tint/30"
                      : "border-line bg-white")
                  }
                >
                  <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-faint">
                    {plan.name}
                  </h2>
                  <p className="mt-4 font-display text-4xl font-bold tracking-tight text-ink">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                  <ul className="mt-6 space-y-3 text-[15px] leading-6 text-muted">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-2">
                    <Button
                      href={plan.cta.href}
                      variant={plan.highlight ? "primary" : "secondary"}
                    >
                      {plan.cta.label}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-2xl text-[15px] leading-7 text-muted">
              Not sure which Super Group setup fits?{" "}
              <Link
                href="/super-groups"
                className="text-accent underline underline-offset-2 hover:text-accent-dark"
              >
                See how Super Groups work
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="text-accent underline underline-offset-2 hover:text-accent-dark"
              >
                get in touch
              </Link>{" "}
              and we'll help you choose.
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection faqs={faqs} heading="Pricing FAQ" />

      {/* CTA */}
      <section className="border-t border-line bg-subtle">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-md">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Host your first Super Group.
            </h2>
          </Reveal>
          <Button href="/contact">Talk to us</Button>
        </Container>
      </section>
    </>
  );
}
