import React from 'react'
import CardapioController from './CardapioController'

function SSRCardapio() {
  const categorias: ICategoria[] = [
    {
      name: 'Pizzas',
      img: 'https://midias.agazeta.com.br/2021/07/08/pizzas-da-rede-carioca-de-delivery-forneria-original-com-loja-em-vila-velha-554300.png',
    },
    {
      name: 'Drinks',
      img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-drinks-faceis-0.jpg',
    },
  ]

  const produtos: IProduto[] = [
    {
      name: 'Pizza de Mussarela',
      categoria: categorias[0],
      preco: [
        { name: 'p', value: 46 },
        { name: 'm', value: 56 },
        { name: 'g', value: 66 },
      ],
      tempo: [
        { name: 'p', value: 25 },
        { name: 'm', value: 35 },
        { name: 'g', value: 45 },
      ],
      pessoas: [
        { name: 'p', value: 2 },
        { name: 'm', value: 4 },
        { name: 'g', value: 6 },
      ],
    },
    {
      name: 'Pizza Portuguesa',
      categoria: categorias[0],
      preco: [
        { name: 'p', value: 46 },
        { name: 'm', value: 56 },
        { name: 'g', value: 66 },
      ],
      tempo: [
        { name: 'p', value: 25 },
        { name: 'm', value: 35 },
        { name: 'g', value: 45 },
      ],
      pessoas: [
        { name: 'p', value: 2 },
        { name: 'm', value: 4 },
        { name: 'g', value: 6 },
      ],
    },
    {
      name: 'Pizza de Peperoni',
      categoria: categorias[0],
      preco: [
        { name: 'p', value: 46 },
        { name: 'm', value: 56 },
        { name: 'g', value: 66 },
      ],
      tempo: [
        { name: 'p', value: 25 },
        { name: 'm', value: 35 },
        { name: 'g', value: 45 },
      ],
      pessoas: [
        { name: 'p', value: 2 },
        { name: 'm', value: 4 },
        { name: 'g', value: 6 },
      ],
    },
    {
      name: 'Pizza de Calabresa',
      categoria: categorias[0],
      preco: [
        { name: 'p', value: 46 },
        { name: 'm', value: 56 },
        { name: 'g', value: 66 },
      ],
      tempo: [
        { name: 'p', value: 25 },
        { name: 'm', value: 35 },
        { name: 'g', value: 45 },
      ],
      pessoas: [
        { name: 'p', value: 2 },
        { name: 'm', value: 4 },
        { name: 'g', value: 6 },
      ],
    },
    {
      name: 'Rosa de Saron',
      categoria: categorias[1],
      preco: [{ name: 'unico', value: 14 }],
      tempo: [{ name: 'unico', value: 10 }],
      pessoas: [{ name: 'unico', value: 1 }],
    },
  ]

  const adicionais: IAdicional[] = [
    {
      name: 'Queijo Extra',
      produto: produtos[0],
      preco: { name: 'unico', value: 4 },
    },
    {
      name: 'Calabresa Extra',
      produto: produtos[0],
      preco: { name: 'unico', value: 4 },
    },
  ]

  return (
    <CardapioController
      categorias={categorias}
      produtos={produtos}
      adicionais={adicionais}
    />
  )
}

export default SSRCardapio
