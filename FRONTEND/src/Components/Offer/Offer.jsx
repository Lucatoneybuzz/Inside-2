import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';

const Offer = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Interior Design',
      image: img1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Space Management',
      image: img2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Remodeling',
      image: img3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const handleClick = (id) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8  text-red-950">What We Offer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {services.map((service) => (
            <div key={service.id} className="md:w-1/3">
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleClick(service.id)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  {selectedService === service.id && (
                    <>
                      <p className="text-gray-600">{service.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Link to="/services" className="bg-red-950 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
            View All Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
