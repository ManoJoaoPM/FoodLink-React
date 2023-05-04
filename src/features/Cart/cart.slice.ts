import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IMenuProductData } from '../MenuProduct/types'
import { ICartData } from './types'

export const initialState: ICartData = { precoTotal: 0, products: [] }

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IMenuProductData>) => {
      state.products.push(action.payload)
    },
  },
})

export const { addCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
