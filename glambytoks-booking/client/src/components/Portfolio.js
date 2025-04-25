import React, { useState } from 'react';
import './Portfolio.css';
import TypingText from './TypingText';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, src: '/images/portfolio/portfolio1.jpg', title: 'Studio Glam', category: 'Studio' },
    { id: 2, src: '/images/portfolio/portfolio2.jpg', title: 'Home Service', category: 'Home' },
    { id: 3, src: '/images/portfolio/portfolio3.jpg', title: 'Birthday Shoot', category: 'Special' },
    { id: 4, src: '/images/portfolio/portfolio4.jpg', title: 'White Wedding', category: 'Wedding' },
    { id: 5, src: '/images/portfolio/portfolio5.jpg', title: 'Court Wedding', category: 'Wedding' },
    { id: 6, src: '/images/portfolio/portfolio6.jpg', title: 'Engagement', category: 'Special' }
  ];

  const promotionalTexts = [
    "Professional Makeup Artistry at its Finest",
    "Transform Your Look with Expert Techniques",
    "Perfect for Weddings and Special Events",
    "Customized Makeup for Every Occasion",
    "Experience the GlamByToks Difference"
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleImageError = (e) => {
    console.error('Error loading image:', e.target.src);
    e.target.onerror = null;
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('placeholder-image');
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Discover the artistry and creativity behind GlamByToks</p>
        <TypingText 
          texts={promotionalTexts}
          typingSpeed={100}
          deletingSpeed={50}
          delay={2000}
        />
      </div>
      
      <div className="portfolio-grid">
        {portfolioItems.map((image) => (
          <div 
            key={image.id} 
            className="portfolio-item"
            onClick={() => handleImageClick(image)}
          >
            <div className="image-container">
              <img 
                src={image.src} 
                alt={image.title}
                className="portfolio-image"
                onError={handleImageError}
              />
            </div>
            <div className="image-info">
              <h3>{image.title}</h3>
              <span className="category">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
                onError={handleImageError}
              />
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio; 