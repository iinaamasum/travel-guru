import React from 'react';
import fb from '../../../../images/icons/fb.png';
import google from '../../../../images/icons/google.png';

const SocialAuth = () => {
  return (
    <div>
      <button className="py-1 px-1 my-1 flex justify-center items-center mx-auto border-2 rounded-full border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out">
        <img className="h-7 mr-3" src={google} alt="" />
        <p className="pr-5">Continue With Google</p>
      </button>
      <button className="py-1 px-1 my-1 flex justify-center items-center mx-auto border-2 rounded-full border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out">
        <img className="h-7 mr-3" src={fb} alt="" />
        <p className="pr-5">Continue With Facebook</p>
      </button>
    </div>
  );
};

export default SocialAuth;
