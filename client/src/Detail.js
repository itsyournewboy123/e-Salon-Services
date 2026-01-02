import React from 'react';
import './css/Detail.css';
import { useNavigate } from 'react-router-dom';


function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Glow & Style</div>
        <nav>
          <a onClick={() => navigate('/home')}>Home</a>
          <a onClick={() => navigate('/services')} >Services</a>
          <a onClick={() => navigate('/salons')} >Salons</a>
          <a onClick={() => navigate('/register')} >Register Shop</a>
          <a onClick={() => navigate('/login')} >Sign In</a>
        </nav>
      </header>

      {/* SALON HEADER */}
      <section className="salon-header">
        <div className="salon-header-content">
          <h1>Studio 29 Unisex Salon</h1>
          <p className="location">📍 Bengaluru, India</p>
          <p className="rating">⭐ 4.8 / 5 (320 reviews)</p>
          <p className="timing">🕒 Open: 10:00 AM – 9:00 PM</p>
        </div>

        <div className="salon-header-image">
          <img src="images/salon1.jpg" alt="Salon Image" />
        </div>
      </section>

      {/* SALON DETAILS */}
      <section className="salon-details">

        {/* LEFT */}
        <div className="details-left">
          <h2>About Salon</h2>
          <p>
            Studio 29 is a premium unisex salon offering professional hair,
            skin, and beauty services with expert stylists and high-quality products.
          </p>

          <h2>Services & Pricing</h2>

          <div className="service-item">
            <span>Haircut</span>
            <span>₹500 · 30 mins</span>
          </div>

          <div className="service-item">
            <span>Facial</span>
            <span>₹1,200 · 45 mins</span>
          </div>

          <div className="service-item">
            <span>Hair Spa</span>
            <span>₹1,500 · 60 mins</span>
          </div>

          <div className="service-item">
            <span>Bridal Makeup</span>
            <span>₹6,000 · 90 mins</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="details-right">
          <div className="info-box">
            <h3>Salon Information</h3>
            <p>📍 2nd Floor, Main Market Road, Bengaluru</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ studio29@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>Home Service</h3>
            <p className="home-yes">🏠 Available</p>
          </div>

          <a href="#" className="btn book-btn" onClick={() => navigate('/Book')} >Book Appointment</a>
          {/* <button 
  className="btn book-btn"
  onClick={() => navigate('/Book')}
>
  Book Appointment
</button> */}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Need Help?</h2>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@glowandstylesalon.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Glow & Style. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Detail;
