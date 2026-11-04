import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface LegalPageProps {
  title: string
  meta?: React.ReactNode
  children: React.ReactNode
}

// Shared shell for long-form legal pages: same Navbar/Footer as the landing page,
// narrow reading column, no entrance animations (content must be readable immediately).
export default function LegalPage({ title, meta, children }: LegalPageProps) {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <article className="legal-page">
        <div className="legal-wrap">
          <h1 className="legal-title">{title}</h1>
          {meta && <p className="legal-meta">{meta}</p>}
          {children}
        </div>
      </article>
      <Footer />
    </main>
  )
}
