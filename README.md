# GlamByToks Booking System

A professional makeup booking system for GlamByToks.

## Project Structure

```
/
├── client/           # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── server/           # Node.js backend
│   ├── server.js
│   └── package.json
└── package.json      # Root package.json
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   npm run install-client
   npm run install-server
   ```

2. Development:
   ```bash
   npm run dev
   ```

3. Production:
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

Create `.env` files in both client and server directories with the necessary environment variables.

## Technologies Used

- Frontend: React, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT 