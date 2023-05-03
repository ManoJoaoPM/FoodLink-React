import { configureStore } from '@reduxjs/toolkit'
import { menuProductReducer } from './menuProduct.slice'

export const store = configureStore({ reducer: menuProductReducer })

export type RootState = ReturnType<typeof store.getState>
