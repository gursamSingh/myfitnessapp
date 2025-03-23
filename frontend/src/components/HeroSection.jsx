import React from "react";
import heroPhone from "../assets/hero-phone.jpg";
import ContentSection from "./ContentSection";
import QuizSection from "./QuizSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="w-auto pt-[30px] bg-custom-gradient lg:flex lg:justify-center lg:h-auto lg:p-0">
      <div className="flex flex-col items-center lg: justify-center lg:items-start lg:p-8">
        <div className="flex flex-col items-center justify-center w-[80%] lg:w-[700px] lg:items-start lg:text-left">
          <div className=" text-center text-base text-[#d8d8dc] font-normal mb-2 lg:font-[600] lg:mb-[8px] lg:text-left">
            #1 nutrition tracking app
          </div>
          <div className="m-2 text-center text-5xl font-light text-[#ffffff] lg:text-[68px] lg:m-0 lg:font-medium leading-14">
            <span className="">Nutrition tracking</span>
            <div className="flex items-center justify-center gap-2 mt-4 lg:justify-start">
              <span>for</span>
              <div className="bg-white text-[#0066ee] w-[55%] -skew-y-1 p-2 ml-1 text-left lg:w-[45%]">
                <span>real life</span>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-6 text-center w-full text-base text-[#ffffff] md:w-[40%] lg:w-full lg:text-left">
            <p>
              Make progress with the all-in-one food, exercise, and calorie
              tracker.
            </p>
          </div>
        </div>
        <div>
          <Link to="/signup">
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
          </Link>
        </div>
      </div>
      <div className="w-auto flex flex-col justify-center items-center mt-10">
        <img
          src={heroPhone}
          alt=""
          className="w-60 md:w-60 drop-shadow-3xl mb-8 lg:[w-100%] lg:[h-100%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
// linear-gradient(200.00deg, #0066EE 60%, #9383FB 100%)
