import React from 'react'
import { CartProvider, useCart } from '../context/CartContext'
import PaymentPage from './PaymentPage'

function Payment() {
  return (
    <CartProvider>
        <PaymentPage useCart={useCart}/>
    </CartProvider>
  )
}

export default Payment