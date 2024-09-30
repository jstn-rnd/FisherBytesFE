import React, { useState } from 'react';
import './css/LoginForm.css';

function LoginForm() {


  return (
    <div className="login-form">
      <h2>Reset Password</h2>
      <p>Enter your new password below.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="Email Address" 
        />
        
        <label htmlFor="pass">Enter Password</label>
        <input 
          type="password" 
          placeholder="**********" 
        />
        
        <label htmlFor="confirm-pass">Confirm Password</label>
        <input 
          type="password" 
          placeholder="**********" 
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;