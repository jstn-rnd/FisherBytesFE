import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginForm.css';
import './css/General.css';
function LoginForm() {

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <p>Enter your email and password.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="email@sample.com" 
        />
        
        <label htmlFor="pass">Enter Password</label>
        <input 
          type="password" 
          placeholder="**********" 
        />
        
        <button type="submit">Submit</button>
        <div className='link-container'>
        <a href="/forgot-password">Forgot Password?</a> 
        <a href="/signup">Create an Account</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;