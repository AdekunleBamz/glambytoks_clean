import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaGlobe } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 0.5rem;
  background-color: #2c3e50;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #34495e;
  color: #ecf0f1;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.25rem;
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #3498db;
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p style={{ margin: '0 0 0.25rem 0' }}>
        &copy; 2025 BAMZZSTUDIO. All rights reserved.
      </p>
      <SocialLinks>
        <SocialLink 
          href="mailto:bamzzstudio@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </SocialLink>
        <SocialLink 
          href="https://github.com/AdekunleBamz" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink 
          href="https://adekunlebamz.github.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Portfolio"
        >
          <FaGlobe />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
