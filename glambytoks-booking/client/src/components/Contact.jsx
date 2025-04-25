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
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="tagline">We're here to help you look and feel your best</p>
        </div>

        <div className="contact-sections">
          <section className="contact-section">
            <h2><FaMapMarkerAlt /> Our Location</h2>
            <div className="address">
              <p>123 Oritoke Street,</p>
              <p>Off Orilabi Street,</p>
              <p>Kola Bus Stop,</p>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="contact-info">
              <p><FaPhone /> +234 812 345 6789</p>
              <p><FaEnvelope /> info@glambytoks.com</p>
              <p><FaClock /> Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </section>

          <section className="contact-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a 
                href="https://instagram.com/glambytoks" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span>@glambytoks</span>
              </a>
              <a 
                href="https://facebook.com/glambytoks" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
                <span>GlamByToks</span>
              </a>
              <a 
                href="https://tiktok.com/@glambytoks" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
                <span>@glambytoks</span>
              </a>
            </div>
          </section>
        </div>

        <section className="cta-section">
          <h2>Ready to Book Your Session?</h2>
          <p>
            Visit our location or connect with us on social media to schedule your appointment.
            We look forward to making you feel beautiful!
          </p>
          <div className="cta-buttons">
            <a href="/booking" className="cta-button">Book Now</a>
            <a href="tel:+2348123456789" className="cta-button secondary">Call Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 