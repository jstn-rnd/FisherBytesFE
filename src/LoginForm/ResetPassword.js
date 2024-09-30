import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ResetPassword.css'

function ResetPassword() {
  return (
    <div className="reset-pass-form">
      <h2>Reset Password</h2>
      <p>Enter your new password for:</p>
      <div className="change-email">
        <p><span>email@sample.com</span></p>
        &nbsp;&nbsp;
        <a href="/forgot-password">Change email?</a>
      </div>
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
        
        <button type="submit">Reset</button>
        <a href="/login">Cancel</a>
      </form>
    </div>
  );
}

export default ResetPassword;