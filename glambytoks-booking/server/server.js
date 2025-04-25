const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Google Calendar API Auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/calendar']
});

const calendar = google.calendar({ version: 'v3', auth });

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    calendarId: process.env.CALENDAR_ID ? 'Set' : 'Not Set',
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL ? 'Set' : 'Not Set',
    email: process.env.EMAIL ? 'Set' : 'Not Set'
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Check availability
app.post('/api/check-availability', async (req, res) => {
  try {
    const { date } = req.body;
    if (!date) return res.status(400).json({ error: 'Date is required' });

    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    res.json(slots);
  } catch (error) {
    console.error('Error in check-availability:', error);
    res.status(500).json({ error: 'Failed to check availability' });
  }
});

// Create booking
app.post('/api/create-booking', async (req, res) => {
  try {
    const { date, time, service, name, phone, email } = req.body;
    if (!date || !time || !service || !name || !phone || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const startTime = new Date(`${date}T${time}:00`);
    const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later

    const event = {
      summary: `Makeup Booking - ${service}`,
      description: `Client: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}`,
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'Africa/Lagos',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'Africa/Lagos',
      },
      attendees: [
        { email },
        { email: process.env.EMAIL }
      ],
    };

    const response = await calendar.events.insert({
      calendarId: process.env.CALENDAR_ID,
      resource: event,
      sendUpdates: 'all',
    });

    res.json({ 
      status: 'success', 
      message: 'Booking created successfully',
      event: response.data
    });
  } catch (error) {
    console.error('Error in create-booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Test Google Calendar
app.get('/api/test-calendar', async (req, res) => {
  try {
    const response = await calendar.calendarList.list();
    const testResponse = await calendar.events.list({
      calendarId: process.env.CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 1,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.json({ 
      status: 'success', 
      message: 'Calendar access verified',
      calendarId: process.env.CALENDAR_ID,
      events: testResponse.data.items
    });
  } catch (error) {
    console.error('Calendar test failed:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to access calendar',
      error: error.message
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log('Environment check:', {
    CALENDAR_ID: process.env.CALENDAR_ID ? 'Set' : 'Not Set',
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL ? 'Set' : 'Not Set',
    EMAIL: process.env.EMAIL ? 'Set' : 'Not Set'
  });
});
