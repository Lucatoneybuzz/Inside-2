const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the contactRoutes
app.use('https://inside-2-frontend.vercel.app', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
