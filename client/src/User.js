import React from 'react';
import './css/Login.css'; // Import CSS if needed
import { useNavigate } from 'react-router-dom';

function User() {
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
          <a href="gallery.html">Gallery</a>
          <a href="contact.html">Contact</a>
        </nav>
      </header>

      {/* REGISTER SECTION */}
      <section className="auth-container">

        {/* LEFT IMAGE */}
        <div className="auth-image">
          <div className="overlay">
            <h1>Join Glow & Style</h1>
            <p>Be part of a premium salon experience.</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="auth-form">
          <h2>Register</h2>
          <p className="subtitle">
            Create your account to get started
          </p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Register</button>
          </form>

          <p className="switch">
            Already have an account? <a onClick={() => navigate('/login')}>Login</a>
          </p>
        </div>

      </section>
    </div>
  );
}

export default User;
