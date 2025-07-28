"use client"

import { useEffect } from "react"

export const useScrollAnimations = () => {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          entry.target.classList.remove("animate-on-scroll")
        }
      })
    }, observerOptions)

    // Add animation classes and observe elements
    const animatedElements = document.querySelectorAll(".animate-fade-up, .animate-fade-left, .animate-fade-right")

    animatedElements.forEach((el) => {
      if (!prefersReducedMotion) {
        el.classList.add("animate-on-scroll")
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
