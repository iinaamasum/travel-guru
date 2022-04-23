import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';
import SocialAuth from '../SocialAuth/SocialAuth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, userField, loadingField, errorField] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    othersError: '',
  });

  const handleEmail = (e) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(e.target.value)) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: '' });
    } else {
      setUserInfo({ ...userInfo, email: '' });
      setErrors({ ...errors, emailError: 'Invalid Email' });
    }
  };

  const handlePass = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    const errors = errorField || error;
    if (errors?.message.includes('auth/invalid-email')) {
      toast.error('Invalid Email Entered!!!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else if (errors?.message.includes('auth/wrong-password')) {
      toast.error('Wrong Password!!!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else if (errorField?.message.includes('auth/email-already-exists')) {
      toast.error('User Exists!!!', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else if (errors?.message.includes('auth/user-not-found')) {
      toast.error("You don't have an account!!! Please register first", {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else if (errorField) {
      toast.error(errors?.message, {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  }, [errorField, error]);

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
        <Toaster />
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
                <span
                  onClick={() => {
                    sendPasswordResetEmail(userInfo.email);
                    if (userInfo.email) {
                      toast.success(
                        'Reset link sent via email!!! please check',
                        {
                          icon: '✅',
                          style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                        }
                      );
                    } else {
                      toast.error('Enter your email!!!', {
                        icon: '❌',
                        style: {
                          borderRadius: '10px',
                          background: '#333',
                          color: '#fff',
                        },
                      });
                    }
                  }}
                  className="underline text-blue-500 cursor-pointer font-bold"
                >
                  Reset Now
                </span>
              </p>
            </div>
          </div>
          <div className="mb-1">
            <p>
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-blue-500 underline"
              >
                Create account
              </Link>
            </p>
          </div>
          <input
            type="submit"
            className="w-full cursor-pointer text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
            value="Log In"
          />
        </form>

        <SocialAuth />
      </div>
      <Footer />
    </>
  );
};

export default Login;
