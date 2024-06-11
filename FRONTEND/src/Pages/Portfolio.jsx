import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import { paintingData, flooringData, BespokeData, ElecData } from '../Components/Assests/project';
import './Portfolio.css'

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  let photos = [];
  if (currentCategory === 'painting') {
    photos = paintingData.map((item) => ({ ...item, tags: ['painting'] }));
  } else if (currentCategory === 'flooring') {
    photos = flooringData.map((item) => ({ ...item, tags: ['flooring'] }));
  } else if (currentCategory === 'bespoke') {
    photos = BespokeData.map((item) => ({ ...item, tags: ['bespoke'] }));
  } else if (currentCategory === 'elec') {
    photos = ElecData.map((item) => ({ ...item, tags: ['elec'] }));
  } else {
    photos = [
      ...paintingData.map((item) => ({ ...item, tags: ['painting'] })),
      ...flooringData.map((item) => ({ ...item, tags: ['flooring'] })),
      ...BespokeData.map((item) => ({ ...item, tags: ['bespoke'] })),
      ...ElecData.map((item) => ({ ...item, tags: ['elec'] })),
    ];
  }

  return (
    <div className="container mx-auto p-4 mt-16">
       <h1 className="text-7xl font-extrabold my-16 ml-4 text-red-950">Our Portfolio</h1>
      <div className="flex space-x-4 mb-4">
      <button
          className={`px-4 py-2 rounded ${
            currentCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setCurrentCategory(null)}
        >
          Show All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentCategory === 'painting' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleCategoryClick('painting')}
        >
          Painting
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentCategory === 'flooring' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleCategoryClick('flooring')}
        >
          Flooring
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentCategory === 'bespoke' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleCategoryClick('bespoke')}
        >
          Bespoke Furniture 
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentCategory === 'elec' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => handleCategoryClick('elec')}
        >
          Electrical Fittings
        </button>
        
      </div>
      <Gallery photos={photos} className="gallery" />
    </div>
  );
};

export default Portfolio;
