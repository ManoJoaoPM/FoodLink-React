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
    <div className="h-full w-full font-merienda font-bold">
      <h1 className="text-center text-3xl font-bold uppercase">Cardápio</h1>
      <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900">
        <h2 className="mb-3 text-xl uppercase">Categorias</h2>
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
        <h2 className="mb-3 text-xl uppercase">Produtos</h2>
        <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900">
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
        <h2 className="mb-3 text-xl uppercase">Adicionais</h2>
        <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900">
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
      <div className="flex h-32 flex-col items-center justify-between px-4 md:px-8 lg:flex-row">
        <div className="flex h-full items-center gap-4">
          <div
            onClick={() => setModalObsOpen(!modalObsOpen)}
            className="w-36 cursor-pointer text-center"
          >
            <BsFillChatDotsFill className="mb-2 w-full text-3xl" />
            <h3 className="text-sm">Deixar observação do produto</h3>
          </div>
          {modalObsOpen && (
            <ModalObs
              handleChange={(e) => dispatch(changeObs(e.currentTarget.value))}
            />
          )}
        </div>
        <div className="flex flex-col justify-center xl:flex-row">
          <div className="mt-4 inline-flex w-full justify-center gap-8 md:justify-start lg:mr-0 xl:my-auto xl:mr-8">
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
          <h1 className="my-4 inline-block text-center text-lg md:my-4 md:mr-0 md:whitespace-normal md:text-base lg:my-4 xl:my-auto xl:mr-8 xl:whitespace-nowrap">
            Total a pagar do produto: R${menuProduct.precoTotal}
          </h1>
          <button
            onClick={() => dispatch(addCart(menuProduct))}
            className="mb-8 rounded-xl border-2 border-[#FF8411] px-8 py-2 md:my-auto md:w-full lg:mb-8 xl:my-auto xl:whitespace-nowrap"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardapioController
