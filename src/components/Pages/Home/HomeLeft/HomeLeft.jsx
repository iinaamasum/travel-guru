import React from 'react';

const HomeLeft = () => {
  return (
    <div>
      <div className="mr-0">
        <h1 className="text-4xl md:text-8xl text-orange-400">Cox's bazar</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum a soluta
          nihil velit veniam, minima ipsum nisi excepturi fugiat reiciendis
          dolor voluptates, explicabo, sapiente magnam error id obcaecati
          veritatis voluptatem!
        </p>
        <button
          type="button"
          className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-4 mt-4 px-10"
        >
          Booking
        </button>
      </div>
    </div>
  );
};

export default HomeLeft;
