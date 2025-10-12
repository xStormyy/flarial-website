import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
    <html lang="en">
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
