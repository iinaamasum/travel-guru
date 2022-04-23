import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <>
      <Nav>col</Nav>
      <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto mt-10 md:my-20">
        <h2 className="text-gray-900 text-3xl text-center font-medium title-font mb-5">
          Log In
        </h2>

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
        <div className="flex mb-5 text-sm justify-between">
          <div className="flex justify-center items-center">
            <input
              className="mr-3 cursor-pointer"
              type="checkbox"
              name=""
              id=""
            />
            <p>Remember Me</p>
          </div>
          <div className="">
            <p>
              Forgot Password?{' '}
              <span className="underline text-blue-500 cursor-pointer font-bold">
                Reset Now
              </span>
            </p>
          </div>
        </div>
        <div className="mb-1">
          <p>
            Don't have an account?{' '}
            <span className="font-semibold text-blue-500 underline">
              Create account
            </span>
          </p>
        </div>
        <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Log In
        </button>

        <SocialAuth />
      </div>
      <Footer />
    </>
  );
};

export default Login;
