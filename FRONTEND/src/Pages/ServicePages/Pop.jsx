import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Pop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Pop Installation</h1>
      <p className="mb-4">
        Our Pop Installation services are designed to enhance the aesthetics of your space with stylish and modern
        designs. Whether you're looking to install a new pop ceiling or renovate an existing one, we've got you covered.
      </p>
      <img className="mb-4" src={bespoke1} alt="Pop Installation Example 1" />
      <p className="mb-4">
        Our team of skilled craftsmen will work with you to create a pop ceiling design that complements your
        space and meets your requirements. We use high-quality materials and ensure that the installation is done
        efficiently and with precision.
      </p>
      <img className="mb-4" src={bespoke2} alt="Pop Installation Example 2" />
      <p className="mb-4">
        Whether you need pop installation for your home, office, or commercial space, we've got the expertise and
        experience to deliver exceptional results. Contact us today to schedule a consultation and transform your
        space with our Pop Installation services.
      </p>
    </div>
  );
};

export default Pop;
