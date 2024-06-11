import React from 'react';
import bespoke1 from '../../Components/Assests/bespoke1.jpg';
import bespoke2 from '../../Components/Assests/bespoke2.jpg';


const Shopping = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Personal Interior Shopping</h1>
      <p className="mb-4">
        Our personal interior shopping service is designed to help you create a beautiful and functional living space
        without the stress of shopping for furniture and decor items yourself.
      </p>
      <img className="mb-4" src={bespoke1} alt="Personal Interior Shopping Example 1" />
      <p className="mb-4">
        Our experienced interior designers will work with you to understand your style preferences, budget, and
        requirements. Based on this information, we will curate a selection of furniture, decor items, and accessories
        that suit your taste and complement your space.
      </p>
      <img className="mb-4" src={bespoke2} alt="Personal Interior Shopping Example 2" />
      <p className="mb-4">
        Once you approve the selection, we will take care of purchasing and delivering the items to your doorstep. You
        can sit back and relax while we transform your space into a place that reflects your personality and lifestyle.
      </p>
      <p>
        Contact us today to schedule a personal interior shopping consultation and let us help you create the home of
        your dreams.
      </p>
    </div>
  );
};

export default Shopping;
