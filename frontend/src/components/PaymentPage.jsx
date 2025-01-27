// Updated PaymentPage Component
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart to access cart and clearCart

const PaymentPage = () => {
  const { cart, clearCart } = useCart(); // Access cart and clearCart from CartContext
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [orderDetails, setOrderDetails] = useState(null); // State to hold the order details

  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Use location to get state passed from Order Summary

  // Get order details from the Order Summary page
  useEffect(() => {
    if (location.state) {
      setOrderDetails(location.state.orderDetails);
    }
  }, [location.state]);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = localStorage.getItem("loggedInUser"); // Get the logged-in user's username

    // Save order details in the order history
    const storedOrders = JSON.parse(localStorage.getItem(`${loggedInUser}-orders`)) || [];
    const newOrder = {
      items: cart,
      total: getTotalPrice(),
      date: new Date().toLocaleString(),
    };
    storedOrders.push(newOrder);
    localStorage.setItem(`${loggedInUser}-orders`, JSON.stringify(storedOrders)); // Save orders to localStorage

    clearCart(); // Clear the cart after successful payment
    navigate("/order-confirmation"); // Redirect to the order confirmation page
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Payment Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-semibold">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-semibold">
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={paymentDetails.expirationDate}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-semibold">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
              placeholder="123"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
