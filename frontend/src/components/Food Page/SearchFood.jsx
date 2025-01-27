import React, { useState } from "react";
import products from "../data/productApi";
import { useCart } from "../../context/CartContext"; // Import Cart Context

const SearchSection = () => {
  const [query, setQuery] = useState(""); // State to store the search query
  const [filteredProducts, setFilteredProducts] = useState(products); // State to store filtered products
  const { addToCart } = useCart(); // Access addToCart function from context

  // Function to handle search input
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    // Filter products based on the search query
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(results);
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for food..."
            className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-300"
          />
        </div>

        {/* Display Filtered Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    ₹{product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No products found for "{query}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
