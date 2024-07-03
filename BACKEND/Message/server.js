const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: 'https://inside-2-frontend.vercel.app', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Handle preflight requests
app.options('*', cors({
  origin: 'https://inside-2-frontend.vercel.app', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the contactRoutes
app.use('/', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
