import React from "react";

function Book() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Studio29</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/book-appointment" className="active">
            Book Appointment
          </a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* BOOK APPOINTMENT FORM */}
      <section className="auth-container">
        <div className="auth-image">
          <div className="overlay">
            <h1>Studio29</h1>
            <p>Book your appointment easily and quickly</p>
          </div>
        </div>

        <div className="auth-form">
          <h2>Book Appointment</h2>
          <p className="subtitle">
            Fill the details below to reserve your slot
          </p>

          <form>
            {/* Customer Info */}
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />

            {/* Salon & Service */}
            <select required>
              <option value="">Select Salon</option>
              <option>Studio29 - Downtown</option>
              <option>Studio29 - Uptown</option>
            </select>

            <select required>
              <option value="">Select Service</option>
              <option>Haircut</option>
              <option>Facial</option>
              <option>Manicure</option>
              <option>Pedicure</option>
            </select>

            <select>
              <option value="">Preferred Stylist (Optional)</option>
              <option>Any Available</option>
              <option>Stylist A</option>
              <option>Stylist B</option>
            </select>

            {/* Date & Time */}
            <input type="date" required />
            <input type="time" required />

            {/* Notes & Promo */}
            <input type="text" placeholder="Special Requests / Notes" />
            <input type="text" placeholder="Promo Code (Optional)" />

            {/* Terms */}
            <div className="switch">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the terms and cancellation policy
              </label>
            </div>

            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Book;
