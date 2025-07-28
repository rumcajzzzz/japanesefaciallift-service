"use client"

interface MountainDecorationProps {
  className?: string
}

const MountainDecoration = ({ className = "" }: MountainDecorationProps) => {
  return (
    <svg
      className={`w-28 h-16 text-burgundy/30 ${className}`}
      viewBox="0 0 112 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mount Fuji silhouette */}
      <path d="M56 8 L80 64 L32 64 Z" fill="currentColor" opacity="0.7" />
      <path d="M56 8 L72 64 L40 64 Z" fill="currentColor" opacity="0.5" />
      {/* Snow cap */}
      <path d="M56 8 L64 24 L48 24 Z" fill="white" opacity="0.8" />
      {/* Background mountains */}
      <path d="M20 32 L40 64 L0 64 Z" fill="currentColor" opacity="0.4" />
      <path d="M92 32 L112 64 L72 64 Z" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default MountainDecoration
