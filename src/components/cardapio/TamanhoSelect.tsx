import React from 'react'

interface ITamanhoSelectProps {
  tamanho: ITamanho
  selected: boolean
  onClick(): void
}

function TamanhoSelect({ tamanho, selected, onClick }: ITamanhoSelectProps) {
  return (
    <div className="w-max text-center uppercase flex items-center">
      <input
        type="checkbox"
        name={tamanho.name}
        id={tamanho.name}
        checked={selected}
        onChange={() => onClick()}
        className="mr-2 checkbox-xs"
      />
      <div>
        <h1 className="text-xl">{tamanho.name}</h1>
        <h3 className="">{tamanho.value.toFixed(2).replace('.', ',')}</h3>
      </div>
    </div>
  )
}

export default TamanhoSelect
