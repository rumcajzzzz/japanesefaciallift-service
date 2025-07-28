"use client"

interface LotusDecorationProps {
  className?: string
}

const LotusDecoration = ({ className = "" }: LotusDecorationProps) => {
  return (
    <svg
      className={`w-20 h-20 text-sakura/60 ${className}`}
      viewBox="0 0 80 80"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lotus petals */}
      <path d="M40 20c-6 0-12 6-12 12s6 12 12 12 12-6 12-12-6-12-12-12z" opacity="0.9" />
      <path d="M55 30c-6-3-12 0-15 6s0 12 6 15 12 0 15-6 0-12-6-15z" opacity="0.8" />
      <path d="M55 50c-6 3-12 0-15-6s0-12 6-15 12 0 15 6 0 12-6 15z" opacity="0.7" />
      <path d="M25 30c6-3 12 0 15 6s0 12-6 15-12 0-15-6 0-12 6-15z" opacity="0.8" />
      <path d="M25 50c6 3 12 0 15-6s0-12-6-15-12 0-15 6 0 12-6 15z" opacity="0.7" />
      <path d="M40 60c6 0 12-6 12-12s-6-12-12-12-12 6-12 12 6 12 12 12z" opacity="0.6" />
      {/* Center */}
      <circle cx="40" cy="40" r="4" fill="currentColor" />
    </svg>
  )
}

export default LotusDecoration
