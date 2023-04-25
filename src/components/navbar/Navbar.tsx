import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ButtonHome from './ButtonHome'

function Navbar() {
  return (
    <nav className="bg-[#2B1D1A] h-[70px] px-8">
      <div className="h-full text-sm flex items-center justify-between">
        <ButtonHome />
        <div>
          <BsFillTelephoneFill className="text-white inline-block mr-2" />
          <span className="text-white font-extrabold">22 9 9999-9999</span>
        </div>
        <div className="flex gap-3">
          <span className="text-white font-extrabold">Sobre nós</span>
          <span className="text-white font-extrabold">Cardápio</span>
          <span className="text-white font-extrabold">Carrinho</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
