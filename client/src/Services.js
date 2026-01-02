import React from 'react';
import './css/Services.css';

function Services() {
  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Glow & Style</div>
        <nav>
          <a href="/Home">Home</a>
          <a href="/Services" className="active">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="/Shopreg">Register Shop</a>
        </nav>
      </header>

      {/* PAGE HERO */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Premium care for Men & Women</p>
      </section>

      {/* MEN SERVICES */}
      <section className="services-section">
        <h2>Men Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Haircut & Styling</h3>
            <p>Trendy haircuts & professional styling</p>
          </div>
          <div className="service-card">
            <h3>Beard Grooming</h3>
            <p>Beard trimming, shaping & spa</p>
          </div>
          <div className="service-card">
            <h3>Hair Color</h3>
            <p>Global color, highlights & grey coverage</p>
          </div>
          <div className="service-card">
            <h3>Facial</h3>
            <p>Skin rejuvenation & cleansing</p>
          </div>
        </div>
      </section>

      {/* WOMEN SERVICES */}
      <section className="services-section dark">
        <h2>Women Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Haircut & Styling</h3>
            <p>Layer cuts, blow-dry & hair styling</p>
          </div>
          <div className="service-card">
            <h3>Hair Treatments</h3>
            <p>Smoothening, keratin & spa</p>
          </div>
          <div className="service-card">
            <h3>Facial & Cleanup</h3>
            <p>Glow facials & skin treatments</p>
          </div>
          <div className="service-card">
            <h3>Makeup</h3>
            <p>Party, bridal & engagement makeup</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Glow & Style Salon. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Services;
//we can write on div section the  on click option
//a page for diffrent services
