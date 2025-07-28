import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Japoński Lifting Twarzy',
  description:
    'Odkryj japoński lifting twarzy – naturalną metodę odmładzania bez skalpela. Zrelaksuj mięśnie, popraw owal twarzy i odzyskaj blask. Sprawdź naszą ofertę w profesjonalnym gabinecie masażu.',
  keywords: [
    'japoński lifting twarzy',
    'masaż twarzy',
    'lifting bez skalpela',
    'naturalne odmładzanie',
    'masaż transbukalny',
    'terapia twarzy',
    'gabinet urody',
    'uroda bez inwazyjnych zabiegów',
  ],
  openGraph: {
    title: 'Japoński Lifting Twarzy – Naturalne Odmłodzenie | Gabinet Urody',
    description:
      'Poznaj japoński lifting twarzy – technikę masażu, która odmładza, modeluje i przywraca skórze jędrność. Umów wizytę już dziś.',
    siteName: 'Gabinet Urody',
    locale: 'pl_PL',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className='scroll-smooth'>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
