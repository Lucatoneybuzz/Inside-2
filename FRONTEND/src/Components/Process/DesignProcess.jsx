// DesignProcess.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the SVG file for the consultation icon
import ConsultationIcon from '../Assests/icons.png';

const DesignProcess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-6xl font-bold mb-4 text-red-950 mt-5">Design Process</h1>
      <p className="text-lg mb-4">
        Our design process involves understanding your needs, creating concepts, and delivering a
        customized interior design solution tailored to your preferences.
      </p>
      <p className="text-lg mb-4">
        To book a consultation with our design team, please fill out the{' '}
        <Link
          to="/form"
          className="text-red-500 hover:text-red-900"
        >
          Consultation Form
        </Link>
        .
      </p>
      {/* Add the SVG icon here */}
      <img src={ConsultationIcon} alt="Consultation" className="w-36 h-36 mb-8 mx-auto mt-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gray-100 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2 text-red-950">Step 1: Consultation</h2>
          <p>
            We start with an in-depth consultation to understand your vision, requirements, and
            budget.
          </p>
        </motion.div>
        {/* Add other steps here */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gray-100 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2  text-red-950">Step 2: Concept Creation</h2>
          <p>
            Based on the consultation, we create conceptual designs and present them to you for
            feedback.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gray-100 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2  text-red-950">Step 3: Design Development</h2>
          <p>
            Once the concept is approved, we develop detailed designs, including space planning and
            material selection.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gray-100 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-2  text-red-950">Step 4: Implementation</h2>
          <p>
            Finally, we manage the implementation process, working with contractors and suppliers to
            bring the design to life.
          </p>
        </motion.div>
      </div>
    </motion.div>
   
  );
};

export default DesignProcess;
