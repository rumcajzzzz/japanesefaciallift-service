"use client"

interface WaveDecorationProps {
  className?: string
}

const WaveDecoration = ({ className = "" }: WaveDecorationProps) => {
  return (
    <svg
      className={`w-20 h-12 text-sage/50 ${className}`}
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24C10 14 20 14 30 24C40 34 50 34 60 24C70 14 80 14 80 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0 32C10 22 20 22 30 32C40 42 50 42 60 32C70 22 80 22 80 32"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 16C10 6 20 6 30 16C40 26 50 26 60 16C70 6 80 6 80 16"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export default WaveDecoration
