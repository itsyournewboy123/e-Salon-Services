import React from 'react';
import './css/Salons.css';
import { useNavigate } from 'react-router-dom';
function SalonList() {
  const navigate = useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Glow & Style</div>
        <nav>
          <a onClick={() => navigate('/home')}>Home</a>
          <a onClick={() => navigate('/services')}>Services</a>
         
          
          <a  onClick={() => navigate('/login')}>Log in</a>
        </nav>
      </header>

      {/* PAGE TITLE */}
      <section className="page-title">
        <h1>Available Salons</h1>
        <p>Discover the best salons near you</p>
      </section>

      {/* SALON LIST */}
      <section className="salon-list">

        {/* CARD */}
        <div className="salon-card">
          <img src="images/salon1.jpg" alt="Salon Image" />
          <div className="salon-info">
            <h3>Studio 29 Unisex Salon</h3>
            <p className="city">📍 Bengaluru</p>
            <p className="rating">⭐ 4.8 / 5</p>
            <p className="home-service">🏠 Home Service Available</p>
            <a className="btn" onClick={() =>navigate('/detail')} >View Details</a>
          </div>
        </div>

        {/* CARD */}
        <div className="salon-card">
          <img src="images/salon2.jpg" alt="Salon Image" />
          <div className="salon-info">
            <h3>Glow Beauty Lounge</h3>
            <p className="city">📍 Mumbai</p>
            <p className="rating">⭐ 4.5 / 5</p>
            <p className="home-service no">❌ Home Service Not Available</p>
           <a className="btn" onClick={() =>navigate('/detail')} >View Details</a>
          </div>
        </div>

        {/* CARD */}
        <div className="salon-card">
          <img src="images/salon1.jpg" alt="Salon Image" />
          <div className="salon-info">
            <h3>Studio 29 Unisex Salon</h3>
            <p className="city">📍 Bengaluru</p>
            <p className="rating">⭐ 4.8 / 5</p>
            <p className="home-service">🏠 Home Service Available</p>
             <a className="btn" onClick={() =>navigate('/detail')} >View Details</a>
          </div>
        </div>

        {/* CARD */}
        <div className="salon-card">
          <img src="images/salon1.jpg" alt="Salon Image" />
          <div className="salon-info">
            <h3>Studio 29 Unisex Salon</h3>
            <p className="city">📍 Bengaluru</p>
            <p className="rating">⭐ 4.8 / 5</p>
            <p className="home-service">🏠 Home Service Available</p>
             <a className="btn" onClick={() =>navigate('/detail')} >View Details</a>
          </div>
        </div>

        {/* CARD */}
        <div className="salon-card">
          <img src="images/salon1.jpg" alt="Salon Image" />
          <div className="salon-info">
            <h3>Studio 29 Unisex Salon</h3>
            <p className="city">📍 Bengaluru</p>
            <p className="rating">⭐ 4.8 / 5</p>
            <p className="home-service">🏠 Home Service Available</p>
             <a className="btn" onClick={() =>navigate('/detail')} >View Details</a>
          </div>
        </div>

      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>📍 Main Market Road, Your City, India</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ info@glowandstylesalon.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Glow & Style. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default SalonList;
