import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './store'

export const useMenuProductSelector: TypedUseSelectorHook<RootState> =
  useSelector
