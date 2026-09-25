import ShoppingNavbar from '@/Components/ShoppingApp/ShoppingNavbar'
import React from 'react'

const ShopingAppLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <ShoppingNavbar />
      <main>
          {children}
      </main>
    </>
  )
}

export default ShopingAppLayout