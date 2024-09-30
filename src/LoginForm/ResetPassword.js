import React, { useState} from 'react';
import './css/ResetPassword.css'

function ResetPassword() {
  return (
    <div className="reset-pass-form">
      <h2>Reset Password</h2>
      <p>Enter your new password below.</p>
      <form>
        <label htmlFor="pass"></label>
        <input 
          type="password" 
          placeholder="New Password" 
        />
        
        <label htmlFor="-confirm-pass"></label>
        <input 
          type="password" 
          placeholder="Confirm Password" 
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ResetPassword;