/* eslint-disable indent */
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'

interface ICardProdutoProps {
  name: string
  categoria: ICategoria
  preco?: ITamanho[]
  tempo?: ITamanho[]
  pessoas?: ITamanho[]
  selected?: boolean
  img?: string
  onClick(): void
}

function CardProduto({
  name,
  categoria,
  preco,
  tempo,
  pessoas,
  selected,
  img,
  onClick,
}: ICardProdutoProps) {
  return (
    <div
      onClick={() => onClick()}
      className={
        'card w-80 bg-base-100 shadow-lg !rounded-none inline-block mr-4'
      }
    >
      <figure>
        <img src={img ? img : categoria.img} />
      </figure>
      <div className={`card-body ${selected && 'bg-[#FF8411]'}`}>
        <h2 className="card-title font-sans">{name}</h2>
        <p
          className={`font-sans ${
            selected ? 'text-white' : 'text-[#FF8411]'
          } text-sm`}
        >
          {categoria && categoria.name}
        </p>
        <div className="font-normal border-b border-black border-opacity-30 pb-3">
          <AiOutlineClockCircle className="text-xl inline-block mr-1" />
          <span className="text-sm mr-3">
            {tempo && tempo.length > 1
              ? `${tempo[0].value}-${tempo[tempo.length - 1].value}`
              : tempo && `${tempo[0].value}`}
            min
          </span>
          <HiOutlineUserGroup className="text-xl inline-block mr-1" />
          <span className="text-sm">
            {pessoas && pessoas.length > 1
              ? `${pessoas[0].value}-${pessoas[pessoas.length - 1].value}`
              : pessoas && `${pessoas[0].value}`}
          </span>
        </div>
        <h3 className={`${selected ? 'text-white' : 'text-[#FF8411]'} text-xl`}>
          {preco && preco.length > 1
            ? `R$${preco[0].value.toFixed(2).replace('.', ',')}-R$${preco[
                preco.length - 1
              ].value
                .toFixed(2)
                .replace('.', ',')}`
            : preco && `R$${preco[0].value.toFixed(2).replace('.', ',')}`}
        </h3>
      </div>
    </div>
  )
}

export default CardProduto
