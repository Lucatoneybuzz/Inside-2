import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './InteriorImages.css';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import img6 from '../Assests/img6.jpg';

function InteriorImages() {
  const imgs = [
    { id: 0, value: img1 },
    { id: 1, value: img2 },
    { id: 2, value: img3 },
    { id: 3, value: img4 },
    { id: 4, value: img5 },
    { id: 5, value: img6 },
  ];

  const [val, setVal] = useState(0);

  const handleNext = () => {
    setVal((val + 1) % imgs.length);
  };

  const handlePrevious = () => {
    setVal((val - 1 + imgs.length) % imgs.length);
  };

  const handleThumbnailClick = (index) => {
    setVal(index);
  };

  return (
    <div className="main">
      <button className='btns' onClick={handlePrevious}>Previous</button>
      <motion.img
        key={val}
        src={imgs[val].value}
        alt="slide"
        height="300"
        width="500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <button className='btns' onClick={handleNext}>Next</button>
      <div className='flex_row'>
        {imgs.map((data, i) =>
          <div className="thumbnail" key={i}>
            <motion.img
              className={val === i ? "clicked" : ""}
              src={data.value}
              onClick={() => handleThumbnailClick(i)}
              alt="thumbnail"
              height="70"
              width="100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default InteriorImages;
