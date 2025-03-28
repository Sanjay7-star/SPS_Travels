import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../api/axios"; // Make sure to export API instance correctly

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting

    try {
      const res = await API.post("/auth/login", { email, password }); // Send login request
      alert(res.data.message); // Show success message

      // Store JWT token in localStorage
      localStorage.setItem("authToken", res.data.token);

      // Redirect to homepage or protected route
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed"); // Show error message
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-xl text-center w-96"
      >
        <h2 className="text-white text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"} {/* Show loading text */}
          </motion.button>
        </form>
        <p className="text-gray-300 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
