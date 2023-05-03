import React from 'react'
import SSRCardapio from './SSRCardapio'
import MenuProductProvider from '../../../features/MenuProduct/ProductReduxProvider.'

function Page() {
  return (
    <MenuProductProvider>
      <SSRCardapio />
    </MenuProductProvider>
  )
}

export default Page
