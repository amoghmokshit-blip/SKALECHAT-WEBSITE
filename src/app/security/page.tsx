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
  alternates: { canonical: "/security" },
  title: "Security & Privacy — How SkaleChat Protects Your Contacts",
  description:
    "How SkaleChat keeps conversations private: end-to-end encrypted messages, hidden phone numbers, alias identities, admin-controlled visibility and a DPDP-aligned Privacy Policy.",
};

const pillars = [
  {
    title: "End-to-end encryption",
    body: "Message content is end-to-end encrypted, so conversations stay private between the people in the group and can't be read by SkaleChat's servers in transit.",
  },
  {
    title: "Hidden phone numbers",
    body: "Contact details are never exchanged between members. There is no way for one member to collect another's number from a group.",
  },
  {
    title: "Alias identities",
    body: "Members take part under neutral aliases. Real names are never shown to the rest of the group.",
  },
  {
    title: "Admin-controlled visibility",
    body: "Only the admin can see who members really are. Members only ever see each other's aliases — never real identities.",
  },
  {
    title: "No direct messaging",
    body: "Members can't start private one-to-one chats with each other, which removes the most common way an introduction leaks.",
  },
  {
    title: "Invite-only groups",
    body: "People join a group only by invitation, so no one discovers or browses who else is a member.",
  },
];

const faqs: Faq[] = [
  {
    q: "Can SkaleChat read my messages?",
    a: "Message content is end-to-end encrypted, so it isn't readable by SkaleChat's servers in transit. Conversations stay between the people in the group.",
  },
  {
    q: "Who can see my phone number on SkaleChat?",
    a: "No other member can see your phone number. Contact details are never shared inside a group — members only ever see aliases.",
  },
  {
    q: "What can a group admin see about me?",
    a: "The admin can see the real identity of the members in their group, so they can manage who is in the room. Other members cannot — they only see your alias.",
  },
  {
    q: "Does SkaleChat have a privacy policy?",
    a: "Yes. SkaleChat's Privacy Policy is written in line with India's Digital Personal Data Protection (DPDP) Act. You can read it on the Privacy Policy page.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ])}
      />
      <JsonLd data={faqPage(faqs)} />
      <PageHeader
        eyebrow="Security & Privacy"
        title="Private by design."
        lead="SkaleChat is built so people can collaborate in one place without ever exposing who they are or how to reach them."
      />

      <section>
        <Container className="py-16 md:py-20">
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full bg-white p-8">
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-2xl text-[15px] leading-7 text-muted">
              Together these protect the one thing an intermediary can't afford
              to lose: the relationship. For the full detail on how we handle
              personal data, read our{" "}
              <Link
                href="/privacy"
                className="text-accent underline underline-offset-2 hover:text-accent-dark"
              >
                Privacy Policy
              </Link>
              , or see how it all comes together in a{" "}
              <Link
                href="/super-groups"
                className="text-accent underline underline-offset-2 hover:text-accent-dark"
              >
                Super Group
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqSection faqs={faqs} heading="Security & privacy FAQ" />

      {/* CTA */}
      <section className="border-t border-line bg-subtle">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-md">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Collaborate without giving yourself away.
            </h2>
          </Reveal>
          <Button href="/contact">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
