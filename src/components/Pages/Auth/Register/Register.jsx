import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';
import SocialAuth from '../SocialAuth/SocialAuth';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
  const from = location.state?.from?.pathname || '/';

  const [createUserWithEmailAndPassword, userField, loadingField, errorField] =
    useCreateUserWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const handleEmail = (e) => {
    // console.log(e.target.value);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(e.target.value)) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: '' });
    } else {
      setUserInfo({ ...userInfo, email: '' });
      setErrors({ ...errors, emailError: 'Invalid email' });
    }
  };
  const handlePass = (e) => {
    const regexPass = /(?=.*[!#$%&?^*@~() "])/;
    if (regexPass.test(e.target.value)) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: '' });
    } else {
      setUserInfo({ ...userInfo, password: '' });
      setErrors({
        ...errors,
        passwordError: 'At least 6 char including a special character.',
      });
    }
  };

  const handleConfirmPass = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPasswordError: '' });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: '' });
      setErrors({ ...errors, confirmPasswordError: 'Password mismatched' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } else {
      setErrors({ ...errors, confirmPasswordError: 'Password mismatch' });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    }
  };

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
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Email"
              required
            />
            <p className="text-red-700 text-xs pt-1 pl-1">
              {errors?.emailError}
            </p>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={handlePass}
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Password"
              required
            />
            <p className="text-red-700 text-xs pt-1 pl-1">
              {errors?.passwordError}
            </p>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="confirmPassword"
              className="leading-7 text-sm text-gray-600"
            >
              Confirm Password
            </label>
            <input
              onChange={handleConfirmPass}
              type="password"
              name="confirm-password"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Confirm Password"
              required
            />
            <p className="text-red-700 text-xs pt-1 pl-1">
              {errors?.confirmPasswordError}
            </p>
          </div>
          <div className="">
            <p>
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-blue-500 underline"
              >
                Log in
              </Link>
            </p>
          </div>
          <input
            type="submit"
            className="cursor-pointer text-white w-full text-center bg-purple-500 border-0 py-2 px-8 mt-3 focus:outline-none hover:bg-purple-600 rounded text-lg"
            value="Register"
          />
        </form>
        <SocialAuth />
      </div>
      <Footer />
    </>
  );
};

export default Register;
