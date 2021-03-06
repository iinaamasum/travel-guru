import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdCloseFullscreen } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/icons/logo.svg';
import logo2 from '../../../images/logo2.png';

const Nav = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Booking', path: '/booking' },
    { id: 3, name: 'Destination', path: '/destination' },
    { id: 4, name: 'Blog', path: '/blog' },
    { id: 5, name: 'Contact', path: '/contact' },
  ];
  return (
    <div
      className={`px-2 sm:px-4 py-2.5 rounded ${
        children === 'col' ? 'text-black' : 'text-white'
      } `}
    >
      <nav
        style={{ maxWidth: '1400px' }}
        className="mx-auto container sticky top-0 flex items-center justify-center"
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            {children !== 'col' ? (
              <img className="h-10" src={logo} alt="" />
            ) : (
              <img className="h-10" src={logo2} alt="" />
            )}
          </Link>
          <div className="flex md:order-2">
            <div className="hidden relative mr-3 md:mr-0 md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FaSearch className="text-black mt-0 md:mt-3" />
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="block mt-0 md:mt-3 p-2 pl-10 w-full rounded-lg  text-slate-200 placeholder:text-slate-300 sm:text-sm bg-transparent "
                placeholder="Search your Destination..."
              />
            </div>

            <button
              onClick={() => setOpen(!open)}
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 "
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              {open ? (
                <MdCloseFullscreen size={30} />
              ) : (
                <HiMenuAlt1 size={30} />
              )}
            </button>
          </div>

          <div
            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${
              open ? 'flex' : 'hidden'
            }`}
            id="mobile-menu-3"
          >
            <span className="flex w-full flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
              {links.map((link) => (
                <Link
                  className="block mt-0 md:mt-3 py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 "
                  to={link.path}
                  key={link.id}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <div className="w-full flex justify-center items-center">
                  <button
                    onClick={() => signOut(auth)}
                    className="px-1 py-2 text-black rounded-lg bg-slate-300 hover:bg-slate-200 w-full mt-3 mr-4"
                  >
                    Log Out
                  </button>
                  <div className="mt-3">
                    <img
                      title={user.displayName}
                      style={{ height: '40px', width: '60px' }}
                      className="rounded-full cursor-pointer"
                      src={user && user?.reloadUserInfo?.photoUrl}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigation('/login')}
                    className="px-3 py-2 text-black rounded-lg bg-slate-300 hover:bg-slate-200 w-full mt-3"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => navigation('/register')}
                    className="px-3 py-2 text-black rounded-lg bg-slate-300 hover:bg-slate-200 w-full mt-3"
                  >
                    Register
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
