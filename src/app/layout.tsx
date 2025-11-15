import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PolisPraxis - Bridging Citizens & Municipality',
  description: 'A platform connecting citizens, volunteers, and municipality for collaborative civic projects in Athens',
  keywords: ['civic tech', 'athens', 'volunteer', 'municipality', 'community'],
  authors: [{ name: 'Sotirios Lympakis' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
