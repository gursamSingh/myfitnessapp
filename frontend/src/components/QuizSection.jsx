import React from "react";
import quizPhoneImg from "../assets/daily-plan.jpg";
import { Link } from "react-router-dom";

const QuizSection = () => {
  return (
    <div className="w-screen bg-[#0066ee] bg-custom-gradient flex flex-col items-center  lg:flex-row lg: justify-evenly">
      <div className="flex flex-col items-center justify-center w-[231px] mt-14 ">
        <h3 className="text-base font-semibold text-[#ebebf0] leading-6 ">
          Have 2 mins?
        </h3>
        <div className="text-center mt-3 text-[#FFFFFF] lg:w-xl lg:text-left">
          <h2 className="text-4xl font-extralight leading-12 lg:text-6xl lg:leading-22">
            Get your
            <span className="text-4xl font-semibold leading-12 lg:text-6xl ml-3">
              personalized daily plan
            </span>
          </h2>
        </div>
        <div>
          <Link to="/signup">
            <button className="bg-white h-12 w-60 rounded-3xl text-[#0066ee] flex justify-center items-center gap-2 font-bold hover:drop-shadow-3xl hover:bg-[#EBEBF0] cursor-pointer mt-6">
              TAKE THE QUIZ
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
      <div className="mt-15 w-[230px]">
        <img src={quizPhoneImg} alt="" />
      </div>
    </div>
  );
};

export default QuizSection;
