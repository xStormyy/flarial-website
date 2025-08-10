import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flarial Client - Minecraft Utility Client for Windows 10 & 11',
  description: 'Download Flarial Client - The ultimate utility client for Minecraft Windows 10 & 11 Edition. Enhance your gameplay with powerful features and mods.',
  keywords: ['minecraft', 'client', 'utility', 'windows 10', 'windows 11', 'flarial', 'minecraft mods', 'bedrock edition'],
  authors: [{ name: 'Flarial Team' }],
  creator: 'Flarial Team',
  publisher: 'Flarial',
  metadataBase: new URL('https://flarial.xyz'),
  alternates: {
    canonical: 'https://flarial.xyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Flarial Client - Minecraft Utility Client for Windows 10 & 11',
    description: 'Download Flarial Client - The ultimate utility client for Minecraft Windows 10 & 11 Edition. Enhance your gameplay with powerful features and mods.',
    url: 'https://flarial.xyz',
    siteName: 'Flarial Client',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images-ext-1.discordapp.net/external/U55zq9W1slkLVrn7d2DbIpvOi0PEvi0o8goP7MHgIXg/https/thatsinshane.netlify.app/flarial-countdown/flarial-transparent-smol.png',
        width: 1200,
        height: 630,
        alt: 'Flarial Client - Minecraft Utility Client',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flarial Client - Minecraft Utility Client for Windows 10 & 11',
    description: 'Download Flarial Client - The ultimate utility client for Minecraft Windows 10 & 11 Edition. Enhance your gameplay with powerful features and mods.',
    images: ['https://images-ext-1.discordapp.net/external/U55zq9W1slkLVrn7d2DbIpvOi0PEvi0o8goP7MHgIXg/https/thatsinshane.netlify.app/flarial-countdown/flarial-transparent-smol.png'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Flarial Client",
              "description": "A utility client for Minecraft Windows 10 & 11 Edition",
              "url": "https://flarial.xyz",
              "applicationCategory": "GameApplication",
              "operatingSystem": ["Windows 10", "Windows 11"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Flarial Team"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "500"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-black text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>© Copyright {new Date().getFullYear()} Flarial - All Rights Reserved</p>
            <p className="mt-2">
              Made by <a href="https://ashank.tech" className="text-red-500 hover:underline">Ashank</a> with help from  <a href="https://github.com/TTF-fog" className="text-red-500 hover:underline">ttf</a>| In partnership with <a href="https://sear.host" className="text-red-500 hover:underline">Sear Hosting</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
