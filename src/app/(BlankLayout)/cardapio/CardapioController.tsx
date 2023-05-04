'use client'
import CardAdicional from '@/components/cardapio/CardAdicional'
import CardCategoria from '@/components/cardapio/CardCategoria'
import CardProduto from '@/components/cardapio/CardProduto'
import ModalObs from '@/components/cardapio/ModalObs'
import TamanhoSelect from '@/components/cardapio/TamanhoSelect'
import { addCart } from '@/features/Cart/cart.slice'
import { useMenuProductSelector } from '@/features/MenuProduct/hooks'
import {
  addAdicional,
  changeObs,
  removeAdicional,
  selectCategoria,
  selectProduto,
  selectTamanho,
  unselectCategoria,
  unselectProduto,
} from '@/features/MenuProduct/menuProduct.slice'
import React, { useState } from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

interface ICardapioControllerProps {
  categorias: ICategoria[]
  produtos: IProduto[]
  adicionais: IAdicional[]
}

function CardapioController({
  categorias,
  produtos,
  adicionais,
}: ICardapioControllerProps) {
  const menuProduct = useMenuProductSelector((state) => state)
  const dispatch = useDispatch()

  const [modalObsOpen, setModalObsOpen] = useState(false)

  return (
    <div className="w-full h-full font-merienda font-bold">
      <h1 className="uppercase text-center font-bold text-3xl">Cardápio</h1>
      <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
        <h2 className="text-xl uppercase mb-3">Categorias</h2>
        {categorias.map((categoria, index) => {
          return (
            <CardCategoria
              key={index}
              img={categoria.img}
              name={categoria.name}
              selected={menuProduct.categoria === categoria}
              onClick={() =>
                menuProduct.categoria != categoria
                  ? dispatch(selectCategoria(categoria))
                  : dispatch(unselectCategoria())
              }
            />
          )
        })}
      </div>
      <div className="mt-4 pb-8">
        <h2 className="text-xl uppercase mb-3">Produtos</h2>
        <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
          {produtos.map((produto, index) => {
            return (
              menuProduct.categoria &&
              produto.categoria.name === menuProduct.categoria.name && (
                <CardProduto
                  key={index}
                  name={produto.name}
                  categoria={produto.categoria}
                  preco={produto.preco}
                  tempo={produto.tempo}
                  pessoas={produto.pessoas}
                  onClick={() =>
                    menuProduct.produto != produto
                      ? dispatch(selectProduto(produto))
                      : dispatch(unselectProduto())
                  }
                  selected={produto === menuProduct.produto}
                />
              )
            )
          })}
        </div>
      </div>
      <div className="mt-4 pb-8">
        <h2 className="text-xl uppercase mb-3">Adicionais</h2>
        <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
          {adicionais &&
            adicionais.map((adicional, index) => {
              return (
                adicional.produto.name === menuProduct.produto?.name && (
                  <CardAdicional
                    key={index}
                    name={adicional.name}
                    produto={adicional.produto}
                    preco={adicional.preco}
                    selected={
                      menuProduct.adicional.find(
                        ({ name }) => name === adicional.name,
                      ) && true
                    }
                    onClick={() => {
                      !menuProduct.adicional.find((adc) => adc === adicional)
                        ? dispatch(addAdicional(adicional))
                        : dispatch(removeAdicional(adicional))
                    }}
                  />
                )
              )
            })}
        </div>
      </div>
      <div className="flex flex-col h-32 md:flex-row justify-between items-center px-4 md:px-8">
        <div className="flex gap-4 h-full items-center">
          <div
            onClick={() => setModalObsOpen(!modalObsOpen)}
            className="w-36 text-center cursor-pointer"
          >
            <BsFillChatDotsFill className="text-3xl w-full mb-2" />
            <h3 className="text-sm">Deixar observação do produto</h3>
          </div>
          {modalObsOpen && (
            <ModalObs
              handleChange={(e) => dispatch(changeObs(e.currentTarget.value))}
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="inline-flex gap-10 mr-8 w-full justify-center mt-4">
            {produtos.map((produto) => {
              return (
                menuProduct.produto &&
                menuProduct.produto.name === produto.name &&
                produto.preco?.map((tamanho, index) => {
                  return (
                    <TamanhoSelect
                      tamanho={tamanho}
                      key={index}
                      selected={tamanho === menuProduct.tamanho}
                      onClick={() => {
                        dispatch(selectTamanho(tamanho))
                      }}
                    />
                  )
                })
              )
            })}
          </div>
          <h1 className="inline-block mr-8 mt-4 text-lg md:text-base md:mt-0 w-full text-center mb-4">
            Total a pagar do produto: R${menuProduct.precoTotal}
          </h1>
          <button
            onClick={() => dispatch(addCart(menuProduct))}
            className="border-2 border-[#FF8411] rounded-xl px-8 py-2 mb-8"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardapioController
