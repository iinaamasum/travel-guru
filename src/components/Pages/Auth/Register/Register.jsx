import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';

const Register = () => {
  return (
    <>
      <Nav>col</Nav>
      <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto mt-10 md:my-20">
        <h2 className="text-gray-900 text-3xl text-center font-medium title-font mb-5">
          Register
        </h2>
        <div className="mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Your Name"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Your Email"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Your Password"
          />
        </div>

        <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Register
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Register;
