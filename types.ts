// Global type definitions for the chat application

export interface MessagePart {
    type: string
    text: string
  }
  
  export interface Message {
    id: number
    role: 'user' | 'assistant'
    content?: string
    parts?: MessagePart[]
  }
  
  export interface EyePosition {
    x: number
    y: number
  }
  
  export interface ChatTransport {
    api: string
  }
  
  export interface UseChatProps {
    transport: ChatTransport
  }
  
  export interface UseChatReturn {
    messages: Message[]
    sendMessage: (message: string) => void
    clearMessages: () => void
    status: 'idle' | 'loading' | 'streaming'
    error: Error | null
  }
  
  export interface EyeProps {
    side: 'left' | 'right'
    eyePosition: EyePosition
    isTyping: boolean
    isThinking: boolean
  }
  
  export interface EyesAreaProps {
    eyePosition: EyePosition
    isTyping: boolean
    isThinking: boolean
  }
  
  export interface MessagesAreaProps {
    messages: Message[]
    status: 'idle' | 'loading' | 'streaming'
    error: Error | null
  }
  
  export interface InputAreaProps {
    input: string
    inputRef: React.RefObject<HTMLInputElement>
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onCursorMove: (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => void
    onInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void
    onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onSubmit: () => void
    status: 'idle' | 'loading' | 'streaming'
  }
  
  // Custom event type for example question clicks
  export interface ExampleClickEvent extends CustomEvent {
    detail: string
  }
  
  declare global {
    interface WindowEventMap {
      'exampleClick': ExampleClickEvent
    }
  }