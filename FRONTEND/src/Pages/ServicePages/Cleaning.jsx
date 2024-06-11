import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Cleaning = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cleaning Services</h1>
      <p className="mb-4">
        Our cleaning services are designed to provide you with a clean and healthy living environment. We offer a range
        of cleaning services to meet your needs, from regular house cleaning to deep cleaning and sanitization.
      </p>
      <img className="mb-4" src={bespoke1} alt="Cleaning Services Example 1" />
      <p className="mb-4">
        Our team of professional cleaners is trained to use safe and effective cleaning techniques and products. We pay
        attention to detail and ensure that every corner of your home or office is thoroughly cleaned and sanitized.
      </p>
      <img className="mb-4" src={bespoke2} alt="Cleaning Services Example 2" />
      <p className="mb-4">
        Whether you need a one-time cleaning service or regular cleaning maintenance, we've got you covered. Our
        cleaning services are flexible and can be tailored to suit your schedule and requirements.
      </p>
      <p>
        Contact us today to schedule a cleaning service and enjoy a clean and healthy living or working environment.
      </p>
    </div>
  );
};

export default Cleaning;
