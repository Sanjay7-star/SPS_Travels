import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert(res.data.message);
      navigate('/');
    } catch (err) {
      alert(err.response.data.message || 'An error occurred');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>
        <p className="text-sm mb-4 text-center text-gray-500">Login to your account</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="text-right text-xs mb-2">
          <span className="text-indigo-600 cursor-pointer hover:underline">Forgot Password?</span>
        </div>
        <button type="submit" className="auth-btn">Login</button>
        <p>Don't have an account? <span onClick={() => navigate('/signup')}>Signup</span></p>
      </form>
    </div>
  );
};

export default Login;
