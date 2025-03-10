import React from "react";
import trackFoodImg from "../assets/track-food-small.jpg";
import learnWhatWorksImg from "../assets/learn-what-works-small.jpg";
import changeYourHabitImg from "../assets/change-your-habits-small.jpg.webp";

const ContentSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center w-[80%] justify-center mt-16 ml-auto mr-auto">
        <div className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-8 mb-5 text-blue-500"
            fill="#1D4ED8"
          >
            <path d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z" />
          </svg>
        </div>

        <h2 className="font-medium text-4xl w-78 text-center leading-12">
          Hit your health goals in 1-2-3
        </h2>
      </div>

      <div>
        <div className="flex flex-col items-center w-[80%] justify-center mt-16 ml-auto mr-auto">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-6xl font-medium text-blue-700">1</p>
            <h1 className="text-3xl leading-9 w-55 text-center font-[500]">
              Track food, fitness & fasting
            </h1>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base text-center leading-6">
              Tracking calories and macros is easy with myfitness app.
            </p>
          </div>
          <div className="w-[80%] flex justify-center align-middle items-center">
            <img src={trackFoodImg} alt="calorie-tracker-image" />
          </div>
        </div>
        <div className="flex flex-col items-center w-[80%] justify-center mt-16 ml-auto mr-auto">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-6xl font-medium text-blue-700">2</p>
            <h1 className="text-3xl leading-9 w-60 text-center font-[500]">
              Learn what works
            </h1>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base text-center w-[358px] leading-6">
              Personalized nutrition insights reveal what's working so you can
              make smarter choices.
            </p>
          </div>
          <div className="w-[80%] flex justify-center align-middle items-center">
            <img src={learnWhatWorksImg} alt="calorie-tracker-image" />
          </div>
        </div>
        <div className="flex flex-col items-center w-[80%] justify-center mt-16 ml-auto mr-auto">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-6xl font-medium text-blue-700">3</p>
            <h1 className="text-3xl leading-9 w-[290px] text-center font-[500]">
              Change your habits and reach your goals
            </h1>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base text-center w-[358px] leading-6">
              Now you have the tools and knowledge to build healthy habits for
              life.
            </p>
          </div>
          <div className="w-[80%] flex justify-center align-middle items-center">
            <img src={changeYourHabitImg} alt="calorie-tracker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
