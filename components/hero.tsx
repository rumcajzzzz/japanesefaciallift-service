"use client"

import { Button } from "@/components/ui/button"
import SakuraDecoration from "@/components/decorations/sakura-decoration"
import WaveDecoration from "@/components/decorations/wave-decoration"
import LotusDecoration from "@/components/decorations/lotus-decoration"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-warm-beige to-sage/20 my-8 md:my-0">
      <div className="absolute inset-0 pointer-events-none">
        <SakuraDecoration className="absolute top-20 right-10 animate-float" />
        <WaveDecoration className="absolute bottom-32 left-8 animate-float-delayed" />
        <SakuraDecoration className="absolute bottom-20 right-1/3 animate-float-slow" />
        <LotusDecoration className="absolute top-1/2 right-1/4 animate-drift" />
      </div>

      {/* Enhanced Organic Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-coral/20 to-gold/30 rounded-full transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-gradient-to-tr from-sage/30 to-warm-beige/40 rounded-full transform -rotate-45 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-sakura/30 to-cherry/20 rounded-full transform rotate-45 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-burgundy leading-tight">
                Japoński
                <span className="block text-coral highlight-text">Lifting</span>
                <span className="block text-sage">Twarzy</span>
              </h1>
              <p className="text-xl text-burgundy/80 max-w-lg leading-relaxed">
                Odkryj starożytne japońskie techniki odmładzania w nowoczesnym wydaniu.
                <span className="highlight-text">Masaż transbukalny</span>, lifting bańkami i innowacyjne metody dla
                Twojego piękna.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-coral to-gold hover:from-coral/90 hover:to-gold/90 shadow-soft hover:shadow-lg transition-all duration-500 transform hover:scale-105"
              >
                <a href="#services">Poznaj Usługi</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-all duration-300 bg-transparent"
              >
                <a href="#contact">Umów Wizytę</a>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-sage/20 rounded-3xl transform rotate-3 blur-sm"></div>
              <div className="relative w-full h-[50vh] rounded-3xl shadow-soft overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500 ease-in-out">
                <Image
                  src="/1.avif"
                  alt="Japoński lifting twarzy"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
