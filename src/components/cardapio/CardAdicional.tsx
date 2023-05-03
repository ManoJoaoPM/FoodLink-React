import React from 'react'

interface ICardAdicionalProps {
  name: string
  produto: IProduto
  preco?: ITamanho
  selected?: boolean
  img?: string
  onClick(): void
}

function CardAdicional({
  name,
  produto,
  preco,
  selected,
  img,
  onClick,
}: ICardAdicionalProps) {
  return (
    <div
      onClick={() => onClick()}
      className={
        'card w-80 bg-base-100 shadow-lg !rounded-none inline-block mr-4'
      }
    >
      <figure>
        <img src={img ? img : produto.categoria.img} />
      </figure>
      <div className={`card-body ${selected && 'bg-[#FF8411]'}`}>
        <h2 className="card-title font-sans">{name}</h2>
        <p
          className={`font-sans ${
            selected ? 'text-white' : 'text-[#FF8411]'
          } text-sm`}
        >
          {produto && produto.name}
        </p>
        <h3 className={`${selected ? 'text-white' : 'text-[#FF8411]'} text-xl`}>
          {preco && `R$${preco.value.toFixed(2).replace('.', ',')}`}
        </h3>
      </div>
    </div>
  )
}

export default CardAdicional
