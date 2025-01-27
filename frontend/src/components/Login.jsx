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
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-red-600">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
