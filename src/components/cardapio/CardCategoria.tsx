import React from 'react'
import './test.css'

interface ICardCategoriaProps {
  name: string
  img: string
  selected: boolean
  onClick(): void
}

function CardCategoria({ name, img, selected, onClick }: ICardCategoriaProps) {
  return (
    <div
      onClick={() => onClick()}
      className="inline-block group cursor-pointer"
    >
      <div className="bg-slate-500 w-48 h-20 relative inline-block mr-4 overflow-hidden">
        <h3
          className={`absolute bottom-0 pl-2 text-xl w-full text-white bg-gradient-to-r from-[#491b00] to-[#0b6b8b25] bg-[length:0_100%] transition-all ease-in-out duration-300 group-hover:bg-[length:100%_100%] ${
            selected && 'bg-[length:100%_100%]'
          } bg-no-repeat`}
        >
          {name}
        </h3>
        <img src={img} className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default CardCategoria
