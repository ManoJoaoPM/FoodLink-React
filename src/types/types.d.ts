interface ICategoria {
  name: string
  img: string
}

interface ITamanho {
  name: string
  value: number
}

interface IProduto {
  name: string
  categoria: ICategoria
  preco?: ITamanho[]
  tempo?: ITamanho[]
  pessoas?: ITamanho[]
}

interface IAdicional {
  name: string
  produto: IProduto
  preco: ITamanho
}
