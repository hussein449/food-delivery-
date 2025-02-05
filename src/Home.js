import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Make sure you create this file

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome to FoodieApp 🍔</h1>
        <p className="login-subtitle">Order delicious food or manage your restaurant effortlessly!</p>
        
        <div className="button-group">
          <button 
            className="order-btn"
            onClick={() => navigate('/Home')}
          >
            Order Now
          </button>
          
          <button 
            className="signup-btn"
            onClick={() => navigate('/restaurantSignup')}
          >
            Restaurant Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
