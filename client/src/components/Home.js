import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to GlamByToks</h1>
        <p>Your Premier Destination for Professional Makeup Services</p>
        <button className="cta-button">Book Now</button>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Bridal Makeup</h3>
            <p>Perfect your special day with our expert bridal makeup services</p>
          </div>
          <div className="service-card">
            <h3>Studio Glam</h3>
            <p>Professional makeup services in our state-of-the-art studio</p>
          </div>
          <div className="service-card">
            <h3>Home Service</h3>
            <p>Convenient makeup services in the comfort of your home</p>
          </div>
          <div className="service-card">
            <h3>Special Occasions</h3>
            <p>Perfect makeup for weddings, birthdays, and special events</p>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose GlamByToks?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-certificate"></i>
            <h3>Professional Artists</h3>
            <p>Our team consists of certified makeup artists with years of experience</p>
          </div>
          <div className="feature">
            <i className="fas fa-gem"></i>
            <h3>Premium Products</h3>
            <p>We use only high-quality, professional-grade makeup products</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Personalized Service</h3>
            <p>Every look is customized to match your unique style and preferences</p>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"GlamByToks transformed my wedding day look! The makeup lasted all day and I felt absolutely beautiful."</p>
            <span className="client-name">- Sarah M.</span>
          </div>
          <div className="testimonial-card">
            <p>"The attention to detail and professionalism is unmatched. I always leave feeling like a million bucks!"</p>
            <span className="client-name">- Jessica K.</span>
          </div>
          <div className="testimonial-card">
            <p>"Best makeup experience ever! The artists are so talented and really listen to what you want."</p>
            <span className="client-name">- Amanda T.</span>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <h2>Ready to Experience the GlamByToks Difference?</h2>
        <p>Book your appointment today and let us help you discover your true beauty potential.</p>
        <button className="cta-button">Schedule Your Appointment</button>
      </div>
    </div>
  );
};

export default Home; 