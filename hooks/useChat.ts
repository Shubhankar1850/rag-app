import { useState } from 'react'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content?: string
}

interface ChatTransport {
  api: string
}

interface UseChatProps {
  transport: ChatTransport
}

interface UseChatReturn {
  messages: Message[]
  sendMessage: (message: string) => Promise<void>
  clearMessages: () => void
  status: 'idle' | 'loading' | 'streaming'
  error: Error | null
}

export const useChat = ({ transport }: UseChatProps): UseChatReturn => {
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<'idle' | 'loading'|'streaming'>('idle')
  const [error, setError] = useState<Error | null>(null)

  const sendMessage = async (message: string) => {
    const userMessage: Message = { id: Date.now(), role: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    setStatus('loading')
    setError(null)

    try {
      setStatus('streaming')
      const res = await fetch(transport.api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })
      if (!res.ok) throw new Error('API request failed')
      const text = await res.text()
      const assistantMessage: Message = { id: Date.now() + 1, role: 'assistant', content: text }
      setMessages(prev => [...prev, assistantMessage])
      setStatus('idle')
    } catch (err: any) {
      setError(err)
      setStatus('idle')
    }
  }

  const clearMessages = () => {
    setMessages([])
    setError(null)
    setStatus('idle')
  }

  return { messages, sendMessage, clearMessages, status, error }
}
