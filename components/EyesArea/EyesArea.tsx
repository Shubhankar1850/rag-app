import Eye from './Eye/Eye'
import './EyesArea.css'

interface EyesAreaProps {
  eyePosition: { x: number; y: number }
  isTyping: boolean
  isThinking: boolean
}

const EyesArea = ({ eyePosition, isTyping, isThinking }: EyesAreaProps) => {
  return (
    <div className="eyes-area">
      <div className="eyes-center">
        <Eye 
          side="left" 
          eyePosition={eyePosition} 
          isTyping={isTyping} 
          isThinking={isThinking} 
        />
        <Eye 
          side="right" 
          eyePosition={eyePosition} 
          isTyping={isTyping} 
          isThinking={isThinking} 
        />
      </div>
    </div>
  )
}

export default EyesArea