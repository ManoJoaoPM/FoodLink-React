import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMenuProductData } from './types'
import { RootState } from './store'

const initialState: IMenuProductData = {
  adicional: [],
  categoria: undefined,
  obs: '',
  produto: undefined,
  tamanho: undefined,
  precoTotal: 0,
}

export const refactorPrecoTotal = (state: RootState) => {
  const precoTamanho = state.tamanho?.value || 0
  const precoAdicionais = state.adicional.reduce((a, b) => a + b.preco.value, 0)
  const precoTotal = precoTamanho + precoAdicionais
  return precoTotal
}

export const menuProductSlice = createSlice({
  name: 'MenuProduct',
  initialState,
  reducers: {
    selectCategoria: (state, action: PayloadAction<ICategoria>) => {
      state.produto = initialState.produto
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.categoria = action.payload
      state.precoTotal = initialState.precoTotal
    },
    selectProduto: (state, action: PayloadAction<IProduto>) => {
      state.adicional = initialState.adicional
      state.produto = action.payload
      state.tamanho = action.payload.preco?.at(0)
      state.precoTotal = refactorPrecoTotal(state)
    },
    unselectProduto: (state) => {
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.produto = initialState.produto
      state.precoTotal = initialState.precoTotal
    },
    unselectCategoria: (state) => {
      state.produto = initialState.produto
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.categoria = initialState.categoria
      state.precoTotal = initialState.precoTotal
    },
    addAdicional: (state, action: PayloadAction<IAdicional>) => {
      state.adicional.push(action.payload)
      state.precoTotal = refactorPrecoTotal(state)
    },
    removeAdicional: (state, action: PayloadAction<IAdicional>) => {
      state.adicional = state.adicional.filter(
        (adc) => adc.name !== action.payload.name,
      )
      state.precoTotal = refactorPrecoTotal(state)
    },
    selectTamanho: (state, action: PayloadAction<ITamanho>) => {
      state.tamanho = action.payload
      state.precoTotal = refactorPrecoTotal(state)
    },
    changeObs: (state, action: PayloadAction<string>) => {
      state.obs = action.payload
    },
  },
})

export const {
  selectCategoria,
  selectProduto,
  unselectProduto,
  unselectCategoria,
  addAdicional,
  removeAdicional,
  selectTamanho,
  changeObs,
} = menuProductSlice.actions
export const menuProductReducer = menuProductSlice.reducer
