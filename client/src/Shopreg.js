import React from 'react';
import './css/Shop.css'; 
import { useNavigate } from 'react-router-dom';
function Shopreg() {

  const navigate =useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Glow & Style</div>
        <nav>
          <a onClick={() => navigate('/home')}>Home</a>
          <a onClick={() => navigate('/services')} >Services</a>
          <a onClick={() => navigate('/salons')} >Salons</a>
          
        </nav>
      </header>

      {/* SHOP REGISTRATION */}
      <section className="shop-register">
        <div className="register-box">
          <h2>Register Your Salon</h2>
          <p className="subtitle">
            Join our platform and grow your salon business
          </p>

          <form>

            {/* OWNER DETAILS */}
            <h3>Owner Details</h3>
            <input type="text" placeholder="Owner Name" required />
            <input type="email" placeholder="Owner Email" required />
            <input type="password" placeholder="Password" required />

            {/* CONTACT DETAILS */}
            <h3>Contact Details</h3>
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Contact Email" required />

            {/* SALON DETAILS */}
            <h3>Salon Details</h3>
            <input type="text" placeholder="Salon Name" required />
            <textarea placeholder="Salon Address" rows="3" required />

            {/* SERVICES */}
            <h3>Services Offered</h3>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Hair Styling</label>
              <label><input type="checkbox" /> Facial & Skin Care</label>
              <label><input type="checkbox" /> Makeup Services</label>
              <label><input type="checkbox" /> Hair Spa</label>
            </div>

            {/* HOME SERVICE */}
            <h3>Home Service Available?</h3>
            <div className="radio-group">
              <label><input type="radio" name="homeService" /> Yes</label>
              <label><input type="radio" name="homeService" /> No</label>
            </div>

            {/* SUBMIT */}
            <button type="submit">Submit Registration</button>

          </form>
        </div>
      </section>

    </div>
  );
}

export default Shopreg;
