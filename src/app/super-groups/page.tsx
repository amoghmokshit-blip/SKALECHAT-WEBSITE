import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SuperGroupPanel } from "@/components/super-group-panel";
import { JsonLd } from "@/components/json-ld";
import { FaqSection, type Faq } from "@/components/faq-section";
import { breadcrumbList, faqPage } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/super-groups" },
  title: "Super Groups — Private Group Chat That Keeps You in the Deal",
  description:
    "A Super Group is a managed SkaleChat conversation where many parties collaborate under aliases — phone numbers stay hidden, no one can DM anyone, and only the admin sees who's who.",
};

const mechanics = [
  {
    title: "Invite-only",
    body: "The admin adds each party by invitation. No one browses a member list or finds out who else is in the room.",
  },
  {
    title: "Aliases, not names",
    body: "Real names and numbers are replaced with neutral aliases the admin controls.",
  },
  {
    title: "One shared conversation",
    body: "Everyone talks in the same place — there are no private one-to-one messages between members.",
  },
  {
    title: "Admin stays in control",
    body: "Only the admin sees real identities and decides who is in the group and what each member can see.",
  },
];

const useCases = [
  {
    title: "Real estate",
    body: "Put a buyer, a seller and other agents in one room without handing over anyone's number.",
  },
  {
    title: "Recruitment",
    body: "Let a candidate and a client talk through you, so neither side goes around the recruiter.",
  },
  {
    title: "Travel & tours",
    body: "Coordinate travellers, operators and suppliers in a single thread while keeping your contacts.",
  },
  {
    title: "Marketplaces & brokering",
    body: "Connect two sides of a trade and stay the channel every message passes through.",
  },
  {
    title: "Consultants & communities",
    body: "Host a group of members or clients who collaborate without collecting each other's details.",
  },
];

const faqs: Faq[] = [
  {
    q: "How is a Super Group different from a normal group chat?",
    a: "In an ordinary group chat, members usually see each other's names and numbers and can message one another directly. In a Super Group, members appear under aliases, phone numbers stay hidden, and there is no direct messaging — so the person who created the group stays in the middle.",
  },
  {
    q: "Can members message each other directly in a Super Group?",
    a: "No. All communication happens inside the group. Members cannot start one-to-one chats with each other, which is what stops an introduction from moving off-platform.",
  },
  {
    q: "Can members see who else is in the Super Group?",
    a: "Members only see other members' aliases, never their real names or numbers. People join by invitation, so no one browses a list of who is in the room.",
  },
  {
    q: "Who can see members' real identities?",
    a: "Only the admin. The admin can see who each member really is, while members only ever see aliases.",
  },
  {
    q: "What kinds of businesses use Super Groups?",
    a: "Super Groups suit anyone who introduces parties for a living — real estate and travel agents, recruiters, marketplace operators, brokers, consultants and community builders.",
  },
];

export default function SuperGroupsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Super Groups", path: "/super-groups" },
        ])}
      />
      <JsonLd data={faqPage(faqs)} />
      <PageHeader
        eyebrow="Super Groups"
        title="One conversation. Every party. None of the contact details."
        lead="A Super Group is the heart of SkaleChat — a managed space where you bring people together to collaborate, without ever exchanging names or numbers."
      />

      {/* Concept + panel */}
      <section>
        <Container className="grid grid-cols-1 items-center gap-14 py-20 md:grid-cols-2 md:py-24">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              What a Super Group is
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted md:text-base md:leading-8">
              <p>
                When you introduce two parties, the value of that introduction
                sits in the relationship. The moment contact details change
                hands, you can be cut out.
              </p>
              <p>
                A Super Group keeps everyone talking in one place while the
                details that would let them go around you stay hidden. The
                conversation can never quietly move off-platform behind your
                back.
              </p>
              <p className="text-faint">
                Admins pay to host a group; members join free. See{" "}
                <Link
                  href="/pricing"
                  className="text-accent underline underline-offset-2 hover:text-accent-dark"
                >
                  pricing
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="flex min-w-0 justify-center md:justify-end"
          >
            <SuperGroupPanel className="min-w-0" />
          </Reveal>
        </Container>
      </section>

      {/* Mechanics */}
      <section className="border-t border-line bg-subtle">
        <Container className="py-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              How a Super Group protects the introduction
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2">
            {mechanics.map((m, i) => (
              <Reveal key={m.title} delay={(i % 2) * 100} className="h-full">
                <div className="h-full bg-white p-8">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-muted">
              Message content is{" "}
              <Link
                href="/security"
                className="text-accent underline underline-offset-2 hover:text-accent-dark"
              >
                end-to-end encrypted
              </Link>{" "}
              — privacy is built into every group.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Use cases */}
      <section className="border-t border-line">
        <Container className="py-20 md:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Who runs Super Groups
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Anyone whose business depends on staying the connection between two
              sides.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-display text-base font-semibold text-ink">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection faqs={faqs} heading="Super Group FAQ" />

      {/* CTA */}
      <section className="border-t border-line bg-subtle">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-md">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Ready to run your first Super Group?
            </h2>
          </Reveal>
          <Button href="/contact">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
