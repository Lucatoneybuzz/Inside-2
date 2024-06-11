// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import img8 from '../Components/Assests/img8.jpg';
import img1 from '../Components/Assests/img1.jpg';
import MainFacts from '../Components/MainFacts/MainFacts';

const About = () => {
  const designer = {
    name: 'Designer Name',
    bio: 'Designer Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img1,
    socialHandles: {
      twitter: 'https://twitter.com/designer_handle',
      instagram: 'https://instagram.com/designer_handle',
      linkedin: 'https://linkedin.com/in/designer_handle',
    },
    email: 'designer@example.com',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, torto eu tempor fermentum, elit augue lacinia velit, nec accumsan lorem elit eget lectus. Ut tincidunt ligula ut odio lobortis, in ultricies purus lobortis.',
  };

  return (
    <div className="about-container">
      <h1 className="about-title text-6xl font-extrabold mt-12 text-center text-red-950">About Us</h1>
      <p className="about-summary text-lg mt-4 text-center text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, torto eu
        tempor fermentum, elit augue lacinia velit, nec accumsan lorem elit eget lectus. Ut
        tincidunt ligula ut odio lobortis, in ultricies purus lobortis.
      </p>
      <div className="home-decor-image-container mt-12 flex justify-center">
        <img src={img8} alt="Home Decor" className="w-full h-96 object-cover rounded-lg shadow-md" />
      </div>
      <MainFacts />

      {/* Designer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="designer-section mt-12 p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4 text-center  text-red-950">A Note From Our Head Designer</h2>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <motion.img
            src={designer.image}
            alt={designer.name}
            className="w-32 h-32 rounded-full mb-4 md:mr-6"
          />
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">{designer.name}</p>
            <p className="text-sm text-gray-600 mb-4">{designer.bio}</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href={designer.socialHandles.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 hover:text-blue-700" />
              </a>
              <a href={designer.socialHandles.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700" />
              </a>
              <a href={designer.socialHandles.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 hover:text-blue-900" />
              </a>
              <a href={`mailto:${designer.email}`}>
                <FaEnvelope className="text-gray-700 hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-lg mt-8">{designer.note}</p>
      </motion.div>
    </div>
  );
};

export default About;
