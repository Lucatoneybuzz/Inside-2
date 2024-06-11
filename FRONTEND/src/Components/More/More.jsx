import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Assests/img1.jpg';
import './More.css';

const More = () => {
  return (
    <div className="py-10 move">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3">
            <img className="more-img rounded-lg shadow-lg" src={img1} alt="Feature Image" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-h font-bold text-4xl md:text-6xl leading-tight mb-4  text-red-950">PERSONALIZED PERFECTION, INSIDE OUT</h1>
            <p className="text-p text-lg text-gray-700 mb-6">At The Inside Interiors, we redefine perfection, crafting spaces that are as unique as your fingerprint. From the layout to the finishing touches, we infuse every corner with your essence, ensuring that your home reflects your personality from the inside out.</p>
            <Link className="link bg-red-950 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" to="/more-info">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
