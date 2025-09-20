import Link from 'next/link'
import { FileText, MessageCircle } from 'lucide-react'
import './page.css'

export default function HomePage() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1 className="modal-title">
          Shubhankar Here<br/>Welcome to My Portfolio
        </h1>
        
        <p className="modal-subtitle">
          Choose how you want to explore my work:
        </p>

        <div className="choice-container">
          <Link href="/portfolio" className="choice-card traditional-card">
            <div className="card-header">
              <FileText className="card-icon" size={28} />
              <h3 className="card-title">Traditional Portfolio</h3>
            </div>
            <p className="card-description">Classic showcase of projects and skills</p>
          </Link>

          <Link href="/chat" className="choice-card ai-card">
            <div className="card-header">
              <MessageCircle className="card-icon" size={28} />
              <h3 className="card-title">AI Chat Portfolio</h3>
            </div>
            <p className="card-description">Interactive AI-powered experience</p>
          </Link>
        </div>
      </div>
    </div>
  )
}