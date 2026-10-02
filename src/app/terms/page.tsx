import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions",
  description: `The terms that govern use of the SkaleChat platform, operated by ${site.legalName}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />

      <section>
        <Container className="py-16 md:py-20">
          <p className="mb-10 text-sm text-faint">
            Effective date: [To be finalized]
          </p>

          <Prose>
            <p>
              These Terms &amp; Conditions govern your use of the SkaleChat
              platform, operated by {site.legalName} (&ldquo;SkaleChat&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using the
              service, you agree to these terms.
            </p>

            <h2>The service</h2>
            <p>
              SkaleChat provides private group communication for intermediated
              conversations. An administrator creates a group, adds members,
              assigns aliases, and members communicate within the group while
              their contact details remain private.
            </p>

            <h2>Accounts and administrators</h2>
            <p>
              You are responsible for the information you provide and for activity
              that takes place under your account. Administrators are responsible
              for the groups they create and the members they add, including
              obtaining any consent required to add those members.
            </p>

            <h2>Aliases and identity</h2>
            <p>
              Within a group, members are represented by aliases. Administrators
              may see the real identities of the members they add. You agree not
              to misrepresent your identity or impersonate any other person.
            </p>

            <h2>Acceptable use</h2>
            <ul>
              <li>Do not use the service for any unlawful purpose.</li>
              <li>Do not send abusive, fraudulent or harmful content.</li>
              <li>Do not attempt to disrupt or compromise the platform.</li>
              <li>
                Do not attempt to identify other members without authorisation.
              </li>
            </ul>

            <h2>No circumvention</h2>
            <p>
              The service is designed to keep contact details private. You agree
              not to use the platform to obtain another member&rsquo;s personal
              contact information, and not to use any information obtained through
              a group to bypass the administrator or the intended communication.
            </p>

            <h2>Privacy</h2>
            <p>
              Our handling of information is described in the{" "}
              <Link href="/privacy">Privacy Policy</Link>, which forms part of
              these terms.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The SkaleChat platform, including its software, design and brand,
              belongs to {site.legalName}. These terms do not grant you any right
              to our intellectual property except the limited right to use the
              service.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The service is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis, without warranties of any kind to the extent
              permitted by law.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, {site.legalName} will not be
              liable for any indirect, incidental or consequential damages arising
              from your use of the service.
            </p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Material changes will
              be reflected by updating the effective date above.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes are
              subject to the jurisdiction of the competent courts at [jurisdiction
              to be specified].
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link>.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
