import React from 'react'
import OrderSummaryPage from './OrderSummaryPage'
import { CartProvider, useCart } from "../context/CartContext";

function OrderSummary() {
  return (
    <CartProvider>
        <OrderSummaryPage useCart = {useCart}/>
    </CartProvider>
  )
}

export default OrderSummary