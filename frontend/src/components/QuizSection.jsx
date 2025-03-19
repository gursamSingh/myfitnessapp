import React from "react";
import quizPhoneImg from "../assets/daily-plan.jpg";

const QuizSection = () => {
  return (
    <div className="w-screen bg-[#0066ee] bg-custom-gradient flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-[231px] mt-14">
        <div>
          <h3 className="text-base font-semibold text-[#ebebf0] leading-6">
            Have 2 mins?
          </h3>
        </div>
        <div className="text-center mt-3 text-[#FFFFFF]">
          <h2 className="text-4xl font-extralight leading-12 ">Get your</h2>
          <span className="text-4xl font-semibold leading-12">
            personalized daily plan
          </span>
        </div>
        <div>
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
        </div>
      </div>
      <div className="mt-15 w-[230px]">
        <img src={quizPhoneImg} alt="" />
      </div>
    </div>
  );
};

export default QuizSection;
