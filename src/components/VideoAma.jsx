import ama from "../data/amaData";
import '../../src/styles/style.css'

import React, { useState } from "react";

const VideoAma = () => {


  // Popup state
  const [popup, setPopup] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const changeContent = (menu) => {
    setPopup([menu]);
    setPopupToggle(!popupToggle);
  };

  return (
    <div className=" px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
      <div className="p-4 ">
        <h3 className=" lg:text-3xl text-3xl font-bold text-center text-white">
          Ask Me Anything Session!
        </h3>
        <p className="text-sm lg:text-base py-2 text-center  text-jacarta-200 mt-2">
          Sesi AMA yang pernah kami jalankan.
        </p>
      </div>

      <div className="px-4 py-8 mx-2 sm:mx-auto max-w-7xl lg:py-18 ">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {ama.map((menu, i) => (
            <div key={i}>
              <div className="card cursor-pointer overflow-hidden  bg-jacarta-700  shadow-lg rounded-lg ">
                <img
                  src={menu.image}
                  className=" w-full rounded-md object-cover aspect-square"
                  alt={menu.name}
                />
                <div className="p-5 flex justify-between items-center my-auto">
                  <p className=" font-bold text-white tracking-wide uppercase">
                    {menu.name}
                  </p>
                  <div className="flex items-center justify-start ">
                    <button
                      onClick={() => changeContent(menu)}
                      className="bg-accent text-white p-3 rounded-full font-semibold text-sm shadow-accent-volume transition-all hover:bg-accent-dark"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Popup untuk bagi video keluar  */}
        {popupToggle && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm "
            onClick={changeContent}
          >
            <div
              className="w-[70%] h-[70%] mx-auto "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="justify-end flex m-3">
                <button onClick={changeContent}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                {popup.map((pop) => {
                  return (
                    <div className="containerVideo aspect-w-16 aspect-h-9">
                      <iframe
                        className="responsive-iframe"
                        src={pop.link}
                        title={pop.name}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoAma;
