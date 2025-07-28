"use client"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLightbox } from "@/hooks/use-lightbox"
import OrigamiDecoration from "@/components/decorations/origami-decoration"
import FanDecoration from "@/components/decorations/fan-decoration"
import MountainDecoration from "@/components/decorations/mountain-decoration"

const Gallery = () => {
  const images = [
    {
      src: "/6.avif",
      alt: "Efekty zabiegu - przed i po",
      category: "Efekty",
    },
    {
      src: "/7.avif",
      alt: "Gabinet zabiegowy",
      category: "Wnętrza",
    },
    {
      src: "/8.avif",
      alt: "Technika masażu transbukalnego",
      category: "Zabiegi",
    },
    {
      src: "/9.avif",
      alt: "Lifting bańkami",
      category: "Zabiegi",
    },
    {
      src: "/10.avif",
      alt: "Masaż Vibe Spoon",
      category: "Narzędzia",
    },
    {
      src: "/11.avif",
      alt: "Facetaping",
      category: "Zabiegi",
    },
    {
      src: "/12.avif",
      alt: "Naturalne kosmetyki",
      category: "Produkty",
    },
    {
      src: "/13.avif",
      alt: "Atmosfera relaksu",
      category: "Wnętrza",
    },
  ]

  const { isOpen, currentIndex, openLightbox, closeLightbox, nextImage, prevImage } = useLightbox(images)

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-cherry/20 via-sakura/30 to-cherry/10 relative overflow-hidden"
    >
      {/* Enhanced Decorations */}
      <OrigamiDecoration className="absolute top-16 right-12 animate-spiral" />
      <FanDecoration className="absolute top-40 left-8 animate-sway" />
      <MountainDecoration className="absolute bottom-20 right-20 animate-float-slow" />
      <OrigamiDecoration className="absolute bottom-40 left-16 animate-float-delayed" />

      {/* Organic Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-sakura/40 to-cherry/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-tr from-sakura-dark/30 to-coral/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            <span className="text-sakura-dark highlight-sakura">Galeria</span> Naszych Prac
          </h2>
          <p className="text-xl text-burgundy/80 max-w-2xl mx-auto">
            Zobacz efekty naszych zabiegów i poznaj atmosferę naszego studia
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl animate-fade-up hover:scale-105 transition-all duration-300 ${
                index % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sakura-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox} // kliknięcie na tło zamyka lightbox
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={e => e.stopPropagation()} // kliknięcie w obrazek (i UI lightboxa) NIE zamyka lightboxa
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-sakura-dark z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-sakura-dark z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-sakura-dark z-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Main Image */}
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-medium">{images[currentIndex].alt}</p>
              <p className="text-sm opacity-75">{images[currentIndex].category}</p>
            </div>

            {/* Thumbnails */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex ? "border-sakura-dark" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Gallery
