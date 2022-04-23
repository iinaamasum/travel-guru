import React from 'react';
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import fb from '../../../../images/icons/fb.png';
import google from '../../../../images/icons/google.png';

const SocialAuth = () => {
  const [signInWithGoogle, userGooogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);
  console.log(userFb);
  return (
    <div>
      <div className="flex w-full mt-2 justify-between text-blue-600">
        <div
          style={{ height: '2px' }}
          className="bg-black bottom-2 w-full mt-3 mx-2"
        ></div>
        <p className="">or</p>
        <div
          style={{ height: '2px' }}
          className="bg-black bottom-2 w-full mt-3 mx-2"
        ></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="py-1 px-1 my-1 flex justify-center items-center mx-auto border-2 rounded-full border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out"
      >
        <img className="h-7 mr-3" src={google} alt="" />
        <p className="pr-5">Continue With Google</p>
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="py-1 px-1 my-1 flex justify-center items-center mx-auto border-2 rounded-full border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out"
      >
        <img className="h-7 mr-3" src={fb} alt="" />
        <p className="pr-5">Continue With Facebook</p>
      </button>
    </div>
  );
};

export default SocialAuth;
