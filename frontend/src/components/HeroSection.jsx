import React from "react";
import heroPhone from "../assets/hero-phone.jpg";
import ContentSection from "./ContentSection";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full min-h-screen pt-[30px] bg-custom-gradient">
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center justify-center w-[80%]">
            <div className=" text-center text-base text-[#d8d8dc] font-normal mb-2">
              #1 nutrition tracking app
            </div>
            <div className="m-2 text-center text-5xl font-light text-[#ffffff]">
              <span className="">Nutrition tracking</span>
              <div className="flex items-center justify-center gap-5 mt-4">
                <span>for</span>
                <div className="bg-white text-[#0066ee] w-[50%] -skew-y-1">
                  <span>real life</span>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-6 text-center w-full text-base text-[#ffffff]">
              <p>
                Make progress with the all-in-one food, exercise, and calorie
                tracker.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-white h-12 w-60 rounded-3xl text-[#0066ee] flex justify-center items-center gap-2 font-bold hover:drop-shadow-3xl hover:bg-[#EBEBF0] cursor-pointer ">
              START TODAY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" w-[full] flex flex-col justify-center items-center mt-10">
          <img
            src={heroPhone}
            alt=""
            className="w-60 md:w-80 drop-shadow-3xl"
          />
        </div>
      </div>

      <div>
        <ContentSection />
      </div>
    </div>
  );
};

export default HeroSection;
// linear-gradient(200.00deg, #0066EE 60%, #9383FB 100%)
