// AnimatedLine.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLine = () => {
  return (
    <motion.hr
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 md:col-span-2 lg:col-span-4 border-t border-gray-300"
    />
  );
};

export default AnimatedLine;
