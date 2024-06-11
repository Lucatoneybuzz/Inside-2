import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';

const Bespoke = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bespoke Furniture Pieces</h1>
      <p className="mb-4">
        Our bespoke furniture pieces are crafted with precision and care to elevate your space. Each piece is designed
        to meet your unique style and functional requirements, ensuring that you get furniture that is both beautiful
        and practical.
      </p>
      <img className="mb-4" src={bespoke1} alt="Bespoke Furniture Example 1" />
      <p className="mb-4">
        Whether you're looking for custom-made tables, chairs, cabinets, or any other furniture pieces, our team of
        skilled craftsmen can bring your vision to life. We use high-quality materials and techniques to create
        furniture that is durable, functional, and stylish.
      </p>
      <img className="mb-4" src={bespoke2} alt="Bespoke Furniture Example 2" />
      <p className="mb-4">
        With our bespoke furniture pieces, you can create a space that is truly unique and reflective of your personal
        style. Let us help you transform your home with our custom furniture solutions.
      </p>
      <p>
        Contact us today to discuss your bespoke furniture needs and start designing furniture pieces that are tailored
        to your style and space.
      </p>
    </div>
  );
};

export default Bespoke;
