/* eslint-disable camelcase */
import HomeHero from '@/Components/HomeHero'

import { ShootingStars } from '@/Components/ui/shooting-stars'
import { StarsBackground } from '@/Components/ui/stars-background'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nelson Silva Neto',
  description: 'Olá, bem vindo ao meu portfólio!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <HomeHero />
          {/* Right */}
          <div className="relative z-20 flex max-h-screen flex-col overflow-y-scroll pr-0 xl:pr-32">
            {children}
          </div>
          <ShootingStars />
          <StarsBackground />
          {/* Meteors */}
          {/* <div className="pointer-events-none absolute inset-0 z-20"></div> */}
        </main>
      </body>
    </html>
  )
}
