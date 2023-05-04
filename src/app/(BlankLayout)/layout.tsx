import React from 'react'
import '../..//styles/globals.css'
import Sidebar from '@/components/cardapio/Sidebar'
import CartProvider from '@/features/Cart/CartProvider'

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
      <body className="flex flex-col md:flex-row">
        <CartProvider>
          <Sidebar />
          <main className="px-4 md:px-12 py-8 h-full w-full overflow-x-hidden">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
