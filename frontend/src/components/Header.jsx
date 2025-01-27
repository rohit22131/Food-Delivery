import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg p-2 sm:p-4 sticky top-0 z-10">
      <div className="container px-4 sm:px-12 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">
          Foodify
        </Link>

        {/* Navigation Links (Centered on Large Screens) */}
        <ul className="lg:flex lg:space-x-12 text-gray-600 hidden flex-grow lg:justify-center">
          <Link to="/">
            <li className="hover:text-orange-700 font-bold cursor-pointer">Menu</li>
          </Link>
          <Link to="/food">
            <li className="hover:text-orange-700 font-bold cursor-pointer">Food</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-orange-700 font-bold cursor-pointer">Cart</li>
          </Link>
          <li className="hover:text-orange-700 font-bold cursor-pointer">Contact</li>
        </ul>

        {/* Right-side Buttons for Large Screens */}
        <div className="lg:flex lg:space-x-4 lg:ml-auto hidden items-center">
          {/* Login/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow hover:bg-red-500 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-orange-600 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow hover:bg-orange-500 cursor-pointer">
                Login/SignUp
              </button>
            </Link>
          )}

          {/* Order History Button (only shown if user is logged in) */}
          {isLoggedIn && username && (
            <button
              onClick={() => {
                navigate("/order-history");
              }}
              className="text-red-600 px-2 py-1.5 border-2 rounded-lg shadow hover:bg-red-600 hover:text-white"
            >
              Order History
            </button>
          )}
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Login/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow hover:bg-red-500 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-orange-600 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow hover:bg-orange-500 cursor-pointer">
                Login/SignUp
              </button>
            </Link>
          )}

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-orange-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Hamburger Drawer for Small Screens */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden fixed inset-0 z-20`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-3xl" // changed the cross mark color to black
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-6 bg-white shadow-md mt-2"> {/* Added shadow-md to add downward shadow */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <p className="text-lg font-bold text-orange-600">Menu</p>
          </Link>
          <Link to="/food" onClick={() => setIsMenuOpen(false)}>
            <p className="text-lg font-bold text-orange-600">Food</p>
          </Link>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            <p className="text-lg font-bold text-orange-600">Cart</p>
          </Link>
          <p className="text-lg font-bold text-orange-600 cursor-pointer">Contact</p>

          {/* Order History Button (only shown if user is logged in) */}
          {isLoggedIn && username && (
            <button
              onClick={() => {
                navigate("/order-history");
                setIsMenuOpen(false);
              }}
              className="text-red-600 px-2 py-1.5 border-2 rounded-lg shadow hover:bg-red-600 hover:text-white"
            >
              Order History
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
