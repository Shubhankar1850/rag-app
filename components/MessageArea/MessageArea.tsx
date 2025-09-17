'use client'

import './MessageArea.css'
import ReactMarkdown from "react-markdown"
import { useEffect, useRef} from 'react'

interface MessagePart {
  type: string
  text: string
}

interface Message {
  id: number
  role: 'user' | 'assistant'
  content?: string
  parts?: MessagePart[]
}

interface MessagesAreaProps {
  messages: Message[]
  status: 'idle' | 'loading' | 'streaming'
  error: Error | null
}

const MessagesArea = ({ messages, status, error }: MessagesAreaProps) => {
  const exampleQuestions = [
    "Summarize Shuhankar's frontend experience and main tech stack.",
    "Describe a project where Shuhankar improved performance and results.",
    "How did working at Sapient and TCS shape his skills?",
    "What’s his Japanese level and career plan with it?",
    "What unique value do you bring with 5.5 years in React/Next.js?",
    "シュブハンカーの経験やスキルについて質問してみましょう"
  ]

  const handleExampleClick = (question: string) => {
    // Dispatch custom event for parent component to handle
    window.dispatchEvent(new CustomEvent('exampleClick', { detail: question }))
  }
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, status])

  return (
    <main className="messages-container" ref={containerRef}>
      {messages.length === 0 ? (
        <div className="welcome-section">
          <div className="welcome-message">
            <p>👋 Welcome! Ask me anything about Shubhankar's career</p>
            <p>ようこそ！シュブハンカーのキャリアについて何でも聞いてください。</p>
          </div>
          <div className="example-questions">
            <p className="example-title">Try asking:</p>
            <div className="example-grid">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  className="example-button"
                  onClick={() => handleExampleClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">
              {message.parts ? (
                message.parts.map((part, index) =>
                  part.type === 'text' ? <span key={index}>{part.text}</span> : null
                )
              ) : (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              )}
            </div>
            <div className="message-role">
              {message.role === 'user' ? 'You' : 'AI'}
            </div>
          </div>
        ))
      )}

      {status === 'streaming' && (
        <div className="message assistant-message">
          <div className="message-content">
            <div className="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="message-role">AI</div>
        </div>
      )}

      {error && (
        <div className="message error-message">
          <div className="message-content">Error: {error.message}</div>
        </div>
      )}
    </main>
  )
}

export default MessagesArea