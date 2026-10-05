import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: `How ${site.legalName} handles personal data on the SkaleChat platform.`,
};

const grievanceEmail = "nitin@skalechat.com";

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
              This Privacy Policy describes how Skalechat Communications Private
              Limited (&ldquo;SkaleChat&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, stores,
              processes and otherwise handles personal data when you use the
              SkaleChat mobile applications and related services.
            </p>
            <p>
              SkaleChat respects the privacy of its users. An important feature
              of SkaleChat is that ordinary members of certain groups may
              communicate without being given access to specified personal or
              contact information of other members. This functionality does not
              mean that users are anonymous to SkaleChat or, where applicable, to
              the Administrator of a Super Group.
            </p>

            <h2>1. Who We Are</h2>
            <p>The Platform is operated by:</p>
            <p>
              Skalechat Communications Private Limited
              <br />
              C/o Anjana Sharma, Gali No. 4, Uttamnagar, Rewari, Rewari, Rewari
              &ndash; 123401, Haryana, India
              <br />
              Email:{" "}
              <Link href={`mailto:${grievanceEmail}`}>{grievanceEmail}</Link>
            </p>
            <p>
              For purposes of applicable data protection law, SkaleChat
              determines the purposes and means by which personal data described
              in this Privacy Policy is processed, except where another person
              independently determines the purposes and means of processing.
            </p>

            <h2>2. Personal Data We Collect</h2>
            <p>
              Depending upon the manner in which you use SkaleChat, we may collect
              the following categories of personal data.
            </p>

            <h3>2.1. Registration and Account Information</h3>
            <p>When you create an account, we may collect your:</p>
            <ul>
              <li>(a) name or display name;</li>
              <li>(b) mobile number;</li>
              <li>(c) profile photograph;</li>
              <li>(d) OTP verification information;</li>
              <li>(e) email address, if provided; and</li>
              <li>(f) account identifier.</li>
            </ul>

            <h3>2.2. Communications and User Content</h3>
            <p>
              We may process information you communicate through SkaleChat,
              including:
            </p>
            <ul>
              <li>(a) messages;</li>
              <li>(b) photographs and videos;</li>
              <li>(c) audio and voice messages;</li>
              <li>(d) documents and attachments;</li>
              <li>(e) shared location information;</li>
              <li>(f) group information; and</li>
              <li>(g) other content you choose to transmit through the Platform.</li>
            </ul>

            <h3>2.3. Group and Activity Information</h3>
            <p>We may process:</p>
            <ul>
              <li>(a) groups of which you are a member;</li>
              <li>(b) Super Groups you create or administer;</li>
              <li>(c) registration date;</li>
              <li>(d) login information;</li>
              <li>(e) last-seen status;</li>
              <li>(f) interactions with the Platform; and</li>
              <li>(g) other account and usage activity.</li>
            </ul>

            <h3>2.4. Device and Technical Information</h3>
            <p>
              Depending upon your device, settings, permissions and use of the
              Platform, we may process:
            </p>
            <ul>
              <li>(a) IP address;</li>
              <li>(b) device type;</li>
              <li>(c) operating system;</li>
              <li>(d) application version;</li>
              <li>(e) device identifiers;</li>
              <li>(f) diagnostic information;</li>
              <li>(g) crash logs;</li>
              <li>(h) usage and analytics information; and</li>
              <li>(i) approximate location.</li>
            </ul>

            <h3>2.5. Device Permissions</h3>
            <p>
              Where required for functionality selected by you, SkaleChat may
              request access to:
            </p>
            <ul>
              <li>(a) location, to permit location sharing;</li>
              <li>(b) photographs, videos and other media;</li>
              <li>
                (c) microphone and audio functionality, including for voice
                messages;
              </li>
              <li>
                (d) contacts, where a feature requiring contact access is enabled;
                and
              </li>
              <li>
                (e) other device functionality reasonably necessary to provide a
                feature requested by you.
              </li>
            </ul>
            <p>
              Permissions can generally be managed through your device settings,
              although disabling a permission may prevent the corresponding
              feature from functioning.
            </p>

            <h2>3. How We Use Personal Data</h2>
            <p>We may process personal data to:</p>
            <ul>
              <li>(a) create, authenticate and maintain your account;</li>
              <li>(b) verify your mobile number;</li>
              <li>(c) provide messaging and group functionality;</li>
              <li>
                (d) operate Super Groups and their privacy and administrative
                controls;
              </li>
              <li>(e) transmit messages, media and other content;</li>
              <li>
                (f) enable location, media and audio functionality requested by
                you;
              </li>
              <li>
                (g) maintain security and prevent fraud, misuse and unauthorised
                access;
              </li>
              <li>(h) investigate reports and enforce our Terms of Use;</li>
              <li>(i) provide customer and technical support;</li>
              <li>(j) maintain, diagnose and improve the Platform;</li>
              <li>(k) administer subscriptions and verify purchases;</li>
              <li>(l) comply with applicable law and lawful orders;</li>
              <li>
                (m) protect the rights and safety of SkaleChat, its users and
                others; and
              </li>
              <li>
                (n) provide AI-assisted features where enabled and appropriately
                disclosed.
              </li>
            </ul>

            <h2>4. Super Groups and Administrator Access</h2>
            <p>
              4.1. Super Groups are designed so that ordinary members may have
              restricted access to other members&rsquo; personal information.
            </p>
            <p>
              4.2. A Super Group Administrator may, however, have access to
              information including:
            </p>
            <ul>
              <li>(a) your name;</li>
              <li>(b) mobile number;</li>
              <li>(c) profile photograph;</li>
              <li>(d) last-seen status;</li>
              <li>(e) messages sent within the Super Group; and</li>
              <li>(f) media and other content shared within the Super Group.</li>
            </ul>
            <p>
              4.3. You should therefore understand that information concealed from
              other ordinary members may nevertheless be available to the
              Administrator.
            </p>
            <p>
              4.4. SkaleChat does not represent that participation in a Super
              Group makes you anonymous to SkaleChat or its Administrator.
            </p>

            <h2>5. Messages and Encryption</h2>
            <p>
              Messages and other content are encrypted in transit and while
              stored on our servers. SkaleChat does not currently provide
              end-to-end encryption.
            </p>
            <p>
              Because features such as Super Group administration, moderation of
              reported content and AI-assisted functionality require access to
              message content, SkaleChat&rsquo;s systems are able to access the
              content of messages processed through the Platform. You should
              therefore not assume that messages are inaccessible to SkaleChat or
              to a Super Group Administrator.
            </p>
            <p>
              Where a message is reported, it becomes accessible to authorised
              moderators for the purposes described in Section 13. Where an
              AI-assisted feature is enabled, message or group content may be
              processed as described in Section 6.
            </p>

            <h2>6. Artificial Intelligence Processing</h2>
            <p>
              Where an AI feature is enabled, messages or other group content may
              be processed to provide functionality including:
            </p>
            <ul>
              <li>(a) detecting potential violations of Platform policies;</li>
              <li>
                (b) identifying potential attempts to circumvent or bypass an
                Administrator;
              </li>
              <li>(c) generating summaries; and</li>
              <li>(d) generating notes.</li>
            </ul>
            <p>
              AI-assisted features are provided using [AI provider to be
              confirmed]. Where such processing involves an external provider,
              relevant content may be shared with that provider solely to the
              extent necessary to deliver the feature, and subject to applicable
              contractual and legal obligations.
            </p>

            <h2>7. Analytics, Diagnostics, Advertising and Tracking</h2>
            <p>
              SkaleChat may use analytics and diagnostic technologies to
              understand application usage, identify crashes and technical
              problems, monitor performance and improve the Platform. These
              presently include [analytics and diagnostics providers to be
              confirmed]. SkaleChat does not currently serve third-party
              advertising.
            </p>
            <p>
              Such technologies may process device type, operating system,
              application version, IP address, usage events, diagnostic
              information and crash logs.
            </p>
            <p>
              Where consent or another user choice is required by applicable law,
              the relevant processing will be subject to that choice.
            </p>

            <h2>8. Payments</h2>
            <p>
              Purchases made through SkaleChat&rsquo;s mobile applications are
              presently processed through the Apple App Store or Google Play
              billing systems.
            </p>
            <p>
              SkaleChat does not directly collect or store full card numbers,
              bank-account details, UPI credentials, CVV numbers or similar
              payment credentials where payment is processed through those
              systems.
            </p>
            <p>
              SkaleChat may receive transaction information such as an order or
              transaction identifier, subscription status, product purchased,
              purchase date and renewal or expiry information necessary to
              administer the subscription.
            </p>

            <h2>9. Service Providers and Disclosure of Personal Data</h2>
            <p>
              SkaleChat may disclose or make personal data available to third
              parties only where reasonably necessary for the purposes described
              in this Privacy Policy, including:
            </p>
            <ul>
              <li>(a) cloud infrastructure and hosting providers;</li>
              <li>(b) analytics and diagnostic providers;</li>
              <li>(c) payment and app-store providers;</li>
              <li>(d) AI service providers, where applicable;</li>
              <li>(e) professional advisers where reasonably necessary;</li>
              <li>
                (f) competent governmental, regulatory, judicial or
                law-enforcement authorities where required or permitted by law;
                and
              </li>
              <li>
                (g) a successor or participant in a genuine corporate
                restructuring, merger, acquisition or transfer of business,
                subject to applicable law.
              </li>
            </ul>
            <p>
              Service providers processing personal data on SkaleChat&rsquo;s
              behalf will be required to process such information consistently
              with applicable contractual and legal obligations.
            </p>

            <h2>10. Hosting and International Processing</h2>
            <p>
              Personal data is primarily hosted on cloud servers located in
              [hosting region to be confirmed]. Depending upon the confirmed
              server region and service providers used, personal data may be
              processed in a country other than the country in which you reside,
              subject to applicable legal requirements.
            </p>

            <h2>11. Data Retention and Deletion</h2>
            <p>
              11.1. You may request deletion of your SkaleChat account through the
              account-deletion functionality or other mechanism made available by
              SkaleChat.
            </p>
            <p>
              11.2. Once an account is deleted, it cannot be recovered or accessed
              by the user.
            </p>
            <p>
              11.3. Account data will ordinarily be retained for 30 days following
              account deletion, after which it will be deleted, except to the
              extent retention is required by applicable law or reasonably
              necessary for an applicable legal obligation.
            </p>
            <p>
              11.4. Where a user deletes a message, the message is removed from
              our active systems and is not retained.
            </p>
            <p>
              11.5. Residual copies of deleted content within encrypted backups
              are automatically overwritten within [backup retention period to be
              confirmed]. Security and audit logs may be retained for longer where
              required for legal, security or fraud-prevention purposes. Content
              that a Super Group Administrator exported or downloaded before
              deletion cannot be recovered or deleted by SkaleChat.
            </p>

            <h2>12. Administrator Downloads and Exports</h2>
            <p>
              Super Group Administrators may download content and, subject to
              applicable administrative controls, export conversations.
            </p>
            <p>
              Once an administrator lawfully downloads a file onto another device,
              SkaleChat may not technically be capable of ensuring that it is not
              retained.
            </p>

            <h2>13. Reports and Moderation</h2>
            <p>Users may report messages, users and groups.</p>
            <p>
              Where a report is submitted, authorised SkaleChat moderators may
              inspect the reported content to investigate the complaint, enforce
              the Terms of Use, protect users and comply with applicable law.
            </p>

            <h2>14. Security</h2>
            <p>
              We will implement reasonable technical and organisational safeguards
              appropriate to the nature of the personal data processed and the
              risks associated with processing.
            </p>
            <p>
              No method of electronic transmission or storage can be represented
              as completely secure. Users should maintain the security of their
              devices, accounts and authentication mechanisms.
            </p>

            <h2>15. Your Choices and Rights</h2>
            <p>
              Subject to applicable law, you may have rights in relation to your
              personal data, including rights to:
            </p>
            <ul>
              <li>(a) obtain information concerning processing of your personal data;</li>
              <li>(b) seek correction, completion or updating of personal data;</li>
              <li>(c) seek erasure of personal data where applicable;</li>
              <li>(d) withdraw consent where processing is based upon consent;</li>
              <li>(e) access grievance redressal mechanisms; and</li>
              <li>
                (f) exercise such other rights as become applicable under the
                Digital Personal Data Protection Act, 2023 and rules made
                thereunder.
              </li>
            </ul>
            <p>
              Where processing is based on your consent, you may withdraw that
              consent at any time through your in-app settings or by contacting
              our Grievance Officer. Withdrawal of consent will not affect the
              lawfulness of processing already carried out, and may be exercised
              without unreasonable difficulty.
            </p>

            <h2>16. Children&rsquo;s Personal Data</h2>
            <p>
              SkaleChat is not intended for children under 13 years of age, and
              you must be at least 13 to create an account. Where required by the
              Digital Personal Data Protection Act, 2023, we will not knowingly
              process the personal data of a child without verifiable parental or
              guardian consent, and we do not use children&rsquo;s personal data
              for targeted advertising or behavioural tracking.
            </p>
            <p>
              If we become aware that a child has provided personal data without
              any consent required by applicable law, we will take reasonable
              steps to delete that information.
            </p>

            <h2>17. Grievances and Privacy Requests</h2>
            <p>
              Questions, complaints and requests concerning this Privacy Policy or
              your personal data may be addressed to:
            </p>
            <p>
              Grievance Officer: Nitin Sharma
              <br />
              Email:{" "}
              <Link href={`mailto:${grievanceEmail}`}>{grievanceEmail}</Link>
              <br />
              Address: C/o Anjana Sharma, Gali no. 4, Uttamnagar, Rewari, Rewari,
              Rewari- 123401, Haryana, India
            </p>

            <h2>18. Legal Disclosures</h2>
            <p>
              We may preserve, access or disclose information where reasonably
              necessary to comply with applicable law, legal process or a lawful
              direction of a competent authority, or to protect the rights,
              security and integrity of SkaleChat, our users or others, subject to
              applicable law.
            </p>

            <h2>19. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our
              services, technology or applicable law.
            </p>
            <p>
              Where required by law, we will provide notice of material changes
              and obtain fresh consent where the change involves processing for a
              new purpose requiring such consent.
            </p>

            <h2>20. Contact Us</h2>
            <p>For questions concerning this Privacy Policy:</p>
            <p>
              Skalechat Communications Private Limited
              <br />
              C/o Anjana Sharma, Gali No. 4, Uttamnagar, Rewari, Rewari, Rewari
              &ndash; 123401, Haryana, India
              <br />
              Email:{" "}
              <Link href={`mailto:${grievanceEmail}`}>{grievanceEmail}</Link>
            </p>
          </Prose>
        </Container>
      </section>
    </>
  );
}
