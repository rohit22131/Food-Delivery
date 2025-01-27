import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FoodPage from './components/FoodPage';
import Login from './components/Login';
import Cart from './components/Cart';
import OrderConfirmationPage from './components/OrderConfirmation';
import OrderSummary from './components/OrderSummary';
import Payment from './components/Payment';
import OrderHistoryPage from './components/OrderHistory';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-summary" element={<OrderSummary/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
