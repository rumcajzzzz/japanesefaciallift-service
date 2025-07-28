"use client"

interface SakuraDecorationProps {
  className?: string
}

const SakuraDecoration = ({ className = "" }: SakuraDecorationProps) => {
  return (
    <svg
      className={`w-16 h-16 text-coral/60 ${className}`}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Sakura petals */}
        <path d="M32 16c-4 0-8 4-8 8s4 8 8 8 8-4 8-8-4-8-8-8z" opacity="0.8" />
        <path d="M44 28c-4-2-8 0-10 4s0 8 4 10 8 0 10-4 0-8-4-10z" opacity="0.7" />
        <path d="M44 36c-4 2-8 0-10-4s0-8 4-10 8 0 10 4 0 8-4 10z" opacity="0.6" />
        <path d="M20 28c4-2 8 0 10 4s0 8-4 10-8 0-10-4 0-8 4-10z" opacity="0.7" />
        <path d="M20 36c4 2 8 0 10-4s0-8-4-10-8 0-10 4 0 8-4 10z" opacity="0.6" />
        {/* Center */}
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </g>
    </svg>
  )
}

export default SakuraDecoration
