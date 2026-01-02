import React from 'react';
import './css/Home.css';
import { useNavigate} from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      {/* NAV BAR */}
      <header className="navbar">
        <div className="logo">e-Salon Services</div>
        <nav>
          <a onClick={() => navigate('/')}>Home</a>
          {/* <a onClick={() => navigate('/about')}>About</a> */}
          <a onClick={() => navigate('/services')}>Services</a>
          <a onClick={() => navigate('/salons') } >Salon List</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          {/* SIGN IN BUTTON */}
         <a className="sign-in-btn" onClick={() => navigate('/login')}>Log in</a>
        </nav>
        
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Unisex Salon</h1>
          <p>Hair • Skin • Beauty • Relaxation</p>
          <a href="#" className="btn" onClick={() => navigate('/salons')}>Book Your Appointment</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Our Salon</h2>
            <p>
              Glow & Style Salon is a modern unisex salon offering professional
              grooming and beauty services for men and women. With experienced
              stylists, premium products, and a relaxing environment, we focus
              on enhancing your confidence and personal style.
            </p>
            <p>
              Our mission is to deliver high-quality salon services that make
              every client feel refreshed, confident, and satisfied.
            </p>
          </div>
          <div className="about-img">
            <img src="/images/about.jpg" alt="Salon Interior" />
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section" id="search">
        <h2>Find a Service or Salon</h2>
        <p>Search for services, salons, or locations near you</p>
        <form className="search-box">
          <input type="text" placeholder="Search service or salon name" />
          <input type="text" placeholder="Enter your location" />
          <button type="submit" onClick={()=>navigate('/salons')}>Search</button>
        </form>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
  <h2>Our Services</h2>

  <div className="services-grid">

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3" alt="Hair Styling" />
      <h3>Hair Styling</h3>
      <p>Haircuts, coloring, smoothing, straightening & styling.</p>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" alt="Skin Care" />
      <h3>Skin Care</h3>
      <p>Facials, clean-ups, detan treatments & skincare solutions.</p>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1487412912498-0447578fcca8" alt="Makeup" />
      <h3>Makeup</h3>
      <p>Party makeup, bridal makeup & professional looks.</p>
    </div>

    <div className="service-card">
      <img src="https://static.wixstatic.com/media/22cacc_2ecba2c9c34541c086f6782ceaf7ba7d~mv2.jpg/v1/fill/w_824,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/22cacc_2ecba2c9c34541c086f6782ceaf7ba7d~mv2.jpg" alt="Spa" />
      <h3>Spa & Relaxation</h3>
      <p>Hair spa, head massage, manicure & pedicure.</p>
    </div>

    <div className="see-services-container">
            <a onClick={()=> navigate('/services')} className="see-services-btn">See All Services</a>
          </div>

    

  </div>
</section>
      {/* <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Hair Styling</h3>
            <p>Haircuts, coloring, smoothing, straightening & styling.</p>
          </div>
          <div className="service-card">
            <h3>Skin Care</h3>
            <p>Facials, clean-ups, detan treatments & skincare solutions.</p>
          </div>
          <div className="service-card">
            <h3>Makeup</h3>
            <p>Party makeup, bridal makeup & professional looks.</p>
          </div>
          <div className="service-card">
            <h3>Spa & Relaxation</h3>
            <p>Hair spa, head massage, manicure & pedicure.</p>
          </div>
          
        </div>
      </section> */}

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <h2>Our Gallery</h2>
        <p className="gallery-subtitle">
          A glimpse of our salon work, styles, and happy moments
        </p>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Hair Styling" />
            <div className="overlay">Hair Styling</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Makeup" />
            <div className="overlay">Makeup</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Facial Treatment" />
            <div className="overlay">Skin Care</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Salon Interior" />
            <div className="overlay">Salon Interior</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Hair Spa" />
            <div className="overlay">Hair Spa</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Bridal Makeup" />
            <div className="overlay">Bridal Makeup</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Salon Interior" />
            <div className="overlay">Salon Interior</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Salon Interior" />
            <div className="overlay">Salon Interior</div>
          </div>
          <div className="gallery-item">
            <img src="/images/g1.jpg" alt="Salon Interior" />
            <div className="overlay">Salon Interior</div>
          </div>
        </div>
        <div className="see-more-container">
          <a href="#" className="see-more-btn">See More</a>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="register-shop" id="register-shop">
        <h2>Register Your Shop</h2>
        <p>Are you a salon owner? Join our network and get featured on Glow & Style.</p>
        <a className="btn" onClick={()=>navigate('/shop')} >Register Now</a>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <p>📍 2nd Floor, Main Market Road, Your City, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@glowandstylesalon.com</p>
          <p>🕒 Mon – Sun: 10:00 AM – 9:00 PM</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Glow & Style Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
