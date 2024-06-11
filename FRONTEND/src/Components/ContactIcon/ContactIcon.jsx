// ContactIcon.js
import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { MdClose } from 'react-icons/md'; // Import MdClose icon
import logo from '../Assests/logo.png';
import './ContactIcon.css';
import { motion } from 'framer-motion';

function ContactIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact-icon">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className={`contact-card ${isOpen ? 'open' : ''}`}
      >
        {/* Close icon */}
        <div className="close-icon" onClick={toggleCard}>
          <MdClose />
        </div>
        <div className="agent-info">
          <img src={logo} alt="Agent" className="agent-image" />
          <div className="agent-details">
            <p className="agent-name">John Doe</p>
            <p className="agent-title">Customer Support</p>
          </div>
        </div>
        <div className="contact-info">
          <FaPhone />
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
        <div className="contact-buttons">
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://t.me/username" target="_blank" rel="noreferrer">
            <FaTelegram />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="icon"
        onClick={toggleCard}
      >
        <FaPhone />
      </motion.div>
    </div>
  );
}

export default ContactIcon;
