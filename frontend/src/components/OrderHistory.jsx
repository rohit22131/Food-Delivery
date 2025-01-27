// Order History Page Component
import React, { useEffect, useState } from "react";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser"); // Get the logged-in user's ID or name
    if (loggedInUser) {
      const storedOrders = JSON.parse(localStorage.getItem(`${loggedInUser}-orders`)) || [];
      setOrders(storedOrders);
    }
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Order History</h1>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="text-xl font-bold mb-2">Order #{index + 1}</h2>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} (x{item.quantity})</span>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex justify-between">
                  <span className="font-bold">Total: ₹{order.total}</span>
                  <span>{order.date}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
