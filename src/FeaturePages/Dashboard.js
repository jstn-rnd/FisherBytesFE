import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}

export default Dashboard;