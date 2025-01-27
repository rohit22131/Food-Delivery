import React from 'react'
import { CartProvider, useCart } from '../context/CartContext'
import CartPage from './CartPage'

function Cart() {
    
    const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
        <CartProvider>
        <CartPage useCart={useCart} getTotalPrice={getTotalPrice} />
        </CartProvider>
  )
}

export default Cart