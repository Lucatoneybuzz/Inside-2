import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Flooring = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Flooring Services</h1>
      <p className="mb-4">
        Your floors play a crucial role in defining the look and feel of your home. Our flooring services are designed
        to help you create a space that reflects your style and enhances the overall aesthetic of your home.
      </p>
      <img className="mb-4" src={bespoke1} alt="Flooring Example 1" />
      <p className="mb-4">
        Whether you prefer the timeless elegance of hardwood, the durability of laminate, or the versatility of
        vinyl, we offer a wide range of flooring options to suit your needs and budget. Our team of experts will work
        with you to choose the perfect flooring material and design for your space.
      </p>
      <img className="mb-4" src={bespoke2} alt="Flooring Example 2" />
      <p className="mb-4">
        Our professional installation team ensures that your new flooring is installed with precision and care,
        leaving you with a beautiful and durable finish. We take pride in our workmanship and strive to exceed your
        expectations with every project.
      </p>
      <p>
        Whether you're looking to upgrade your home's flooring or need repairs and maintenance, our flooring services
        are the perfect choice for achieving the look you desire.
      </p>
    </div>
  );
};

export default Flooring;
