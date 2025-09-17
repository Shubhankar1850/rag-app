'use client'

import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent, FocusEvent, MouseEvent } from 'react'
import EyesArea from '../../components/EyesArea/EyesArea'
import MessagesArea from '../../components/MessageArea/MessageArea'
import InputArea from '../../components/InputArea/InputArea'
import { useChat } from '../../hooks/useChat'
import './page.css'

interface EyePosition {
  x: number
  y: number
}

export default function ChatApp() {
  const { messages, sendMessage, status, error } = useChat({
    transport: { api: '/api/chat' }
  })

  const [input, setInput] = useState<string>('')
  const [eyePosition, setEyePosition] = useState<EyePosition>({ x: 0, y: 0 })
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [cursorPosition, setCursorPosition] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const prevMessagesCount = useRef<number>(messages.length)

  // Enhanced cursor position tracking for eye animation
  useEffect(() => {
    if (isTyping && inputRef.current && measureRef.current) {
      const inputElement = inputRef.current
      const inputRect = inputElement.getBoundingClientRect()
      const inputStyle = window.getComputedStyle(inputElement)
      
      // Create a temporary span to measure text width
      const measureElement = measureRef.current
      measureElement.style.font = inputStyle.font
      measureElement.style.fontSize = inputStyle.fontSize
      measureElement.style.fontFamily = inputStyle.fontFamily
      measureElement.style.fontWeight = inputStyle.fontWeight
      measureElement.style.letterSpacing = inputStyle.letterSpacing
      measureElement.style.wordSpacing = inputStyle.wordSpacing
      
      // Get text up to cursor position
      const textToCursor = inputElement.value.substring(0, cursorPosition)
      measureElement.textContent = textToCursor
      
      // Get the width of text up to cursor
      const textWidth = measureElement.getBoundingClientRect().width
      
      // Calculate input padding
      const paddingLeft = parseFloat(inputStyle.paddingLeft)
      const paddingRight = parseFloat(inputStyle.paddingRight)
      
      // Calculate cursor position relative to input
      const cursorX = textWidth + paddingLeft
      const inputCenterX = inputRect.width / 2
      const availableWidth = inputRect.width - paddingLeft - paddingRight
      
      // Calculate relative position (-1 to 1)
      const relativePosition = (cursorX - inputCenterX) / (availableWidth / 2)
      
      // Map to eye movement range
      const maxEyeMovement = 25
      const eyeX = Math.max(-maxEyeMovement, Math.min(maxEyeMovement, relativePosition * maxEyeMovement))
      
      // Add subtle vertical movement based on text length for more natural look
      const verticalOffset = Math.sin(textToCursor.length * 0.1) * 3
      const eyeY = Math.max(-6, Math.min(8, verticalOffset))

      setEyePosition({ x: eyeX, y: eyeY })
    } else {
      // Return to center when not typing
      setEyePosition({ x: 0, y: 0 })
    }
  }, [input, cursorPosition, isTyping])

  // Event handlers
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    setCursorPosition(e.target.selectionStart || 0)
  }

  const handleCursorMove = (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const target = e.target as HTMLInputElement
      setCursorPosition(target.selectionStart || 0)
    }, 10)
  }

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsTyping(true)
    setCursorPosition(e.target.selectionStart || 0)
  }

  const handleInputBlur = () => {
    setIsTyping(false)
    setEyePosition({ x: 0, y: 0 })
  }

  const handleSubmit = () => {
    if (input.trim() && status !== 'loading' && status !== 'streaming') {
      sendMessage(input)
      setInput('')
      setCursorPosition(0)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // Handle example question clicks from MessagesArea
  useEffect(() => {
    const handleExampleClick = (e: CustomEvent) => {
      const question = e.detail as string
      setInput(question)
      setCursorPosition(question.length)
      inputRef.current?.focus()
    }

    // Type assertion for custom event
    window.addEventListener('exampleClick', handleExampleClick as EventListener)
    return () => window.removeEventListener('exampleClick', handleExampleClick as EventListener)
  }, [])

  // Blink when new messages arrive (not on initial load)
  useEffect(() => {
    const prev = prevMessagesCount.current
    if (messages.length > prev) {
      const eyes = Array.from(document.querySelectorAll('.eye'))
      eyes.forEach((el) => el.classList.add('blink'))
      setTimeout(() => eyes.forEach((el) => el.classList.remove('blink')), 480)
    }
    prevMessagesCount.current = messages.length
  }, [messages])

  return (
    <div className="chat-container">
      {/* Hidden span for measuring text width */}
      <span 
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'pre',
          pointerEvents: 'none',
          top: '-1000px'
        }}
      />
      
      <header className="chat-header">
        <h1>CareerCompanion</h1>
      </header>

      <EyesArea 
        eyePosition={eyePosition} 
        isTyping={isTyping} 
        isThinking={status === 'streaming'} 
      />

      <MessagesArea 
        messages={messages} 
        status={status} 
        error={error} 
      />

      <InputArea
        input={input}
        inputRef={inputRef}
        onInputChange={handleInputChange}
        onCursorMove={handleCursorMove}
        onInputFocus={handleInputFocus}
        onInputBlur={handleInputBlur}
        onKeyPress={handleKeyPress}
        onSubmit={handleSubmit}
        status={status}
      />
    </div>
  )
}