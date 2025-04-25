console.log('Starting test...');

const path = require('path');
const dotenv = require('dotenv');

// Load .env.local file explicitly
const envPath = path.resolve(__dirname, '.env.local');
console.log('Loading .env.local from:', envPath);
dotenv.config({ path: envPath });

try {
  const { google } = require('googleapis');

  console.log('Environment variables:', {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL ? 'Present' : 'Missing',
    privateKey: process.env.GOOGLE_PRIVATE_KEY ? 'Present' : 'Missing',
    calendarId: process.env.CALENDAR_ID ? 'Present' : 'Missing'
  });

  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.CALENDAR_ID) {
    throw new Error('Missing required environment variables');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar']
  });

  console.log('Auth object created successfully');

  const calendar = google.calendar({ version: 'v3', auth });
  console.log('Calendar client created successfully');

  async function testCalendar() {
    try {
      console.log('Attempting to get calendar...');
      const response = await calendar.calendars.get({
        calendarId: process.env.CALENDAR_ID
      });
      console.log('Calendar response:', response.data);
    } catch (error) {
      console.error('Error in testCalendar:', error.message);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
    }
  }

  testCalendar().catch(console.error);

} catch (error) {
  console.error('Top-level error:', error);
} 