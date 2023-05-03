import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMenuProductData } from './types'

const initialState: IMenuProductData = {
  adicional: [],
  categoria: undefined,
  obs: '',
  produto: undefined,
  tamanho: undefined,
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
    },
    selectProduto: (state, action: PayloadAction<IProduto>) => {
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.produto = action.payload
    },
    unselectProduto: (state) => {
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.produto = initialState.produto
    },
    unselectCategoria: (state) => {
      state.produto = initialState.produto
      state.adicional = initialState.adicional
      state.tamanho = initialState.tamanho
      state.categoria = initialState.categoria
    },
    addAdicional: (state, action: PayloadAction<IAdicional>) => {
      state.adicional.push(action.payload)
    },
    removeAdicional: (state, action: PayloadAction<IAdicional>) => {
      state.adicional = state.adicional.filter(
        (adc) => adc.name !== action.payload.name,
      )
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
} = menuProductSlice.actions
export const menuProductReducer = menuProductSlice.reducer
