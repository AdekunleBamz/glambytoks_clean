import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1>Welcome to GlamByToks</h1>
          <p className="tagline">Where Beauty Meets Elegance</p>
        </div>

        <div className="about-sections">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a passion for beauty and a commitment to excellence, GlamByToks has been transforming
              clients' looks and confidence since our inception. Our journey began with a simple mission: to make
              everyone feel beautiful in their own skin.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of beauty services tailored to your needs:</p>
            <ul>
              <li>Studio Glam</li>
              <li>Home Service</li>
              <li>Birthday Shoot</li>
              <li>White Wedding</li>
              <li>Court Wedding</li>
              <li>Engagement and Introduction</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Promise</h2>
            <p>
              At GlamByToks, we believe in using only the highest quality products and techniques to ensure
              your makeup not only looks stunning but also feels comfortable and lasts all day. Our team of
              experienced professionals is dedicated to creating looks that enhance your natural beauty while
              reflecting your personal style.
            </p>
          </section>
        </div>

        <section className="cta-section">
          <h2>Ready to Experience the GlamByToks Difference?</h2>
          <p>
            Book your appointment today and let us help you achieve the perfect look for any occasion.
            Your journey to enhanced beauty starts here.
          </p>
          <a href="/booking" className="cta-button">Book Your Session</a>
        </section>
      </div>
    </div>
  );
};

export default About;
