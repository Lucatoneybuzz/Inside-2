import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Assests/img1.jpg'



const Projects = ({ 
  image = img1 , 
  title = 'FLOORING' ,
  description = `Good design should be effortless, it should feel natural and never contrived. The client had a strong love for Craftsman influenced design. In addition, they wanted it to feel fresh, contemporary and new.`
  }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-base">{description}</p>
          <Link to="/portfolio" className="mt-4 block px-4 py-2 bg-red-950 text-white rounded hover:bg-red-800">View Gallery</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
