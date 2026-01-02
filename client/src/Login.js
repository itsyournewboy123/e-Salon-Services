import React from 'react';
import './css/Login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Glow & Style</div>
        <nav>
          <a onClick={() => navigate('/home')}>Home</a>
          <a onClick={() => navigate('/services')}>Services</a>
          <a onClick={() => navigate('/salons') }>Salons</a>
          
        </nav>
      </header>

      {/* LOGIN SECTION */}
      <section className="auth-container">

        {/* LEFT IMAGE SECTION */}
        <div className="auth-image">
          <div className="overlay">
            <h1>We show your skin, hair, and body the care they deserve.</h1>
            <p>Where Tranquility Meets Transformation.</p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="auth-form">
          <h2>Login</h2>
          <p className="subtitle">
            Welcome back! Please login to your account.
          </p>

          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>

          <p className="switch">
            Don’t have an account? <a onClick={() => navigate('/register')} >Register</a>
          </p>
        </div>

      </section>
    </div>
  );
}

export default Login;
