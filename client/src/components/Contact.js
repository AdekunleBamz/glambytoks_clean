import React from 'react';
import './Contact.css';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTiktok
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/contact-bg.jpg')` }}>
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="tagline">Get in touch with us for all your makeup needs</p>
        </div>

        <div className="contact-boxes">
          <div className="contact-box">
            <h2>Our Information</h2>
            <div className="contact-details">
              <p><FaMapMarkerAlt /> Shop B-12 G-Royal Plaza, Casso bus stop, Alagbado Lagos Nigeria</p>
              <p><FaPhone /> +2347010171606</p>
              <p><FaEnvelope /> {process.env.REACT_APP_EMAIL}</p>
              <p><FaClock /> {process.env.REACT_APP_HOURS}</p>
            </div>
          </div>

          <div className="contact-box">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a 
                href="https://instagram.com/glam_by_toks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com/glam_by_toks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://tiktok.com/@glam_by_toks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="map-container">
          {/* Add your Google Maps embed or map component here */}
        </div>

        <section className="cta-section">
          <h2>Ready to Book Your Session?</h2>
          <p>
            Visit our location or connect with us on social media to schedule your appointment.
            We look forward to making you feel beautiful!
          </p>
          <div className="cta-buttons">
            <a href="/booking" className="cta-button">Book Now</a>
            <a href="tel:+2347010171606" className="cta-button secondary">Call Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 