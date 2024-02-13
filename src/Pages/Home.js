import Weather from "./Weather";
import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* mobile Device */}

      <div className="sm:flex xs:flex md:hidden xm:hidden lg:hidden xl:hidden">
        <div className="container mx-auto my-24 overflow-auto">
          <div className="flex items-start flex-col gap-6">
            <div className="h-88 w-1/3 flex flex-col justify-center gap-4">
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-700">
                  Welcome To
                </h3>
              </div>
              <h1 className="text-2xl font-bold text-blue-800">
                WeatherLy App
              </h1>
              <p className="text-md text-gray-600">
                Search for Forecast Report
              </p>

              <div className="my-6 ">
                <span className="bg-blue-800 py-3 px-3 rounded-xl text-white font-semibold cursor-pointer hover:bg-blue-400 flex justify-center items-center w-56 gap-4">
                  Search for Report <FaChevronCircleRight />
                </span>
              </div>
            </div>

            <Weather />
          </div>
        </div>
      </div>

      {/* Medium device */}

      <div className="hidden md:flex xm:flex lg:hidden xl:hidden">

        <div className="container mx-auto my-24">
          <div className="flex items-start flex-col gap-20 mx-6">
            <div className="h-56 w-1/3 flex flex-col justify-center gap-4">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-700">
                  Welcome To
                </h3>
              </div>
              <h1 className="text-5xl font-bold text-blue-800">
                WeatherLy App
              </h1>
              <p className="text-xl text-gray-600">
                Search for Forecast Report
              </p>

              <div className="my-6 ">
                <span className="bg-blue-800 py-3 px-3 rounded-xl text-white font-semibold cursor-pointer hover:bg-blue-400 flex justify-center items-center w-56 gap-4">
                  Search for Report <FaChevronCircleRight />
                </span>
              </div>
            </div>

            <Weather />
          </div>
        </div>
      </div>

      {/* large device */}

      <div className="hidden lg:flex xl:flex">
        <div className="container mx-auto my-24">
          <div className="flex justify-around items-center">
            <div className="h-56 w-1/3 flex flex-col justify-center gap-4">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-gray-700">
                  Welcome To
                </h3>
              </div>
              <h1 className="text-5xl font-bold text-blue-800">
                WeatherLy App
              </h1>
              <p className="text-xl text-gray-600">
                Search for Forecast Report
              </p>

              <div className="my-6 ">
                <span className="bg-blue-800 py-3 px-3 rounded-xl text-white font-semibold cursor-pointer hover:bg-blue-400 flex justify-center items-center w-56 gap-4">
                  Search for Report <FaChevronCircleRight />
                </span>
              </div>
            </div>

            <Weather />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
