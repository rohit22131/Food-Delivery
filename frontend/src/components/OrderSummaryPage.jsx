import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSummaryPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToPayment = () => {
    const orderDetails = {
      items: cart,
      total: getTotalPrice(),
    };

    navigate("/payment", { state: { orderDetails } }); // Pass orderDetails to PaymentPage via state
  };

  const handleGoBack = () => {
    navigate("/cart"); // Navigate back to the cart
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
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-20 h-20 object-cover rounded"
                      src={item.image}
                      alt={item.name}
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">
                    ₹{item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold">Total Price:</span>
              <span className="text-lg font-bold text-green-600">
                ₹{getTotalPrice().toFixed(2)}
              </span>
            </div>
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
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default OrderSummaryPage;
