import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './LoginForm/SignupForm';
import ForgotPassword from './LoginForm/ForgotPassword';
import ResetPassword from './LoginForm/ResetPassword';
import Dashboard from './FeaturePages/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/" element={<SignupForm />} />
        <Route exact path="/" element={<ForgotPassword />} />
        <Route exact path="/" element={<ResetPassword />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
