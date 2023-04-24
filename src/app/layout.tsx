import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Casarão Pedra Branca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
