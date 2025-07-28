"use client"

interface OrigamiDecorationProps {
  className?: string
}

const OrigamiDecoration = ({ className = "" }: OrigamiDecorationProps) => {
  return (
    <svg
      className={`w-16 h-16 text-gold/50 ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Origami crane */}
      <path d="M32 8 L48 24 L32 32 L16 24 Z" fill="currentColor" opacity="0.8" />
      <path d="M32 32 L48 24 L48 40 L32 48 Z" fill="currentColor" opacity="0.6" />
      <path d="M32 32 L16 24 L16 40 L32 48 Z" fill="currentColor" opacity="0.7" />
      <path d="M32 48 L48 40 L40 56 L32 48 Z" fill="currentColor" opacity="0.5" />
      <path d="M32 48 L16 40 L24 56 L32 48 Z" fill="currentColor" opacity="0.5" />
      {/* Fold lines */}
      <line x1="32" y1="8" x2="32" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="16" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export default OrigamiDecoration
