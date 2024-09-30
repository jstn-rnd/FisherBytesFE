import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ForgotPassword.css';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // API request
    // validation before redirecting
    
    navigate('/reset-password');
  }

  
  return (
    <div className="forgot-pass-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label htmlFor="email"></label>
        <input 
          type="email" 
          placeholder="email@sample.com" 
          required
        />

        {/* <button type="submit">Submit</button> */}
        <button type="button" onClick={handleSubmit}>Submit</button>
        <a href="/login">Cancel</a>
      </form>
    </div>
  )
}

export default ForgotPassword;