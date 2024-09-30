import React, { useState } from 'react';
import './css/LoginForm.css';

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <p>Enter your credentials.</p>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          placeholder="Juan" 
        />

        <label htmlFor="middle-ini">Middle Initial</label>
        <input 
          type="text" 
          placeholder="D." 
        />
        
        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          placeholder="Cruz" 
        />
        
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

export default SignupForm;