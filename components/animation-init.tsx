"use client"

import { useEffect } from "react"

const AnimationInit = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-up, .animate-fade-left, .animate-fade-right")
    elements.forEach((el) => {
      el.classList.add("animate-in")
    })

    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.remove("animate-in")
      })
    }, 100)
  }, [])

  return null
}

export default AnimationInit
