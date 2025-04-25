import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypingContainer = styled.div`
  position: relative;
  display: inline-block;
  min-height: 2em;
`;

const Text = styled.span`
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #ff9a9e;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const TypingText = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isPaused) {
      if (isDeleting) {
        // Delete text
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 500);
          }
        }, deletingSpeed);
      } else {
        // Type text
        timeout = setTimeout(() => {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
          if (currentText === texts[currentIndex]) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, delay);
          }
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <TypingContainer>
      <Text>{currentText}</Text>
      <Cursor />
    </TypingContainer>
  );
};

export default TypingText; 