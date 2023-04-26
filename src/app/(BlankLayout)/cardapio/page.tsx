import CardCardapio from '@/components/cardapio/CardCategoria'
import CardProduto from '@/components/cardapio/CardProduto'
import React from 'react'

function Page() {
  return (
    <div className="w-full h-full border-2 font-merienda font-bold">
      <h1 className="uppercase text-center font-bold text-3xl">Cardápio</h1>
      <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
        <h2 className="text-xl uppercase mb-3">Categorias</h2>
        <CardCardapio />
        <CardCardapio />
        <CardCardapio />
        <CardCardapio />
        <CardCardapio />
      </div>
      <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin pb-8">
        <h2 className="text-xl uppercase mb-3">Produtos</h2>
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  )
}

export default Page
