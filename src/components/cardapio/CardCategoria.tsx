import React from 'react'
import './test.css'

function CardCardapio() {
  return (
    <div className="inline-block">
      <div className="bg-slate-500 w-48 h-20 relative inline-block mr-4 overflow-hidden">
        <h3 className="absolute bottom-0 pl-2 text-xl w-full text-white bg-gradient-to-r from-[#491b00] to-[#0b6b8b25] bg-[length:0_100%] transition-all ease-in-out duration-300 hover:bg-[length:100%_100%] bg-no-repeat">
          Pizzas
        </h3>
        <img src="pizza.jpg" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default CardCardapio
