import React from 'react';

const MainFacts = () => {
  return (
    <div className="py-10 bg-gray-100 mt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8  text-red-950">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Projects Completed</h3>
            <p className="text-2xl font-semibold text-gray-700">100</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Happy Clients</h3>
            <p className="text-2xl font-semibold text-gray-700">500</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h3 className="text-3xl font-bold mb-4 text-gray-700">Designs Created</h3>
            <p className="text-2xl font-semibold text-gray-700">1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFacts;
