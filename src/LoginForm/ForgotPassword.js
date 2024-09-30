import React, { useState } from 'react';
import './css/ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-pass-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      <form>
        <label htmlFor="email"></label>
        <input 
          type="email" 
          placeholder="Email Address" 
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ForgotPassword;