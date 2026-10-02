import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: "Company",
  description: `Company information for ${site.legalName}.`,
};

const rows = [
  { label: "Legal name", value: site.legalName },
  { label: "CIN", value: site.cin },
  { label: "Company type", value: site.companyType },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader eyebrow="Company" title="Company information" />

      <section>
        <Container className="max-w-2xl py-16 md:py-20">
          <dl className="border-y border-line">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-line py-5 last:border-b-0 sm:flex-row sm:gap-8"
              >
                <dt className="w-44 shrink-0 text-sm text-faint">
                  {row.label}
                </dt>
                <dd className="text-[15px] font-medium text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm leading-6 text-muted">
            For enquiries and business details, visit the{" "}
            <Link
              href="/contact"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              Contact
            </Link>{" "}
            page.
          </p>
        </Container>
      </section>
    </>
  );
}
