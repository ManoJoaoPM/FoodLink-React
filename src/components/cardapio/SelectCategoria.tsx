import React from 'react'

interface ISelectCategoriaProps {
  categorias: ICategoria[]
}

function SelectCategoria() {
    return 
        return <div className="mt-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin">
        <h2 className="text-xl uppercase mb-3">Categorias</h2>
        {categorias.map((categoria, index) => {
          <CardCategoria
            key={index}
            img={categoria.img}
            name={categoria.name}
            selected={categoriaWatch === categoria.name}
            onClick={() => setCustomValue('categoria', categoria.name)}
          />
        )
      )}}}
      </div>
}

export default SelectCategoria
