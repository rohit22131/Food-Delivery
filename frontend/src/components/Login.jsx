import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login and signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register"; // Adjust the URL for signup if needed

    try {
      const response = await axios.post(url, { username, password });

      if (!isLogin) {
        alert("Account created successfully. You can now log in.");
      }

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("username", username);
      console.log('Login attempt:', { username, password });

      navigate("/"); // Redirect to home page after login/signup
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-6">
        <h1 to="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">
          Foodify
        </h1>
        </div>
        <h1 className="text-3xl font-extrabold text-center text-red-600">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 px-4 py-2 transition duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 px-4 py-2 transition duration-300"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:underline transition duration-300"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            By continuing, you agree to our{" "}
            <span className="text-blue-600">Terms of Service</span> and{" "}
            <span className="text-blue-600">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
