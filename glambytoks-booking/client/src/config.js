const config = {
  contact: {
    phone: process.env.REACT_APP_PHONE_NUMBER,
    whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER,
    email: process.env.REACT_APP_EMAIL
  },
  social: {
    instagram: process.env.REACT_APP_INSTAGRAM,
    tiktok: process.env.REACT_APP_TIKTOK,
    facebook: process.env.REACT_APP_FACEBOOK
  },
  business: {
    name: 'GLAMBYTOKS',
    address: process.env.REACT_APP_ADDRESS,
    hours: process.env.REACT_APP_HOURS
  }
};

export default config; 