"use client"

import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")?.slice(1)
        const targetElement = document.getElementById(targetId || "")

        if (targetElement) {
          const headerOffset = 80 // Fixed header height
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          // Custom easing function
          const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
          }

          const startPosition = window.pageYOffset
          const distance = offsetPosition - startPosition
          const duration = 800
          let startTime: number | null = null

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            const easedProgress = easeInOutCubic(progress)

            window.scrollTo(0, startPosition + distance * easedProgress)

            if (timeElapsed < duration) {
              requestAnimationFrame(animation)
            }
          }

          requestAnimationFrame(animation)
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])
}
