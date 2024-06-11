import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import bespoke1 from '../Components/Assests/bespoke1.jpg';
import { motion } from 'framer-motion';

const FAQs = () => {
  const faqsData = [
    {
      id: 1,
      question: 'Question 1?',
      answer: `Hiring an interior designer is an investment in saving you time and acquiring the peace of mind that your job is being executed professionally, 
      in a cost-effective manner and to your liking.
       Currently, there is not one industry standard for how interior designers bill for their professional time, 
       but there are three common formats - Hourly, Flat Fee and Cost Plus.
      `,
      imageUrl: bespoke1
    },
    {
      id: 2,
      question: 'Question 2?',
      answer: `
      When you are decorating your home we recognize that many projects need to be planned out in terms of affordability and convenience. Since we are a small company dedicated to our customers, we can devise a long-term decorating plan that will keep your initial costs low while still accomplishing your goals today. With our planning, we can help you avoid the add-on look of a poorly designed piecemeal project.
      
      `,
      imageUrl: bespoke1
    },
    {
      id: 3,
      question: 'Question 3?',
      answer: `
      Interior Design Studio makes hiring the design help you need affordable in two ways; Since we're a small and efficient company, we can offer hands-on service at reasonable rates compared to large organizations with high overhead. Secondly, Interior Design Studio does not mark up the cost of contractor labor, furniture or fixtures! Our clients pay only for our design time and work product; tools that you can use to continue your design efforts.
      
      `,
      imageUrl: bespoke1
    },
    {
      id: 4,
      question: 'Question 4?',
      answer: `
      We are happy to offer commercial clients trade discount based on a qualification process. We can also offer significant discounts for high quantity product orders and have the ability to work with varying procurement briefs. Please contact us to speak with one of our commercial managers.
      
      `,
      imageUrl: bespoke1
    },
    {
      id: 5,
      question: 'Question 5?',
      answer: `
      Of course. We are more than happy to visit your property at a time convenient for yourself and quote for the required works. If you don’t own the property and are looking for us to quote on work for a property you are looking at purchasing, this is chargeable at a fixed cost.
      
      `,
      imageUrl: bespoke1
    },
    // Add more FAQs here
  ];

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="about-title text-7xl font-extrabold mt-16 text-red-950">FAQs</h1>
      {faqsData.map(({ id, question, answer, imageUrl }) => (
        <div key={id} className="border-b border-gray-200 py-4 mt-10">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggle(id)}
          >
            <h2 className="text-lg font-medium">{question}</h2>
            {openId === id ? <FaMinus className="text-gray-500" /> : <FaPlus className="text-gray-500" />}
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openId === id ? 'auto' : 0, opacity: openId === id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <p className="text-gray-700">{answer}</p>
              {imageUrl && <img src={imageUrl} alt="Image" className="mt-4 rounded-lg w-64" />}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
