import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { LocationOn, Home, Celebration, Church } from '@mui/icons-material';

const PageSection = styled(Box)`
  padding: 6rem 0;
  background-color: ${props => props.theme.palette.background.default};
`;

const PriceCard = styled(Paper)`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Price = styled(Typography)`
  color: ${props => props.theme.palette.secondary.main};
  font-weight: 700;
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const PortfolioSection = styled(Box)`
  padding: 6rem 0;
  background-color: ${props => props.theme.palette.background.paper};
`;

const IconWrapper = styled(Box)`
  margin-bottom: 1rem;
  color: ${props => props.theme.palette.secondary.main};
  
  .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Studio Glam',
      price: '₦15,000',
      description: 'Professional makeup services in our state-of-the-art studio.',
      features: [
        'Professional makeup application',
        'High-quality products',
        'Comfortable studio environment',
        'Expert makeup artists'
      ]
    },
    {
      id: 2,
      title: 'Home Service',
      price: '₦30,000 - ₦50,000',
      description: 'Convenient makeup services in the comfort of your home.',
      features: [
        'Travel to your location',
        'Full makeup kit',
        'Professional service',
        'Flexible scheduling'
      ]
    },
    {
      id: 3,
      title: 'Birthday Shoot',
      price: '₦50,000',
      description: 'Perfect makeup for your special birthday celebration.',
      features: [
        'Full face makeup',
        'Long-lasting wear',
        'Photo-ready finish',
        'Touch-up kit included'
      ]
    },
    {
      id: 4,
      title: 'White Wedding',
      price: '₦60,000',
      description: 'Complete bridal makeup package for your white wedding.',
      features: [
        'Full bridal makeup',
        'Trial session included',
        'Long-lasting wear',
        'Touch-up kit'
      ]
    },
    {
      id: 5,
      title: 'Court Wedding',
      price: '₦40,000',
      description: 'Elegant makeup for your court wedding ceremony.',
      features: [
        'Full face makeup',
        'Natural look',
        'Long-lasting wear',
        'Touch-up kit'
      ]
    },
    {
      id: 6,
      title: 'Engagement and Introduction',
      price: '₦40,000 - ₦50,000',
      description: 'Beautiful makeup for your engagement and introduction ceremonies.',
      features: [
        'Full face makeup',
        'Traditional look',
        'Long-lasting wear',
        'Touch-up kit'
      ]
    }
  ];

  // Replace these with your actual portfolio images
  const portfolioImages = [
    {
      img: 'https://example.com/image1.jpg',
      title: 'Bridal Makeup',
    },
    {
      img: 'https://example.com/image2.jpg',
      title: 'Glamour Look',
    },
    // Add more portfolio images
  ];

  return (
    <>
      <PageSection>
        <Container>
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Services & Pricing
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <PriceCard elevation={3}>
                  <IconWrapper>
                    {service.icon}
                  </IconWrapper>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Price variant="h3">
                    {service.price}
                  </Price>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 2, mb: 3 }}>
                    {service.features.map((item, i) => (
                      <Typography 
                        key={i} 
                        variant="body1" 
                        sx={{ 
                          py: 0.5,
                          borderBottom: i !== service.features.length - 1 ? '1px solid' : 'none',
                          borderColor: 'grey.200'
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      href="/booking"
                    >
                      Book Now
                    </Button>
                  </Box>
                </PriceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageSection>

      <PortfolioSection>
        <Container>
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Portfolio
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            align="center" 
            sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
          >
            Browse through our collection of stunning makeup transformations and get inspired for your next look.
          </Typography>
          
          {/* Replace with your actual portfolio images */}
          <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={3}
            rowHeight={300}
            gap={24}
          >
            {portfolioImages.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </PortfolioSection>
    </>
  );
};

export default ServicesPage; 