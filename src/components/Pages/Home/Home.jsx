import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bgImg from '../../../images/bg.png';
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
        <div
          style={{ maxWidth: '1400px' }}
          className="grid grid-flow-row md:grid-cols-2 grid-cols-1 text-white mx-auto justify-between "
        >
          <div className="mr-0">
            <h1 className="text-4xl md:text-8xl">Cox's bazar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum a
              soluta nihil velit veniam, minima ipsum nisi excepturi fugiat
              reiciendis dolor voluptates, explicabo, sapiente magnam error id
              obcaecati veritatis voluptatem!
            </p>
            <button
              type="button"
              class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
            >
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
