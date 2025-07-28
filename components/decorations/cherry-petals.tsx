"use client"

interface CherryPetalsProps {
  className?: string
}

const CherryPetals = ({ className = "" }: CherryPetalsProps) => {
  return (
    <svg
      className={`w-12 h-12 text-cherry-pink/30 ${className}`}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Falling cherry petals */}
      <path d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" opacity="0.8" />
      <path d="M28 16c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" opacity="0.6" />
      <path d="M8 24c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" opacity="0.9" />
      <path d="M36 28c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" opacity="0.7" />
      <path d="M20 36c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" opacity="0.5" />
    </svg>
  )
}

export default CherryPetals
