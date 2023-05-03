import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMenuProductData } from './types'

const initialState: IMenuProductData = {
  adicional: undefined,
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
      state.categoria = action.payload
    },
  },
})

export const { selectCategoria } = menuProductSlice.actions
export const menuProductReducer = menuProductSlice.reducer
