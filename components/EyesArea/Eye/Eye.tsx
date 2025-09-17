import './Eye.css'

interface EyeProps {
  side: 'left' | 'right'
  eyePosition: { x: number; y: number }
  isTyping: boolean
  isThinking: boolean
}

const Eye = ({ side, eyePosition, isTyping, isThinking }: EyeProps) => {
  return (
    <div className={`eye ${side} ${isTyping ? 'active' : ''} ${isThinking ? 'thinking' : ''}`}>
      <div
        className="iris"
        style={{
          transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
          transition: isTyping ? 'transform 0.1s cubic-bezier(.2,.9,.2,1)' : 'transform 0.3s ease-out'
        }}
      >
        <div className="pupil" />
        <div className="glint" />
        <div className="speckles" />
      </div>
    </div>
  )
}

export default Eye