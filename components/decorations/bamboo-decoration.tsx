"use client"

interface BambooDecorationProps {
  className?: string
}

const BambooDecoration = ({ className = "" }: BambooDecorationProps) => {
  return (
    <svg
      className={`w-8 h-24 text-sage/50 ${className}`}
      viewBox="0 0 32 96"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bamboo stems */}
      <rect x="12" y="0" width="8" height="96" fill="currentColor" opacity="0.6" />
      <rect x="8" y="0" width="16" height="2" fill="currentColor" opacity="0.8" />
      <rect x="8" y="24" width="16" height="2" fill="currentColor" opacity="0.8" />
      <rect x="8" y="48" width="16" height="2" fill="currentColor" opacity="0.8" />
      <rect x="8" y="72" width="16" height="2" fill="currentColor" opacity="0.8" />

      {/* Leaves */}
      <path d="M24 16 L32 12 L28 20 Z" fill="currentColor" opacity="0.7" />
      <path d="M24 40 L32 36 L28 44 Z" fill="currentColor" opacity="0.7" />
      <path d="M8 28 L0 24 L4 32 Z" fill="currentColor" opacity="0.7" />
      <path d="M8 64 L0 60 L4 68 Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export default BambooDecoration
