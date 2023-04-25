import React from 'react'
import { BsArrowLeft, BsCartFill, BsTelephoneFill } from 'react-icons/bs'

function Sidebar() {
  return (
    <div className="w-[5%] h-full flex flex-col bg-[#2B1D1A]">
      <div className="text-center text-white font-bold">
        <img src="logo.png" className="w-24 text-center" />
        <span className="text-xs">
          Casarão <span className="block">Pedra Branca</span>
        </span>
        <BsArrowLeft className="text-4xl m-auto mt-4" />
      </div>
      <div className="text-white text-3xl mt-auto mb-8">
        <BsCartFill className="m-auto mb-6" />
        <BsTelephoneFill className="m-auto" />
      </div>
    </div>
  )
}

export default Sidebar
