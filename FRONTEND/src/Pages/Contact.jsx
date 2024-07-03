import React, { useState } from 'react';
import axios from 'axios';
import { FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import bespoke1 from '../Components/Assests/bespoke1.jpg';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://inside-2-api.vercel.app/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
      <h1 className="text-4xl md:text-7xl font-extrabold mt-16 text-red-950">Contact Us</h1>
      <p className="text-lg mt-4 text-center text-gray-600">
        Over the years, we've built a strong presence offline and online, and are known for our credibility and reliability in delivering what we offer.
      </p>
      <div className="flex flex-wrap items-center justify-between mt-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={bespoke1} alt="Office" className="rounded-lg mb-6" />
          <div className="mb-6">
            <p>
              <FiPhone className="inline-block mr-2" />
              <a href="tel:08098590555" className="text-gray-800 hover:text-red-600">08098590555</a>
            </p>
            <p>
              <FiMail className="inline-block mr-2" />
              <a href="mailto:theinsideng@gmail.com" className="text-gray-800 hover:text-red-600">theinsideng@gmail.com</a>
            </p>
            <div className="flex mt-4">
              <a href="https://www.facebook.com/" className="mr-2" target="_blank" rel="noreferrer">
                <FiFacebook className="text-blue-800 hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/" className="mr-2" target="_blank" rel="noreferrer">
                <FiInstagram className="text-pink-600 hover:text-pink-400" />
              </a>
              <a href="https://www.linkedin.com/" className="mr-2" target="_blank" rel="noreferrer">
                <FiLinkedin className="text-blue-800 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required value={formData.name} onChange={handleChange} />
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required value={formData.email} onChange={handleChange} />
            <label htmlFor="phone" className="block mb-2">Phone Number</label>
            <input type="text" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required value={formData.phone} onChange={handleChange} />
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required value={formData.message} onChange={handleChange}></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-red-950 text-white py-2 px-4 rounded-lg hover:bg-red-800"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
