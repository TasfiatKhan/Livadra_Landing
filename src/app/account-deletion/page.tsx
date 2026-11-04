import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/layout/LegalPage'
import DeletionRequestForm from '@/components/ui/DeletionRequestForm'
import { SITE_URL, ACCOUNT_DELETION_PATH, PRIVACY_POLICY_PATH, PRIVACY_EMAIL, SUPPORT_EMAIL } from '@/config/links'

export const metadata: Metadata = {
  title: 'Account Deletion — Livadra',
  description: 'Delete your Livadra account and personal data, in the app or by request.',
  alternates: { canonical: ACCOUNT_DELETION_PATH },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}${ACCOUNT_DELETION_PATH}`,
    siteName: 'Livadra',
    title: 'Delete your Livadra account',
    description: 'Delete your Livadra account and personal data, in the app or by request.',
  },
}

export default function AccountDeletionPage() {
  const mailSubject = encodeURIComponent('Livadra account deletion')

  return (
    <LegalPage
      title="Delete your Livadra account"
      meta="Livadra is operated by Zabmation, a sole proprietorship based in Ontario, Canada."
    >
      <div className="legal-prose">
        <h2 style={{ marginTop: 0 }}>Delete in the app</h2>
        <p>
          If you can sign in, open <strong>My Profile</strong> and tap <strong>“Delete my account.”</strong> After you
          confirm, Livadra immediately deletes your account and its associated profile, Moments, saved responses,
          feedback, copy history, and response records, and signs you out.
        </p>

        <h2>Can’t sign in? Request deletion</h2>
        <p>
          Use this form if you cannot delete your account from the Livadra app. We’ll verify the request and delete the
          account and associated profile, Moments, saved responses, feedback, copy history, and response records.
          Submitting the form opens your email app with the request prepared — visiting this page does not delete an
          account on its own.
        </p>
      </div>

      <DeletionRequestForm />

      <div className="legal-prose">
        <p>
          If the form is unavailable, email{' '}
          <a href={`mailto:${PRIVACY_EMAIL}?subject=${mailSubject}`}>{PRIVACY_EMAIL}</a> with “Livadra account
          deletion” as the subject. We may need to confirm the request came from the account owner before deleting
          anything.
        </p>

        <h2>What happens to your data</h2>
        <ul>
          <li>Your account, profile, Moments, saved responses, feedback, copy history, and response records are deleted.</li>
          <li>Temporary cached information is not intended to be a permanent record.</li>
          <li>Some information may be retained where required or permitted by applicable law.</li>
          <li>
            Text and audio previously sent to our AI providers are governed by their retention practices —{' '}
            <a href="https://privacy.anthropic.com/en/articles/7996866-how-long-do-you-store-my-organizations-data" target="_blank" rel="noopener noreferrer">Anthropic’s API retention policy</a>{' '}
            and{' '}
            <a href="https://developers.openai.com/api/docs/guides/your-data" target="_blank" rel="noopener noreferrer">OpenAI’s API data controls</a>.
          </li>
        </ul>
        <p>
          You can also delete individual Moments and saved responses at any time without deleting your account. See
          the <Link href={PRIVACY_POLICY_PATH}>Livadra Privacy Policy</Link> for full details, or contact{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> for help.
        </p>
      </div>
    </LegalPage>
  )
}
