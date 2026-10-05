import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact SkaleChat",
  description: `Contact ${site.name} — email, phone and registered company details. Questions about the app or setting up a Super Group? We're happy to help.`,
};

const rows = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:+91${site.phone}`,
  },
  {
    label: "Website",
    value: site.website,
    href: site.websiteUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lead="Questions about SkaleChat, or ready to set up a Super Group? We're happy to help."
      />

      <section>
        <Container className="max-w-2xl py-16 md:py-20">
          <dl className="border-y border-line">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:gap-8"
              >
                <dt className="w-44 shrink-0 text-sm text-faint">
                  {row.label}
                </dt>
                <dd>
                  <a
                    href={row.href}
                    className="text-[15px] font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
                  >
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
              <dt className="w-44 shrink-0 text-sm text-faint">Address</dt>
              <dd className="text-[15px] leading-7 text-muted">
                {site.address}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <Button href={`mailto:${site.email}`} external>
              Email us
            </Button>
          </div>

          <p className="mt-10 text-sm text-faint">
            {site.legalName}
          </p>
        </Container>
      </section>
    </>
  );
}
