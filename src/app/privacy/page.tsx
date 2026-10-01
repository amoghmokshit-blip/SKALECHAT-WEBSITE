import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles information on the SkaleChat platform.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <section>
        <Container className="py-16 md:py-20">
          <p className="mb-10 text-sm text-faint">
            Effective date: [To be finalized]
          </p>

          <Prose>
            <p>
              This Privacy Policy explains how {site.legalName} (&ldquo;SkaleChat&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects
              information when you use the SkaleChat platform. SkaleChat is
              designed around privacy: within a group, members are represented by
              aliases, and personal contact details are not exposed to other
              members.
            </p>

            <h2>Information we collect</h2>
            <p>
              We collect the information needed to operate the service, which may
              include account details provided during registration, the aliases
              and group information created by an administrator, and messages
              exchanged within a group. We may also collect basic technical data
              such as device and log information to keep the service secure and
              reliable.
            </p>

            <h2>How we use information</h2>
            <ul>
              <li>To provide, maintain and improve the SkaleChat service.</li>
              <li>To create and manage groups, memberships and aliases.</li>
              <li>To keep the platform secure and prevent misuse.</li>
              <li>To respond to enquiries and provide support.</li>
            </ul>

            <h2>Aliases and identity visibility</h2>
            <p>
              Within a group, members see aliases rather than real names or phone
              numbers. The group administrator can see the real identities of the
              members they add. Members cannot view the contact details of other
              members through the platform.
            </p>

            <h2>Sharing of information</h2>
            <p>
              We do not sell personal information. We share information only where
              necessary to operate the service, to comply with the law, or with
              service providers who process data on our behalf under appropriate
              obligations of confidentiality.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain information for as long as needed to provide the service
              and to meet legal, accounting or reporting requirements. When
              information is no longer required, we take steps to delete or
              anonymise it.
            </p>

            <h2>Security</h2>
            <p>
              We use reasonable technical and organisational measures to protect
              information against unauthorised access, loss or misuse. No method
              of transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>Your rights</h2>
            <p>
              Subject to applicable law, you may request access to, correction of,
              or deletion of your personal information. To make a request, contact
              us using the details below.
            </p>

            <h2>Children&rsquo;s privacy</h2>
            <p>
              SkaleChat is intended for business and professional use and is not
              directed to children. We do not knowingly collect personal
              information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the effective date above.
            </p>

            <h2>Contact us</h2>
            <p>
              For any questions about this policy, contact us at{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> or through
              the <Link href="/contact">Contact</Link> page.
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
