import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Use",
  description: `The terms that govern use of the SkaleChat platform, operated by ${site.legalName}.`,
};

const grievanceEmail = "support@skalechat.com";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" />

      <section>
        <Container className="py-16 md:py-20">
          <p className="mb-10 text-sm text-faint">
            Effective date: [To be finalized]
          </p>

          <Prose>
            <p>
              These Terms of Use govern your access to and use of the SkaleChat
              mobile application, its features, services, software and related
              services made available by Skalechat Communications Private
              Limited, having its registered office at C/o Anjana Sharma, Gali
              No. 4, Uttamnagar, Rewari, Rewari, Rewari &ndash; 123401, Haryana,
              India (&ldquo;SkaleChat&rdquo;, &ldquo;Company&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By creating an account, accessing or using SkaleChat, you agree to
              be bound by these Terms of Use and our{" "}
              <Link href="/privacy">Privacy Policy</Link>. If you do not agree to
              these Terms, you must not access or use SkaleChat.
            </p>

            <h2>1. SkaleChat</h2>
            <p>
              1.1. SkaleChat is a communication platform that enables users to
              communicate individually and through groups, including a feature
              presently described as a &ldquo;Super Group&rdquo;.
            </p>
            <p>
              1.2. A principal feature of a Super Group is controlled
              communication between its members. Depending upon the
              configuration of the Super Group, ordinary members may communicate
              within the group without being provided access to certain personal
              or contact information of other members.
            </p>
            <p>
              1.3. A Super Group administrator may assign names or aliases by
              which members are identified within a Super Group and may exercise
              administrative controls made available by SkaleChat.
            </p>
            <p>
              1.4. The restriction of contact information within a Super Group is
              a platform functionality. SkaleChat does not warrant or guarantee
              that members cannot identify, locate, contact or transact with each
              other through information obtained independently of SkaleChat or
              through any means outside the Platform.
            </p>
            <p>
              1.5. SkaleChat does not guarantee that use of a Super Group will
              prevent circumvention of an administrator, disintermediation, loss
              of commission, loss of a client or customer, loss of business
              opportunity or any other commercial loss.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              2.1. You must be at least 13 years of age to create or operate a
              SkaleChat account.
            </p>
            <p>
              2.2. By creating an account, you represent that you have the legal
              capacity to enter into these Terms.
            </p>
            <p>
              2.3. Where you use SkaleChat on behalf of a company, firm,
              organisation or other entity, you represent that you are authorised
              to accept these Terms on its behalf.
            </p>

            <h2>3. Registration and Account Security</h2>
            <p>
              3.1. You may be required to provide information including your name,
              mobile number and profile photograph and to verify your mobile
              number through an OTP.
            </p>
            <p>
              3.2. You must provide accurate and current information and must not
              impersonate another person or misrepresent your identity.
            </p>
            <p>
              3.3. You are responsible for maintaining control over your account,
              registered mobile number and devices through which your account is
              accessed.
            </p>
            <p>
              3.4. You must promptly notify SkaleChat if you reasonably believe
              that your account has been accessed or used without authorisation.
            </p>
            <p>
              3.5. You shall not sell, transfer, licence or otherwise make your
              account available to another person without the permission of
              SkaleChat.
            </p>

            <h2>4. Super Groups</h2>
            <p>
              4.1. A user who subscribes to the applicable paid subscription may
              create and administer a Super Group (&ldquo;Administrator&rdquo;).
            </p>
            <p>
              4.2. Ordinary users may participate in Super Groups without
              purchasing a Super Group subscription.
            </p>
            <p>
              4.3. An Administrator may, subject to the functionality made
              available by SkaleChat:
            </p>
            <ul>
              <li>(a) add or remove members;</li>
              <li>
                (b) determine how members are identified within the Super Group,
                including through assigned names or aliases;
              </li>
              <li>(c) access member information made available to Administrators;</li>
              <li>(d) moderate the Super Group;</li>
              <li>
                (e) access messages, shared media and other content within the
                Super Group;
              </li>
              <li>
                (f) download content and, where enabled, export conversations;
                and
              </li>
              <li>
                (g) exercise such additional administrative controls as SkaleChat
                may make available.
              </li>
            </ul>
            <p>
              4.4. The information presently available to an Administrator may
              include a member&rsquo;s name, mobile number, profile photograph,
              last-seen status, messages and shared media.
            </p>
            <p>
              4.5. Ordinary members may have restricted visibility of information
              concerning other members. A member must not attempt to defeat,
              circumvent or interfere with restrictions imposed by SkaleChat or
              the applicable Super Group configuration.
            </p>
            <p>
              4.6. Administrators are responsible for using information available
              to them through their administrative privileges lawfully and only
              for legitimate purposes connected with administration of the
              relevant Super Group.
            </p>
            <p>
              4.7. SkaleChat does not become a party to any contract,
              transaction, engagement, introduction, commission arrangement or
              other commercial relationship merely because the relevant persons
              communicate through SkaleChat.
            </p>

            <h2>5. User Content</h2>
            <p>
              5.1. &ldquo;User Content&rdquo; means messages, photographs,
              videos, audio recordings, documents, location information, profile
              information and any other information or material submitted,
              transmitted, uploaded or otherwise made available by a user through
              SkaleChat.
            </p>
            <p>5.2. You retain your rights in User Content created by you.</p>
            <p>
              5.3. You grant SkaleChat a limited, non-exclusive licence to host,
              transmit, process, reproduce and otherwise technically use User
              Content to the extent necessary to operate, secure, maintain and
              provide SkaleChat and the features requested by you.
            </p>
            <p>
              5.4. This licence does not transfer ownership of your User Content
              to SkaleChat.
            </p>
            <p>
              5.5. You represent that you have the rights and permissions
              necessary to submit your User Content and that its submission and
              use through SkaleChat does not unlawfully infringe the rights of
              another person, natural or juristic.
            </p>

            <h2>6. Privacy Within Super Groups</h2>
            <p>
              6.1. SkaleChat&rsquo;s controlled-identity functionality is intended
              to restrict information made available between ordinary members. It
              must not be understood as a representation that a user is anonymous
              to SkaleChat or to the Administrator.
            </p>
            <p>
              6.2. Depending upon the service and group configuration, SkaleChat
              may possess identifying and account information concerning a member,
              and a Super Group Administrator may have access to information not
              visible to ordinary members.
            </p>
            <p>
              6.3. You must therefore not assume that participation in a Super
              Group is anonymous, confidential or incapable of being attributed
              to you.
            </p>
            <p>
              6.4. Your personal data is otherwise processed in accordance with
              the <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>7. Prohibited Conduct</h2>
            <p>You shall not use SkaleChat:</p>
            <ul>
              <li>(a) for any unlawful or fraudulent purpose;</li>
              <li>
                (b) to impersonate another person or falsely represent an
                affiliation;
              </li>
              <li>
                (c) to upload, transmit or communicate content which you do not
                have the right to communicate;
              </li>
              <li>
                (d) to threaten, harass, stalk or unlawfully intimidate another
                person;
              </li>
              <li>
                (e) to transmit obscene, sexually exploitative or otherwise
                unlawful material;
              </li>
              <li>
                (f) to infringe intellectual property, privacy, confidentiality
                or other legal rights;
              </li>
              <li>
                (g) to distribute malware, malicious code, spam or other harmful
                material;
              </li>
              <li>
                (h) to obtain or attempt to obtain another user&rsquo;s concealed
                personal or contact information by circumventing the
                Platform&rsquo;s technical restrictions;
              </li>
              <li>
                (i) to gain unauthorised access to an account, system or network;
              </li>
              <li>
                (j) to scrape, harvest, systematically extract or compile user
                information without authorisation;
              </li>
              <li>
                (k) to interfere with the security, operation or integrity of
                SkaleChat;
              </li>
              <li>
                (l) to reverse engineer or attempt to derive the source code of
                the Platform except to the extent expressly permitted by
                applicable law;
              </li>
              <li>
                (m) to use automated systems in a manner that places an
                unreasonable burden upon SkaleChat; or
              </li>
              <li>
                (n) otherwise in a manner prohibited by applicable law or these
                Terms.
              </li>
            </ul>

            <h2>8. Reporting and Moderation</h2>
            <p>
              8.1. Users may report messages, users and groups through the
              reporting functionality made available by SkaleChat.
            </p>
            <p>
              8.2. Where content is reported, authorised SkaleChat personnel may
              inspect the reported content and associated information reasonably
              necessary to investigate and act upon the report.
            </p>
            <p>
              8.3. SkaleChat may take such action as it considers appropriate and
              lawful, including issuing a warning, restricting functionality,
              removing content, suspending or terminating an account or Super
              Group, or reporting matters to competent authorities where required
              by law.
            </p>
            <p>
              8.4. Moderation does not amount to an undertaking by SkaleChat to
              monitor every communication transmitted through the Platform.
            </p>

            <h2>9. Artificial Intelligence Features</h2>
            <p>
              9.1. SkaleChat may provide artificial intelligence-assisted
              features. Where enabled, these may process messages or other group
              content for purposes including identifying potential policy
              violations, identifying possible attempts to bypass an
              Administrator, preparing summaries or generating notes.
            </p>
            <p>
              9.2. The availability and operation of such features may depend upon
              applicable settings, permissions and disclosures presented within
              the Platform.
            </p>
            <p>
              9.3. AI-generated outputs may contain errors and must not be treated
              as professional, legal, financial or other expert advice.
            </p>

            <h2>10. Subscriptions and Payments</h2>
            <p>
              10.1. Ordinary use of SkaleChat is presently free. A user wishing to
              create a Super Group must purchase the applicable subscription.
            </p>
            <p>
              10.2. The price, duration, renewal terms and other material terms of
              a subscription will be displayed before purchase.
            </p>
            <p>
              10.3. Purchases made through the mobile applications are presently
              processed through the applicable Apple App Store or Google Play
              billing system.
            </p>
            <p>
              10.4. Subscriptions may consequently also be subject to the payment,
              cancellation and other applicable terms of the relevant app store.
            </p>
            <p>
              10.5. If an Administrator cancels a subscription, the relevant Super
              Group will remain active for 05 (five) days following cancellation,
              after which access to paid Super Group functionality may cease or be
              restricted.
            </p>
            <p>
              10.6. Nothing in these Terms excludes any refund, remedy or other
              right which cannot lawfully be excluded under applicable consumer
              law.
            </p>

            <h2>11. Refund Policy</h2>
            <p>
              11.1. This policy applies to paid subscriptions and other paid
              services offered by SkaleChat.
            </p>
            <p>
              11.2. You may cancel your SkaleChat subscription at any time through
              the applicable subscription management facility provided by the
              platform through which you purchased the subscription. Cancellation
              will generally prevent the subscription from renewing for the next
              billing period. Unless otherwise required by applicable law or
              determined by the applicable payment platform, cancellation does not
              automatically entitle you to a refund for the current billing
              period. You will generally continue to have access to the paid
              features until the end of the period for which you have already
              paid.
            </p>
            <p>
              11.3. Payments for SkaleChat subscriptions are generally
              non-refundable once a billing period has commenced, except where:
            </p>
            <ul>
              <li>(a) you were charged more than once for the same subscription;</li>
              <li>
                (b) payment was successfully completed but the purchased
                subscription or applicable paid features were not activated or
                delivered;
              </li>
              <li>
                (c) a material technical failure attributable to SkaleChat
                prevented you from accessing the paid service for a significant
                portion of the applicable subscription period and the issue could
                not reasonably be resolved;
              </li>
              <li>
                (d) the service materially failed to provide the features or
                benefits expressly represented at the time of purchase;
              </li>
              <li>(e) a refund is required under applicable law; or</li>
              <li>
                (f) SkaleChat, at its sole discretion, determines that a refund is
                appropriate as a goodwill exception.
              </li>
            </ul>
            <p>
              11.4. Except where required by applicable law, refunds will
              generally not be provided solely because:
            </p>
            <ul>
              <li>
                (a) you did not use the SkaleChat service after purchasing a
                subscription;
              </li>
              <li>(b) you changed your mind after purchasing the subscription;</li>
              <li>
                (c) you forgot to cancel your subscription before the renewal
                date;
              </li>
              <li>(d) you no longer require the service;</li>
              <li>
                (e) you were dissatisfied with the service for reasons unrelated
                to a material failure of the service; or
              </li>
              <li>
                (f) you failed to review the subscription terms, pricing, billing
                frequency, or renewal information before making the purchase.
              </li>
            </ul>
            <p>
              11.5. If you purchase a SkaleChat subscription through the Apple App
              Store or Google Play, the purchase may also be subject to the
              applicable platform&rsquo;s payment, cancellation, and refund
              policies. Refund requests may be processed by the applicable
              platform in accordance with its policies and applicable law.
              SkaleChat may also process or authorize refunds where permitted by
              the applicable platform and applicable law.
            </p>
            <p>
              11.6. If you believe that you have been charged more than once for
              the same subscription or that a payment was processed incorrectly,
              please contact SkaleChat Support with the relevant transaction
              details. We will investigate the transaction and, where
              appropriate, arrange a refund or other suitable resolution.
            </p>
            <p>
              11.7. Where SkaleChat approves a refund, the refund will generally
              be made to the original payment method used for the transaction,
              subject to the capabilities and policies of the applicable payment
              platform or payment processor. The time required for the refunded
              amount to appear in your account may depend on the payment provider,
              bank, card issuer, Apple App Store, Google Play, or other applicable
              payment service.
            </p>
            <p>
              11.8. To request a refund or report a billing issue, contact
              SkaleChat Support through the support channel provided within the
              SkaleChat application or on the SkaleChat website. Please provide
              sufficient information to identify the transaction, such as your
              registered account details, transaction/order ID, date of purchase,
              and a description of the issue.
            </p>

            <h2>12. Intellectual Property</h2>
            <p>
              12.1. SkaleChat, including its software, design, interfaces, logos,
              trade names, graphics and other proprietary material, excluding User
              Content, is owned by or licensed to SkaleChat and is protected by
              applicable intellectual property laws.
            </p>
            <p>
              12.2. Subject to these Terms, SkaleChat grants you a limited,
              revocable, non-exclusive, non-transferable right to access and use
              the Platform for its intended purpose.
            </p>
            <p>
              12.3. No provision of these Terms transfers any intellectual
              property right belonging to SkaleChat to you.
            </p>

            <h2>13. Third-Party Services</h2>
            <p>
              SkaleChat may depend upon third-party infrastructure and services,
              including hosting, mobile operating systems, app stores, analytics,
              diagnostics and other technology providers. Your use of certain
              functionality may also be subject to terms imposed by those third
              parties.
            </p>

            <h2>14. Availability and Changes</h2>
            <p>
              14.1. We may modify, update, discontinue or introduce features where
              reasonably required for operation, security, legal compliance or
              development of the Platform.
            </p>
            <p>
              14.2. We do not warrant uninterrupted or error-free availability of
              SkaleChat.
            </p>
            <p>
              14.3. Maintenance, technical failures, internet connectivity,
              third-party infrastructure or circumstances beyond our reasonable
              control may affect availability.
            </p>

            <h2>15. Suspension and Termination</h2>
            <p>
              15.1. You may discontinue use of SkaleChat and may request deletion
              of your account through the mechanism made available within the
              Platform.
            </p>
            <p>
              15.2. We may restrict, suspend or terminate access where reasonably
              necessary because of:
            </p>
            <ul>
              <li>(a) breach of these Terms;</li>
              <li>(b) unlawful use;</li>
              <li>(c) security risk;</li>
              <li>(d) fraud or abuse;</li>
              <li>(e) failure to pay applicable subscription charges; or</li>
              <li>
                (f) compliance with applicable law or a lawful direction of a
                competent authority.
              </li>
            </ul>
            <p>
              15.3. Account deletion and retention of personal data following
              deletion are governed by the{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>16. Disclaimers</h2>
            <p>
              16.1. SkaleChat provides communication infrastructure. Except where
              expressly stated, SkaleChat does not verify or endorse users,
              Administrators, businesses, goods, services, transactions or
              representations made through the Platform.
            </p>
            <p>
              16.2. Users are responsible for deciding whether to communicate or
              transact with another person and for conducting appropriate due
              diligence.
            </p>
            <p>16.3. SkaleChat does not guarantee:</p>
            <ul>
              <li>(a) completion or performance of any transaction;</li>
              <li>(b) payment of any commission or fee;</li>
              <li>(c) preservation of any commercial relationship;</li>
              <li>
                (d) that a user will not be contacted independently outside
                SkaleChat; or
              </li>
              <li>
                (e) that another user will comply with an agreement or obligation
                owed to you.
              </li>
            </ul>

            <h2>17. Limitation of Liability</h2>
            <p>
              SkaleChat shall not be liable for indirect, incidental, special or
              consequential loss arising from use of the Platform, including loss
              of profits, commissions, customers, business opportunities, goodwill
              or data, except where such liability cannot lawfully be excluded or
              limited.
            </p>

            <h2>18. Indemnity</h2>
            <p>
              In using this Platform, you agree to indemnify SkaleChat against
              third-party claims, liabilities, losses and reasonable costs arising
              directly from your unlawful use of the Platform, your User Content,
              your infringement of another person&rsquo;s rights or your material
              breach of these Terms.
            </p>

            <h2>19. Grievance Redressal</h2>
            <p>19.1. Complaints relating to SkaleChat may be submitted to:</p>
            <p>
              Grievance Officer: Nitin Sharma
              <br />
              Email:{" "}
              <Link href={`mailto:${grievanceEmail}`}>{grievanceEmail}</Link>
              <br />
              Address: C/o Anjana Sharma, Gali no. 4, Uttamnagar, Rewari, Rewari,
              Rewari- 123401, Haryana, India
            </p>
            <p>
              19.2. Complaints will be acknowledged and dealt with within the
              periods prescribed under applicable law.
            </p>

            <h2>20. Governing Law and Jurisdiction</h2>
            <p>20.1. These Terms are governed by the laws of India.</p>
            <p>
              20.2. Subject to any rights or remedies available under mandatory
              applicable law, the courts at Bangalore Urban District, State of
              Karnataka shall have jurisdiction in relation to disputes arising
              out of these Terms.
            </p>

            <h2>21. Changes to These Terms</h2>
            <p>
              SkaleChat may amend, add, alter, modify or delete any or all of
              these Terms from time to time. Where required by applicable law, we
              will notify users of material changes and obtain consent where
              necessary.
            </p>

            <h2>22. Contact</h2>
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
