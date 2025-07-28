"use client"

interface KoiDecorationProps {
  className?: string
}

const KoiDecoration = ({ className = "" }: KoiDecorationProps) => {
  return (
    <svg
      className={`w-24 h-16 text-coral/50 ${className}`}
      viewBox="0 0 96 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Koi body */}
      <ellipse cx="48" cy="32" rx="30" ry="12" fill="currentColor" opacity="0.8" />
      {/* Head */}
      <ellipse cx="20" cy="32" rx="12" ry="10" fill="currentColor" opacity="0.9" />
      {/* Tail */}
      <path d="M78 32 L90 20 L96 32 L90 44 Z" fill="currentColor" opacity="0.7" />
      {/* Fins */}
      <path d="M35 20 L45 15 L50 25 Z" fill="currentColor" opacity="0.6" />
      <path d="M35 44 L45 49 L50 39 Z" fill="currentColor" opacity="0.6" />
      {/* Eye */}
      <circle cx="25" cy="30" r="2" fill="white" />
      <circle cx="26" cy="29" r="1" fill="currentColor" />
    </svg>
  )
}

export default KoiDecoration
