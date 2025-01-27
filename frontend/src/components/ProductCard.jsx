import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); // Always add 1 item to the cart
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm hover:shadow-lg transition duration-200">
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

export default ProductCard;
