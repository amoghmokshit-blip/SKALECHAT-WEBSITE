import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Workflow } from "@/components/workflow";
import { SuperGroupPanel } from "@/components/super-group-panel";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/product" },
  title: "How SkaleChat Works — Product Tour",
  description:
    "A quick tour of SkaleChat: how a Super Group brings parties into one conversation, and the four steps from introduction to a private, controlled chat.",
};

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
        ])}
      />
      <PageHeader
        eyebrow="Product"
        title="SkaleChat"
        lead="Private group communication, built for intermediated conversations."
      />

      {/* Super Group concept */}
      <section>
        <Container className="grid grid-cols-1 items-center gap-14 py-20 md:grid-cols-2 md:py-24">
          <Reveal className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              The Super Group
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted md:text-base md:leading-8">
              <p>
                A Super Group is a managed space where an admin brings parties
                together in a single conversation.
              </p>
              <p>
                Everyone talks in the same place, but identities and contact
                details are shielded — so the conversation can never move
                off-platform behind your back.
              </p>
              <p>
                Members cannot see each other&rsquo;s phone numbers and cannot
                message one another directly. You stay in control of who is in
                the room and what each member can see.
              </p>
              <p className="text-faint">
                Admins pay for the group; members join free — see{" "}
                <Link
                  href="/pricing"
                  className="text-accent underline underline-offset-2 hover:text-accent-dark"
                >
                  pricing
                </Link>
                . Read more about{" "}
                <Link
                  href="/super-groups"
                  className="text-accent underline underline-offset-2 hover:text-accent-dark"
                >
                  Super Groups
                </Link>{" "}
                and{" "}
                <Link
                  href="/security"
                  className="text-accent underline underline-offset-2 hover:text-accent-dark"
                >
                  security
                </Link>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex min-w-0 justify-center md:justify-end">
            <SuperGroupPanel className="min-w-0" />
          </Reveal>
        </Container>
      </section>

      {/* Workflow */}
      <section className="border-t border-line bg-subtle">
        <Container className="py-20 md:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            How it works
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Four steps from introduction to a private, controlled conversation.
          </p>
          <Reveal className="mt-14">
            <Workflow />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
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
