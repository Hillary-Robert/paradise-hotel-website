import { FaPlayCircle } from "react-icons/fa";
import { herolistSample } from "@/constants";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HeroListProp } from "@/interface";

const HeroSection = ({ list }: { list: HeroListProp[] }) => {
  return (
    <section className="relative py-10 mt-[8rem] px-6 md:px-[7.5rem]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        
        <div className="flex flex-col gap-2 w-full lg:max-w-[55%] mt-10">
          <h2 className="dancing-script text-[#7C6A46] text-8xl md:text-5xl lg:text-6xl mb-2 lg:mb-4">
            Paradise View
          </h2>

          <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-5xl tracking-wider max-w-[60%] leading-[1.3]">
            Where every stay begins with perfection
          </h1>

          <p className="text-base md:text-lg text-gray-700 mt-2">
            Every moment feels like the first time <br />in paradise view
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <button
              aria-label="Book your stay now"
              className="bg-[#7C6A46] hover:bg-[#645333] text-white font-semibold 
                         py-4 px-8 md:px-12 rounded-full shadow-md transition-all 
                         duration-300 text-lg sm:w-auto"
            >
              Book now
            </button>

            <button
              aria-label="Take a tour"
              className="text-black flex items-center justify-center gap-3 text-lg w-full sm:w-auto"
            >
              <FaPlayCircle className="text-white bg-gradient-to-r from-blue-600 to-green-600 p-2 w-10 h-10 rounded-full" />
              Take a tour
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:max-w-[40%]">
          <img
            src="/assets/heroImage.png"
            alt="Scenic view of the hotel surroundings"
            className="w-full h-auto object-contain rounded shadow-lg"
          />
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute inset-x-0 bottom-20 flex flex-col sm:flex-row justify-between bg-white py-8 px-6 md:px-[7.5rem] gap-6 sm:gap-0 rounded-lg max-w-full overflow-x-auto">
        {herolistSample.map(({ data, icon: Icon, info }, index) => (
          <div
            key={index}
            className="flex items-center gap-3 min-w-[120px] cursor-pointer hover:text-[#7C6A46] transition-colors duration-300"
            tabIndex={0}
            role="button"
            aria-label={`${data}: ${info}`}
          >
            <Icon className="text-[#7C6A46] w-6 h-6" />
            <div className="text-left">
              <h3 className="font-semibold text-mdd">{data}</h3>
              <p className="flex items-center gap-1 text-sm text-gray-600">
                {info} <MdOutlineArrowDropDown className="text-lg"/>
              </p>
            </div>
          </div>
        ))}

        <button
          aria-label="Book now"
          className="bg-[#7C6A46] hover:bg-[#645333] text-white font-semibold 
                         py-2 px-6 rounded shadow-md transition-all 
                         duration-300 text-lg sm:w-auto self-center"
        >
          Book now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
