import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ResetPassword.css'

function ResetPassword() {
  return (
    <div className="reset-pass-form">
      <h2>Reset Password</h2>
      <p>Enter your new password for:</p>
      <div className="change-email">
        <p className='change-email-text'><span>email@sample.com</span></p>
        <a className="change-mail-link" href="/forgot-password">Change email?</a>
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
        <div className='link-containerr'>
          <a href="/login">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;