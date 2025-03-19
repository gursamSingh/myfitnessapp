import React from "react";
import trackFoodImg from "../assets/track-food-large.jpg";
import learnWhatWorksImg from "../assets/learn-what-works-large.jpg";
import changeYourHabitImg from "../assets/change-your-habits-large.jpg";

const ContentSection = () => {
  return (
    <div className="w-auto lg:h-[full] flex flex-col items-center p-10">
      <div className="flex flex-col items-center w-[80%] justify-center mt-8 ml-auto mr-auto">
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

        <h2 className="font-medium text-4xl text-center leading-12 lg:text-[48px]">
          Hit your health goals in 1-2-3
        </h2>
      </div>

      <div className="grid mt-10 w-[340px] lg:lg:min-w-[992px]">
        {/* Image section 1 */}
        <div className=" flex flex-col-reverse items-center justify-center lg:flex-row mt-10">
          {/* Image div */}
          <div>
            <img
              src={trackFoodImg}
              className="lg:object-contain"
              alt="calorie-tracker-image"
            />
          </div>

          {/* Text div */}
          <div className="flex flex-col items-center lg:ml-18 lg:items-start lg:w-[340px]">
            <p className="text-5xl font-medium text-blue-700 lg:text-[68px]">
              1
            </p>
            <p className="text-3xl leading-9 w-55 text-center font-[500] lg:text-left lg:text-[36px] lg:leading-12 lg:w-[280px] mt-4">
              Track food, fitness & fasting
            </p>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base leading-6 text-center lg:text-left lg:m-0 lg:text-[16px] lg:mt-4 lg:leading-7 lg:w-80">
              Tracking calories and macros is easy with myfitness app.
            </p>
          </div>
        </div>

        {/* Image section 2 */}
        <div className=" flex flex-col-reverse items-center justify-center lg:flex-row-reverse mt-10 lg:-mt-15">
          {/* Image div */}
          <div>
            <img
              src={learnWhatWorksImg}
              className="lg:object-contain"
              alt="calorie-tracker-image"
            />
          </div>

          {/* Text div */}
          <div className="flex flex-col items-center lg:mr-18 lg:items-end lg:w-[340px]">
            <p className="text-5xl font-medium text-blue-700 lg:text-[68px]">
              2
            </p>
            <p className="text-3xl leading-9 w-55 text-center font-[500] lg:text-right lg:text-[36px] lg:leading-12 lg:w-[340px] mt-4">
              Learn what works
            </p>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base leading-6 text-center lg:m-0 lg:text-[16px] lg:mt-4 lg:leading-7 lg:w-80 lg:text-right">
              Personalized nutrition insights reveal what's working so you can
              make smarter choices.
            </p>
          </div>
        </div>

        {/* Image section 3 */}
        <div className=" flex flex-col-reverse items-center justify-center lg:flex-row mt-10 lg:-mt-15">
          {/* Image div */}
          <div>
            <img
              src={changeYourHabitImg}
              className="lg:object-contain"
              alt="calorie-tracker-image"
            />
          </div>

          {/* Text div */}
          <div className="flex flex-col items-center lg:ml-18 lg:items-start lg:w-[340px]">
            <p className="text-5xl font-medium text-blue-700 lg:text-[68px]">
              3
            </p>
            <p className="text-3xl leading-9 w-55 text-center font-[500] lg:text-left lg:text-[36px] lg:leading-12 lg:w-[340px] mt-4">
              Change your habits and reach your goals
            </p>
            <p className="text-zinc-600 mb-6 ml-4 mr-4 mt-4 text-base leading-6 text-center lg:text-left lg:m-0 lg:text-[16px] lg:mt-4 lg:leading-7 lg:w-80">
              Now you have the app to build healthy habits for life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
