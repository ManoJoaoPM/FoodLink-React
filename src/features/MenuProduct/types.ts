//ACTION TYPES
export enum MenuProductTypes {
  SELECT_CATEGORIA = '@menuproduct/SELECT_CATEGORIA',
  SELECT_PRODUTO = '@menuproduct/SELECT_PRODUTO',
  ADD_ADICIONAL = '@menuproduct/ADD_ADICIONAL',
  REMOVE_ADICIONAL = '@menuproduct/REMOVE_ADICIONAL',
}

//DATA TYPES
export interface IMenuProductData {
  categoria?: ICategoria
  produto?: IProduto
  adicional?: IAdicional
  tamanho?: ITamanho
  obs?: string
}