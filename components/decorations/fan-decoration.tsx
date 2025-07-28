"use client"

interface FanDecorationProps {
  className?: string
}

const FanDecoration = ({ className = "" }: FanDecorationProps) => {
  return (
    <svg
      className={`w-20 h-12 text-sage/40 ${className}`}
      viewBox="0 0 80 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fan segments */}
      <path d="M40 40 L20 8 L30 8 Z" fill="currentColor" opacity="0.8" />
      <path d="M40 40 L30 8 L40 8 Z" fill="currentColor" opacity="0.9" />
      <path d="M40 40 L40 8 L50 8 Z" fill="currentColor" opacity="0.8" />
      <path d="M40 40 L50 8 L60 8 Z" fill="currentColor" opacity="0.7" />
      {/* Handle */}
      <rect x="38" y="40" width="4" height="8" fill="currentColor" opacity="0.6" />
      {/* Decorative lines */}
      <line x1="25" y1="12" x2="35" y2="36" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <line x1="35" y1="12" x2="40" y2="36" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <line x1="45" y1="12" x2="40" y2="36" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <line x1="55" y1="12" x2="45" y2="36" stroke="white" strokeWidth="0.5" opacity="0.5" />
    </svg>
  )
}

export default FanDecoration
