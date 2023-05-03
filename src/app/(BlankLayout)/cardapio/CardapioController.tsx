'use client'
import CardAdicional from '@/components/cardapio/CardAdicional'
import CardCategoria from '@/components/cardapio/CardCategoria'
import CardProduto from '@/components/cardapio/CardProduto'
import TamanhoSelect from '@/components/cardapio/TamanhoSelect'
import { useMenuProductSelector } from '@/features/MenuProduct/hooks'
import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

interface ICardapioControllerProps {
  categorias: ICategoria[]
  produtos: IProduto[]
  adicionais: IAdicional[]
}

interface IFields {
  pedido: {
    categoria: string
    produto: string
    adicional: IAdicional[]
    tamanho: ITamanho
  }
  obs: string
}

function CardapioController({
  categorias,
  produtos,
  adicionais,
}: ICardapioControllerProps) {
  const menuProduct = useMenuProductSelector((state) => state)
  const dispatch = useDispatch()
  
  const { watch, setValue, control } = useForm<IFields>({
    defaultValues: {
      pedido: { categoria: '', produto: '', adicional: [], tamanho: {} },
      obs: '',
    },
  })

  const { append, remove } = useFieldArray({
    control,
    name: 'pedido.adicional',
  })

  const [totalProduto, setTotalProduto] = useState(0)

  const categoriaWatch = watch('pedido.categoria')
  const produtoWatch = watch('pedido.produto')
  const adicionalWatch: IAdicional[] = watch('pedido.adicional')
  const tamanhoWatch = watch('pedido.tamanho')

  const onSubmit = () => {
    console.log(adicionalWatch)
  }

  useEffect(() => {
    const adicionalTotal = adicionalWatch.reduce(
      (partialSum, adicional) => partialSum + adicional.preco.value,
      0,
    )

    const total = tamanhoWatch.value
      ? tamanhoWatch.value + adicionalTotal
      : adicionalTotal

    setTotalProduto(total)
  }, [tamanhoWatch, adicionalWatch])

  const setCustomValue = (id: keyof IFields, value: any) => {
    setValue(id, value, { shouldDirty: true, shouldValidate: true })
  }

  return (
    <form className="w-full h-full font-merienda font-bold">
      <h1 className="uppercase text-center font-bold text-3xl">Cardápio</h1>
      <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
        <h2 className="text-xl uppercase mb-3">Categorias</h2>
        {categorias.map((categoria, index) => {
          return (
            <CardCategoria
              key={index}
              img={categoria.img}
              name={categoria.name}
              selected={categoriaWatch === categoria.name}
              onClick={() => setCustomValue('pedido.categoria', categoria.name)}
            />
          )
        })}
      </div>
      <div className="mt-4 pb-8">
        <h2 className="text-xl uppercase mb-3">Produtos</h2>
        <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
          {produtos.map((produto, index) => {
            return (
              produto.categoria.name === categoriaWatch && (
                <CardProduto
                  key={index}
                  name={produto.name}
                  categoria={produto.categoria}
                  preco={produto.preco}
                  tempo={produto.tempo}
                  pessoas={produto.pessoas}
                  onClick={() =>
                    produtoWatch != produto.name
                      ? setCustomValue('pedido.produto', produto.name)
                      : setCustomValue('pedido.produto', '')
                  }
                  selected={produto.name === produtoWatch}
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
                adicional.produto.name === produtoWatch && (
                  <CardAdicional
                    key={index}
                    name={adicional.name}
                    produto={adicional.produto}
                    preco={adicional.preco}
                    selected={
                      adicionalWatch.find(
                        ({ name }) => name === adicional.name,
                      ) && true
                    }
                    onClick={() => {
                      !adicionalWatch.find(
                        ({ name }) => name === adicional.name,
                      )
                        ? append(adicional)
                        : remove(
                            adicionalWatch.findIndex(
                              ({ name }) => name === adicional.name,
                            ),
                          )
                    }}
                  />
                )
              )
            })}
        </div>
      </div>
      <div className="flex justify-between px-12">
        <div className="w-36 text-center">
          <BsFillChatDotsFill className="text-3xl w-full mb-2" />
          <h3 className="text-sm">Deixar observação do produto</h3>
        </div>
        <div>
          <div className="inline-flex gap-10 mr-8">
            {produtos.map((produto) => {
              return (
                produtoWatch === produto.name &&
                produto.preco?.map((tamanho, index) => {
                  return (
                    <TamanhoSelect
                      tamanho={tamanho}
                      key={index}
                      selected={tamanho.name === tamanhoWatch.name}
                      onClick={() => {
                        setCustomValue('pedido.tamanho', tamanho)
                      }}
                    />
                  )
                })
              )
            })}
          </div>
          <h1 className="inline-block mr-8">
            Total a pagar do produto: R${totalProduto}
          </h1>
          <button
            onClick={onSubmit}
            className="border-2 border-[#FF8411] rounded-xl px-8 py-2"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </form>
  )
}

export default CardapioController
