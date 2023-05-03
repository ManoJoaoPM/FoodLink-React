import React from 'react'
import '../..//styles/globals.css'
import Sidebar from '@/components/cardapio/Sidebar'

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
      <body className="flex">
        <Sidebar />
        <main className="px-12 py-8 w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  )
}
