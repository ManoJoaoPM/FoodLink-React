'use client'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'

function CardProduto() {
  const [selected, setSelected] = useState(false)

  return (
    <div
      className={`card w-80 bg-base-100 shadow-lg !rounded-none inline-block mr-4 ${
        selected && 'bg-[#FF8411] text-white'
      }`}
    >
      <figure>
        <img src="pizza.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-sans">Pizza de Calabresa</h2>
        <p className="font-sans text-[#FF8411] text-sm">Pizzas</p>
        <div className="font-normal border-b border-black border-opacity-30 pb-3">
          <AiOutlineClockCircle className="text-xl inline-block mr-1" />
          <span className="text-sm mr-3">25-45 min</span>
          <HiOutlineUserGroup className="text-xl inline-block mr-1" />
          <span className="text-sm">2-6</span>
        </div>
        <h3 className="text-[#FF8411] text-xl">R$36,00 - R$76,00</h3>
      </div>
    </div>
  )
}

export default CardProduto
