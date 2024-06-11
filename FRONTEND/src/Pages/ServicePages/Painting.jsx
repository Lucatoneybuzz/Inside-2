import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';

const Painting = () => {
  return (
    <div>
      <h1>Painting Services</h1>
      <p>
        As experienced interior designers, we understand the transformative power of paint. Whether you're looking
        to refresh your home's interior or completely change the look and feel of a space, our painting services are
        tailored to meet your needs.
      </p>
      <img src={bespoke1} alt="Painting Example 1" />
      <p>
        Our team of skilled painters takes pride in delivering high-quality workmanship and attention to detail. We
        work closely with our clients to understand their vision and bring it to life with the perfect color palette
        and finishes.
      </p>
      <img src={bespoke2} alt="Painting Example 2" />
      <p>
        From single rooms to entire homes, our painting services cover everything from surface preparation to the
        final coat. We use only the best quality paints and materials to ensure a finish that lasts and looks
        beautiful for years to come.
      </p>
      <p>
        Whether you're looking for a fresh coat of paint to brighten up a room or a complete color overhaul, our
        painting services are the perfect choice for your interior design needs.
      </p>
    </div>
  );
};

export default Painting;
