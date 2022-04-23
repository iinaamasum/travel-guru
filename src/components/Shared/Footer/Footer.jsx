import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/icons/logo.svg';

const Footer = () => {
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Booking', path: '/booking' },
    { id: 3, name: 'Destination', path: '/destination' },
    { id: 4, name: 'Blog', path: '/blog' },
    { id: 5, name: 'Contact', path: '/contact' },
  ];
  return (
    <div className="bg-black">
      <footer
        style={{ maxWidth: '1400px' }}
        className="text-gray-600 body-font mx-auto"
      >
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-slate-300"
          >
            <img src={logo} alt="" />
            <span className="ml-3 text-xl">Travel Helper</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 mr-0 md:mr-8">
            © 2022 All rights reserved —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @iinaamasum
            </a>
          </p>
          <span className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium items-center">
            {links.map((link) => (
              <Link
                className="block py-2 pr-4 pl-3 rounded md:bg-transparent text-white md:p-0 "
                to={link.path}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
