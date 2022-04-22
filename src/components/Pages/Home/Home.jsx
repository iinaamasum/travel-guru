import React from 'react';
import bgImg from '../../../images/bg.png';
import img2 from '../../../images/Sajek.png';
import img1 from '../../../images/Sreemongol.png';
import img3 from '../../../images/sundorbon.png';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';
import HomeLeft from './HomeLeft/HomeLeft';

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-no-repeat bg-cover bg-center "
    >
      <div
        style={{ backdropFilter: 'brightness(.35)' }}
        className="h-full px-4 sm:px-0"
      >
        <Nav />
        <div className="flex items- py-10 md:py-40">
          {' '}
          <div
            style={{ maxWidth: '1400px' }}
            className="grid grid-flow-row md:grid-cols-2 grid-cols-1 text-white ml-auto justify-between"
          >
            <HomeLeft />
            <div className="h-96 inline-flex justify-between items-center gap-4 overflow-hidden">
              <img className="h-full" src={img1} alt="" />
              <img className="h-full" src={img2} alt="" />
              <img className="h-full" src={img3} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
