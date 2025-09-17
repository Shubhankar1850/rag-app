import Link from "next/link"
import "./page.css"

export default function HomePage() {
  return (
    <main className="landing-container">
      <div className="landing-card">
        <h1 className="landing-title">Shubhankar Here<br/>Welcome to My Portfolio</h1>
        <p className="landing-subtitle">
          Choose how you want to explore my work:
        </p>

        <div className="landing-buttons">
          <Link href="/portfolio" className="button button-blue">
            Traditional Portfolio
          </Link>

          <Link href="/chat" className="button button-green">
            AI Chat (RAG Portfolio)
          </Link>
        </div>
      </div>
    </main>
  )
}
