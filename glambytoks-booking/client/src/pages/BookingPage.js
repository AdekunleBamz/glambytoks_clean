import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField, 
  Button,
  Box,
  Grid,
  CircularProgress,
  Alert,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { checkAvailability, createBooking } from '../services/calendarService';
import { WhatsApp } from '@mui/icons-material';
import config from '../config';
import './BookingPage.css';

const services = [
  { id: 1, name: 'Studio Glam', price: 15000 },
  { id: 2, name: 'Home Service', price: 30000 },
  { id: 3, name: 'Birthday Shoot', price: 30000 },
  { id: 4, name: 'White Wedding', price: 60000 },
  { id: 5, name: 'Court Wedding', price: 40000 },
  { id: 6, name: 'Engagement and Introduction', price: 40000 },
  { id: 7, name: 'Complete Bridal Package', price: 150000 }
];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async () => {
    try {
      setLoading(true);
      setError('');
      const slots = await checkAvailability(selectedDate);
      setAvailableSlots(slots);
    } catch (err) {
      setError('Failed to fetch available slots. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot || !formData.name || !formData.email || !formData.phone || !formData.service) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      await createBooking({
        ...formData,
        startTime: selectedSlot.start,
        endTime: selectedSlot.end
      });
      setSuccess('Booking successful! Check your email for confirmation.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: ''
      });
      setSelectedDate(null);
      setSelectedSlot(null);
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hi, I would like to book a makeup service.\n\n` +
      `Name: ${formData.name}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Date: ${selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected'}\n` +
      `Preferred Time: ${selectedSlot ? format(selectedSlot.start, 'h:mm a') : 'Not selected'}`
    );
    window.open(`https://wa.me/2347010171606?text=${message}`, '_blank');
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '2rem',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/booking-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth="md" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'white' }}>
            Book Your Makeup Session
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              mt: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              padding: 3,
              borderRadius: 2,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  label="Service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  {services.map((service) => (
                    <MenuItem key={service.id} value={service.name}>
                      {service.name} - ₦{service.price.toLocaleString()}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  disablePast
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>

              {loading ? (
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <CircularProgress />
                </Grid>
              ) : (
                selectedDate && (
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Available Time Slots
                    </Typography>
                    <Grid container spacing={2}>
                      {availableSlots.map((slot) => (
                        <Grid item xs={12} sm={6} md={4} key={slot.start}>
                          <Button
                            variant={selectedSlot?.start === slot.start ? 'contained' : 'outlined'}
                            fullWidth
                            onClick={() => handleSlotSelect(slot)}
                          >
                            {format(slot.start, 'h:mm a')}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                )
              )}

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  disabled={loading || !selectedSlot}
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  startIcon={<WhatsApp />}
                  onClick={handleWhatsAppBooking}
                >
                  Book via WhatsApp
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </LocalizationProvider>
    </div>
  );
};

export default BookingPage; 