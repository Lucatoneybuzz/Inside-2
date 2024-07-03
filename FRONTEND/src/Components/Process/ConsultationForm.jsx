// ConsultationForm.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ConsultationForm = () => {


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Consultation Form</h1>
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactNumber"
            type="tel"
            placeholder="Contact Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactEmail">
            Contact Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactEmail"
            type="email"
            placeholder="Contact Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectAddress">
            Full Project Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectAddress"
            type="text"
            placeholder="Full Project Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectType">
            What type of Project?
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectType"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDetails">
    What does your project entail?
  </label>
  <div className="flex flex-wrap">
    <label className="inline-flex items-center mr-4 mb-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">Finishing & Furnishings</span>
    </label>
    <label className="inline-flex items-center mr-4 mb-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">Remodeling & Renovation</span>
    </label>
    <label className="inline-flex items-center mr-4 mb-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">3D Design</span>
    </label>
    <label className="inline-flex items-center mr-4 mb-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">Interior Shopping</span>
    </label>
    <label className="inline-flex items-center mb-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">Furniture Production</span>
    </label>
  </div>
</div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
            Please describe what you need us to do
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectDescription"
            placeholder="Please describe what you need us to do"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeline">
            What is the timeline for this project?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="timeline"
            type="text"
            placeholder="Timeline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="involvement">
            How involved do you wish to be in this project?
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="involvement"
          >
            <option value="very-involved">Very Involved</option>
            <option value="involved">Involved</option>
            <option value="minimally-involved">Minimally Involved</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="howHeard">
            How did you hear about us?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="howHeard"
            type="text"
            placeholder="How did you hear about us?"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="consideration">
            What made you consider us?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="consideration"
            type="text"
            placeholder="What made you consider us?"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectCompletion">
            On completion of this form, our project manager would be dispatched to consult with you regarding the fee to pay for consultation, project specification, as well as to assess the project space
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectTimeline">
            PROJECT TIMELINE:
          </label>
          <p className="text-gray-700">Timeline differs for each project and its location. Minimum of 6 weeks for completion of project.</p>
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default ConsultationForm;
