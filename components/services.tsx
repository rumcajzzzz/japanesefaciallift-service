"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Zap, Leaf, ArrowRight } from "lucide-react"
import SakuraDecoration from "@/components/decorations/sakura-decoration"
import LotusDecoration from "@/components/decorations/lotus-decoration"
import OrigamiDecoration from "@/components/decorations/origami-decoration"
import WaveDecoration from "@/components/decorations/wave-decoration"
import CherryPetals from "./decorations/cherry-petals"
import Link from "next/link"

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Masaż Transbukalny",
      subtitle: "Wewnętrzny lifting",
      description: "Rewolucyjna technika masażu wewnętrznego policzków dla naturalnego odmłodzenia",
      details:
        "Naturalny lifting bez inwazyjnych zabiegów. Poprawa owalu twarzy, redukcja zmarszczek i przywrócenie młodzieńczego blasku skóry.",
      price: "280 zł",
      duration: "60 min",
      color: "from-cherry-blossom via-cherry-pink to-cherry-deep",
      bgColor: "bg-gradient-to-br from-cherry-blossom/20 to-cherry-pink/10",
      features: ["Lifting naturalny", "Redukcja zmarszczek", "Poprawa owalu twarzy"],
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Lifting Bańkami",
      subtitle: "Tradycyjna metoda",
      description: "Starożytna japońska technika ujędrniania i regeneracji skóry",
      details:
        "Stymulacja krążenia, detoks limfatyczny i naturalny lifting tkanek. Metoda stosowana od wieków w Japonii.",
      price: "220 zł",
      duration: "45 min",
      color: "from-cherry-deep via-cherry-wine to-burgundy",
      bgColor: "bg-gradient-to-br from-cherry-deep/20 to-cherry-wine/10",
      features: ["Detoks limfatyczny", "Stymulacja krążenia", "Ujędrnienie skóry"],
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Vibe Spoon",
      subtitle: "Innowacyjna technologia",
      description: "Nowoczesny masaż wibracyjny specjalną łyżeczką z Japonii",
      details: "Głęboka relaksacja mięśni twarzy, stymulacja produkcji kolagenu i poprawa elastyczności skóry.",
      price: "180 zł",
      duration: "30 min",
      color: "from-cherry-sunset via-coral to-gold",
      bgColor: "bg-gradient-to-br from-cherry-sunset/20 to-coral/10",
      features: ["Relaksacja mięśni", "Produkcja kolagenu", "Elastyczność skóry"],
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Facetaping",
      subtitle: "Kinesiotaping twarzy",
      description: "Profesjonalne taśmowanie twarzy dla długotrwałych efektów",
      details: "Modelowanie rysów, redukcja obrzęków, wsparcie naturalnej regeneracji i poprawa mikrokrążenia.",
      price: "150 zł",
      duration: "40 min",
      color: "from-sage via-cherry-pink to-cherry-deep",
      bgColor: "bg-gradient-to-br from-sage/20 to-cherry-pink/10",
      features: ["Modelowanie rysów", "Redukcja obrzęków", "Regeneracja skóry"],
    },
  ]

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-warm-beige via-cherry/15 to-cherry-blossom/20 relative overflow-hidden"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-16 w-80 h-80 bg-gradient-to-br from-cherry-blossom/30 to-cherry-pink/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-12 w-96 h-96 bg-gradient-to-tr from-cherry-sunset/25 to-cherry-deep/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cherry-wine/20 to-sakura/25 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-drift"></div>
      </div>

      {/* Floating SVG Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <SakuraDecoration className="absolute top-24 right-20 animate-float text-cherry-pink/40 opacity-30 -z-1" />
        <LotusDecoration className="absolute top-40 left-16 animate-float-delayed text-cherry-blossom/50 opacity-25 -z-1" />
        <OrigamiDecoration className="absolute bottom-40 right-32 animate-spiral text-cherry-deep/40" />
        <WaveDecoration className="absolute bottom-24 left-24 animate-sway text-cherry-wine/30" />
        <SakuraDecoration className="absolute top-1/3 left-1/3 animate-float-slow text-cherry-sunset/35" />
        <CherryPetals className="absolute top-1/4 right-1/4 animate-float text-cherry-sunset/40" />
        <CherryPetals className="absolute bottom-1/3 left-1/4 animate-float-delayed text-cherry-blossom/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-cherry-wine bg-cherry-blossom/30 px-4 py-2 rounded-full">
              Nasze Specjalizacje
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-burgundy mb-8 leading-tight">
            Japońskie <span className="text-cherry-deep highlight-cherry">Techniki</span>
            <br />
            <span className="text-cherry-wine">Pielęgnacji</span>
          </h2>
          <p className="text-xl text-burgundy/80 max-w-3xl mx-auto leading-relaxed">
            Każdy zabieg to unikalne doświadczenie łączące{" "}
            <span className="highlight-cherry-deep font-semibold">starożytną mądrość japońską</span> z najnowszymi
            technikami pielęgnacji twarzy
          </p>
        </div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`animate-fade-up ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-16"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card
                className={`bg-pink-50 group relative overflow-hidden border-0 shadow-cherry hover:shadow-xl transition-all duration-700 transform hover:scale-[1.02] hover:-rotate-1 ${service.bgColor} backdrop-blur-sm`}
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl bg-pink-100 from-white/20 to-transparent rounded-bl-full"></div>

                {/* Floating Icon Background */}
                <div className="absolute -top-4  -right-4 w-20 h-20 bg-gradient-to-br from-cherry-blossom/30 to-cherry-pink/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>

                <CardHeader className="relative p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`bg-pink-500 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cherry-deep">{service.price}</div>
                      <div className="text-sm text-burgundy/70 font-medium">{service.duration}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-2xl font-bold text-burgundy group-hover:text-cherry-wine transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-cherry-deep font-medium text-lg">
                      {service.subtitle}
                    </CardDescription>
                    <p className="text-burgundy/80 leading-relaxed">{service.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-0 space-y-6">
                  <p className="text-burgundy/70 leading-relaxed text-sm">{service.details}</p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-burgundy text-sm uppercase tracking-wide">Korzyści:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cherry-blossom to-cherry-pink rounded-full flex-shrink-0"></div>
                          <span className="text-burgundy/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cherry-blossom/5 to-cherry-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-fade-up" style={{ animationDelay: "800ms" }}>
          <div className="bg-gradient-to-r from-cherry-blossom/20 via-cherry-pink/15 to-cherry-deep/20 rounded-3xl p-8 backdrop-blur-sm border border-cherry-blossom/30">
            <h3 className="text-2xl font-bold text-burgundy mb-4">Nie wiesz który zabieg wybrać?</h3>
            <p className="text-burgundy/80 mb-6 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację, podczas której dobierzemy idealny zabieg dla Twojej skóry
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cherry-wine to-burgundy hover:from-burgundy hover:to-cherry-wine shadow-lg hover:scale-110 hover:rotate-1 hover:shadow-xl transition-all duration-300"
              >
                Bezpłatna Konsultacja
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
