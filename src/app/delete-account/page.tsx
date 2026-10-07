import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/delete-account" },
  title: `Delete your ${site.name} account`,
  description: `How to delete your ${site.name} account from the app or by email, what data is removed, and what is kept.`,
};

export default function DeleteAccountPage() {
  return (
    <>
      <PageHeader eyebrow={site.name} title={`Delete your ${site.name} account`} />

      <section>
        <Container className="py-16 md:py-20">
          <p className="mb-10 text-sm text-faint">Last updated: 7 October 2026</p>

          <Prose>
            <h2>Delete from the app</h2>
            <ol>
              <li>Open {site.name}.</li>
              <li>Go to Settings &rarr; Delete account.</li>
              <li>Confirm with your registered phone number.</li>
            </ol>
            <p>Your account is deleted immediately.</p>

            <h2>Request deletion without the app</h2>
            <p>
              Email{" "}
              <Link href={`mailto:${site.email}`}>{site.email}</Link> with the
              subject &ldquo;Delete my account&rdquo; and include your registered
              phone number. We verify the number and delete the account within 30
              days of your request.
            </p>

            <h2>What is deleted</h2>
            <ul>
              <li>Your profile: name, about line and profile settings</li>
              <li>Your phone number</li>
              <li>Your saved contacts</li>
              <li>Your statuses</li>
              <li>Your call history</li>
              <li>Your registered devices and notification tokens</li>
              <li>Photos, videos, voice notes and files you sent</li>
            </ul>

            <h2>What is kept, and for how long</h2>
            <ul>
              <li>
                Text messages you already sent remain in the other person&rsquo;s
                or group&rsquo;s chat history, shown as &ldquo;Deleted
                account&rdquo; with no name or number.
              </li>
              <li>
                In one-to-one chats, the other person&rsquo;s copy of the
                conversation is removed after 30 days.
              </li>
              <li>No other data is retained.</li>
            </ul>
          </Prose>

          <div className="mt-12 max-w-2xl border-t border-line pt-6 text-sm">
            <Link
              href="/delete-data"
              className="text-accent underline underline-offset-2 hover:text-accent-dark"
            >
              Delete your data without deleting your account &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
