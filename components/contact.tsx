"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import SakuraDecoration from "@/components/decorations/sakura-decoration"
import FanDecoration from "@/components/decorations/fan-decoration"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-cherry-sunset/20 via-cherry-blossom/30 to-warm-beige relative overflow-hidden"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cherry-pink/30 to-cherry-deep/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cherry-wine/20 to-cherry-sunset/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cherry-blossom/40 to-sakura/30 rounded-full blur-2xl"></div>
      </div>

      {/* SVG Decorations */}
      <SakuraDecoration className="absolute top-16 right-12 animate-float text-cherry-pink/60" />
      <FanDecoration className="absolute bottom-24 left-8 animate-sway text-cherry-deep/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            <span className="text-cherry-wine highlight-cherry-deep">Kontakt</span> i Rezerwacje
          </h2>
          <p className="text-xl text-burgundy/80 max-w-2xl mx-auto">
            Umów się na konsultację i odkryj moc japońskich technik pielęgnacji
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-right">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-cherry hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cherry-blossom to-cherry-pink rounded-full flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-burgundy">Adres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-burgundy/80">
                    ul. Sakura 15
                    <br />
                    00-001 Warszawa
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-cherry hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cherry-deep to-cherry-wine rounded-full flex items-center justify-center mb-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-burgundy">Telefon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-burgundy/80">+48 123 456 789</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-cherry hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cherry-sunset to-cherry-blossom rounded-full flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-burgundy">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-burgundy/80">kontakt@zenbi.pl</p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-cherry hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cherry-pink to-cherry-deep rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-burgundy">Godziny</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-burgundy/80 text-sm">
                    Pn-Pt: 9:00-19:00
                    <br />
                    Sb: 10:00-16:00
                    <br />
                    Nd: zamknięte
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-cherry animate-fade-left">
            <CardHeader>
              <CardTitle className="text-2xl text-burgundy">Umów wizytę</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-burgundy mb-2 block">Imię</label>
                  <Input placeholder="Twoje imię" className="border-cherry-pink/30 focus:border-cherry-deep" />
                </div>
                <div>
                  <label className="text-sm font-medium text-burgundy mb-2 block">Telefon</label>
                  <Input placeholder="Numer telefonu" className="border-cherry-pink/30 focus:border-cherry-deep" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-burgundy mb-2 block">Email</label>
                <Input
                  placeholder="Twój email"
                  type="email"
                  className="border-cherry-pink/30 focus:border-cherry-deep"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-burgundy mb-2 block">Preferowany zabieg</label>
                <select className="w-full p-3 border border-cherry-pink/30 rounded-lg focus:border-cherry-deep focus:outline-none bg-white/80">
                  <option>Wybierz zabieg</option>
                  <option>Masaż Transbukalny</option>
                  <option>Lifting Bańkami</option>
                  <option>Vibe Spoon</option>
                  <option>Facetaping</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-burgundy mb-2 block">Wiadomość</label>
                <Textarea
                  placeholder="Dodatkowe informacje..."
                  className="border-cherry-pink/30 focus:border-cherry-deep min-h-[100px] bg-white/80"
                />
              </div>
              <Button
                className="w-full bg-gradient-to-r from-cherry-blossom to-cherry-deep hover:from-cherry-pink hover:to-cherry-wine text-white shadow-cherry hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                Wyślij zapytanie
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
