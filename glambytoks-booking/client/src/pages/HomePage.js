import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container, Box } from '@mui/material';
import styled from 'styled-components';

const HeroSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

const HeroContent = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HomePage = () => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 800,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            GLAMBYTOKS
          </Typography>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              color: 'white',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Elevate Your Beauty with Professional Makeup Artistry
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100'
                },
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              Book Your Glam Session
            </Button>
            <Button
              component={Link}
              to="/portfolio"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              View Portfolio
            </Button>
          </Box>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default HomePage; 