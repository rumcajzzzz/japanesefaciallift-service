"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import AnimationInit from "@/components/animation-init"

export default function Home() {
  useScrollAnimations()
  useSmoothScroll()

  return (
    <main className="relative overflow-x-hidden">
      <AnimationInit />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
