const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const checkAvailability = async (date) => {
  try {
    console.log('Checking availability for date:', date);
    const response = await fetch(`${API_BASE_URL}/check-availability`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to check availability');
    }

    const slots = await response.json();
    console.log('Received slots:', slots);
    return slots;
  } catch (error) {
    console.error('Error checking availability:', error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    console.log('Creating booking:', bookingData);
    const response = await fetch(`${API_BASE_URL}/create-booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create booking');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};
