import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SuperGroupPanel } from "@/components/super-group-panel";
import { Reveal } from "@/components/reveal";

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

export default function Home() {
  return (
    <>
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
        <Container className="relative z-10 grid items-center gap-14 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="rise rise-1 inline-flex items-center gap-2 rounded-full bg-accent-tint px-3 py-1 text-xs font-semibold text-accent-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              Privacy-first · Built for intermediaries
            </span>
            <h1 className="rise rise-1 mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.4rem]">
              Group chat without disintermediation.
            </h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg leading-8 text-muted">
              SkaleChat is a messaging app for the people who connect others —
              agents, brokers, recruiters and consultants. Host a Super Group
              where everyone talks in one place, while phone numbers stay hidden
              and only you see who&rsquo;s who.
            </p>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/product">Explore SkaleChat</Button>
              <Button href="/about" variant="secondary">
                Learn More
              </Button>
            </div>
            <p className="rise rise-3 mt-6 text-sm text-faint">
              End-to-end encrypted · India-first · Admins pay, members free
            </p>
          </div>
          <div className="rise rise-4 flex justify-center md:justify-end">
            <SuperGroupPanel />
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
        </Container>
      </section>

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
