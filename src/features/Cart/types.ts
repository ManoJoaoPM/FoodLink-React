import { IMenuProductData } from '../MenuProduct/types'

export enum STATE {
  ADD_TO_CART,
  CHECKOUT,
}

export interface ICartData {
  products: IMenuProductData[]
  precoTotal: number
}
