import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Electrical = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Electrical Fittings Services</h1>
      <p className="mb-4">
        Proper electrical fittings are essential for the safety and functionality of your home. Our electrical fittings
        services are designed to provide you with reliable and efficient electrical solutions to meet your needs.
      </p>
      <img className="mb-4" src={bespoke1} alt="Electrical Fittings Example 1" />
      <p className="mb-4">
        From installing new electrical fixtures to repairing existing wiring, our team of skilled electricians can handle
        a wide range of electrical projects. We use high-quality materials and adhere to safety standards to ensure that
        your electrical fittings are done right the first time.
      </p>
      <img className="mb-4" src={bespoke2} alt="Electrical Fittings Example 2" />
      <p className="mb-4">
        Whether you're looking to upgrade your home's electrical system or need repairs and maintenance, our electrical
        fittings services are the perfect choice for keeping your home safe and functional.
      </p>
      <p>
        Trust our team to provide you with reliable electrical solutions that meet your needs and exceed your expectations.
      </p>
    </div>
  );
};

export default Electrical;
