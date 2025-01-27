import React from 'react'
import ImageSlider from './Food Page/FoodSlider';
import ProductSlider from './Food Page/NewProducts';
import ThreeBanner from './banner/ThreeFoodBanner';
import FoodBanner from './banner/FoodBanner';
import SearchSection from './Food Page/SearchFood';
import { CartProvider } from '../context/CartContext';

function FoodPage() {
  return (
    <div>
      <CartProvider>
        <ImageSlider/>
        <SearchSection/>
        <ProductSlider/>
        <FoodBanner/>
        <ThreeBanner/>
      </CartProvider>
    </div>
  )
}

export default FoodPage;