import React, { useState } from "react";
import Logo from "/assets/Kampus.png";

// Data import
import navData from "../data/navData";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
      // <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 relative">
      <div className="px-4 py-5 mx-auto md:px-24 lg:px-20 relative">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-flex items-center">
            <img src="/assets/Kampus.png" alt="" className="lg:w-32 w-20" />
          </a>
          <ul className=" items-center hidden space-x-8 lg:flex">
            {navData.map((nav, i) => (
              <li key={i}>
                <a
                  href={nav.path}
                  className="font-medium tracking-wide text-white hover:text-accent focus:text-accent transition-colors duration-200"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
              >
                Log Masuk
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              className="p-2 -mr-1 transition-transform ease-in duration-75 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {/* Mobile menu  */}
            {isMenuOpen && (
              <div className=" top-0 left-0 w-full h-screen z-20 fixed transition duration-75 ease-in">
                <div className="p-5 bg-white border rounded shadow-sm ">
                  <div className="flex items-center justify-end mb-4">
                    {/* <div>
                      <a href="/" className="inline-flex items-center">
                        <img
                          src={Logo}
                          alt="MySekolahKripto"
                          className="w-24"
                        />
                      </a>
                    </div> */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition-transform ease-in duration-75 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {navData.map((nav, i) => (
                        <li key={i}>
                          <a
                            href={nav.path}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
                          >
                            {nav.name}
                          </a>
                        </li>
                      ))}

                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black  bg-yellow-400 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                        >
                          Log Masuk
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>

        
      </div>
    
  );
};

export default Navbar;
