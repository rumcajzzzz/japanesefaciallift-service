"use client"

import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">禅美 ZenBi</h3>
            <p className="text-cream/80 leading-relaxed">
              Studio japońskich technik pielęgnacji twarzy. Odkryj harmonię piękna i zdrowia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Nasze Usługi</h4>
            <ul className="space-y-2 text-cream/80">
              <li>Masaż Transbukalny</li>
              <li>Lifting Bańkami</li>
              <li>Vibe Spoon</li>
              <li>Facetaping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-cream/80">
              <p>ul. Sakura 15, Warszawa</p>
              <p>+48 123 456 789</p>
              <p>kontakt@zenbi.pl</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/60 flex items-center justify-center gap-2">
            Stworzone z <Heart className="h-4 w-4 text-coral" /> dla piękna i harmonii
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
