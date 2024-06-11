import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLine from '../Components/Process/AnimatedLine';

const servicesData = [
  {
    title: 'Property Finishing & Furnishing',
    description: 'Residential and commercial properties. From Consultation to Space planning, furniture & materials selection, project management, and seamless installation.',
    image: '/src/Components/Assests/img1.jpg',
  },
  {
    title: 'Procurement & Project Management',
    description: 'We provide personal interior shopping services and project management services.',
    image: '/src/Components/Assests/img2.jpg',
  },
  {
    title: 'Architectural Design/Construction',
    description: 'You’ve got the ideas, but need a roadmap to make them shine. Our detailed plans and specifications, along with professional 3D renderings, will ensure your project stays on track and exceeds expectations.',
    image: '/src/Components/Assests/img3.jpg',
  },
  {
    title: 'Bespoke Furniture Design And Production',
    description: 'Creating custom-made furniture tailored to the specific needs and requirements of individual clients.',
    image: '/src/Components/Assests/img4.jpg',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center  text-red-950">Our Services</h1>
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`service-section mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:col-start-2 lg:col-start-2' : ''}`}
        >
          <div
            className="service-image"
            style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
          ></div>
          <div className="service-details flex flex-col justify-center items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg mb-4">{service.description}</p>
            <a href="/process" className="text-blue-500 font-bold mt-4 hover:underline">Learn More</a>
          </div>
        </motion.div>
      ))}
      <AnimatedLine />
    </div>
  );
};

export default Services;
