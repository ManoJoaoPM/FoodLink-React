import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Section4() {
  return (
    <section className="h-max mb-4 px-8 font-merienda mt-12">
      <h1 className="text-3xl font-bold">Sobre nós</h1>
      <ul className="mt-8 border-b-2 border-black border-opacity-50 border-solid pb-12">
        <li className="w-1/5 ml-4 inline-block">
          <h2 className="text-2xl inline-block font-bold">Instagram</h2>
          <BsArrowRight className="text-3xl inline-block ml-3" />
          <p className="opacity-70 font-bold">
            Acesse nossa página do instagram e veja os destaques do dia
          </p>
        </li>
        <li className="w-1/5 ml-4 inline-block">
          <h2 className="text-2xl inline-block font-bold">Facebook</h2>
          <BsArrowRight className="text-3xl inline-block ml-3" />
          <p className="opacity-70 font-bold">
            Acesse nossa página do instagram e veja os destaques do dia
          </p>
        </li>
        <li className="w-1/5 ml-4 inline-block">
          <h2 className="text-2xl inline-block font-bold">Whatsapp</h2>
          <BsArrowRight className="text-3xl inline-block ml-3" />
          <p className="opacity-70 font-bold">
            Acesse nossa página do instagram e veja os destaques do dia
          </p>
        </li>
      </ul>
      <div className="flex mt-8 items-center ">
        <div className="w-[40%] text-center">
          <h1 className="text-3xl font-bold">Nosso Restaurante</h1>
          <p className="opacity-70 w-2/3 m-auto">
            O lugar perfeito para passar o dia com conforto, qualidade e
            excepcional atendimento
          </p>
        </div>
        <div className="w-[60%]">
          <div className="h-[350px] overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
            <img src="image4.png" className="inline-block mr-2 w-[350px]" />
            <img src="image4.png" className="inline-block mx-2 w-[350px]" />
            <img src="image4.png" className="inline-block mx-2 w-[350px]" />
            <img src="image4.png" className="inline-block mx-2 w-[350px]" />
            <img src="image4.png" className="inline-block mx-2 w-[350px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
