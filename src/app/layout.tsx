import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import CursorGlow from '@/components/ui/CursorGlow'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flarial Client',
  description: 'A utility client for minecraft Windows 10 & 11 Edition.',
  metadataBase: new URL('https://flarial.synthetix.host'),
  openGraph: {
    title: 'Flarial Client',
    description: 'A utility client for minecraft Windows 10 & 11 Edition.',
    url: 'https://flarial.synthetix.host',
    siteName: 'Flarial Client',
    type: 'website',
    images: [
      {
        url: 'https://images-ext-1.discordapp.net/external/U55zq9W1slkLVrn7d2DbIpvOi0PEvi0o8goP7MHgIXg/https/thatsinshane.netlify.app/flarial-countdown/flarial-transparent-smol.png',
        width: 96,
        height: 96,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flarial Client',
    description: 'A utility client for minecraft Windows 10 & 11 Edition.',
  },
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="cursor-glow" />
        <CursorGlow />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-black text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p>© Copyright {new Date().getFullYear()} Flarial - All Rights Reserved</p>
            <p className="mt-2">
              Made by <a href="https://ashank.tech" className="text-red-500 hover:underline">Ashank</a> | In partnership with <a href="https://sear.host" className="text-red-500 hover:underline">Sear Hosting</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
