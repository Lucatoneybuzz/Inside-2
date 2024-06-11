import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import img1 from '../Assests/img1.jpg';
import img2 from '../Assests/img2.jpg';
import img3 from '../Assests/img3.jpg';
import img4 from '../Assests/img4.jpg';
import img5 from '../Assests/img5.jpg';
import img6 from '../Assests/img6.jpg';

const Hero = () => {
  return (
    <section className="py-1.5 relative mt-3">
      <div className="container mx-auto">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={5000} transitionTime={1000} className="h-h w-full">
          <div>
            <img src={img1} alt="Interior Design 1" className="h-h w-full object-cover " />
          </div>
          <div>
            <img src={img2} alt="Interior Design 2" className="h-h w-full object-cover " />
          </div>
          <div>
            <img src={img3} alt="Interior Design 3" className="h-h w-full object-cover " />
          </div>
          <div>
            <img src={img4} alt="Interior Design 4" className="h-h w-full object-cover " />
          </div>
          <div>
            <img src={img5} alt="Interior Design 5" className="h-h w-full object-cover" />
          </div>
          <div>
            <img src={img6} alt="Interior Design 6" className="h-h w-full object-cover " />
          </div>
        </Carousel>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-30"
        >
          <h1 className="font-extrabold text-7xl">...a reflection of you</h1>
          <p className="mt-4 text-lg">Discover the beauty of interior design</p>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-red-700 text-white rounded hover:bg-red-900 hover:shadow-lg"
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
