import React from "react";
import "../styles/style.css";

import moduleData from "../data/moduleData.js";

//Page list modul yang ada
const CardModul = () => {
  return (
    <div className=" px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
      <div className="px-4 py-8 mx-2 sm:mx-auto max-w-7xl lg:py-18 ">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {moduleData.map((data, i) => (
            <div
              className="card cursor-pointer overflow-hidden bg-gray-300 bg-opacity-20 shadow-lg rounded-lg "
              key={i}
            >
              <div>
                <a href={data.path}>
                  <img
                    src={data.image}
                    className=" w-full rounded-md object-cover sm:aspect-video md:aspect-square"
                    alt={data.name}
                  />
                </a>
                <div className="p-5 ">
                  <p className="mb-1 font-bold text-white tracking-wide uppercase">
                    {data.name}
                  </p>
                  <div className="flex items-center justify-start gap-2 mt-auto">
                    <a
                      className="group text-yellow-400 transition-all duration-300 ease-in-out"
                      href={data.path}
                    >
                      <span className=" flex items-center gap-2 bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Mula Belajar{" "}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardModul;
