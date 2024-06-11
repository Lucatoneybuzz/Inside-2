import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import { motion } from 'framer-motion';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; 
import { IoMdClose } from 'react-icons/io';



const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg py-6 px-6 flex justify-between items-center"
    >
      <Link to='/' className="flex items-center">
        <img className='w-40' src={logo} alt="logo" />
      </Link>
      <div className="flex items-center">
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none" onClick={toggleSidebar}>
            <FiMenu size={24} />
            <span className="ml-1">Menu</span>
          </button>
        </div>
        <ul className='hidden md:flex space-x-6'>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/' className="nav-link hover:text-red-800" onClick={closeSidebar}>Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="relative group"
          >
            <Link to='/about' className="nav-link  hover:text-red-800" onClick={closeSidebar}>About</Link>
            <div className="fixed hidden group-hover:block bg-white shadow-md py-2 rounded-md mt-2 w-44 text-left ">
              <Link to='/services' className="dropdown-item block px-4 py-1.5 text-gray-800 hover:bg-gray-200  hover:text-red-800" onClick={closeSidebar}>Our Services</Link>
              <Link to='/testimonials' className="dropdown-item block px-4 py-1.5 text-gray-800 hover:bg-gray-200  hover:text-red-800" onClick={closeSidebar}>Testimonials</Link>
              <Link to='/process' className="dropdown-item block px-4 py-1.5 text-gray-800 hover:bg-gray-200  hover:text-red-800" onClick={closeSidebar}>Design Process</Link>
              <Link to='/portfolio' className="dropdown-item block px-4 py-1.5 text-gray-800 hover:bg-gray-200  hover:text-red-800" onClick={closeSidebar}>Portfolio</Link>
            </div>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/portfolio' className="nav-link  hover:text-red-800" onClick={closeSidebar}>Projects</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/faqs' className="nav-link  hover:text-red-800" onClick={closeSidebar}>FAQs</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to='/contact' className="nav-link  hover:text-red-800" onClick={closeSidebar}>Contact</Link>
          </motion.li>
        </ul>
      </div>
      {showSidebar && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar}></div>
                
          <div className={`fixed inset-y-0 right-0 w-64 bg-red-950 z-50 p-4 transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <button onClick={closeSidebar} className="absolute top-0 right-0 mt-4 mr-4 text-white">
          <IoMdClose size={30} />
        </button> 
            <ul className="space-y-4 text-white mt-6">
              <li><Link to='/' className="block" onClick={closeSidebar}>Home</Link></li>
              <li className="nav-link cursor-pointer"> <Link  to='/about'>About<li/></Link> 
              <FiChevronDown size={25} onClick={toggleAboutDropdown}  className="ml-1" />
              {showAboutDropdown && (
                <div className="absolute bg-white shadow-md py-2 rounded-md mt-2 w-44 text-left">
                  <Link to='/services' className="dropdown-item block px-4 py-1.5 text-red-950 hover:bg-gray-200" onClick={closeSidebar}>Our Services</Link>
                  <Link to='/testimonials' className="dropdown-item block px-4 py-1.5 text-red-950 hover:bg-gray-200" onClick={closeSidebar}>Testimonials</Link>
                  <Link to='/process' className="dropdown-item block px-4 py-1.5 text-red-950 hover:bg-gray-200" onClick={closeSidebar}>Design Process</Link>
                  <Link to='/portfolio' className="dropdown-item block px-4 py-1.5 text-red-950 hover:bg-gray-200" onClick={closeSidebar}>Portfolio</Link>
                </div>
              )}
              
              </li>
              <li><Link to='/portfolio' className="block" onClick={closeSidebar}>Projects</Link></li>
              <li><Link to='/faqs' className="block" onClick={closeSidebar}>FAQs</Link></li>
              <li><Link to='/contact' className="block" onClick={closeSidebar}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
