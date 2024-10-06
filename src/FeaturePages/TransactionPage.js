import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css'
import './css/UserPage.css'

function TransactionPage() {
  return (
    <>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </div>
    <div className="container">
        <div className="create-service">
          <h2>Create New Service</h2>
          <form>
            <label htmlFor="service-title">Service Title *</label>
            <input type="text" id="service-title" placeholder="Graphic Designing" />

            <label htmlFor="contact-number">Contact Number *</label>
            <div className="contact-input">
              <select>
                <option>+63</option>
              </select>
              <input type="text" id="contact-number" placeholder="0987 654 3212" />
            </div>
    
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="email@sample.com" />

            <label htmlFor="address">Address *</label>
            <input type="text" id="address" placeholder="Kahit, Saan, Sa, Earth" />

            <a href="#" className="service-contract">Create Service Agreement Contract *</a>

            <button type="submit" className="add-service-btn">Add Service</button>
          </form>
        </div>

        <div className="service-offers">
          <h2>Service Offers</h2>

          <div className="service-item">
            <p>Graphic Designing</p>
            <a href="#">View more</a>
          </div>

          <div className="service-item">
            <p>Website Development</p>
            <a href="#">View More</a>
          </div>

          <div className="service-details">
            <ul>
              <li><i className="icon-contract"></i> Service Agreement Contract</li>
              <li><i className="icon-phone"></i> (+63) 0987 654 3212</li>
              <li><i className="icon-email"></i> email@sample.com</li>
              <li><i className="icon-location"></i> Kahit, Saan, Sa, Earth</li>
            </ul>
            <button className="qr-btn">Generate QR Code</button>
          </div>

          <div className="service-item">
            <p>3D Printing / Modeling</p>
            <a href="#">View more</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionPage;
