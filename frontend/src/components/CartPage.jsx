import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("authToken"); // Check if user is logged in
  const username = localStorage.getItem("username"); // Get username if saved in local storage

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    navigate("/order-summary"); // Navigate to order summary if user is logged in
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cart.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center mb-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-4">
                      <img className="w-20" src={item.image} alt={item.name} />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row items-center space-x-4">
                      <span className="text-lg font-bold text-green-600">
                        ₹{item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold">Total Price:</span>
              <span className="text-lg font-bold text-green-600">
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>

            {/* Check if user is logged in */}
            {isLoggedIn && username ? (
              <>
                {/* Clear Cart Button */}
                <div className="mt-6 text-right">
                  <button
                    onClick={clearCart}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Proceed to Checkout Button */}
                <div className="mt-6 text-right">
                  <button
                    onClick={handleProceedToCheckout}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                <p className="text-md mb-4">
                  Please login or signup to place your order.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200"
                  >
                    Login/SignUp
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
