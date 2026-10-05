import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/features" },
  title: "SkaleChat Features — Private Group Messaging for Intermediaries",
  description:
    "Explore SkaleChat's features: Super Groups, private aliases, hidden phone numbers, admin-only identity visibility, no cross-member DMs and end-to-end encryption.",
};

const features = [
  {
    title: "Super Groups",
    body: "Bring many parties into one managed conversation instead of juggling separate chats.",
    href: "/super-groups",
    linkLabel: "How Super Groups work",
  },
  {
    title: "Private aliases",
    body: "Every member appears under a neutral alias — real names are never shown to the group.",
  },
  {
    title: "Hidden phone numbers",
    body: "Contact details are never exchanged between members, so no one can take the conversation off-platform.",
    href: "/security",
    linkLabel: "See how privacy works",
  },
  {
    title: "Admin-only identity visibility",
    body: "Only the admin can see who members really are. Members only ever see each other's aliases.",
  },
  {
    title: "No cross-member DMs",
    body: "People talk inside the group, never one-to-one — removing the main way an introduction gets leaked.",
  },
  {
    title: "Invite-only membership",
    body: "Members join by invitation. No one browses a member list or discovers who else is in the room.",
  },
  {
    title: "End-to-end encryption",
    body: "Message content is end-to-end encrypted, so conversations stay private between the people in the group.",
    href: "/security",
    linkLabel: "About our security",
  },
  {
    title: "Android & iOS",
    body: "SkaleChat is built India-first and runs on both Android and iOS phones.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <PageHeader
        eyebrow="Features"
        title="Everything SkaleChat does to keep you in the middle."
        lead="A private group messaging app built around a single idea: people can collaborate in one place without ever exchanging names or numbers."
      />

      <section>
        <Container className="py-16 md:py-20">
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100} className="h-full">
                <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-accent-tint/40">
                  <h2 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent-dark">
                    {f.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {f.body}
                  </p>
                  {f.href ? (
                    <Link
                      href={f.href}
                      className="mt-4 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                    >
                      {f.linkLabel} →
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-subtle">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-md">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              See it on your next deal.
            </h2>
            <p className="mt-2 text-muted">
              Set up a private Super Group and keep the introduction yours.
            </p>
          </Reveal>
          <Button href="/contact">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
