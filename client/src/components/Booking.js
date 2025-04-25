import React, { useState, useEffect } from 'react';
import './Booking.css';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaTag } from 'react-icons/fa';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    { id: 1, name: 'Studio Glam', price: 15000 },
    { id: 2, name: 'Home Service', price: 30000 },
    { id: 3, name: 'Birthday Shoot', price: 50000 },
    { id: 4, name: 'White Wedding', price: 60000 },
    { id: 5, name: 'Court Wedding', price: 40000 },
    { id: 6, name: 'Engagement and Introduction', price: 40000 }
  ];

  useEffect(() => {
    const fetchTimeSlots = async () => {
      if (!selectedDate) return;

      setIsLoading(true);
      setMessage('');

      try {
        const formattedDate = selectedDate.toISOString().split('T')[0];

        const response = await fetch('http://localhost:5000/api/check-availability', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ date: formattedDate })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch time slots');
        }

        const slots = await response.json();
        setAvailableTimeSlots(slots);
        setSelectedTime('');
      } catch (error) {
        console.error('Error fetching time slots:', error);
        setMessage(`Error: ${error.message}. Please try again.`);
        setAvailableTimeSlots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTimeSlots();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedService || !name || !phone || !email) {
      setMessage('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const serviceName = services.find(s => s.id === parseInt(selectedService))?.name || '';

      const response = await fetch('http://localhost:5000/api/create-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: formattedDate,
          time: selectedTime,
          service: serviceName,
          name,
          phone,
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking');
      }

      await response.json();
      setMessage('Booking successful! We will contact you shortly to confirm.');
      setSelectedDate(null);
      setSelectedTime('');
      setSelectedService('');
      setName('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error creating booking:', error);
      setMessage(`Error: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = selectedDate && selectedTime && selectedService && name && phone && email;

  return (
    <div className="booking-container">
      <div className="booking-content">
        <h1>Book Your Session</h1>
        <p className="booking-tagline">Select your preferred date and time for your beauty session</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="service"><FaTag /> Select Service</label>
            <select
              id="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - ₦{service.price.toLocaleString()}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label><FaCalendarAlt /> Select Date</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                minDate={new Date()}
                renderInput={(params) => (
                  <TextField {...params} fullWidth required inputProps={{ ...params.inputProps, placeholder: 'Choose a date' }} />
                )}
              />
            </LocalizationProvider>
          </div>

          {selectedDate && (
            <div className="form-group">
              <label htmlFor="time"><FaClock /> Select Time</label>
              {isLoading ? (
                <div className="loading">Loading available slots...</div>
              ) : availableTimeSlots.length > 0 ? (
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                >
                  <option value="">Choose a time slot</option>
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              ) : (
                <div className="no-slots">No available slots for this date</div>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name"><FaUser /> Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone"><FaPhone /> Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email"><FaEnvelope /> Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          {message && (
            <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="submit-button" disabled={isSubmitting || isLoading || !isFormValid}>
            {isSubmitting ? 'Booking...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
