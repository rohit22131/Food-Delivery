import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from './data/productApi';

const ProductSection = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Limit the displayed products to 8 items
  const limitedProducts = filteredProducts.slice(0, 8);

  return (
    <div className="pt-10">
      <ul className="flex items-center space-x-12 justify-center bg-red-600 text-white text-lg p-4 rounded-lg mb-8">
        <li className='cursor-pointer' onClick={() => setSelectedCategory('All')}>All Food</li>
        <li className='cursor-pointer' onClick={() => setSelectedCategory('Veg')}>Veg</li>
        <li className='cursor-pointer' onClick={() => setSelectedCategory('Non-Veg')}>Non-Veg</li>
      </ul>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <a href="/food">
        <button className='bg-orange-600 text-white flex m-auto font-bold my-10 px-6 py-2 rounded-sm hover:bg-orange-700 transition duration-200 cursor-pointer'>
          More
        </button>
      </a>
    </div>
  );
};

export default ProductSection;
