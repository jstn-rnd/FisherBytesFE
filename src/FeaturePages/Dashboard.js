import React from "react";
import './css/Dashboard.css';

// If you are using local images, import them like this
// import logo from './images/logo.png';
// import briefcaseIcon from './images/briefcase-icon.png';
// import cartIcon from './images/cart-icon.png';
// import receiptIcon from './images/receipt-icon.png';
// import clockIcon from './images/clock-icon.png';
// import userIcon from './images/user-icon.png';

function Dashboard() {
  return (
      <nav className="navbar">
        <div className="logo">
          {/* Use the imported logo if local, otherwise link directly to the image */}
          <img src="logo.png" alt="Logo" className="logo-img" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="nav-icons">
          <img src="briefcase-icon.png" alt="Briefcase" className="nav-icon" />
          <img src="cart-icon.png" alt="Cart" className="nav-icon" />
          <img src="receipt-icon.png" alt="Receipt" className="nav-icon" />
          <img src="clock-icon.png" alt="History" className="nav-icon" />
          <img src="user-icon.png" alt="User" className="nav-icon" />
        </div>
      </nav>
    );
}

export default Dashboard;
