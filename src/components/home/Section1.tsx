import React from 'react'
import ButtonCardapio from './ButtonCardapio'

function Section1() {
  return (
    <section className="bg-gradient-to-r from-[#3F312E] to-[#2B1D1A] text-white flex flex-row text-center items-center max-h-[800px] overflow-hidden">
      <div className="w-[70%]">
        <img src="image.png" className="w-full" />
      </div>
      <div className="w-[30%] flex flex-col items-center justify-between font-merienda h-[500px]">
        <div className="mb-8">
          <img src="logo.png" className="w-1/3 m-auto" />
          <span className="block text-xl">Lorem ipsum</span>
          <span className="block text-lg">Lorem ipsum</span>
        </div>
        <div>
          <h1 className="text-5xl font-bold uppercase mb-4">
            <span className="block">Casarão</span> Pedra Branca
          </h1>
          <span className="block">Lorem ipsum lorem ipsum lorem ipsum</span>
        </div>
        <ButtonCardapio />
      </div>
    </section>
  )
}

export default Section1
