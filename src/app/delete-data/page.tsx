import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/delete-data" },
  title: `Delete your ${site.name} data without deleting your account`,
  description: `Delete some or all of your ${site.name} data — messages, media, statuses, call history and profile details — without deleting your account.`,
};

export default function DeleteDataPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.name}
        title={`Delete your ${site.name} data without deleting your account`}
      />

      <section>
        <Container className="py-16 md:py-20">
          <p className="mb-10 text-sm text-faint">Last updated: 7 October 2026</p>

          <Prose>
            <p>
              You can delete some or all of your data at any time without
              deleting your account.
            </p>

            <h2>In the app</h2>
            <ul>
              <li>
                <strong>Messages:</strong> long-press a message &rarr; Delete
                &rarr; &ldquo;Delete for me&rdquo;, or &ldquo;Delete for
                everyone&rdquo; within 60 minutes of sending.
              </li>
              <li>
                <strong>A whole chat:</strong> open the chat &rarr; &#8942; menu
                &rarr; Clear chat.
              </li>
              <li>
                <strong>Photos, videos and files:</strong> Settings &rarr; Storage
                &amp; Data &rarr; Manage Storage &rarr; select items &rarr; Delete.
                The message stays; the file is removed.
              </li>
              <li>
                <strong>Statuses:</strong> open your status &rarr; Delete. Statuses
                also expire automatically after 24 hours.
              </li>
              <li>
                <strong>Call history:</strong> Calls tab &rarr; Edit &rarr; Clear.
              </li>
              <li>
                <strong>Profile name, photo and about:</strong> Settings &rarr;
                Edit Profile.
              </li>
            </ul>

            <h2>Request by email</h2>
            <p>
              Email{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> with your
              registered phone number and the data you want removed. We complete
              requests within 30 days.
            </p>

            <h2>What is kept</h2>
            <p>
              Data you delete is removed from our servers. Copies that other
              people already received in their own chats stay on their side,
              except messages you delete with &ldquo;Delete for everyone&rdquo;.
            </p>
          </Prose>

          <div className="mt-12 max-w-2xl border-t border-line pt-6 text-sm">
            <Link
              href="/delete-account"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              Delete your {site.name} account &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
