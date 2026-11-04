import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/layout/LegalPage'
import {
  SITE_URL, PRIVACY_POLICY_PATH, ACCOUNT_DELETION_PATH,
  OPERATOR_URL, PRIVACY_EMAIL, SUPPORT_EMAIL, INFO_EMAIL,
} from '@/config/links'

export const metadata: Metadata = {
  title: 'Privacy Policy — Livadra',
  description:
    'How Livadra, operated by Zabmation, collects, uses, shares, and protects personal information, and how to delete your account.',
  alternates: { canonical: PRIVACY_POLICY_PATH },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}${PRIVACY_POLICY_PATH}`,
    siteName: 'Livadra',
    title: 'Livadra Privacy Policy',
    description: 'How Livadra collects, uses, shares, and protects personal information.',
  },
}

const SECTIONS = [
  { id: 'who-we-are', title: 'Who We Are' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use-information', title: 'How We Use Information' },
  { id: 'ai-processing', title: 'AI Processing and Service Providers' },
  { id: 'provider-retention', title: 'Provider Retention' },
  { id: 'storage-and-retention', title: 'Storage and Retention by Livadra' },
  { id: 'account-deletion', title: 'Account Deletion and Privacy Requests' },
  { id: 'sharing', title: 'When We Share Information' },
  { id: 'security', title: 'Security' },
  { id: 'your-rights', title: 'Your Choices and Rights' },
  { id: 'children', title: 'Children’s Privacy' },
  { id: 'international', title: 'International Processing' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact', title: 'Contact Us' },
] as const

function Mail({ to }: { to: string }) {
  return <a href={`mailto:${to}`}>{to}</a>
}

function Section({ n, children }: { n: number; children: React.ReactNode }) {
  const { id, title } = SECTIONS[n - 1]
  return (
    <section id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{n}. {title}</h2>
      {children}
    </section>
  )
}

export default function PrivacyPolicyPage() {
  const deletionUrl = `${SITE_URL}${ACCOUNT_DELETION_PATH}`

  return (
    <LegalPage
      title="Livadra Privacy Policy"
      meta={<>Effective date: November 4, 2026 &nbsp;·&nbsp; Last updated: November 4, 2026</>}
    >
      <nav className="legal-toc" aria-label="Policy contents">
        <h2>Contents</h2>
        <ol>
          {SECTIONS.map(({ id, title }) => (
            <li key={id}><a href={`#${id}`} className="footer-link">{title}</a></li>
          ))}
        </ol>
      </nav>

      <div className="legal-prose">
        <Section n={1}>
          <p>
            Livadra is operated by Zabmation, a sole proprietorship based in Ontario, Canada (referred to in this
            policy as “Zabmation,” “we,” “us,” or “our”). This policy explains how we collect, use, disclose, and
            protect personal information when you use the Livadra mobile application and related services (the
            “Service”).
          </p>
          <p>
            Zabmation is responsible for personal information under its control and has designated a Privacy Officer
            who is accountable for our compliance with this policy. You can reach the Privacy Officer using the contact
            details in <a href="#contact">Section 14</a>.
          </p>
          <p>
            This policy applies to information handled through the Service. It does not describe the privacy practices
            of third-party services that operate independently of Livadra.
          </p>
        </Section>

        <Section n={2}>
          <p>
            <strong>Account information.</strong> When you create an account, we collect the information needed to
            register and authenticate you, including your email address and password. Passwords are stored as salted,
            one-way hashes and are never stored in readable form.
          </p>
          <p>
            <strong>Information you provide.</strong> We collect content you submit or create through Livadra, which
            may include profile details, preferences or personality-related information, conversation prompts,
            messages, and Moments. We also record when you rate, save, or copy a suggestion.
          </p>
          <p>
            <strong>AI interaction information.</strong> We process the text and relevant context you submit to provide
            AI-powered features. This can include prompt text, conversation context, and relevant profile or
            personality fields.
          </p>
          <p>
            <strong>Voice input.</strong> Livadra asks for microphone access and records audio only when you tap the
            record button. If you use voice input, the audio you submit is sent to OpenAI’s Whisper transcription
            service so it can be converted into text. Livadra does not store the submitted audio. The resulting
            transcription may be stored with the related response or Moment message in our database.
          </p>
          <p>
            <strong>Technical and usage information.</strong> Our servers may process technical information needed to
            operate, secure, and troubleshoot the Service, such as IP addresses, request details, and error logs. Error
            logs are designed not to include the content of your messages or AI responses. We do not use third-party
            advertising or analytics SDKs, Firebase, Crashlytics, or Sentry in the application.
          </p>
          <p>
            <strong>Information stored on your device.</strong> Your sign-in tokens are stored on your device using the
            operating system’s secure storage. Your light/dark theme preference is stored locally on your device.
          </p>
        </Section>

        <Section n={3}>
          <p>
            We use information to create and manage accounts; authenticate users; provide Livadra features; generate
            AI-assisted responses; transcribe voice input when requested; save and display conversations, Moments,
            profiles, and feedback; review ratings, saves, and copy activity within Livadra to understand which
            suggestions are useful and improve the Service; respond to support, privacy, and deletion requests;
            maintain, secure, and troubleshoot the Service; and comply with applicable legal obligations.
          </p>
          <p>
            We do not sell personal information. We do not use personal information for third-party targeted
            advertising.
          </p>
        </Section>

        <Section n={4}>
          <p>
            <strong>Anthropic Claude API.</strong> Livadra uses Anthropic’s Claude API to generate AI-powered text for
            features such as Texting, Live, and Moments. Relevant text prompts, conversation context, and applicable
            profile or personality fields are sent to Anthropic for processing. Livadra does not send your account
            email address or username as part of the AI prompt context, unless you include that information yourself
            in the content you submit.
          </p>
          <p>
            <strong>OpenAI Whisper.</strong> When you voluntarily use voice input, the audio is sent to OpenAI’s
            transcription service (Whisper) to produce text. Livadra does not retain the raw audio; the resulting
            transcript may be stored in the relevant Livadra response or Moment message record.
          </p>
          <p>
            <strong>Infrastructure and database.</strong> Account and application content, including
            conversation-related records, are stored in a PostgreSQL database. Redis is used for temporary profile
            caching. We do not make claims in this policy about specific hosting locations, backup schedules,
            encryption configurations, or disaster-recovery arrangements beyond what is implemented and verified in
            the production environment.
          </p>
          <p>
            These providers process information under their own terms and privacy documentation, as well as any
            applicable service agreements. We use service providers to operate features requested by users; they are
            not authorized by this policy to use Livadra data for their own unrelated purposes.
          </p>
        </Section>

        <Section n={5}>
          <p>
            Information sent to AI providers is subject to the providers’ applicable API terms, settings, and retention
            practices, which may change over time. Based on the providers’ generally published API practices reviewed
            for this policy, Anthropic indicates that API inputs and outputs are generally deleted within 30 days,
            subject to exceptions such as legal requirements, policy enforcement, or other stated circumstances.
            OpenAI’s audio transcription endpoint is described as having no application-state retention by default;
            however, content may remain subject to applicable abuse-monitoring retention, which may be up to 30 days in
            some circumstances.
          </p>
          <p>
            We have not represented that a special zero-retention or modified-retention agreement is in place for our
            accounts with these providers. Users should consult the providers’ current documentation for the latest
            details:{' '}
            <a href="https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-my-organizations-data" target="_blank" rel="noopener noreferrer">
              Anthropic API retention
            </a>{' '}and{' '}
            <a href="https://developers.openai.com/api/docs/guides/your-data" target="_blank" rel="noopener noreferrer">
              OpenAI API data controls
            </a>.
          </p>
        </Section>

        <Section n={6}>
          <p>
            We retain account information and the application content associated with your account for as long as
            needed to provide the Service, maintain account functionality, resolve disputes, enforce our agreements,
            and meet legal obligations.
          </p>
          <p>You control how long some content is kept:</p>
          <ul>
            <li>
              <strong>Moments.</strong> Deleting a Moment from its thread permanently deletes its messages, the AI
              responses generated within it, and any ratings, saves, or copy records tied to those responses.
            </li>
            <li>
              <strong>Saved responses.</strong> Removing a saved response from the Saved Responses screen permanently
              deletes that saved item.
            </li>
            <li>
              <strong>Texting and Live requests.</strong> Records of Texting and Live requests (a short summary of the
              situation, the generated suggestions, and related ratings) are kept until you delete your account.
            </li>
          </ul>
          <p>
            Deleting your account deletes all of the above. Temporary cached information in Redis is not intended to be
            a permanent record. We do not promise a specific deletion timeline for every underlying infrastructure
            layer, backup, or log unless that timeline is expressly stated in the Service or required by law.
          </p>
        </Section>

        <Section n={7}>
          <p>
            <strong>In-app deletion.</strong> If you can access your account, open the My Profile screen and tap
            “Delete my account.” The app asks you to confirm, sends an authenticated deletion request, deletes your
            account and its associated profile, Moments, saved responses, feedback, copy history, and response records,
            and signs you out.
          </p>
          <p>
            <strong>Unable to access your account.</strong> If you cannot sign in, you can submit an account-deletion
            request through the public deletion-request page:{' '}
            <Link href={ACCOUNT_DELETION_PATH}>{deletionUrl}</Link>, or by emailing <Mail to={PRIVACY_EMAIL} />. This is a
            request process: visiting the page does not automatically delete an account.
          </p>
          <p>
            You may also contact us using the privacy email below to ask a question or make a privacy request. We may
            need to verify your identity before acting on a request. Some information may be retained where required
            or permitted by applicable law.
          </p>
        </Section>

        <Section n={8}>
          <p>
            We share information with service providers only as reasonably necessary to operate the Service and
            provide features you request, including AI generation, voice transcription, database, and infrastructure
            services. We may also disclose information if required by law, legal process, or a valid governmental
            request, or when reasonably necessary to protect the rights, safety, and security of users, Zabmation, or
            others.
          </p>
          <p>
            We do not sell your personal information or share it with third parties for their own targeted advertising.
          </p>
        </Section>

        <Section n={9}>
          <p>
            We use reasonable measures intended to protect information handled by the Service, including encrypted
            (HTTPS) connections between the app and our servers and hashed password storage. No method of transmission
            or electronic storage is completely secure, and we cannot guarantee absolute security. Access to
            information is limited to what is necessary to operate and support the Service.
          </p>
        </Section>

        <Section n={10}>
          <p>
            Depending on where you live, applicable privacy laws may give you rights to request access to, correction
            of, or deletion of personal information, or to withdraw consent where processing is based on consent. You
            can edit your profile in the app, delete individual Moments and saved responses, delete your account, and
            choose not to use optional voice input. To make any other request, contact us using the details below.
          </p>
        </Section>

        <Section n={11}>
          <p>
            Livadra is intended only for users who are 18 years of age or older. We do not knowingly collect personal
            information from anyone under 18. If we learn that an account belongs to someone under 18, we will delete
            it. If you believe a minor has provided personal information, contact us at <Mail to={PRIVACY_EMAIL} />.
          </p>
        </Section>

        <Section n={12}>
          <p>
            Our service providers may process information in countries other than the country where you live,
            including the United States and other locations where privacy laws may differ. Where information is
            processed internationally, it may be subject to the laws of those jurisdictions.
          </p>
        </Section>

        <Section n={13}>
          <p>
            We may update this policy from time to time to reflect changes to Livadra, our practices, or applicable
            law. We will update the effective or last-updated date above when changes are made. Where required, we
            will provide additional notice or seek consent.
          </p>
        </Section>

        <Section n={14}>
          <p>
            For privacy questions, access or deletion requests, or concerns about personal information, contact:
          </p>
          <div className="legal-card">
            <ul className="legal-contact">
              <li><span>Privacy Officer</span><Mail to={PRIVACY_EMAIL} /></li>
              <li><span>Support</span><Mail to={SUPPORT_EMAIL} /></li>
              <li><span>General inquiries</span><Mail to={INFO_EMAIL} /></li>
              <li><span>Livadra website</span><a href={SITE_URL}>{SITE_URL}</a></li>
              <li>
                <span>Operator</span>
                <div>
                  <a href={OPERATOR_URL} target="_blank" rel="noopener noreferrer">Zabmation</a>
                  {' '}— sole proprietorship, Ontario, Canada
                </div>
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </LegalPage>
  )
}
