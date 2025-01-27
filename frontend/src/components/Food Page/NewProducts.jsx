import React, { useState } from 'react';
import products from '../api/productApi';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart function from context

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // Always add 1 item to the cart
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-xs hover:shadow-lg transition duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-45 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">{product.price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-orange-700 hover:text-white transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductSlider = () => {
  return (
    <div className="bg-gray-100 py-10 mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Special Products</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 max-w-full mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-2/3 md:w-2/5 lg:w-1/4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
