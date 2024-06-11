const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/contactController');

router.post('/contact', sendEmail);

module.exports = router;
