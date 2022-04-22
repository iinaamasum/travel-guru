import React from 'react';
import bgImg from '../../../../images/Sreemongol.png';
import Footer from '../../../Shared/Footer/Footer';
import Nav from '../../../Shared/Nav/Nav';

const Login = () => {
  var curr = new Date();
  var curr2 = new Date();
  curr.setDate(curr.getDate() + 3);
  curr2.setDate(curr2.getDate());
  var date1 = curr.toISOString().substr(0, 10);
  var date2 = curr2.toISOString().substr(0, 10);

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
            <div className="mr-0">
              <h1 className="text-4xl md:text-8xl text-orange-400">
                Sreemongol
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum a
                soluta nihil velit veniam, minima ipsum nisi excepturi fugiat
                reiciendis dolor voluptates, explicabo, sapiente magnam error id
                obcaecati veritatis voluptatem! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Magni, cupiditate reprehenderit
                aliquam blanditiis distinctio expedita, consequatur, ad dolorum
                labore tempore aut. Optio maiores impedit atque provident
                voluptatum dolorem, modi eaque, reprehenderit nesciunt
                dignissimos temporibus consequuntur? Quasi, aspernatur veniam,
                nisi dolores, nesciunt tempora labore quo molestiae aut cumque
                assumenda dolorem sint.
              </p>
            </div>

            <div className="w-full mx-auto px-2 md:px-10">
              <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">
                  Booking
                </h2>
                <div className="relative mb-4">
                  <label
                    htmlFor="full-name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Dhaka"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="Destination"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    name="origin"
                    className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Sreemongol"
                  />
                </div>
                <div className="md:flex gap-1 md:gap-3">
                  <div className="relative mb-4 w-full">
                    <label
                      htmlFor="From"
                      className="leading-7 text-sm text-gray-600"
                    >
                      From
                    </label>
                    <input
                      type="date"
                      name="origin"
                      className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      defaultValue={date2}
                    />
                  </div>
                  <div className="relative mb-4 w-full">
                    <label
                      htmlFor="Return"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Return
                    </label>
                    <input
                      type="date"
                      name="origin"
                      className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      defaultValue={date1}
                    />
                  </div>
                </div>
                <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Click To Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
