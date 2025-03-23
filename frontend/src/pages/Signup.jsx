import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import signup_Img_1 from "../assets/signup-1.jpg";
import signup_Img_2 from "../assets/signup-2.jpg";
import signup_Img_3 from "../assets/signup-3.jpg";

const Signup = () => {
  return (
    <div className=" w-screen h-screen">
      {/* Navbar Start */}
      <div className="bg-white w-full h-15 flex justify-between items-center m-0 pt-4 pb-4 lg:justify-center lg:h-[80px] lg:gap-[48rem]">
        {/* Icon for login */}
        <div></div>
        <div className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* Navbar Ends */}
      <div className="flex flex-col items-center mt-2">
        <div className="lg:text-xl">
          <p>Welcome to</p>
        </div>
        <Link to="/#">
          <span className="text-blue-600 font-sans text-2xl lg:text-3xl font-semibold p-2">
            myfitness
          </span>
        </Link>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center lg:justify-center">
        <div className="flex flex-col items-center lg:justify-center lg:flex-row lg:gap-4">
          {/* Image section 1 */}
          <div className="flex flex-col items-center w-[300px] my-4 ">
            <div>
              <img className="rounded-xl" src={signup_Img_1} alt="" />
            </div>

            <div className="mt-4 text-lg leading-7 font-normal text-center">
              <p>Ready for some wins?</p>
              <p>Start tracking, it's easy!</p>
            </div>
          </div>
          {/* Image section 2 */}
          <div className="flex flex-col items-center w-[300px] my-4 ">
            <div>
              <img className="rounded-xl" src={signup_Img_2} alt="" />
            </div>

            <div className="mt-4 text-lg leading-7 font-normal text-center">
              <p>Discover the impact of</p>
              <p>your food and fitness</p>
            </div>
          </div>
          {/* Image section 3 */}
          <div className="flex flex-col items-center w-[300px] my-4 ">
            <div>
              <img className="rounded-xl" src={signup_Img_3} alt="" />
            </div>

            <div className="mt-4 text-lg leading-7 font-normal text-center">
              <p>And make mindful eating</p>
              <p>a habit for life</p>
            </div>
          </div>
        </div>
        <div className="sticky bottom-6 flex flex-col items-center w-[350px] my-4 lg:flex-row">
          <button class="px-6 py-3 w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 rounded-sm">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
