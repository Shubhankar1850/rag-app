'use client'

import { RefObject, ChangeEvent, KeyboardEvent, FocusEvent, MouseEvent } from 'react'
import './InputArea.css'

interface InputAreaProps {
  input: string
  inputRef: RefObject<HTMLInputElement | null>
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onCursorMove: (e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) => void
  onInputFocus: (e: FocusEvent<HTMLInputElement>) => void
  onInputBlur: (e: FocusEvent<HTMLInputElement>) => void
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
  onSubmit: () => void
  status: 'idle' | 'loading' | 'streaming'
}

const InputArea = ({ 
  input, 
  inputRef, 
  onInputChange, 
  onCursorMove, 
  onInputFocus, 
  onInputBlur, 
  onKeyPress, 
  onSubmit, 
  status 
}: InputAreaProps) => {
  return (
    <div className="input-form">
      <div className="input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyUp={onCursorMove}
          onKeyDown={onCursorMove}
          onClick={onCursorMove}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onKeyPress={onKeyPress}
          placeholder="Type your message..."
          className="chat-input"
          disabled={status === 'streaming'}
          spellCheck={false}
        />
        <button
          type="button"
          onClick={onSubmit}
          disabled={status === 'streaming' || !input.trim()}
          className="send-button"
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default InputArea