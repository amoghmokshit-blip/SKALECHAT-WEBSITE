import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SuperGroupPanel } from "@/components/super-group-panel";
import { StoreBadges } from "@/components/store-badges";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { FaqSection } from "@/components/faq-section";
import { softwareApplicationNode, faqPage } from "@/lib/schema";

export const metadata: Metadata = {
  // Absolute title bypasses the "%s — SkaleChat" template so the brand
  // isn't repeated. Tuned for search intent without keyword stuffing.
  title: {
    absolute:
      "SkaleChat — Private Group Messaging App for Agents & Intermediaries",
  },
  description:
    "SkaleChat is a private group messaging app for brokers, recruiters and consultants. Host a Super Group where everyone talks in one place — phone numbers stay hidden and only the admin sees who's who.",
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "Private Identities",
    body: "Members see aliases instead of real names or phone numbers.",
  },
  {
    title: "Admin Visibility",
    body: "Admins can see the real identities of group members.",
  },
  {
    title: "Controlled Communication",
    body: "Members communicate inside the group without direct messaging each other.",
  },
];

// Shared by the visible FAQ section and the FAQPage schema below — the answers
// must stay identical in both so the structured data matches the page.
const faqs = [
  {
    q: "What is SkaleChat?",
    a: "SkaleChat is a private group messaging app built for intermediaries — agents, brokers, recruiters and consultants. It lets you host a Super Group where everyone talks in one place while phone numbers stay hidden and only the admin sees who's who.",
  },
  {
    q: "What is a Super Group?",
    a: "A Super Group is a managed space where an admin brings several parties together into a single conversation. Members take part under aliases, cannot see each other's phone numbers and cannot message one another directly.",
  },
  {
    q: "How does SkaleChat keep phone numbers private?",
    a: "Members see aliases instead of real names or numbers, and contact details are never exchanged inside the group. Only the admin can see the real identities of members, so the introduction stays with the person who made it.",
  },
  {
    q: "Is SkaleChat end-to-end encrypted?",
    a: "Yes. Conversations in SkaleChat are end-to-end encrypted, so message content stays private between the people in the group.",
  },
  {
    q: "Who is SkaleChat for?",
    a: "SkaleChat is designed for the people who connect others: real estate and travel agents, recruiters, marketplace operators, consultants and community builders who need parties to collaborate without giving away the relationships they've built.",
  },
  {
    q: "How much does SkaleChat cost?",
    a: "Admins pay to host a Super Group; members join for free. SkaleChat is available on Android and iOS.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationNode} />
      <JsonLd data={faqPage(faqs)} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="aurora aurora-a"
            style={{
              width: 440,
              height: 440,
              top: -120,
              left: -80,
              background:
                "radial-gradient(circle at 30% 30%, rgba(111,122,252,0.40), transparent 70%)",
            }}
          />
          <div
            className="aurora aurora-b"
            style={{
              width: 460,
              height: 460,
              top: 20,
              right: -120,
              background:
                "radial-gradient(circle at 60% 40%, rgba(83,96,236,0.26), transparent 70%)",
            }}
          />
          <div
            className="aurora aurora-a"
            style={{
              width: 320,
              height: 320,
              bottom: -150,
              left: "42%",
              background:
                "radial-gradient(circle at 50% 50%, rgba(226,250,97,0.20), transparent 70%)",
            }}
          />
        </div>
        <Container className="relative z-10 grid grid-cols-1 items-center gap-14 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="rise rise-1 inline-flex items-center gap-2 rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent-dark">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden
              />
              Privacy-first · Built for intermediaries
            </span>
            <h1 className="rise rise-1 mt-5 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink [hyphens:auto] [overflow-wrap:break-word] sm:text-5xl sm:leading-[1.05] md:text-[3.4rem]">
              Group chat without{" "}
              <span className="gradient-text">disintermediation.</span>
            </h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg leading-8 text-muted">
              SkaleChat is a messaging app for the people who connect others —
              agents, brokers, recruiters and consultants. Host a{" "}
              <Link
                href="/super-groups"
                className="text-ink underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
              >
                Super Group
              </Link>{" "}
              where everyone talks in one place, while phone numbers stay hidden
              and only you see who&rsquo;s who.
            </p>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">Explore SkaleChat</Button>
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
            </div>
            <StoreBadges className="rise rise-4 mt-6" />
            <p className="rise rise-4 mt-6 text-sm text-faint">
              End-to-end encrypted · India-first · Admins pay, members free
            </p>
          </div>
          <div className="rise rise-4 flex min-w-0 justify-center md:justify-end">
            <SuperGroupPanel className="min-w-0" />
          </div>
        </Container>
      </section>

      {/* Concept */}
      <section>
        <Container className="max-w-3xl py-20 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-ink md:text-4xl">
              Communication without exposing contact information.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
              <p>
                When you introduce two parties, you risk being cut out of the
                deal. SkaleChat keeps you in the middle.
              </p>
              <p>
                Members collaborate under aliases, contact details never change
                hands, and the introduction stays yours.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-line">
        <Container className="py-20 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120} className="h-full">
                <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-accent-tint/40">
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-accent-dark">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/features"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                Explore all features →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* CTA */}
      <section className="border-t border-line bg-subtle">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-ink">
              Keep the introduction yours.
            </h2>
            <p className="mt-2 text-muted">
              Set up a private Super Group for your next deal.
            </p>
          </Reveal>
          <Button href="/contact">Get Started</Button>
        </Container>
      </section>
    </>
  );
}
