import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "SkaleChat is built by SKALECHAT COMMUNICATIONS PRIVATE LIMITED — a company focused on private, intermediated communication.",
};

const sections = [
  {
    heading: "Who we are",
    paragraphs: [
      `SkaleChat is built by ${site.legalName}, a company focused on private, intermediated communication.`,
    ],
  },
  {
    heading: "What we're building",
    paragraphs: [
      "A messaging platform for real estate and travel agents, recruiters, marketplace operators, consultants and community builders — the people who bring parties together and need them to collaborate in one place.",
      "Members work under aliases. Contact details stay private. The admin keeps full visibility and control.",
      "Conversations are end-to-end encrypted, and SkaleChat is built India-first.",
    ],
  },
  {
    heading: "Why privacy matters",
    paragraphs: [
      "An introduction has value. When contact details are exposed, that value leaks — and the person who made the connection is easily cut out.",
      "SkaleChat is designed so collaboration never comes at the cost of your position in the deal.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built for the people who make deals happen."
        lead="SkaleChat is a communication platform for intermediaries who need parties to talk — without giving away the relationships they've built."
      />

      <section>
        <Container className="max-w-2xl space-y-12 py-16 md:py-20">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 100}>
              <h2 className="font-display text-lg font-semibold text-ink">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4 text-[15px] leading-7 text-muted">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
