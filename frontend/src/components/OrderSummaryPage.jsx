import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart to access the cart

const OrderSummaryPage = () => {
  const { cart } = useCart(); // Get the cart data from CartContext
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle proceeding to the payment page and passing the order details
  const handleProceedToPayment = () => {
    const orderDetails = {
      items: cart,
      total: getTotalPrice(), // Get total price from cart
    };

    navigate("/payment", { state: { orderDetails } }); // Navigate to the payment page with order details
  };

  // Handle going back to the cart page
  const handleGoBack = () => {
    navigate("/cart"); // Navigate back to the cart page
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

        {cart.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id} // Ensure each item has a unique key
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={item.image} // Display item image
                      alt={item.name} // Use item name for alt text
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity} {/* Display item quantity */}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    ₹{item.price * item.quantity} {/* Display price for the item */}
                  </span>
                </li>
              ))}
            </ul>

            {/* Total price section */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold">Total Price:</span>
              <span className="text-lg font-bold text-green-600">
                ₹{getTotalPrice().toFixed(2)} {/* Display the total price of all items */}
              </span>
            </div>

            {/* Buttons for navigation */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleGoBack}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
              >
                Back to Cart
              </button>
              <button
                onClick={handleProceedToPayment}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p> // Message when the cart is empty
        )}
      </div>
    </div>
  );
};

export default OrderSummaryPage;
