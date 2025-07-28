"use client"

import BambooDecoration from "@/components/decorations/bamboo-decoration"
import LotusDecoration from "@/components/decorations/lotus-decoration"
import KoiDecoration from "@/components/decorations/koi-decoration"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-sakura/20 via-cherry/30 to-sakura/10 relative overflow-hidden"
    >
      {/* Enhanced Decorations */}
      <BambooDecoration className="absolute top-10 right-8 animate-sway" />
      <LotusDecoration className="absolute top-32 left-12 animate-float" />
      <KoiDecoration className="absolute bottom-19 right-16 animate-drift opacity-20" />
      <LotusDecoration className="absolute bottom-32 left-5 animate-float-delayed opacity-20" />

      {/* Organic Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-sakura/30 to-cherry/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-tr from-sakura-dark/20 to-coral/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-right">
            <div className="space-y-4">
              <img
                src="/2.avif"
                alt="Wnętrze spa"
                className="rounded-2xl shadow-sakura hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              />
              <img
                src="/5.avif"
                alt="Narzędzia do masażu"
                className="rounded-2xl shadow-sakura hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <div className="pt-8 space-y-4">
              <img
                src="/4.avif"
                alt="Sesja terapeutyczna"
                className="rounded-2xl shadow-sakura hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              />
              <img
                src="/3.avif"
                alt="Naturalne kosmetyki"
                className="rounded-2xl shadow-sakura hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-burgundy">
                Filozofia <span className="text-sakura-dark highlight-sakura">Zen</span> w Pielęgnacji
              </h2>
              <p className="text-lg text-burgundy/80 leading-relaxed">
                Nasze studio łączy <span className="highlight-sakura">starożytną mądrość japońską</span> z nowoczesnymi
                technikami pielęgnacji. Każdy zabieg to podróż do harmonii ciała i ducha.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-sakura-dark rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-burgundy mb-2">Masaż Transbukalny</h3>
                  <p className="text-burgundy/70">
                    Innowacyjna technika masażu wewnętrznego policzków dla naturalnego liftingu
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-burgundy mb-2">Lifting Bańkami</h3>
                  <p className="text-burgundy/70">Tradycyjna japońska metoda stymulacji krążenia i ujędrniania skóry</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-burgundy mb-2">Vibe Spoon & Facetaping</h3>
                  <p className="text-burgundy/70">Nowoczesne narzędzia wspierające regenerację i modelowanie twarzy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
