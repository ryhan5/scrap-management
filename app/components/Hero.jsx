"use client"
import { useState } from 'react';

export default function Hero() {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Mobile number submitted:', mobileNumber);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        {/* Left Section: Text and Illustration */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-green-700 mb-4">
            Sell your recyclables online with <span className="text-green-600">SmartScrap</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Paper - Plastics - Metals - Appliances <br />
            You can also download the SmartScrap App
          </p>
          {/* Illustration placeholder */}
          <img
            src="/images/recycling-illustration.png" // Placeholder image
            alt="Recycling"
            className="w-full md:w-3/4"
          />
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Schedule a Pickup
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={mobileNumber}
              onChange={handleInputChange}
              placeholder="+91"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Next
            </button>
            <p className="text-sm text-gray-500 text-center">
              Facing Problems? Call us at <a href="tel:+918595358613" className="text-green-600">+918595358613</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
