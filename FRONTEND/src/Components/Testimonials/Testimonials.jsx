import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Company X',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus ullamcorper magna, non feugiat risus faucibus a. Sed lacinia nisl vel mi ultrices, et consequat ipsum ultricies.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
      quote: 'In eget ligula neque. Integer efficitur convallis tempus. Sed varius, orci eu aliquam tincidunt, nisi justo rhoncus nulla, in sagittis felis eros at justo.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h1 className="text-5xl font-extrabold mt-32 ml-4 text-red-950">Testimonials</h1>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="mt-8 ml-4">
              <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <p className="text-gray-600">{testimonial.quote}</p>
          <p className="text-lg font-semibold">{testimonial.name}</p>
           <p className='text-xs text-gray-400'>{testimonial.role}</p>
          <hr className="mt-8 mb-8" />
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
