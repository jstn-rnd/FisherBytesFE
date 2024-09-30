import React, { useState } from 'react';
import './css/SignupForm.css';

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <p>Enter your credentials.</p>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          placeholder="First Name" 
        />

        <label htmlFor="middle-ini">Middle Initial</label>
        <input 
          type="text" 
          placeholder="Middle Initial" 
        />
        
        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          placeholder="Last Name" 
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