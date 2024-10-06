import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './LoginForm/SignupForm';
import ForgotPassword from './LoginForm/ForgotPassword';
import ResetPassword from './LoginForm/ResetPassword';
import Dashboard from './FeaturePages/Dashboard';
import TransactionPage from './FeaturePages/TransactionPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Index */}
        <Route exact path="/" element={<LoginForm />} />

        {/* Redirect Path */}
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/transactionpage" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
