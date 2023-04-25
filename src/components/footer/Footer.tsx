import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-[#2B1D1A] flex justify-between px-8 py-3 h-max text-white">
      <div>
        <p className="text-lg font-merienda font-bold mb-2">
          Casarão Pedra Branca
        </p>
        <span className="text-sm block">
          Endereço: Rua Antonio Ribeiro, n° 00 - Italva/RJ
        </span>
        <span className="text-sm block">Contato: (22) 9 9999-9999</span>
      </div>
      <div>
        <img src="logo.png" className="w-24" />
      </div>
      <div className="my-auto">
        <p className="font-merienda font-bold">Site criado por FoodLink</p>
        <span className="text-sm">
          Clique <span className="underline cursor-pointer">AQUI</span> e venha
          nos conhecer!
        </span>
      </div>
    </footer>
  )
}

export default Footer
