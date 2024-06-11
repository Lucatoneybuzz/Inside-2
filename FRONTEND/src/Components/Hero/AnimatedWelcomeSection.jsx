// AnimatedWelcomeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AnimatedWelcomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.5, // Trigger animation when section is 50% in view
  });

  return (
    <div ref={ref} className="bg-gradient-to-r from-red-500 to-red-950 py-8 px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Interior Design Studio</h1>
        <p className="text-lg md:text-xl mb-6">Experience the art of interior design with us</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-800 rounded-full py-2 px-8 font-semibold shadow-lg hover:shadow-md transition duration-300"
        ><Link to='/process'>
          Book a Consultation With Us</Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnimatedWelcomeSection;
