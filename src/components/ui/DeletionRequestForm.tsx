'use client'

import { useState } from 'react'
import { PRIVACY_EMAIL } from '@/config/links'

// No backend: builds a pre-filled email to the privacy inbox, so the request
// is a verifiable message from the user's own address.
export default function DeletionRequestForm() {
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Livadra account deletion request')
    const body = encodeURIComponent(
      `Please delete the Livadra account associated with: ${email.trim()}\n\n${details.trim()}`,
    )
    window.location.href = `mailto:${PRIVACY_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="legal-card" style={{ marginBottom: 24 }}>
      <label className="legal-field">
        <span>Account email</span>
        <input
          type="email" required maxLength={254} autoComplete="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="legal-field">
        <span>Additional details (optional)</span>
        <textarea rows={4} maxLength={1000} value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <button
        type="submit"
        className="gp-btn gp-btn-solid"
        style={{
          background: 'var(--accent)', color: '#2A1710', border: 'none', borderRadius: 100,
          padding: '13px 26px', fontSize: 15, fontWeight: 500, cursor: 'pointer', font: 'inherit',
        }}
      >
        Send deletion request
      </button>
      <p role="status" aria-live="polite" style={{ margin: '16px 0 0', fontSize: 14, color: 'var(--text2)', minHeight: 22 }}>
        {sent && 'Your email app should open with the request prepared. Send that email to complete your request.'}
      </p>
    </form>
  )
}
