import React from 'react'
import { BsArrowLeft, BsCartFill, BsTelephoneFill } from 'react-icons/bs'

function Sidebar() {
  return (
    <div className="w-full h-24 md:w-[7rem] justify-between px-4 md:h-full flex md:flex-col bg-[#2B1D1A]">
      <div className="flex items-center text-center md:flex-col text-white font-bold font-merienda">
        <img
          src="logo.png"
          className="order-2 md:order-1 w-20 md:w-24 text-center inline-block md:block"
        />
        <span className="md:text-xs order-3 md:order-2 md:w-full">
          Casarão{' '}
          <span className="md:block md:whitespace-nowrap">Pedra Branca</span>
        </span>
        <BsArrowLeft className="order-1 md:order-2 text-3xl md:text-4xl ml-2 m-auto md:m-auto md:mt-4 cursor-pointer inline-block md:block" />
      </div>
      <div className="text-white text-3xl mt-auto mb-auto flex gap-6 md:block md:mb-8">
        <BsCartFill className="md:m-auto md:mb-6 inline-block md:block" />
        <BsTelephoneFill className="md:m-auto inline-block md:block" />
      </div>
    </div>
  )
}

export default Sidebar
