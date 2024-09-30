import React, { useState } from 'react';
import './css/SignupForm.css';

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <p>Create your account.</p>
      <form>
        <label htmlFor="first-name">First Name<span> * </span></label>
        <input 
          type="text" 
          placeholder="Juan" 
        />

        <label htmlFor="middle-ini">Middle Initial<span> * </span></label>
        <input 
          type="text" 
          placeholder="D." 
        />
        
        <label htmlFor="last-name">Last Name<span> * </span></label>
        <input 
          type="text" 
          placeholder="Cruz" 
        />
        
        <label htmlFor="email">Email<span> * </span></label>
        <input 
          type="email" 
          placeholder="email@sample.com" 
        />
        
        <label htmlFor="pass">Enter Password<span> * </span></label>
        <input 
          type="password" 
          placeholder="**********" 
        />
        
        <label htmlFor="confirm-pass">Confirm Password<span> * </span></label>
        <input 
          type="password" 
          placeholder="**********" 
        />
        
        <button type="submit">Submit</button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  )
}

export default SignupForm;