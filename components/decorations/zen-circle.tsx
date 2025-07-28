"use client"

interface ZenCircleProps {
  className?: string
}

const ZenCircle = ({ className = "" }: ZenCircleProps) => {
  return (
    <svg
      className={`w-12 h-12 text-gold/40 ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.8" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default ZenCircle
