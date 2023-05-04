'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface IMenuProductProviderProps {
  children: React.ReactNode
}

function MenuProductProvider({ children }: IMenuProductProviderProps) {
  return <Provider store={store}>{children}</Provider>
}

export default MenuProductProvider
