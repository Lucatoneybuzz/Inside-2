import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Window = () => {
  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Window Treatment</h1>
      <p className="mb-6">
        Window treatments are an essential part of interior design, adding both style and functionality to a space. From curtains and drapes to blinds and shades, the right window treatment can enhance the aesthetic appeal of a room while also providing privacy and light control.
      </p>
      <img src={bespoke1} alt="Window Treatment Image 1" className="mb-4 rounded-lg shadow-lg" />
      <p className="mb-6">
        At [Your Interior Design Company Name], we offer a wide range of window treatment options to suit your needs and style preferences. Whether you're looking for elegant curtains for your living room or sleek blinds for your office, we have the perfect solution for you.
      </p>
      <img src={bespoke2} alt="Window Treatment Image 2" className="mb-4 rounded-lg shadow-lg" />
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Custom curtains and drapes</li>
        <li>Blinds and shades installation</li>
        <li>Window valances and cornices</li>
        <li>Motorized window treatments</li>
        <li>Energy-efficient window solutions</li>
      </ul>
      <img src={bespoke1} alt="Window Treatment Image 3" className="mb-4 rounded-lg shadow-lg" />
      <p>
        Our team of experienced designers will work with you to create the perfect window treatments for your home or office. Contact us today to schedule a consultation and transform your space with beautiful window treatments.
      </p>
    </div>
  );
};

export default Window;
