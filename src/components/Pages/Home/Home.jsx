import React from 'react';
import bgImg from '../../../images/bg.png';
import img2 from '../../../images/Sajek.png';
import img1 from '../../../images/Sreemongol.png';
import img3 from '../../../images/sundorbon.png';
import Nav from '../../Shared/Nav/Nav';

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})`, height: '100vh' }}
      className="bg-no-repeat bg-cover bg-center"
    >
      <div
        style={{ backdropFilter: 'brightness(.35)' }}
        className="backdrop-brightness- h-full"
      >
        <Nav />
        <div className="flex items- mt-10 md:mt-40">
          {' '}
          <div
            style={{ maxWidth: '1400px' }}
            className="grid grid-flow-row md:grid-cols-2 grid-cols-1 text-white ml-auto justify-between"
          >
            <div className="mr-0">
              <h1 className="text-4xl md:text-8xl text-orange-400">
                Cox's bazar
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum a
                soluta nihil velit veniam, minima ipsum nisi excepturi fugiat
                reiciendis dolor voluptates, explicabo, sapiente magnam error id
                obcaecati veritatis voluptatem!
              </p>
              <button
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2 mt-4 px-10"
              >
                Booking
              </button>
            </div>
            <div className="h-96 inline-flex justify-between items-center gap-4 overflow-hidden">
              <img className="h-full" src={img1} alt="" />
              <img className="h-full" src={img2} alt="" />
              <img className="h-full" src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
